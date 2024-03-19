import React from "react";
// import Questiondetails from './Questiondetails'
// import './Questions.css'
import { Link } from "react-router-dom";
import moment from "moment";
import Avatar from "../../components/avatar/Avatar";

const DisplayAnswers = ({ question, handleShare }) => {
    return (
        <div>
      {question.answer.map((ans) => (
        <div className="display-ans" key={ans._id}>
          <p>{ans.answerBody}</p>
          <div className="question-actions-user">
            <div>
              <button type="button" onClick={handleShare}>Share</button>
              <button type="button">delete</button>
            </div>

            <div>
              <p>answered {moment(ans.answeredOn).fromNow()}</p>
              <Link
                to={`/User/${question.userId}`}
                className="user-link"
                style={{ color: "#0086d8" }}
              >
                <Avatar
                  backgroundColor="lightgreen"
                  px="8px"
                  py="5px"
                  borderRadius="4px"
                >
                  {ans.userAnswered.charAt(0).toUpperCase()}
                </Avatar>
                <div>{ans.userAnswered}</div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswers;