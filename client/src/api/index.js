import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

export const logIn = (authdata) => API.post('/user/login', authdata);

export const signUp = (authdata) => API.post('/user/signup', authdata);

export const postQuestion = (questiondata) => API.post('/questions/Ask', questiondata);

export const getAllQuestions = () =>API.get('/questions/get')

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered) => API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered })

export const deleteQuestion = (id) => {
    API.delete(`/questions/delete/${id}`)
}