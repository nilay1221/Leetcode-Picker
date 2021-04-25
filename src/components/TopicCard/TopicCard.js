import React from 'react';
import {UserGroupIcon} from '@heroicons/react/outline';

const TopicCard = (props) => {
   
  // console.log(props);
  const {title,questions} = props.topic;

  return (
    <div className="border py-8 border-indigo-300 hover:bg-gray-200 cursor-pointer transform hover:scale-105 ease-in-out duration-300 delay-50 flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 shadow-md">
                  <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                    <UserGroupIcon className="h-11 w-11 text-blue-300 rounded bg-blue-100 p-1" />
                  </div>
                  <div>
                    <p className="mb-2 text-lg font-bold capitalize text-gray-600 dark:text-gray-400">
                      {title}
                    </p>
                    <p className="text-md font-semibold text-gray-700 dark:text-gray-200">
                      Total Questions: <span className="text-md font-bold text-indigo-700">{questions}</span>
                    </p>
                  </div>
      </div>
  )
    
}

export default TopicCard;
