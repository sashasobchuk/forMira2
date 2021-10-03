import React, {useEffect, useState} from 'react';
import './colections.css'
import {useDispatch, useSelector} from "react-redux";
import {deleteCollection, downloadCollections} from "../../redux/colectionsReducer";
import AddCollections from "./addCollections";
import { useHistory} from "react-router-dom";
import AddBook from "./addBook";
import Collection from "./collection/collection";


const Collections = () => {
    const dispatch = useDispatch()
    const collections = useSelector(state => state.collectionsPage.collections)
    const [addCollectionDisplay, changeAddCollectionDisplay] = useState(false)
    const [addBookDisplay,changeAddBookDisplay]=useState(false)
    const [sendBookId,setSendBook] = useState('')

    useEffect(() => {
        dispatch(downloadCollections())
    }, [dispatch])
    const deleteHandler = (id) => {
        dispatch(deleteCollection(id))
    }
    let history = useHistory()
    const goToHandler = (id) => {
        history.push('collections/' + id)
    }

    return (
        <div className='collectionContainer'>
            <button onClick={() => {
                changeAddCollectionDisplay(true)
            }} className='button addCollectionBTN'>add Collection
            </button>
            <div className='collectionContainer'>
                {collections.map((item) => (

                    <Collection key ={item._id} props={{
                        deleteHandler,
                        item,
                        goToHandler,
                        dispatch,
                        changeAddBookDisplay,
                        sendBookId,setSendBook
                    }}/>
                ))}

            </div>
            <AddCollections addCollectionDisplay={addCollectionDisplay}
                            changeAddCollectionDisplay={changeAddCollectionDisplay}/>
            <div>
                <AddBook addBookDisplay={addBookDisplay}
                         sendBookId={sendBookId}
                         changeAddBookDisplay={changeAddBookDisplay}/>
            </div>
        </div>
    );
};

export default Collections;


