import React from 'react';
import { useState } from 'react';
import Comment from './Comment';
import Comments from './Comments';

const Feed = ({ feed }) => {
  const [likes, setLikes] = useState(0);
  const [showComment, setShowComment] = useState(false);
  const [commentState, setCommentState] = useState([
    { text: 'This is a comment' },
    { text: 'Moar comments' },
  ]);
  const handleLike = () => {
    if (likes > 0) {
      setLikes(likes - 1);
    } else setLikes(likes + 1);
  };
  return (
    <div>
      <h3>{feed.name}</h3>
      <p>{feed.post}</p>
      <button onClick={handleLike}>Like</button>
      <span className='feed-likes'>{likes}</span>
      <button onClick={(e) => setShowComment(!showComment)}>Comment</button>
      <span className='feed-likes'>{commentState.length}</span>
      {showComment && <Comments commentState={commentState} />}
    </div>
  );
};

export default Feed;
