import React, { useState } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import copy from "copy-to-clipboard";

import upVoteImg from "../../assets/sort-up.svg";
import downVoteImg from "../../assets/sort-down.svg";
import Avatar from "../../components/avatar/Avatar";
import DisplayAnswers from "./DisplayAnswers";
import "./Questions.css";
import { postAnswer, deleteQuestion } from "../../actions/question";

const Questiondetails = () => {
  const { id } = useParams();

  const questionList = useSelector((state) => state.questionReducer);
  const User = useSelector((state) => state.currentUserReducer);
  const dispatch = useDispatch();
  // console.log(questionList)

  // var questionList = [
  //   {
  //     _id: "1",
  //     upVotes: 3,
  //     downVotes: 0,
  //     noOfAnswers: 2,
  //     questionTitle: "What is a Function?",
  //     questionBody: "it meant to be",
  //     questionTags: ["javascript", "R", "python"],
  //     userPosted: "manav",
  //     askedOn: "jan 1",
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "kumar",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //   },
  //   {
  //     _id: "3",
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 2,
  //     questionTitle: "What is a Function?",
  //     questionBody: "it meant to be",
  //     questionTags: ["javascript", "R", "python"],
  //     userPosted: "manav",
  //     askedOn: "jan 1",
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "kumar",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //   },
  //   {
  //     _id: "2",
  //     upVotes: 2,
  //     downVotes: 2,
  //     noOfAnswers: 2,
  //     questionTitle: "What is a Function?",
  //     questionBody: "it meant to be",
  //     questionTags: ["javascript", "R", "python"],
  //     userPosted: "manav",
  //     askedOn: "jan 1",
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "kumar",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //   },
  // ];
  const [Answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const handlePosAns = (e, answerLength) => {
    e.preventDefault();
    if (User === null) {
      alert("Login or Signup to answer a question.");
      navigate("/Auth");
    } else {
      if (Answer === "") {
        alert("Enter an answer before submitting.");
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswers: answerLength + 1,
            answerBody: Answer,
            userAnswered: User.result.name,
          })
        );
        setAnswer("");
      }
    }
  };

  const location = useLocation();
  const url = "http://localhost:3000";
  const handleShare = () => {
    copy(url + location.pathname);
    alert("Copied URL: \n" + url + location.pathname);
  };

  const handledelete = () => {
    dispatch(deleteQuestion(id, navigate));
  };

  return (
    <div className="question-details-page">
      {questionList.data === null ? (
        <h1>No question is there...</h1>
      ) : (
        <>
          {questionList.data
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id}>
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img
                        src={upVoteImg}
                        alt="upvote"
                        width="18"
                        className="votes-icon"
                      />
                      <p>{question.upVote - question.downVote}</p>
                      <img
                        src={downVoteImg}
                        alt="downvote"
                        width="18"
                        className="votes-icon"
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-actions-user">
                        <div>
                          <button type="button" onClick={handleShare}>
                            Share
                          </button>
                          {User?.result?._id === question?.userId && (
                            <button type="button" onClick={handledelete}>
                              delete
                            </button>
                          )}
                        </div>

                        <div>
                          <p>asked {moment(question.askedOn).fromNow()}</p>
                          <Link
                            to={`/User/${question.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avatar backgroundColor="orange" px="8px" py="5px">
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswers !== 0 && (
                  <section>
                    <h2>{question.noOfAnswers} answers</h2>
                    <DisplayAnswers
                      key={question._id}
                      question={question}
                      handleShare={handleShare}
                    />
                  </section>
                )}
                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form
                    onSubmit={(e) => {
                      handlePosAns(e, question.answer.length);
                    }}
                  >
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      value={Answer}
                      onChange={(e) => setAnswer(e.target.value)}
                    ></textarea>
                    <input
                      type="Submit"
                      className="post-ans-btn"
                      value="Post your answer"
                    />
                  </form>
                  <p>
                    Browse other Question tagged
                    {question.questionTags.map((tag) => (
                      <Link to="/Tags" key={tag} className="ans-tags">
                        {tag}
                      </Link>
                    ))}
                    <Link
                      to="/Askquestion"
                      style={{ textDecoration: "none", color: "#009dff" }}
                    >
                      ask your own question
                    </Link>
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Questiondetails;
