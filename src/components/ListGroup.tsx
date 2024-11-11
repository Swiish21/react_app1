import { Fragment } from "react";

function ListGroup() {
  
  const items = ["Tokyo", "London", "Sydney", "New York", "San Francisco", "Beijing"];

  return (
    <Fragment>
      <h1>List</h1>
      {items.length === 0 ? <p>No items found</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;