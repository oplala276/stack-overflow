import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const Questions = ({question}) => {
  return (
      <div className='display-question-container'>
          <div className="display-votes-ans">
          <p>{question.upVote.length-question.downVote.length}</p>
              <p>votes</p>
          </div>
          <div className="display-votes-ans">
          <p>{question.noOfAnswers}</p>
              <p>answers</p>
      </div>
      <div className="display-question-details">
        <Link to={`questions/${question._id}`}>{question.questionTitle}</Link>
        <div className="display-tags-time">
          <div className="display-tags">
            {
              question.questionTags.map((tag) => (
                <p key={tag}>{tag}</p>
              ))
            }
          </div>
          <div className='display-time'>
            asked {moment(question.askedOn).fromNow()} {question.userPosted}
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Questions

