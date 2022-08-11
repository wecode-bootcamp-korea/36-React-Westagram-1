import React from 'react';
import './StoryBox.scss';

const StoryBox = () => {
  // Review: 반복되는 데이터
  return (
    <div className="storyBox">
      <div className="asideBoxTop">
        <div className="grayFont">스토리</div>
        <div>모두 보기</div>
      </div>
      <div className="asideUserSpace">
        <div>
          <img src="./images/Mun/storyimg1.jpg" alt="tmp" />
        </div>
        <div className="asideUser">
          <div className="userName">KoE_oooo</div>
          <div className="asideUserTime">17분 전</div>
        </div>
      </div>
      <div className="asideUserSpace">
        <div>
          <img src="./images/Mun/storyimg2.jpeg" alt="tmp" />
        </div>
        <div className="asideUser">
          <div className="userName">marinBoy</div>
          <div className="asideUserTime">12분 전</div>
        </div>
      </div>
      <div className="asideUserSpace">
        <div>
          <img src="./images/Mun/storyimg3.jpg" alt="tmp" />
        </div>
        <div className="asideUser">
          <div className="userName">goRagoRa</div>
          <div className="asideUserTime">9분 전</div>
        </div>
      </div>
      <div className="asideUserSpace">
        <div>
          <img src="./images/Mun/storyimg4.png" alt="tmp" />
        </div>
        <div className="asideUser">
          <div className="userName">ariNa</div>
          <div className="asideUserTime">5분 전</div>
        </div>
      </div>
    </div>
  );
};

export default StoryBox;
