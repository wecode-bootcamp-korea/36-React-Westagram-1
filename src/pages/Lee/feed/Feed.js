import React, { useState } from 'react';
import './feed.scss';

const Feed = () => {
  const [value, setValue] = useState('');
  const [comments, setComments] = useState([]);
  //굳이 useState 이 필요한가?? maybe not

  const changeHandler = e => {
    setValue(e.target.value);
  };

  const registerComment = e => {
    e.preventDefault();
    const pot = [...comments];
    pot.push(value);
    setComments(pot);
    setValue('');
  };

  const here = e => {};

  return (
    <div className="feed">
      <div className="feeds">
        <div className="feeds__name story__profile">
          <img
            className="img__round-small"
            src="images/Lee/프3.jpeg"
            alt="피드"
          />
          <div className="profile__text">
            <div className="middleText">
              <h4>dev_codyman0</h4>
            </div>
            <div className="smallText">오늘은 여기까지</div>
          </div>
          <i className="uil uil-ellipsis-h icon icon-absolute" />
        </div>

        <article>
          <img
            className="article__img"
            src="images/Lee/피드.jpg"
            width="100%"
            alt="nope"
          />
        </article>

        <div className="push__icon">
          <i className="uil uil-heart-alt icon" />
          <i className="uil uil-comment icon" />
          <i className="uil uil-user icon" />
          <i className="uil uil-bookmark-full icon icon-absolute" />
        </div>

        <ul className="replSection" onChange={here}>
          <li className="repl middleText">
            <span className="repl middleText">
              juyoung님 외 3명이 좋아합니다
            </span>
            <span className="name">dev_codyman0</span>
            <span className="smallText">댓글 기능을 구현해보자! </span>
            <button className="smallText" type="submit">
              ...더 보기
            </button>
            <span className="repl smallText reply">댓글 2개 다시보기</span>
          </li>
          {comments.map((name, idx) => {
            return (
              <li key={idx}>
                <span className="name">dev_codyman0</span>
                <span className="smallText">{name}</span>
              </li>
            );
          })}
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
          <input
            className="button-style"
            type="submit"
            value="게시"
            onClick={registerComment}
          />
        </form>
      </div>
    </div>
  );
};

export default Feed;
