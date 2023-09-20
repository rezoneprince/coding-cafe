import React from 'react';

const Bookmark = ({bookmarks}) => {
        
    let newRedTime = 0;
    let title = []
    for(const bookmark of bookmarks){
        newRedTime = newRedTime  + bookmark.redTime;
        title = title + '  " ' + bookmark.title + ' " ';
    }

    return (
        <div>
             <div>
                <h4>Spent Time On Read:{newRedTime}</h4>
            </div>
            <h2>Book mark blogs:{bookmarks.length}</h2>
            <p>{title}</p>
        </div>
    );
};

export default Bookmark;