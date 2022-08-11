import React from 'react';
import Comment from './Comment/Comment';
import { useState } from 'react';
import './FeedBox.scss';
const FeedBox = ({ data }) => {
  const myName = 'nyam_nyam2';

  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  function btnStyle() {
    return comment.length > 0 ? 'commentButtonAct' : 'commentButton';
  }

  function commentChange(e) {
    setComment(e.target.value);
  }

  function commentPlus(e) {
    e.preventDefault();
    if (comment === '') return;
    let tmp = [...comments];
    tmp.push(comment);
    setComments(tmp);
    setComment('');
  }

  return (
    <section className="feedBox">
      <div className="feedTop">
        <div className="feedTopLeft">
          <img src={data.user_img} alt="tmp" />
          {data.user_name}
        </div>
        <div className="feedTopRight">
          <img src="./images/Mun/more.png" alt="tmp" />
        </div>
      </div>
      <article className="feedMiddleImg">
        <img src={data.feed_img} alt="tmp" />
      </article>
      <div className="feedBottom">
        <div className="bottomMenu">
          <div className="bottomMenuLeft">
            <img src="./images/Mun/heart.png" alt="tmp" />
            <img src="./images/Mun/chat.png" alt="tmp" />
            <img src="./images/Mun/upload.png" alt="tmp" />
          </div>
          <div className="bottomMenuRight">
            <img src="./images/Mun/bookmark.png" alt="tmp" />
          </div>
        </div>
        <div className="like">
          <img src={data.lover_img} alt="tmp" />
          <span className="userName">{data.lover_name}</span>님 외{' '}
          {data.lover_num}명이 좋아합니다
        </div>

        <div className="commentContainer">
          <div className="commentMore">{`댓글 ${
            data.comment.length + comments?.length
          }개`}</div>
          {data.comment.map(comment => {
            return (
              <Comment
                nickname={comment['user_name']}
                comment={comment['user_comment']}
                key={comment.id}
              />
            );
          })}

          {comments.map((comment, idx) => {
            return (
              <Comment
                nickname={myName}
                comment={comment}
                close={true}
                key={idx}
                idx={idx}
                comments={comments}
                setComments={setComments}
              />
            );
          })}
        </div>
        <div className="commentTime">42분 전</div>
        <form className="commentInputBox">
          <input
            onChange={e => {
              commentChange(e);
            }}
            value={comment}
            type="text"
            placeholder="댓글 달기..."
            className="commentInput"
          />
          <button
            onClick={e => {
              commentPlus(e);
            }}
            className={btnStyle()}
          >
            게시
          </button>
        </form>
      </div>
    </section>
  );
};

export default FeedBox;
