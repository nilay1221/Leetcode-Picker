import React from "react";
import TopicCard from "components/TopicCard/TopicCard";
import { Link } from "react-router-dom";


const Home = (props) => {
  const { topics } = props;


  return (
    
    <div className="w-6/12 mx-auto my-40">
      <div className="font-semibold text-5xl text-center my-8">Leetcode Picker</div>
      <div className="grid grid-cols-3  gap-y-4 gap-x-4">
        {topics &&
          topics.length > 0 &&
          topics.map((topic, topicIdx) => (
            <Link key={topicIdx} to={`/problems/${topic.titleSlug}`}>
              <TopicCard topic={topic} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Home;
