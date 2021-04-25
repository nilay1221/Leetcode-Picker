import React,{useEffect,useState} from 'react';
import Home from './pages/Home/Home';
import Problems from './pages/Problems/Problems';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import LoadingHOC from "components/LoadingHOC/LoadingHOC";
import db from "helper/db.js";

function App(props) {
  
  const {setLoading} = props;
  const [topics,setTopic] = useState([]);

  const intializeDb = async (topics) => {
    const isVisited = localStorage.getItem("isVisited");
    if (!isVisited) {
      const data = topics.map((topic) => ({
        ...topic,
        questions: new Array(topic.questions).fill(false),
      }));
      await db.topics.bulkAdd(data);
      localStorage.setItem("isVisited", true);
    }
  };


  useEffect(() => {
    const getTopics = async () => {
      const response = await fetch("/topics.json");
      const data = await response.json();
      await intializeDb(data);
      // console.log(data);
      setTopic([...data]);
      setLoading(false);
    };
    getTopics();
  },[setLoading])


   
  return (
   <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home topics = {topics} />
          </Route>
          <Route path="/problems/:titleSlug">
            <Problems />
          </Route>
        </Switch>
      </Router>
    </div>  
  )
};

export default LoadingHOC(App);
