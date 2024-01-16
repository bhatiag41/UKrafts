import "./demo.css";
import React, { useState, useEffect } from "react";

const Demo = () => {
  const [state, setState] = useState({ count: 0, theme: "blue" });
  const [resourcetype, setResourceType] = useState("posts");
  const count = state.count;
  const theme = state.theme;
  function decrementCount() {
    setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count - 1,
        theme: (prevState.theme = "red"),
      };
    });
  }
  function incrementCount() {
    // setCount(prevCount=>prevCount+1)
    setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1,
        theme: (prevState.theme = "green"),
      };
    });
  }
  function resetvalue() {
    setState((prevState) => {
      return {
        ...prevState,
        count: (prevState.count = 0),
        theme: (prevState.theme = "blue"),
      };
    });
  }
  const [items,setItems]=useState([])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourcetype}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourcetype]);
  return (
    <div className="parent">
      <div className="compo">
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick={incrementCount}>+</button>
        <button onClick={resetvalue}>reset</button>
      </div>
      <div className="compo2">
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourcetype}</h1>
      {items.map(item=>{
          return(
              <div className="content">
         <pre>{JSON.stringify(item.title)}</pre>
        <pre> {JSON.stringify(item.name)}</pre>
        <pre>{JSON.stringify(item.body)}</pre>
        </div>)
      })}
    <img width="500" src="assets/code.png" alt="omg"/>
    </div>
  );
};
export default Demo;
