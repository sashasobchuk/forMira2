export const DOWNLOAD_BOOKS = 'DOWNLOAD_BOOKS'
export const SET_STORE_BOOKS = 'SET_STORE_BOOKS'


let initState ={
    books:[{
        _id: "59316b89008c586bc2214318",
        name: "Totally awesome book",
        author: "Vasya Pupkin",
        rating: 5,
        price: 666
    }],
}
const  bookReducer = (state = initState, action)=>{
    switch (action.type) {
        case SET_STORE_BOOKS:
            return {...state,books:[{...action.books}]}
        default :return state

    }
}



export const downloadBooks=(payload)=>({type:DOWNLOAD_BOOKS,payload})
export const setStoreBooks=(books)=>({type:SET_STORE_BOOKS,books})














export default bookReducer




