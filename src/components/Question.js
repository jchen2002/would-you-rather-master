import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Radio, Form, Button} from 'semantic-ui-react'
import { handleVote } from '../actions/shared';
import VoteResult from './VoteResult';
import { formatQuestion } from '../utils/helpers'
import NotFound from './NotFound'

class Question extends Component {

    state = {
      option : null
    }

    handleChange = (e, {value}) => {
      this.setState({
        option:value}
      );
      //option:optionOne/optionTwo
      //console.log('option:', this.state.option);

    }

    handleVoteSubmit = () => {
      
      const { authedUser, match, dispatch } = this.props;
      const { qid } = match.params;

      if (this.state.option===null) {
        alert ('Please choose your vote')
        return
      }
      
      const answer = this.state.option;
      const info = {
        authedUser,
        qid,
        answer
      }
      
      dispatch(handleVote(info));
    }


    render () {
      const {poll} = this.props;

      if(poll === null) {
        return <NotFound/>
      }

      const {
        name, avatarURL, optionOne, optionTwo
      } = poll
      const unVoted = !optionOne.hasVoted && !optionTwo.hasVoted

      if(unVoted) {
        return (
         <div className='poll'>
           <h2 className='title'>{name} asks:</h2>
           <h2 className='center' >Would you rather?</h2>
             <img className="avatar" src={avatarURL} alt={`${name}'s avatar`} />
          <div className='detail'>
         <Form onSubmit={this.handleVoteSubmit}>
          <Form.Field>
         <Radio
            label={optionOne.text}
            name='radioGroup'
            value='optionOne'
            checked={this.state.option === 'optionOne'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
        <Radio
            label={optionTwo.text}
            name='radioGroup'
            value='optionTwo'
            checked={this.state.option === 'optionTwo'}
            onChange={this.handleChange}
          />
        </Form.Field>
          <Button type='submit' color='teal' fluid>
           Vote Question
         </Button>
         <p></p>
        </Form>
        <p/>
        </div>
          <p/>
        </div>
      ) 
    }  else {
        return (<VoteResult poll={poll}/>)
    }
  }
}

function mapStateToProps ({  questions, authedUser, users }, props) {
  const { qid } = props.match.params
  const question = questions[qid];

  return {
    authedUser,
    poll: question ? formatQuestion(question, users[question.author], authedUser) : null
  }
}

export default connect(mapStateToProps)(Question)