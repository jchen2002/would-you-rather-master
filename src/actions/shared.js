import { getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api'
import {showLoading, hideLoading} from 'react-redux-loading'

import {
  receiveUsers,
  addAnswerToUser,
  addQuestionToUser
} from './users';
import {
  receiveQuestions,
  addAnswerToQuestion,
  addQuestionToQuestions
} from './questions';

export function handleInitialData () {
  
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
      })
  }
}

export function handleNewQuestion({optionOneText, optionTwoText}) {
  return (dispatch, getState) => {
    const {authedUser} = getState()
    const info = {
      optionOneText,
      optionTwoText,
      author: authedUser
    }

    dispatch(showLoading());

    return saveQuestion(info).then((question) =>{
      const qid = question.id;
      dispatch(addQuestionToUser({authedUser, qid}));
      dispatch(addQuestionToQuestions({question}));
      dispatch(hideLoading);
    } )
  }
}

export function handleVote (info) {
  return (dispatch) => {
    return saveQuestionAnswer(info)
    .catch((e) => {
      alert('The was an error subming vote. Try again.')
    })
    .then(() => {
      //update users
      dispatch(addAnswerToUser(info))
      //update questions
      dispatch(addAnswerToQuestion(info))
    })
  }
}
