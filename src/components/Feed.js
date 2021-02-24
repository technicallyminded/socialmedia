import React from 'react';

const Feed = ({ feed }) => {
  return (
    <div>
      <h3>{feed.name}</h3>
      <p>{feed.post}</p>
    </div>
  );
};

export default Feed;
