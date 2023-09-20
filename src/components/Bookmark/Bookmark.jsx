import React from 'react';
import AddTitle from '../AddTitle/AddTitle';

const Bookmark = ({bookmarks}) => {
        
    let newRedTime = 0;
    for(const bookmark of bookmarks){
        newRedTime = newRedTime  + bookmark.redTime;
    }

    return (
        <div className='px-4'>
             <div>
                <h4>Spent Time On Read:{newRedTime}</h4>
            </div>
            <h2>Book mark blogs:{bookmarks.length}</h2>
            {
                bookmarks.map(titles => <AddTitle titles={titles} key={AddTitle.id}></AddTitle>)
            }
        </div>
    );
};

export default Bookmark;