import { color } from '@mui/system';
import React, {useState} from 'react';
import './HomePage.css';
import Navbar from './Navbar';
import LatestStories from './LatestStories';
import MostRead from './MostRead';
import { Style } from '@mui/icons-material';

const showComponent = {
  "Latest Stories": <LatestStories />,
  "Most Read": <MostRead />,
  
}

export default function HomePage({text}) {

  const [page, setPage] = useState("Most Read");
  const [bkColour, setbkColour] = useState(true)
  
  const toggleIsLoading = (event) => {
    setPage(event.target.textContent)
      setbkColour(!bkColour);
    
  }
  
 
  return (
    <div>
     <Navbar  text={text}/>
     <div className='sub-header'  >

      

       <button onClick={(e) => toggleIsLoading(e)} 
          style={{backgroundColor: bkColour ? '#ADE8F4' : '#48CAE4'}} 
       >Most Read</button>

        <button onClick={(e) => toggleIsLoading(e)}
          style={{backgroundColor: bkColour ? '#48CAE4' : '#ADE8F4' }} 
        
        >Latest Stories</button>
        {showComponent[page]}
     </div>
      
     

    </div>
  )
}
