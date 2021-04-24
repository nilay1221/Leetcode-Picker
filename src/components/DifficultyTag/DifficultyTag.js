import React from 'react';
import './DifficultyTag.css';


const DifficultyTag = ({type}) => {
  
  return (
    <div className={`text-xs inline text-white w-min px-2 py-0.5 rounded-full font-bold ${type.toLowerCase()}`} >{type}</div>
  ); 
}


export default DifficultyTag;
