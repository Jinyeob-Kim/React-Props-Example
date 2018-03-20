import React from "react";

function PeopleList(props) {
  return (
    <div>
      <button onClick={() => props.handleConfirm(props.person)}>
        {props.person}
      </button>
    </div>
  );
}
export default PeopleList;
