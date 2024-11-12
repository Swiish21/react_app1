import { Fragment, useState } from "react";

function ListGroup() {
  const [items, setItems] = useState(["Tokyo", "London", "Sydney", "New York", "San Francisco", "Beijing"]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [name, setName] = useState("Malcom");

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Fragment>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={item}
            onClick={() => handleClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;