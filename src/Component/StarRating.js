import React from 'react';
import {Typography,Rating} from '@mui/material';



function StarRating({STE}) {
  return <div><Typography component="legend">Rating</Typography>
  <Rating
   
    
    
    onChange={(el) => STE(el.target.value) }
    
        
    
  />
  
  </div>;
  
}


export default StarRating;
