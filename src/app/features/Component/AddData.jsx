import { nanoid } from '@reduxjs/toolkit';
import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { postAdded } from '../postSlice';
import {  useNavigate } from "react-router-dom";

export default function AddData() {
    const navigate = useNavigate();
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [course,setCourse] = useState('')
    const [batch,setBatch] = useState('')
    const dispatch=useDispatch();

   function handleSubmit(e){
    e.preventDefault();
    navigate('/student')
    if(name && age && course && batch){
        dispatch(postAdded({
            id:nanoid,
            name,
            age,
            course,
            batch
        }))
        setName('')
        setAge('')
        setCourse('')
        setBatch('')
    }

   }
  return (
    <>
    <div className='container'>
    <form onSubmit={handleSubmit}>
       <div className='form'>
          <fieldset className='field'>
             <legend>Name</legend>
             <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} required />
           </fieldset>

           <fieldset className='field'>
             <legend> Age </legend>
             <input type="number" name='age' value={age} onChange={(e) => setAge(e.target.value)} required />
           </fieldset>

           <fieldset className='field'>
             <legend> Course </legend>
             <input type="text" name='course' value={course} onChange={(e) => setCourse(e.target.value)} required />   
           </fieldset>
          
           <fieldset className='field'>
              <legend> Batch </legend>
              <input type="text" name='batch' value={batch} onChange={(e) => setBatch(e.target.value)} required /> 
           </fieldset>  
        </div>
        <div className='grid-btn'>
           <button className=' button btn1' >Cancel</button> 
           <button className=' button btn2' >Submit</button> 
           
       </div>  
     </form>
    </div>
   </>
  )
}