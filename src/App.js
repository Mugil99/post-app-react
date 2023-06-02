import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {fetchPost} from './redux/actions/post.actions';


function App() {
let loading=useSelector(state=>state.loading)
let data=useSelector(state=>state.data)
let error=useSelector(state=>state.error)

const dispatch=useDispatch()

useEffect(()=>{
  dispatch(fetchPost())
},[])
if(loading){
  return <h1>Loading...</h1>
}
if(error){
  return<h1>Error Occured</h1>
}
  return (
    <div>
      <h1>Post List</h1>
      <div className='container'>
      {
        data.map((post)=>(
          <div key={post.id} className="children">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default App;
