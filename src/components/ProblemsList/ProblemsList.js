import React from 'react';
import Problem from 'components/Problem/Problem';
import {useTable} from 'react-table';
import './ProblemsList.css';

const columns = [
  {
    Header: " ",
    accessor:"solved",
  },
  {
    Header: "Id",
    accessor:"questionId"
  },
  {
    Header:"Title",
    accessor:"title"
  },
  {
    accessor:"titleSlug"
  },
  {
    Header:"Likes",
    accessor:"likes"
  },
  {
    Header:"Dislikes",
    accessor:"dislikes",
  },
  {
    Header:"Difficulty",
    accessor:"difficulty"
  },
  {
    Header:"Status",
    accessor:"status",
  }
];


const ProblemsList = ({problems,onStatusChange}) => {
  //problems = [1,2,3];
  console.log(problems);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({columns,data:problems});

  return (
    <table className="w-full" {...getTableBodyProps()}>
      <thead>
        <tr>
          <th> </th>
          <th>Id</th>
          <th>Title</th>
          <th>Likes</th>
          <th>Dislikes</th>
          <th>Difficulty</th>
          <th>Done</th>
        </tr>
      </thead>
      <tbody>
        {problems.map((problem,problemIdx) => {
            return <Problem key={problemIdx} id={problemIdx} problem={problem} onStatusChange={onStatusChange} />
        })}
      </tbody>
    </table>
  )
}

export default ProblemsList;
