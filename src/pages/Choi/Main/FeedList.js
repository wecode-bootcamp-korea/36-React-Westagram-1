import React from 'react';
import CommentInput from './CommentInput';

const FeedList = props => {
  let feedInfo = props;

  return (
    <div className="feedContent" key={feedInfo.key}>
      <div className="feeder">
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          alt="user"
        />
        <p>{feedInfo.id}</p>
      </div>
      <div className="feedImage">
        <img src={feedInfo.url} alt="feedImage" />
      </div>
      <div className="feedBottom">
        <div className="iconList">
          <div className="firstThree">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="heart"
            />
            <img
              src="https://img.icons8.com/fluency-systems-regular/96/000000/comments--v1.png"
              alt="comment"
            />
            <img
              src="https://img.icons8.com/small/64/000000/share.png"
              alt="share"
            />
          </div>
          <div className="lastIcon">
            <img
              src="https://img.icons8.com/small/64/000000/bookmark-ribbon.png"
              alt="bookmark"
            />
          </div>
        </div>
        <div className="whoLikes">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt="user"
          />
          <p>
            <span>peter_sparrow</span>외 100명이 좋아합니다
          </p>
        </div>
        <CommentInput
          mainUserId={feedInfo.userId}
          mainUserName={feedInfo.userName}
        />
      </div>
    </div>
  );
};

export default FeedList;
