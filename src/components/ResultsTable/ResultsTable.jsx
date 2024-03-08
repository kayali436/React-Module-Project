import { useState } from "react";
import "./ResultTables.scss"

const ResultsTable = (props) => {
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const handleRowClick = (index) => {
    setSelectedRowIndex(index === selectedRowIndex ? null : index);
  };
  return (
    <>
      <tr
        key={props.key}
        onClick={() => handleRowClick(props.key)}
        className={props.key === selectedRowIndex ? "selected-row" : ""}
      >
        <td>{props.id}</td>
        <td>{props.title}</td>
        <td>{props.firstName}</td>
        <td>{props.surName}</td>
        <td>{props.email}</td>
        <td>{props.roomId}</td>
        <td>{props.checkInDate}</td>
        <td>{props.checkOutDate}</td>
        <td>{props.nights}</td>
      </tr>
    </>
  );
};

export default ResultsTable;
