import React from 'react'
import '../index.css'
import  '../CSS/Sidebar.css';
import { assets } from '../assets/assets';

const Sidebar = () => {
    return (
        <div className='sidebar'>
          <div className='profile mt-4'>
            <img src={assets.avatar} alt="Avatar" className='mx-3'/>
            <p className='greeting mt-3 mx-1'>Hi, Alyssa</p>
          </div>
          <table className='stats-table mt-3 mb-0'>
  <tbody>
    <tr>
      <td>Days Streak</td>
      <td>Quizzes Created</td>
      <td>Quizzes Completed</td>
    </tr>
    <tr>
      <td>5</td>
      <td>12</td>
      <td>10</td>
    </tr>
    
  </tbody>
</table>
          <hr className='mx-2'/>
          <button type="button" className="addsubjectbutton mt-3 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
            </svg>
            Add Subject
          </button>
          <p className='mb-3'>My Subjects</p>
        
        <div className='subject-container mx-4'>
  <p className='subject mb-0'>
    Mathematics
  </p>
  <p>
    2 Quizzes
  </p>
</div>

<div className='subject-container mx-4'>
  <p className='subject mb-0'>
    English
  </p>
  <p>
    4 Quizzes
  </p>
</div>

<div className='subject-container mx-4'>
  <p className='subject mb-0'>
    History
  </p>
  <p>
    0 Quizzes
  </p>
</div>
          
        </div>
      )
      
}

export default Sidebar