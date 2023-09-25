import React from "react";
import AddTitle from "../AddTitle/AddTitle";

const Bookmark = ({ bookmarks, addTimes }) => {
  return (
    <div className="px-2">
      <div>
        <h4>Spent Time On Read:{addTimes}</h4>
      </div>

      <h2>Book mark blogs:{bookmarks.length}</h2>
      {bookmarks.map((titles) => (
        <AddTitle titles={titles} key={AddTitle.id}></AddTitle>
      ))}
    </div>
  );
};

export default Bookmark;
