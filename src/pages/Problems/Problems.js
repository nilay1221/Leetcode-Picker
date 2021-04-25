import React , {useState,useEffect} from 'react';
import ProblemsList from 'components/ProblemsList/ProblemsList';
import {BookmarkIcon,} from '@heroicons/react/solid';
import Dropdown from 'components/Dropdown/Dropdown';
import {useParams} from 'react-router-dom';
import db from 'helper/db';
import LoadingHOC from 'components/LoadingHOC/LoadingHOC';
const Home = (props) => {
 
  const {setLoading} = props;
  const {titleSlug} = useParams();
  const [problems,setProblems] = useState([]);
  const [solvedProblems,setSolveProblem] = useState(0);
  const [difficulty,setDifficulty] = useState(0);
  const [title,setTitle] = useState("");

  const difficulties = ['All','Easy','Medium','Hard'];

  const handleProblemSolve = (increment,questionId) => {
    if(increment){
      setSolveProblem(solvedProblems => solvedProblems+1);
      db.topics.get({titleSlug},(data) => {
        data.questions[questionId] = true;
        return db.topics.put({...data},);
      }).then(() => (console.log("DB Updated")));
    }
    else{
      setSolveProblem(solvedProblems => solvedProblems-1);
      db.topics.get({titleSlug},(data) => {
        data.questions[questionId] = false;
        return db.topics.put({...data});
      }).then(() => {console.log("DB Updated")});
    }
  }


  useEffect(() => {
      // Calling api for fetching problems.
      const getData = async () => {
          try{
            const response =  await fetch(`/${titleSlug}.json`,{
              headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
              }
            });
            const storedData = await db.topics.get({titleSlug});
            const json = (await response.json()).map((row,rowIdx) => {
              let solved = storedData.questions[rowIdx];
              return {...row,solved,status:solved};
            });
            console.log(json);
           setTitle(storedData.title);
           setProblems(json);
           setLoading(false);
          }catch(e){
            console.log(e);
          }
        }
      getData();    
  },[titleSlug,setLoading]);

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
        {title}
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
export default LoadingHOC(Home);
