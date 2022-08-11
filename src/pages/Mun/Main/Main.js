import './Main.scss';
import Nav2 from './Nav/Nav2';
import FeedBox from './FeedBox/FeedBox';
import StoryBox from './StoryBox/StoryBox';
import ProfileBox from './ProfileBox/ProfileBox';
import RecommendBox from './RecommendBox/RecommendBox';
import NoticeBox from './NoticeBox/NoticeBox';
import { useState, useEffect } from 'react';

function Main() {
  // Review: 변수명
  // data, info
  // array, string, object
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/data/MunFeedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(setData)
    // Review: setData
  }, []);

  if (data.length === 0) return;

  return (
    <>
      <Nav2 />
      <div className="mainContainer">
        <div>
          {feeds.map(feed => (
            <FeedBox data={feed} key={feed.id} />
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
