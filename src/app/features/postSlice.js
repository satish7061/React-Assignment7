import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Satish Kumar',age: '22',course:' MERN',batch: 'EA-16' },
    { id: '1', name: 'Rahul',age: '20',course:' MERN',batch: 'EA-16' }
]
const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded(state,action){
            state.push(action.payload)
        },
        postEdit(state,action){
            const {id,name,age,course,batch} = action.payload;
            const exStudent = state.find((user) => user.id  === id)
            if (exStudent){
                exStudent.name = name;
                exStudent.age = age;
                exStudent.course = course;
                exStudent.batch = batch;

            }
        }
    }

})
export default postSlice.reducer
export const {postAdded,postEdit} = postSlice.actions