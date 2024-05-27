import axios from 'axios'
const API_LINK = process.env.REACT_APP_API_URL ;

const API = axios.create({ baseURL: API_LINK })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('Profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

export const logIn = (authdata) => API.post('/user/login', authdata);

export const signUp = (authdata) => API.post('/user/signup', authdata);

export const postQuestion = (questiondata) => API.post('/questions/ask', questiondata, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

export const getAllQuestions = () =>API.get('/questions/get')

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId) => API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered, userId })

export const deleteQuestion = (id) => {
    API.delete(`/questions/delete/${id}`)
}

export const deleteAns = (id, answerId, noOfAnswers) => {
    API.patch(`/answer/delete/${id}`,
        { answerId, noOfAnswers });
}

export const getAllUsers = () => API.get("/user/getAllUsers");

export const updateProfile = (id, updateData) =>
  API.patch(`/user/update/${id}`, updateData);

export const voteQuestion = (id, value, userId) => {
    API.patch(`/questions/vote/${id}`, { value, userId });
}

export const sendPassword = (email) => {
    API.put('/user/account-recovery', email);
}
export const userAuthentication = (otpData) => {
    API.post('/user/authenticate', otpData);
}