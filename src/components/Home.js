import React,{useState} from 'react';
import '../style/home.css';
import { Questions } from './Data';
import Minifile from './Minifile';

function Home() {
   
  
    
  return (
   
       <div className=' main-container'>
             <div className='header-text'>
                <h1>Our Questions</h1>
            <div className='line-name'>
        </div>
    </div>

       {
           Questions.map((question) =>{
               return (
                   <div key={question.id}>
                        <Minifile {...question} />
                   </div>
               )
           })
       }
   </div>
  )
}

export default Home;