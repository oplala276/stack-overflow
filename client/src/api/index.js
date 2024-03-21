import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

export const logIn = (authdata) => API.post('/user/login', authdata);

export const signUp = (authdata) => API.post('/user/signup', authdata);

export const postQuestion = (questiondata) => API.post('/questions/Ask', questiondata);

export const getAllQuestions = () =>API.get('/questions/get')

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId) => API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered, userId })

export const deleteQuestion = (id) => {
    API.delete(`/questions/delete/${id}`)
}

export const deleteAns = (id, answerId, noOfAnswers) => {
    API.patch(`/answer/delete/${id}`,
        { answerId, noOfAnswers });
}