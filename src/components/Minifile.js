import React,{useState} from 'react';
import '../style/home.css';
import { FaPlus,FaMinus } from 'react-icons/fa';


function Minifile({id, question, answer}) {
    const [ShowAnswer, setShowAnswer] = useState(false);
    const [ShowMore, setShowMore] = useState(false);
    const IsClicked = ()=>{
        setShowAnswer(!ShowAnswer)
    }
    const readmore = () => {
        setShowMore(true)
    }
    const readless = () => {
        setShowMore(false)
    }
    
  return (
    
    <div className='main-question-container'>
        <div className='question-logo-container'>
           <h4>{question}</h4>
           <div onClick={IsClicked}>
               {ShowAnswer ? <FaMinus className='plus-logo' /> : <FaPlus className='plus-logo' />}  
           </div>
        </div>
        { ShowAnswer && 
        <div className='anaswer'>
            <p>{ShowMore ? answer :` ${answer.substring(0,250)}...`}</p>
            {
                ShowMore ? <button className='read-more' onClick={readless}>...show less</button> : <button className='read-more' onClick={readmore}>...read more</button>
            }
            
            
        </div>
        }
      
    </div>
    
  )
}

export default Minifile