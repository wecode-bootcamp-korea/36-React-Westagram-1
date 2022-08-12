import React, { useState } from 'react';
import CommentList from './CommentList';
import './CommentInput.scss';

const CommentInput = ({ mainUserId }) => {
  const [comment, setComment] = useState({
    commentText: '',
    commentId: 0,
  });

  let commentIdCount = 0;
  const saveComment = event => {
    setComment({
      commentText: event.target.value,
      commentId: commentIdCount,
    });
  };

  const [comments, setComments] = useState([]);

  const registerComment = event => {
    event.preventDefault();

    if (comment.commentText === '') return;

    setComments([...comments, comment]);
    setComment({ commentText: '', commentId: 0 });
    commentIdCount++;
  };

  const isCommentValid = comment.commentText.length >= 1;
  return (
    <div className="commentInput">
      <div className="comment">
        {comments.map(comment => {
          return (
            <CommentList
              key={comment.commentIdCount}
              comment={comment.commentText}
              listNumber={comment.commentIdCount}
              userMainId={mainUserId}
            />
          );
        })}

        <div className="time">45분 전</div>
      </div>
      <form className="addComment">
        <input
          className="commentInput"
          type="text"
          placeholder="댓글을 달아보아요"
          value={comment.commentText}
          onChange={saveComment}
        />
        <button
          type="submit"
          className={isCommentValid ? 'btnActive' : 'btnInactive'}
          onClick={registerComment}
          disabled={!isCommentValid}
        >
          게시
        </button>
      </form>
    </div>
  );
};

export default CommentInput;
