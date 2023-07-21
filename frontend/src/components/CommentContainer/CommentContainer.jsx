import React, { useState, useEffect } from 'react';
import CommentForm from '../CommentForm/CommentForm';
import Comment from './Comment';

import { getCommentsData } from '../../data/comments';

const CommentContainer = ({ className, loggedInUserID }) => {
  const [comments, setComments] = useState([]);

  const mainComments = comments.filter((comment) => comment.parent === null);

  const [selectedComment, setSelectedComment] = useState(null);

  useEffect(() => {
    (async () => {
      const commentData = await getCommentsData();
      setComments(commentData);
    })();
  }, []);

  const addCommentHandler = (value, parent = null, replyOnUser = null) => {
    const newComment = {
      _id: '10',
      user: {
        _id: 'a',
        name: 'Mohammad Rezaii',
      },
      desc: value,
      post: '1',
      parent: parent,
      replyOnUser: replyOnUser,
      createdAt: '2022-12-31T17:22:05.092+0000',
    };
    setComments((curState) => {
      return [newComment, ...curState];
    });
  };

  return (
    <div className={`${className} `}>
      <CommentForm
        btnLabel='Send'
        formSubmitHandler={(value) => addCommentHandler(value)}
      />
      <div className='space-y-4 mt-8'>
        {mainComments.map((comment) => {
          return (
            <Comment
              comment={comment}
              loggedInUserID={loggedInUserID}
              selectedComment={selectedComment}
              setSelectedComment={setSelectedComment}
              addCommentHandler={addCommentHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CommentContainer;
