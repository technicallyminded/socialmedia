import React from 'react';
import Comment from './Comment';

const Comments = ({ commentState }) => {
  return (
    <div>
      {commentState.map((comment) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
