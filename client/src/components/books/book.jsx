import React, {useState} from 'react'
import { useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {deleteBook, editBook} from '../../redux/colectionsReducer'

const Book = ({book,collectionId}) => {

  let dispatch = useDispatch()

  let safeEditHandler = () => {
    dispatch(editBook({id:book._id,name, author, price, rating,collectionId}))
    setEdit(true)
  }
  let [edit,setEdit]=useState(true)
  const changeEditHandler=()=>{
    setEdit(!edit)
  }
  const[author,setAuthor]=useState('1111')
  const[name,setname]=useState('1111')
  const[price,setPrice]=useState(3)
  const[rating,setRaring]=useState(3)

  const change=(e)=>{
    e.stopPropagation()
    let name =  e.currentTarget["name"]
    if (name==='author'){
      setAuthor(e.currentTarget.value)
    }else if(name==='name'){
      setname(e.currentTarget.value)
    }else if(name==='price'){
      setPrice(e.currentTarget.value)
    }else if(name==='rating'){
      setRaring(e.currentTarget.value)
    }
  }
 let  history = useHistory()
  function navLink(){
    history.push(`books/${book._id}`)
  }

  function deleteHandler (_id) {
    dispatch(deleteBook({_id, collectionId}))
  }

  return (
    <div>
      <div className='collection__oneBook' key={book._id}>
        <div className='book_link'>
          <div  onClick={(e)=>navLink(e)} >
            <span className="nameEle navlink">author:</span> {edit ?<span> {book.author}</span>
              : <input className="book_input" type="text" placeholder='author' name='author' value={author} onClick={e=>change(e)} onChange={e=>change(e)}/>
            }
            <span   className="nameEle navlink">name:</span> {edit ? <span>{book.name}</span>
              : <input className="book_input" type="text" placeholder='name'   name='name' value={name} onClick={e=>change(e)} onChange={e=>change(e)}/>
            }
            <span    className="nameEle navlink">price:</span>{edit ? <span> {book.price}</span>
              : <input className="book_input"  type="number" placeholder='price' name='price' value={price} onClick={e=>change(e)} onChange={e=>change(e)}/>
            }
            <span  className="nameEle navlink">rating:</span>  {edit ? <span>{book.rating}</span>
              : <input className="book_input"  type="number" placeholder='rating' name='rating' value={rating} onClick={e=>change(e)} onChange={e=>change(e)}/>
            }
          </div>
        </div>
        <button onClick={() => safeEditHandler({})} className='CollectionSafe'>safe</button>
        {/*<button onClick={() => safeEditHandler({})} className='CollectionSafe'>go</button>*/}
        <button onClick={() => changeEditHandler()} className='CollectionEdit'>edit</button>
        <button onClick={() => deleteHandler(book._id)} className='delete'>X</button>      </div>
    </div>
  )
}

export default Book
