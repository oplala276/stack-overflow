import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./HomeMainBar.css";
import QuestionList from "./QuestionList";

const HomeMainBar = () => {
  const questionList = useSelector((state) => state.questionReducer);
  // console.log(questionList)

  // const questionList = [
  //   {
  //   id: 1,
  //   votes: 1,
  //   noOfAnswers: 0,
  //   questionTitle: "what is a function?",
  //   questionBody: ["javascript", "R", "python"],
  //   userPosted: "manav",
  //   askedOn:"jan 1"
  //   },
  //   {
  //   id: 2,
  //   votes: 0,
  //   noOfAnswers: 0,
  //   questionTitle: "what is a function?",
  //   questionBody: ["javascript", "R", "python"],
  //   userPosted: "manav",
  //   askedOn:"jan 1"
  // },{
  //   id: 3,
  //   votes: 0,
  //   noOfAnswers: 0,
  //   questionTitle: "what is a function?",
  //   questionBody: ["javascript", "R", "python"],
  //   userPosted: "manav",
  //   askedOn:"jan 1"
  //   }]
  const user = 1;

  const location = useLocation();
  const navigate = useNavigate();
  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/Askquestions");
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
          Ask Questions
        </button>
      </div>
      <div className="questions">
        {questionList.data === null ? (
        //  {questionList === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {/* <p>{questionList.length} questions</p>
            <QuestionList questionList={questionList} /> */}
            <p>{questionList.data.length} questions</p>
            <QuestionList questionList={questionList.data} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainBar;
