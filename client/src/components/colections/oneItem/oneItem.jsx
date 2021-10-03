import React from 'react';

const OneItem = ({props}) => {
    props = props.props
     let item = props.item

    return (
        <div>
            <div className='collection' key={item._id}>
                <button onClick={() => props.deleteHandler(item._id)} className='delete'>
                    X
                </button>
                <div className='collection__name'>
                    <h3> name:</h3>
                    {item.name}
                </div>
                <div className='collection__description'>
                    <h3>description:</h3>

                    {item.description}
                </div>
                <div className='collection__books'>
                    <h3>books:</h3>
                    {item.books.map((book) => <div className='collection__oneBook' key={book}>
                        {book}
                    </div>)}
                </div>

                <button onClick={() => props.goToHandler(item._id)} className='collection_goTo button'>
                    go to collection
                </button>
            </div>
        </div>
    );
};

export default OneItem;
