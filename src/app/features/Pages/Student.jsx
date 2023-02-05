import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Student() {
  const navigate = useNavigate();
  function handleSubmit(){
     navigate('/addData')
  }
  const data = useSelector((state) => state.posts);
  console.log(data);
  return (
    <>
      <div className="container">
        <header>
          <h1 className="head1">Student Details</h1>
          <button className="btn" onClick={handleSubmit}>Add new student</button>
        </header>
        <table id="details">
          <thead>
            <tr>
              <td className="t-head">Name</td>
              <td className="t-head">Age</td>
              <td className="t-head">Course</td>
              <td className="t-head">Batch</td>
              <td className="t-head">Change</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{ item.name }</td>
                  <td>{ item.age }</td>
                  <td>{ item.course }</td>
                  <td>{ item.batch }</td>
                  <td>
                    <Link to="/editData" state={{ stuId: item.id}}> Edit </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}