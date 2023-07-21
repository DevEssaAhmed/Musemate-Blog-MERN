import React from 'react';
import { FiMessageSquare, FiEdit2, FiTrash } from 'react-icons/fi';

import { images } from '../../constants';
import CommentForm from '../CommentForm/CommentForm';

const Comment = ({
  comment,
  loggedInUserID,
  selectedComment,
  setSelectedComment,
  addCommentHandler,
  parentId = null,
}) => {
  const isUserLoggedIn = Boolean(loggedInUserID);
  const commentBelongsToUser = loggedInUserID === comment.user._id;
  const isReplying =
    selectedComment &&
    selectedComment.type === 'replying' &&
    selectedComment._id;

  const repliedCommentId = parentId ? parentId : comment._id;
  const replyOnUserId = comment.user._id;

  return (
    <div className='flex flex-nowrap items-start  gap-x-3 bg-[#F2F4F5] p-3 rounded-lg'>
      <img
        className='w-9 h-9 object-cover rounded-full'
        src={images.PostProfile}
        alt='User Profile'
      />
      <div className='flex-1 flex flex-col'>
        <h5 className='font-bold text-dark-hard text-xs'>
          {comment.user.name}
        </h5>
        <span className='text-xs text-dark-light'>
          {new Date(comment.createdAt).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
          })}
        </span>
        <p className='font-opensans mt-[10px]  text-dark-light'>
          {comment.desc}
        </p>
        <div className='flex items-center gap-x-3 text-dark-light font-roboto text-sm mt-3 mb-3'>
          {isUserLoggedIn && (
            <button
              onClick={() => {
                setSelectedComment({ type: 'replying', _id: comment._id });
              }}
              className='flex items-center space-x-1'
            >
              <FiMessageSquare className='w-4 h-auto' />
              <span>Reply</span>
            </button>
          )}
          {commentBelongsToUser && (
            <>
              <button className='flex items-center space-x-1'>
                <FiEdit2 className='w-4 h-auto' />
                <span>Edit</span>
              </button>
              <button className='flex items-center space-x-1'>
                <FiTrash className='w-4 h-auto' />
                <span>Delete</span>
              </button>
            </>
          )}
        </div>
        {isReplying && (
          <CommentForm
            btnLabel='Reply'
            formSubmitHandler={(value) =>
              addCommentHandler(value, repliedCommentId, replyOnUserId)
            }
          />
        )}
      </div>
    </div>
  );
};

export default Comment;
