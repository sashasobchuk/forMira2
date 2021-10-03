import {takeEvery, put, call} from 'redux-saga/effects'
import {
    addLocalCollection,
    addOneCollection,
    DELETE_COLLECTION,
    DOWNLOAD_COLLECTIONS, DOWNLOAD_ONE_COLLECTION, EDIT_COLLECTION,
    editLocalData, removeLocalCollection,
    setCollections,
    UPLOAD_COLLECTION
} from "../colectionsReducer";
import {
    deleteCollectionApi,
    downloadCollectionApi,
    getCollections,
    updateCollectionApi,
    uploadCollectionApi
} from "../../api/api";




export function* watchUploadCollections() {
    yield takeEvery(UPLOAD_COLLECTION,uploadOneCollection);
}
function* uploadOneCollection(payload) {
    const data = yield call(uploadCollectionApi,payload)
    yield put(addOneCollection(data.data))
}

export function* watchDeleteCollection() {
    yield takeEvery(DELETE_COLLECTION,deleteCollectionWorker);
}
function* deleteCollectionWorker(payload) {
     yield call(deleteCollectionApi,payload.id)
     yield put(removeLocalCollection(payload.id))
}


export function* watchAddOneCollection() {
    yield takeEvery(DOWNLOAD_ONE_COLLECTION,addOneCollectionWorker);
}
function* addOneCollectionWorker(payload) {
    let response =  yield call(downloadCollectionApi,payload.id)
    yield put(addLocalCollection(response.data))
}



export function* watchUpdateCollection() {
    yield takeEvery(EDIT_COLLECTION,updateCollectionWorker);
}
function* updateCollectionWorker(payload) {
    yield call(updateCollectionApi,payload)
    yield put(editLocalData(payload.payload))
}


export function* watchDownloadCollections() {
    yield takeEvery(DOWNLOAD_COLLECTIONS,downloadCollections);
}
function* downloadCollections() {
    const response = yield call(getCollections)
    yield put(setCollections(response.data))
}




























