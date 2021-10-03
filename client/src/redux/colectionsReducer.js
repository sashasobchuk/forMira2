

export const SET_COLLECTIONS = 'SET_COLLECTIONS'
export const DOWNLOAD_COLLECTIONS = 'DOWNLOAD_COLLECTIONS'

export const UPLOAD_COLLECTION = 'UPLOAD_COLLECTION'
export const ADD_ONE_COLLECTION = 'ADD_ONE_COLLECTION'

export const DELETE_COLLECTION = 'DELETE_COLLECTION'
export const REMOVE_COLLECTION = 'REMOVE_COLLECTION'

export const DOWNLOAD_ONE_COLLECTION = 'DOWNLOAD_ONE_COLLECTION'
export const ADD_LOCAL_COLLECTION = 'ADD_LOCAL_COLLECTION'

export const EDIT_COLLECTION = 'EDIT_COLLECTION'
export const  EDIT_LOCAL_COLLECTION= 'EDIT_LOCAL_COLLECTION'


// export const ADD_LOCAL_BOOK = 'ADD_LOCAL_BOOK'


let initState ={
    collections:[{
        _id:'id11111',
        name:'name11111',
        description:'description11',
        books:[{
            _id: "book",
            name: "Totally awesome book",
            author: "Vasya Pupkin",
            rating: 5,
            price: 666
        }]
    }],
    collection:{
        id_:' id',
        name:' name',
        description:'description',
        books:[{
            _id: "book",
            name: "Totally awesome book",
            author: "Vasya Pupkin",
            rating: 5,
            price: 666
        }]
    },
    books:[    {
        _id: '59316b89008c586bc2214318',
        name: 'Totally awesome book',
        author: 'Vasya Pupkin',
        rating: 5,
        price: 666
    },],
    count:[],
    countFromFakeApi:[]
}

// debugger
const  colectionsReducer = (state = initState, action)=>{
    switch (action.type) {
        case SET_COLLECTIONS: return {...state,collections:[...action.collections]}
        case ADD_ONE_COLLECTION: return {...state,collections:[...state.collections,action.collections]}
        case REMOVE_COLLECTION: return {...state,collections:[...state.collections.filter(item=>item._id!==action.id)]}
        case ADD_LOCAL_COLLECTION: return {...state,collection:action.oneCollection}
        case EDIT_LOCAL_COLLECTION: return {...state,collections: [...state.collections.map((item)=>{
            return(
                item._id !== action.payload._id
                    ?item
                    : {...item,
                        name:action.payload.name,
                        description: action.payload.description,
                        books:action.payload.books})
        })]}
        case EDIT_LOCAL_BOOK: return {...state,
            collections: [...state.collections.map((collection)=>{
            return(
              collection._id !== action.payload.payload.collectionId
                    ?collection : {...collection,
                        books:[...collection.books.map((book)=>{
                            return(book._id !==action.payload.payload.id
                              ?book
                              :action.payload.response.data)
                        })]})})]}
        case REMOVE_LOCAL_BOOK: return {...state,
            collections: [...state.collections.map((collection)=>{
                return(
              collection._id !== action.payload.collectionId
                    ?collection : {...collection,
                        books:[...collection.books.filter((book)=>{
                            return(book._id !==action.payload._id)})]})})]}

         case ADD_STORE_BOOK: return {...state, collections: [...state.collections.map((collection)=>{
                return(
              collection._id !== action.payload.collectionId
                    ?collection : {...collection,
                        books:[...collection.books,action.payload.newBook]})})]}


        default :return state

    }

}

export const downloadCollections=()=>({type:DOWNLOAD_COLLECTIONS})
export const setCollections=(collections)=>({type:SET_COLLECTIONS,collections})

export const editCollection=(payload)=>({type:EDIT_COLLECTION,payload})
export const editLocalData=(payload)=>{return{type:EDIT_LOCAL_COLLECTION,payload:payload}}


export const uploadCollection=(payload)=>({type:UPLOAD_COLLECTION,payload})
export const addOneCollection=(collections)=>({type:ADD_ONE_COLLECTION,collections})

export const deleteCollection=(id)=>({type:DELETE_COLLECTION,id})
export const removeLocalCollection=(id)=>({type:REMOVE_COLLECTION,id})


export const downloadOneCollection=(id)=>({type:DOWNLOAD_ONE_COLLECTION,id})
export const addLocalCollection=(oneCollection)=>({type:ADD_LOCAL_COLLECTION,oneCollection})




export const EDIT_BOOK = 'EDIT_BOOK'
export const EDIT_LOCAL_BOOK = 'EDIT_LOCAL_BOOK'

export const editBook=(payload)=>({type:EDIT_BOOK,payload})
export const editLocalBook=(payload)=>{return{type:EDIT_LOCAL_BOOK,payload:payload}}


export const DELETE_BOOK = 'DELETE_BOOK'
export const REMOVE_LOCAL_BOOK = 'REMOVE_LOCAL_BOOK'

export const deleteBook=(payload)=>({type:DELETE_BOOK,payload})
export const removeLocalBook=(payload)=>({type:REMOVE_LOCAL_BOOK,payload})

export const UPLOAD_BOOK = 'UPLOAD_BOOK'
export const ADD_STORE_BOOK = 'ADD_STORE_BOOK'
export const uploadBook=(payload)=>({type:UPLOAD_BOOK,payload})
export const addStorageBook=(payload)=>({type:ADD_STORE_BOOK,payload})



export default colectionsReducer




