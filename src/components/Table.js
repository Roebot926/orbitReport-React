import "./styling.css";
import "../App"
import React from "react";

const Table = ({ sat }) => {
  
  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Sat Type</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
          {sat.map((data,id) => {
            return(
              <tr key={id}>
                <td>{data.name}</td>
                <td>{data.type}</td>
                <td>{data.launchDate}</td>
                {data.operational ? <td>Active</td> : <td>Inactive</td>}
              </tr>
            )
          })};

        </tbody>
      </table>
  );
};

export default Table;