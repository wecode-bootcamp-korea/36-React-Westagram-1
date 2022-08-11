import React from 'react';
import './RecommendBox.scss';

const RecommendBox = () => {
  return (
    <div className="recommendBox">
      <div className="asideBoxTop">
        <div className="grayFont">회원님을 위한 추천</div>
        <div>모두 보기</div>
      </div>
      <div className="asideUserSpace">
        <div>
          <img src="./images/Mun/recoimg1.jpg" alt="tmp" />
        </div>
        <div className="asideUser">
          <div className="userName">q1o1rhvk</div>
          <div className="asideUserFriend">
            qorhvk0202님 외 29명이 팔로우 중입니다.
          </div>
        </div>
        <button className="followButton">팔로우</button>
      </div>
      <div className="asideUserSpace">
        <div>
          <img src="./images/Mun/recoimg2.jpg" alt="tmp" />
        </div>
        <div className="asideUser">
          <div className="userName">sKsms4fka</div>
          <div className="asideUserFriend">
            99aa_god님 외 12명이 팔로우 중입니다.
          </div>
        </div>
        <button className="followButton">팔로우</button>
      </div>
      <div className="asideUserSpace">
        <div>
          <img src="./images/Mun/recoimg3.jpg" alt="tmp" />
        </div>
        <div className="asideUser">
          <div className="userName">Ha_Ha_Man</div>
          <div className="asideUserFriend">
            holy33님 외 5명이 팔로우 중입니다.
          </div>
        </div>
        <button className="followButton">팔로우</button>
      </div>
    </div>
  );
};

export default RecommendBox;
