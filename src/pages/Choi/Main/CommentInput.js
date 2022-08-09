import React, { useState } from 'react';
import './CommentInput.scss';

const CommentInput = props => {
  const [comment, setComment] = useState('');

  const commentInput = event => setComment(event.target.value);

  const [commentArray, setCommentArray] = useState([]);

  const registComment = event => {
    event.preventDefault();
    if (comment === '') {
      return;
    }
    setCommentArray([...commentArray, comment]);
    setComment('');
  };

  const commentValid = comment.length >= 1;
  let userInfo = props;

  return (
    <>
      <div className="comment">
        {commentArray.map((comment, index) => {
          return (
            <p key={index}>
              <span>{userInfo.mainUserId}</span>&nbsp;{comment}
            </p>
          );
        })}

        <div className="time">45분 전</div>
      </div>
      <form className="addComment">
        <input
          className="commentInput"
          type="text"
          placeholder="댓글을 달아보아요"
          value={comment}
          onChange={commentInput}
        />
        <button
          type="submit"
          className="postButton"
          onClick={registComment}
          style={{ opacity: commentValid ? '100%' : '30%' }}
          disabled={commentValid ? false : true}
        >
          게시
        </button>
      </form>
    </>
  );
};

export default CommentInput;
