import React, {useEffect} from 'react';
import { downloadOneCollection} from "../../../redux/colectionsReducer";
import {useDispatch, useSelector} from "react-redux";
import { useParams} from "react-router-dom";
import './oneCollection.css'

const OneCollection = () => {

    const dispatch = useDispatch()
    const params = useParams()
    const collection = useSelector(state => state.collectionsPage.collection)
    useEffect(() => {
        dispatch(downloadOneCollection(params.id))
    }, [dispatch])

    return (
        <div className='collection'>
            <h1 className='tittle'>
              {collection.name}
            </h1>
            <h2  className='tittle'>
                 {collection.description}
            </h2>
            <div  className='books'>
                {collection.books.map((book)=>(
                    <div  className='book' key={book._id}>
                        <h3>
                            <span className='standard'>name: </span>      {book.name}
                        </h3>
                        <h3>
                            <span className='standard'>author: </span>     {book.author}
                        </h3>
                        <h3>
                            <span className='standard'>rating:  </span>    {book.rating} stars
                        </h3>
                        <h3>
                            <span className='standard'>price:  </span>    {book.price}
                        </h3>
                    </div>
                ))}

            </div>


        </div>
    );
};

export default OneCollection;
