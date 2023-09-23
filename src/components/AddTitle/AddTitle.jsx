import React from "react";

const AddTime = ({ titles }) => {
  const { title } = titles;

  return (
    <div className="bg-gray-100 mt-2 px-2">
      <p>{title}</p>
    </div>
  );
};

export default AddTime;
