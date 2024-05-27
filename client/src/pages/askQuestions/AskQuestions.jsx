import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { askQuestion } from "../../actions/question";
import { userAuthentication } from "../../actions/question";
import "./AskQuestions.css";

const AskQuestions = () => {
  const [questionTitle, setQuestionTitle] = useState("")
  const [questionBody, setQuestionBody] = useState("")
  const [questionTags, setQuestionTags] = useState("")
  const [otp, setOtp] = useState('')
  const [userOTP, setUserOTP] = useState(null)
  const [videoFile, setVideoFile] = useState(null)
  const [receiveOTP, setReceiveOTP] = useState(false)
  const [authenticate, setAuthenticate] = useState(false)
  const dispatch = useDispatch()
  const User = useSelector((state) => (state.currentUserReducer))
  
  const navigate = useNavigate()
  
  const uploadFile = async () => {  
    const data = new FormData();
    data.append("file", videoFile);
    data.append("upload_preset", 'video_preset');
    
    try {
      let CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
      let api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/video/upload`;

      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      return secure_url;
    } catch (error) {
      console.log(error);
    }
  }
  const generateOTP = () => {
    return Math.floor(1000 + Math.random() * 9000);
  }

  const sendOTP = async (e) => {
    e.preventDefault();
    if (User) {
      if (!authenticate) {
        const userOTP = generateOTP()
        setUserOTP(userOTP);
        try {
          dispatch(userAuthentication({ email: User.result.email, userOTP }));
          alert(`OTP sent on ${User.result.email}.` )
          setTimeout(() => {
            setUserOTP(null)
          }, 300000)
          setReceiveOTP(true);
        } catch (error) {
          console.log(error);
          alert("Not athenticated")
        } 
      }
    }
  }

  const validateOTP = (e) => {
    e.preventDefault();
    if (parseInt(otp) === userOTP) {
      setAuthenticate(true)
    } else {
      alert("Wrong OTP, try again.")
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (User) {
      if (questionTitle && questionBody && questionTags) {
        const videoFile = await uploadFile()
        dispatch(
          askQuestion(
            {
              questionTitle,
              questionBody,
              questionTags,
              userPosted: User.result.name,
              userId: User.result._id,
              videoFile
            },
            navigate("/")
          )
        );
      } else alert("Please enter all the fields");
    } else {
      alert("Login to ask question");
      navigate("/Auth");
    } 
  };
  
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      setQuestionBody(questionBody + "\n")
    }
  }

  
  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (authenticate) {
      if (file) {
        if (file.size > 50 * 1024 * 1024) {
          alert("File size should be less than 50MB");
          setVideoFile(null);
          e.target.value = null;
          return;
        }
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.onloadedmetadata = () => {
          window.URL.revokeObjectURL(video.src);
          if (video.duration > 120) {
            alert("Video duration should be less than 2 minutes");
            e.target.value = null;
            setVideoFile(null);
          } else {
            setVideoFile(file);
          }
          const currentHour = new Date().getHours();
          if (currentHour < 14 || currentHour > 19) {
            alert('You can upload videos between 2 PM and 7 PM');
            e.target.value = null
          }
        };
        video.src = URL.createObjectURL(file);
      } 
    } else {
      alert('Please authenicate via OTP.')
    }
  };

    return (
    <div className='ask-question'>
        <div className="ask-ques-container">
          <h1>Ask a public Question</h1>
              <form>
                <div className="ask-form-container">
                  <label htmlFor="ask-ques-title">
                      <h4>Title</h4>
                      <p>Be specific and imagine you’re asking a question to another person</p>
                      <input type="text" id='ask-ques-title' onChange={(e)=>{setQuestionTitle(e.target.value)}} placeholder='e.g Is there an R function for finding the index of an element in a vector?'/>
                  </label>
                  <label htmlFor="ask-ques-body">
                      <h4>Body</h4>
                <p>Include all the information someone would need to answer your question</p>
                      <textarea type="text" id='ask-ques-body' onChange={(e)=>{setQuestionBody(e.target.value)}}cols="30" rows="10" onKeyPress={handleEnter}></textarea>
                  </label>
                  <label htmlFor="ask-ques-tags">
                      <h4>Tags</h4>
                      <p>Add up to 5 tags to describe what your question is about</p>
                      <input type="text" id='ask-ques-tags' onChange={(e)=>{setQuestionTags(e.target.value.replace(/\s+/g, ' ').trim().split(' '))}}placeholder='e.g. (xml typescript wordpress)'/>
              </label>
              <label htmlFor="ask-ques-video">
              <h4>Video</h4>
                <p>Upload a video (less than 2 minutes and 50MB)</p>
                <div style={{ display:'flex'}}>
                  {
                    !receiveOTP && <button style={{width:'190px', border: 'none', background: '#ffd0d0'}} onClick={sendOTP}>Authenticate</button>
                  }
                  {
                    !authenticate && receiveOTP && <div style={{ width: '190px' }}><input type="text" onChange={(e) => { setOtp(e.target.value) }} placeholder='Enter OTP' />
                    <button style={{width: '190px', border:'none', color: 'white', background:'#009dff'}} onClick={validateOTP}>Verify</button>
                    </div>
                  }
                  {
                    authenticate && <div style={{width:'190px',border: '2px solid green', background: '#c9fbc9'}}><p style={{marginLeft:'33px', marginTop:'7px'}}>Authenticated</p></div>
                  }
              <input
                type="file"
                id='ask-ques-video'
                accept="video/*"
                onChange={handleVideoChange}
              /></div>
                  </label>
            </div>
              <input type='submit' onClick={handleSubmit} value="Review your question" className="review-btn" />
            </form>
        </div>
    </div>
  );
};

export default AskQuestions;
