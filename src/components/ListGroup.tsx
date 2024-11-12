import { Fragment } from "react";

function ListGroup() {
  
  let items = ["Tokyo", "London", "Sydney", "New York", "San Francisco", "Beijing"];

  return (
    <Fragment>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p> }
      <ul className="list-group">
        {items.map((item, index) => (
          <li 
          className="list-group-item" 
          key={item} 
          onClick={() => console.log(item, index)}
          >
            {item}
            </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;