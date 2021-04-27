import React from "react";

export default function Repair(props) {
  return (
    <li className={props.repair.completed ? "completed" : ""}>
      <div className="view">
        <input className="toggle" onClick={() => props.completeRepair(props.repair)} type="checkbox" />
        <label>{props.repair.task}</label>
        <button className="destroy" onClick={() => props.removeRepair(props.repair)}></button>
      </div>
    </li>
  );
}

