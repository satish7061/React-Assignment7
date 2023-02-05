import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { postEdit } from "../postSlice";

export default function EditData() {
    const navigate = useNavigate();
    const dispatch=useDispatch();


    const location= useLocation();
   const { stuId } = location.state;
   console.log(stuId)
  //  const id = stuId.id

    const data = useSelector((state) => state.posts.filter((item) => {return item.id === stuId}).map( (item) => item ))
  console.log(data);
    const sName=(data[0].name);
    const sAge=(data[0].age);
    const sCourse=(data[0].course);
    const sBatch=(data[0].batch);

    
    const [name,setName] = useState(sName)
    const [age,setAge] = useState(sAge)
    const [course,setCourse] = useState(sCourse)
    const [batch,setBatch] = useState(sBatch)

    function handleSubmit(e){
        e.preventDefault();
        if(name && age && course && batch){
          dispatch(postEdit({
            id:stuId,name,age,course,batch
          }))
          setName('');
          setAge('');
          setCourse('');
          setBatch('');
        }
        navigate('/student')

    }
   
  return (

    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form">
            <fieldset className="field">
              <legend>Name</legend>
              <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </fieldset>

            <fieldset className="field">
              <legend> Age </legend>
              <input type="number" name="age" value={age} onChange={(e) => setAge(e.target.value)} required />
            </fieldset>

            <fieldset className="field">
              <legend> Course </legend>
              <input type="text" name="course" value={course} onChange={(e) => setCourse(e.target.value)}  required />
            </fieldset>

            <fieldset className="field">
              <legend> Batch </legend>
              <input type="text" name="batch" value={batch} onChange={(e) => setBatch(e.target.value)}  required />
            </fieldset>
          </div>
          <div className="grid-btn">
            <button className=" button btn1">Cancel</button>
            <button className=" button btn2">Update</button>
          </div>
        </form>
      </div>
    </>
  );
}