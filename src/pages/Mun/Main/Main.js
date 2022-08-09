import './Main.scss';
import Nav2 from './Nav/Nav2';
import FeedBox from './FeedBox/FeedBox';
import StoryBox from './StoryBox/StoryBox';
import ProfileBox from './ProfileBox/ProfileBox';
import RecommendBox from './RecommendBox/RecommendBox';
import NoticeBox from './NoticeBox/NoticeBox';
function Main() {
  return (
    <>
      <Nav2 />
      <div className="mainContainer">
        <div>
          <FeedBox />
          <FeedBox />
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
