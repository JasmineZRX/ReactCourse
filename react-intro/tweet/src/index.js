import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <Author />
        <Time />
        <Message />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

const ReplyButton = () => <i className="fa fa-reply reply-button" />;
const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;

const LikeButton = () => <i className="fa fa-like like-button" />;
const MoreOptionsButton = () => (
  <i className="fa fa-more-options more-options-button" />
);

function Message() {
  return <div className="message">something great.</div>;
}

function Time() {
  return <span className="time">3h ago</span>;
}

function Author() {
  return (
    <span className="author">
      <span className="name">Jasmine Zhuang</span>
      <span className="handle">@Jasmine-Zhuang</span>
    </span>
  );
}

function Avatar() {
  return (
    <img
      alt="avatar"
      className="avatar"
      src="https://www.gravatar.com/avatar/nothing"
    ></img>
  );
}

ReactDOM.render(<Tweet />, document.querySelector("#root"));
