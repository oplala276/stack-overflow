import React from 'react'
import * as api from '../api';

const askQuestion = (questiondata, navigate) => async (dispatch) => {
    try {
        const { data } = await api.postQuestion(questiondata);
        dispatch({ type: 'POST_QUESTION', payload: data }) 
        navigate('/');
    } catch (error) {
        console.log(error)
    }

}

export default askQuestion
