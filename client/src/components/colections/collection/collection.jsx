import React, {useEffect, useState} from 'react';
import '../colections.css'
import {useDispatch} from "react-redux";
import { editCollection} from '../../../redux/colectionsReducer'
import Book from '../../books/book'

const Collection = ({...props}) => {
    props = props.props
    let item = props.item
    let dispatch = useDispatch()

    useEffect(()=>{
        setName(item.name)
        setDescription(item.description)
    },[props.item,dispatch])

    let safeEditHandler = (payload) => {
        dispatch(editCollection(payload))
        setEdit(false)
    }
    let [edit,setEdit]=useState(false)
    const changeEditHandler=()=>{
        setEdit(!edit)
    }

    let [name, setName] = useState(item.name)
    let [description, setDescription] = useState(item.description)

    const setDisplayHandler = ()=>{
        props.changeAddBookDisplay(true)
        props.setSendBook (item._id)
    }
    return (
            <div className='collection' key={item._id}>
                <button onClick={() => safeEditHandler({_id:item._id,name,description,books:item.books})} className='CollectionSafe'>safe</button>
                <button onClick={() => changeEditHandler()} className='CollectionEdit'>edit</button>
                <button onClick={() => props.deleteHandler(item._id)} className='delete'>X</button>
                <div className='collection__name'>
                    <h3> name:</h3>
                    {edit=== true
                        ? <input className='editInput' type="text"
                                 onChange={event => setName(event.currentTarget.value)}
                                 value={name}/>
                        : <span> {item.name} </span>
                    }
                    <div/>

                </div>
                <div className='collection__description'>
                    <h3>description:</h3>
                    {edit ===true
                        ? <input className='editInput' type="text"
                                 onChange={event => setDescription(event.currentTarget.value)}
                                 value={description}/>
                        : <span>{item.description}</span>
                    }
                </div>
                <div className='collection__books'>
                    <div>
                        <h3>books:</h3>
                        {
                            item.books.map((book) => (
                              <Book key={book._id} props={props} book={book} collectionId={item._id} />
                            ))}
                    </div>
                </div>

                <button onClick={() => props.goToHandler(item._id)} className='collection_goTo button'>
                    go to collection
                </button>
                <button onClick={() => setDisplayHandler()} className='collection_goTo button'>
                    add book
                </button>
            </div>

    )
};

export default Collection;


