import React, {useEffect} from 'react'
import {NavLink, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { downloadBooks} from '../../../../redux/booksReducer'

const OneBook = () => {

  const params = useParams()
  const book = useSelector(state => state.booksPage.books[0])
  useEffect(() => {
    dispatch(downloadBooks(params.id))
  }, [book])

  const dispatch = useDispatch()
  const deleteBookHandler = (id) => {
    // dispatch(deleteBook(id))
  }
  debugger
  return (
    <div>
      <div>
        <div className="collection__oneBook" key={book._id}>
          <div className="book_link">
            <NavLink to={`books/${book._id}`}>
              <div><span className="nameEle">author:</span> {book.author}</div>
              <div><span className="nameEle">name:</span> {book.name}</div>
              <div><span className="nameEle">price:</span> {book.price}</div>
              <div><span className="nameEle">rating:</span> {book.rating}</div>
            </NavLink>
          </div>
          <button onClick={() => deleteBookHandler(book._id)} className="delete delete_book">X</button>
        </div>
      </div>
    </div>
  )
}

export default OneBook



