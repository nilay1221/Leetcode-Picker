import React , {useState,useEffect} from 'react';
import ProblemsList from 'components/ProblemsList/ProblemsList';
import {BookmarkIcon,ChevronDownIcon} from '@heroicons/react/solid';
import Dropdown from 'components/Dropdown/Dropdown';
const Home = () => {
 
  const [problems,setProblems] = useState([]);
  const [solvedProblems,setSolveProblem] = useState(0);
  const [difficulty,setDifficulty] = useState(0);
  
  const difficulties = ['All','Easy','Medium','Hard'];

  const handleProblemSolve = (increment) => {
    if(increment){
      setSolveProblem(solvedProblems+1);
    }
    else{
      setSolveProblem(solvedProblems-1);
    }
  }

  const getData = async () => {
    try{
      const response =  await fetch('questions.json',{
        headers:{
          'Content-Type':'application/json',
          'Accept':'application/json'
        }
      });
      const json = (await response.json()).map((row => ({...row,solved:false,status:false})));
      console.log(json);
     setProblems(json);
    }catch(e){
      console.log(e);
    }
  }

  useEffect(() => {
      // Calling api for fetching problems.
      getData();    
  },[]);

  const filterData = (problems) => {
    if(difficulties[difficulty].toLowerCase() !== 'all'){
        return problems.filter((problem) => problem.difficulty.toLowerCase() === difficulties[difficulty].toLowerCase());
    }
    else
      return problems;
  }

  const handleDifficultyChange = (value) => {
      setDifficulty(value);
  }


  return (
    <div style={{margin:'5rem auto',width:'50%'}}>
      <div className = "flex items-center text-left mb-1.5 text-2xl">
        <span><BookmarkIcon className="mr-0.75 h-7 w-7" /></span>
        String
      </div>
      <div>
        You have solved <span className="font-bold">{`${solvedProblems}/${problems.length}`}</span> problems.
      </div>
      <div className="mt-4">
        <Dropdown values={difficulties} selected={difficulty} onChange={handleDifficultyChange} />
      </div>
      {problems && problems.length > 0 && (<ProblemsList problems={filterData(problems)} onStatusChange={handleProblemSolve} />)}
    </div>
  );

}
export default Home;
