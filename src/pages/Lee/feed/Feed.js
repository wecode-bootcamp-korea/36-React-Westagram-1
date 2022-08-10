import React, { useRef, useState } from 'react';
import './feed.scss';

const Feed = ({ data }) => {
  const [value, setValue] = useState('');
  const [comments, setComments] = useState([]);
  const reply = useRef(null);

  const changeHandler = e => {
    setValue(e.target.value);
  };

  const registerComment = e => {
    e.preventDefault();
    setComments([...comments, value]);
  };

  const clearValue = e => {
    registerComment(e);
    setValue('');
  };
  // scroll시도
  // const scrollToBottom = () => {
  //   reply.current.scrollIntoView({ behavior: 'smooth' });
  // };

  // useEffect(() => {
  //   comments.current?.scrollIntoView();
  // }, [comments]);

  return (
    <div className="feed">
      <div className="feeds">
        <div className="feeds__name story__profile">
          <img className="img__round-small" src={data.src} alt={data.alt} />
          <div className="profile__text">
            <div className="middleText">
              <h4>{data.name}</h4>
            </div>
            <div className="smallText">{data.subName}</div>
          </div>
          <i className="uil uil-ellipsis-h icon icon-absolute" />
        </div>
        <article>
          <img
            className="article__img"
            src={data.articleSrc}
            width="100%"
            alt={data.articleAlt}
          />
        </article>
        <div className="push__icon">
          <i className="uil uil-heart-alt icon" />
          <i className="uil uil-comment icon" />
          <i className="uil uil-user icon" />
          <i className="uil uil-bookmark-full icon icon-absolute" />
        </div>
        <ul className="replSection" ref={reply}>
          <li className="repl middleText">
            <span className="repliment middleText">
              <span className="receivedName">{data.name}</span>님 외
              <span className="receiveHeart">{data.heart}</span>이 좋아합니다
            </span>
            <span className="name">{data.name}</span>
            <span className="smallText">{data.saying} </span>
            <button className="smallText" type="submit">
              ...더 보기
            </button>
            <span className="repliment smallText reply">댓글 2개 다시보기</span>
          </li>

          {comments.map((comment, idx) => (
            <li key={idx}>
              <span className="name">{data.name}</span>
              <span className="smallText">{comment}</span>
            </li>
          ))}
        </ul>
        <form className="feeds__input">
          <i className="uil uil-smile icon" />
          <input
            className="feed__input"
            type="text"
            placeholder="댓글 달기..."
            value={value}
            onChange={changeHandler}
          />
          <button className="button-style" type="submit" onClick={clearValue}>
            게시
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feed;
