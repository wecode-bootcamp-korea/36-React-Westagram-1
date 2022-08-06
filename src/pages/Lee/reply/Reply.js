import React from 'react';

const Reply = ({ comment }) => {
  let result = comment.map((name, idx) => {
    return (
      <li key={idx}>
        <span className="name">dev_codyman0</span>
        <span className="smallText">{name}</span>
      </li>
    );
  });
  return <div>{result}</div>;
};

export default Reply;
