import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('Profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

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

export const voteQuestion = (id, value, userId) => {
    API.patch(`/questions/vote/${id}`, {value, userId})
}