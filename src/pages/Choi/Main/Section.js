import React, { useState, useEffect } from 'react';
import Aside from './Aside';
import './Section.scss';
import FeedList from './FeedList';

const Section = () => {
  const [feedPhotos, setFeedPhotos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/choiMockData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(setFeedPhotos);
  }, []);

  return (
    <section>
      <article className="feeds">
        {feedPhotos.map(feed => {
          return (
            <FeedList
              userId={USER_ID}
              userName={USER_NAME}
              id={feed.id}
              url={feed.url}
              key={feed.id}
            />
          );
        })}
      </article>
      <Aside mainUserId={USER_ID} mainUserName={USER_NAME} />
    </section>
  );
};

export default Section;

const USER_ID = 'qsun81';
const USER_NAME = 'Kyu';
