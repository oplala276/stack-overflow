import React from "react";
import { useParams, Link } from "react-router-dom";
import upVoteImg from "../../assets/sort-up.svg";
import downVoteImg from "../../assets/sort-down.svg";
import Avatar from "../../components/avatar/Avatar";
import DisplayAnswers from "./DisplayAnswers";
import "./Questions.css";
import { useSelector } from "react-redux";

const Questiondetails = () => {
  const { id } = useParams();

  const questionList = useSelector(state => state.questionReducer)
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
                          <button type="button">Share</button>
                          <button type="button">delete</button>
                        </div>

                        <div>
                          <p>asked {question.askedOn}</p>
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
                    <DisplayAnswers key={question._id} question={question} />
                  </section>
                )}
                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form>
                    {" "}
                    <textarea name="" id="" cols="30" rows="10"></textarea>
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
