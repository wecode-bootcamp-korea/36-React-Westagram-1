import React, { useState } from 'react';
import './CommentInput.scss';

const CommentInput = props => {
  let [commentText, setCommentText] = useState([
    { key: 0, userName: '', comment: '댓글이 없습니다.' },
  ]);

  const commentCreator = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setCommentText(previousState => {
        return [
          ...previousState,
          { userName: props.mainUserId, comment: event.target.value },
        ];
      });
    }
  };

  return (
    <>
      <div className="comment">
        {commentText.map(userComment => {
          return (
            <p key={userComment.key}>
              <span>{userComment.userName}</span>
              {userComment.comment}
            </p>
          );
        })}

        <div className="time">45분 전</div>
      </div>
      <form className="addComment">
        <input
          className="commentInput"
          type="text"
          placeholder="댓글을 달아보아요!"
          onKeyUp={commentCreator}
        />
        <button type="submit" className="postButton">
          게시
        </button>
      </form>
    </>
  );
};

export default CommentInput;
