import {connect} from 'react-redux'
import {React, Component} from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/helpers'

class QuestionPoll extends Component {
  
  render () {
    const {avatarURL, name, optionOne, optionTwo, id, timestamp} = this.props;
      
    return (
       <div className='vote'>
        <h2 className='title'>{name} asked:</h2>
        <h2 className='center' >Would you rather?</h2>
        <h4 className='center' >{formatDate(timestamp)}</h4>
        <img className="avatar" src={avatarURL} alt={`${name}'s avatar`} />
        <div className='detail'>
          <p>{optionOne}</p>
           <h3>or</h3>
          <p>{optionTwo}</p>
           <Link to={`/questions/${id}`} style={{ width: "100%" }}>
           <button className='center'>View Poll</button>
           </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps({users, questions}, {id}) {
  const question = questions[id];
  const {avatarURL, name} = users[question.author];
  const optionOne = question.optionOne.text;
  const optionTwo = question.optionTwo.text;
  const timestamp = question.timestamp;

  return {avatarURL, name, optionOne, optionTwo, id, timestamp};
}

export default connect(mapStateToProps)(QuestionPoll);