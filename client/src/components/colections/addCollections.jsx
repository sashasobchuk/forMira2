import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {uploadCollection} from "../../redux/colectionsReducer";

const AddCollections = ({addCollectionDisplay,changeAddCollectionDisplay}) => {
    const [name, changeName] = useState('111')
    const [description, changeDescription] = useState('zzz')
    const dispatch = useDispatch()
    const onchangeNameHandler = (e) => {
        changeName(e.currentTarget.value)
    }
    const onchangeDescriptionHandler = (e) => {
        changeDescription(e.currentTarget.value)
    }
    const uploadData = () => {
        dispatch(uploadCollection({name, description}))
        changeName("")
        changeDescription('')
    }

    return (
        <div style={{display:addCollectionDisplay === true ? 'block':'none'}} className='addCollectionContainer'>
            <div className='tittle'> add collection</div>
            <button  onClick={()=>{changeAddCollectionDisplay(false)}} className='delete'>
                X
            </button>
            <div className='addCollection'>
                <div>
                    <label htmlFor="name">name</label>
                    <input type="text" value={name} required onChange={(e) => onchangeNameHandler(e)} id='name'/><br/>
                </div>
                <div>
                    <label htmlFor="description">desccription</label>
                    <input type="text" value={description} required onChange={(e) => onchangeDescriptionHandler(e)}
                           id='description'/>
                </div>
                <div onClick={uploadData}>
                    <button> send</button>
                </div>
            </div>

        </div>
    );
};

export default AddCollections;









