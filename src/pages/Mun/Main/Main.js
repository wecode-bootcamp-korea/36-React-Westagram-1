import './Main.scss';
import Nav2 from './Nav/Nav2';
import FeedBox from './FeedBox/FeedBox';
import StoryBox from './StoryBox/StoryBox';
import ProfileBox from './ProfileBox/ProfileBox';
import RecommendBox from './RecommendBox/RecommendBox';
import NoticeBox from './NoticeBox/NoticeBox';
import { useState, useEffect } from 'react';

function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/MunFeedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, []);

  if (data.length === 0) return;

  return (
    <>
      <Nav2 />
      <div className="mainContainer">
        <div>
          {data.map(feedData => (
            <FeedBox data={feedData} key={feedData.id} />
          ))}
        </div>
        <aside className="asideFeed">
          <ProfileBox />
          <StoryBox />
          <RecommendBox />
          <NoticeBox />
        </aside>
      </div>
    </>
  );
}

export default Main;
