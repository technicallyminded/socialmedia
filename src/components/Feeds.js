import React from 'react';
import Feed from './Feed';

const Feeds = ({ feedState }) => {
  return (
    <div className='container'>
      {feedState.map((feed) => (
        <Feed feed={feed} />
      ))}
    </div>
  );
};

export default Feeds;
