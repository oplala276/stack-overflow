import * as api from '../api';

export const askQuestion = (questiondata, navigate) => async (dispatch) => {
    try {
        const { data } = await api.postQuestion(questiondata);
        dispatch({ type: 'POST_QUESTION', payload: data })
        dispatch(fetchAllQuestions())
        navigate('/');
    } catch (error) {
        console.log(error)
    }
}

export const fetchAllQuestions = () => async (dispatch) => {
    try {
        console.log("fetched data")
        const { data } = await api.getAllQuestions()
        dispatch({type:'FETCH_ALL_QUESTIONS', payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const postAnswer = (answerdata) => async(dispatch) => {
    try {
        const { id, noOfAnswers, answerBody, userAnswered, userId } = answerdata;
        const { data } = await api.postAnswer(id, noOfAnswers, answerBody, userAnswered, userId);
        dispatch({ type: 'POST_ANSWER', payload: data });
        dispatch(fetchAllQuestions());
    } catch (error) {
        console.log(error)
    }
}

export const deleteQuestion = (id, navigate) => async(dispatch) => {
    try {
        await api.deleteQuestion(id);
        dispatch(fetchAllQuestions());
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

export const deleteAns = (id, answerId, noOfAnswers) => async(dispatch) => {
    try {
        await api.deleteAns(id, answerId, noOfAnswers);
        console.log("fetched data")
        dispatch(fetchAllQuestions());
    } catch (error) {
        console.log(error)
    }
}