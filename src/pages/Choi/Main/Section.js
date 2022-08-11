import React, { useState, useEffect } from 'react';
import Aside from './Aside';
import './Section.scss';
import FeedList from './FeedList';

const Section = () => {
  const userId = 'qsun81';
  const userName = 'Kyu';
  const [feedPhotos, setFeedPhotos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/choiMockData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeedPhotos(data);
      });
  }, []);

  return (
    <section>
      <article className="feeds">
        {feedPhotos.map((data, index) => {
          return (
            <FeedList
              userId={userId}
              userName={userName}
              id={data.id}
              url={data.url}
              key={index}
            />
          );
        })}
      </article>
      <Aside mainUserId={userId} mainUserName={userName} />
    </section>
  );
};

export default Section;
