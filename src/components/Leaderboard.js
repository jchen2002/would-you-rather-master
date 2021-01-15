import React, { Component } from 'react'
import { connect } from 'react-redux';

class Leaderboard extends Component {

  render () {
    const {userScores} = this.props;
    return (
        <div style={{width:'40%', margin:'0 auto'}} >
          {userScores.map((userScore) => ( 
              <div className='vote' key={userScore.id}>
                <h2 className='title'>{userScore.name}</h2>
                <img className="avatar" src={userScore.avatarURL} alt={`${userScore.name}'s avatar`} />
                <div className="detail">
                 <h4>Total score: {userScore.questionsTotal + userScore.answersTotal
}</h4>
               <p className="option">Questions created:{userScore.questionsTotal}</p>
               <p className="option">Questions answered:{userScore.answersTotal}</p>
               </div>
              </div>           
           
          ))}          
        </div>
    );
  }
}

function mapStateToProps ({users}) {
  const userIds = Object.keys(users);
  
  const userScores = userIds.map((id) => {
    const userInfo = users[id];
    
    return {
      id:userInfo.id,
      name:userInfo.name,
      avatarURL:userInfo.avatarURL,
      questionsTotal:userInfo.questions.length,
      answersTotal:Object.keys(userInfo.answers).length,
      score:userInfo.questions.length + Object.keys(userInfo.answers).length,
    }
  });
  
  return {
    userScores: userScores.sort((a,b) => b.score - a.score),
  }
}

export default connect(mapStateToProps)(Leaderboard)