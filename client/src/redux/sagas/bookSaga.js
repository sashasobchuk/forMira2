import {call, put, takeEvery} from "redux-saga/effects";
import {
    addBookTooCollection,
     deleteBookApi, editBookApi,
    getBooksApi,
    uploadBookApi
} from '../../api/api'
import {

        DOWNLOAD_BOOKS,
    setStoreBooks,

} from '../booksReducer'
import {
    addStorageBook,
    DELETE_BOOK,
    EDIT_BOOK,
    editLocalBook,
    removeLocalBook,
    UPLOAD_BOOK
} from '../colectionsReducer'

export function* watchDownloadBooks() {
    yield takeEvery(DOWNLOAD_BOOKS,downloadBooks);
}
function* downloadBooks(payload='') {
    const data = yield call(getBooksApi,payload)
    yield put(setStoreBooks(data.data))
}


export function* watchUploadBooks() {
    yield takeEvery(UPLOAD_BOOK,uploadBooks);
}
function* uploadBooks({payload}) {
    let newBook = yield call(uploadBookApi,payload)
    if (newBook.status ===200){
        yield call(addBookTooCollection, {payload,newBook:newBook.data})
        yield put (addStorageBook({collectionId:payload.collectionId,newBook:newBook.data}))

    }

}


export function* watchDeleteBook() {
    yield takeEvery(DELETE_BOOK,deleteBookWorker);
}
function* deleteBookWorker({payload}) {
     yield call(deleteBookApi,payload._id)
    yield put(removeLocalBook(payload))
}


export function* watchEditBook() {
    yield takeEvery(EDIT_BOOK,deleteEditWorker);
}
function* deleteEditWorker(payload) {
    let response =yield call(editBookApi, payload)
    yield put(editLocalBook({payload:payload.payload,response}))
}










