import React,{useState} from 'react';
import DifficultyTag from 'components/DifficultyTag/DifficultyTag';
import {CheckIcon,ThumbUpIcon,ThumbDownIcon} from '@heroicons/react/solid';
import './Problem.css';


const Problem = ({id,problem,onStatusChange}) => {
  
  const [solved,setSolve] = useState(problem.status);
  //const [active,setActive] = useState(false);
  const handleChange = () => {
    setSolve(!solved);
    onStatusChange(!solved,id);
  }

  return (
    <tr className="hover:bg-gray-100">
        <td>
          {solved ? (<CheckIcon className="h-5 w-5 text-green-600" />) : " "}
        </td>
        <td>{id+1}</td>
        <td><a target="_blank" rel="noreferrer" className="text-blue-500" href={`https://leetcode.com/problems/${problem.titleSlug}`}>{problem.title}</a></td>
        <td>
          <div className="flex flex-row justify-center items-center">
            <ThumbUpIcon className="h-5 w-5 text-green-500" />
            <span className="px-1">{problem.likes}</span>
          </div>
        </td>
        <td>
          <div className="flex flex-row justify-center items-center">
            <ThumbDownIcon className="h-5 w-5 text-red-500" />
            <span className="px-1">{problem.dislikes}</span>
          </div>
        </td> 
        <td ><DifficultyTag type={problem.difficulty} /></td>
        <td className="text-center">
          <input  
            type="checkbox" 
            defaultChecked={solved}
            onChange={handleChange}/>
        </td>
      </tr>
  )

}

export default Problem;
