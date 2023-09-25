import React from "react";

const Blog = () => {
  return (
    <div className="text-center">
      <div className="mt-5">
        <h3 className="text-3xl">
          What is the difference between the props and the state?
        </h3>
        <p>
          ⭐Props are used to pass data from a parent component to a child
          component, while state is used to manage data within a component.
          Props are immutable and cannot be changed within a component, while
          state is mutable and can be updated using the setState function.
        </p>
      </div>

      <div className="mt-5">
        <h3 className="text-3xl">How to work useState</h3>
        <p>
          ⭐UseState returns a pair of values. This pair of values is of array
          type. It has two alignments. The first one returns the initial value
          and the next index returns a function. Through this function we update
          our state data.
        </p>
      </div>

      <div className="mt-5">
        <h3 className="text-3xl">What else does useEffect data load?</h3>
        <p>
          ⭐Other functions that useEffect can do other than load data are
          componentDidMount and componentDidUpdate and componentWillUnmount.
        </p>
      </div>

      <div className="mt-5 mb-10">
        <h3 className="text-3xl">How does react work ?</h3>
        <p>
          ⭐React creates a virtual DOM in memory to update the browsers DOM.
          The virtual DOM will try to find the most efficient way to update the
          browsers DOM. Unlike browser DOM elements, React elements are simple
          objects and are cheap to create. React DOM takes care of updating the
          DOM to match the React elements.
        </p>
      </div>
    </div>
  );
};

export default Blog;
