import './comicsList.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../spinner/Spinner';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import ErrorMessage from '../errorMessage/errorMessage';
import useMarvelService from '../../services/MarvelService';

const ComicsList = () => {

    const [ comicsList, setComicsList ] = useState([]);
    const [ newItemLoading, setNewItemLoading ] = useState(false);
    const [ offset, setOffset ] = useState(0);
    const [ comicsEnded, setComicsEnded] = useState(false);
    
    const { loading, error, getAllComics } = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true)
        getAllComics(offset)
        .then(onComicsListLoaded)
    }


    const onComicsListLoaded = (newComicsList) => {
        let ended = false;
        if (newComicsList.length < 8){
            ended = true;
        }
        setComicsList(comicsList => [...comicsList, ...newComicsList]);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 8);
        setComicsEnded(comicsEnded => ended);
    }


    function renderItems(arr) {
        const items =  arr.map((item, i) => {
            
            return (
                <CSSTransition key={i} timeout={500} classNames="comics__item">
                    <li 
                    className="comics__item"
                    tabIndex={0}
                    >
                        <Link to={`/comics/${item.id}`}>
                        <img src={item.thumbnail} className="comics__item-img" alt={item.title}/>
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.price}</div>
                        </Link>
                    </li>
                </CSSTransition>
                
            )
        });
        
        return (
            <ul className="comics__grid">
                <TransitionGroup component={null}>
                        {items}
                </TransitionGroup>
            </ul>
        )
    }

        const items = renderItems(comicsList);

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading && !newItemLoading ? <Spinner/> : null;


        return (
            <div className="comics__list">
                {errorMessage}
                {spinner}
                {items}
                <button 
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{'display': comicsEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset)}>
                    <div className="inner">load more</div>
                </button>
            </div>
        )
}


export default ComicsList;