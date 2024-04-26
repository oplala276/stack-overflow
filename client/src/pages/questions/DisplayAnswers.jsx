import React from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import Avatar from "../../components/Avatar/Avatar";
import { useSelector, useDispatch } from "react-redux";
import { deleteAns } from "../../actions/question";

const DisplayAnswers = ({ question, handleShare }) => {
  const User = useSelector((state) => state.currentUserReducer);
  const {id} = useParams()

  const dispatch = useDispatch()
  const handledelete = (answerId, noOfAnswers) => {
    dispatch(deleteAns(id, answerId, noOfAnswers-1));
  }

    return (
        <div>
      {question.answer.map((ans) => (
        <div className="display-ans" key={ans._id}>
          <p>{ans.answerBody}</p>
          <div className="question-actions-user">
            <div>
              <button type="button" onClick={handleShare}>Share</button>
                {
                User?.result?._id === ans?.userId &&(
                <button type="button" onClick={()=>handledelete(ans._id, question.noOfAnswers)}>
                  delete
                </button>)}
             
            </div>

            <div>
              <p>answered {moment(ans.answeredOn).fromNow()}</p>
              <Link
                to={`/Users/${ans.userId}`}
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