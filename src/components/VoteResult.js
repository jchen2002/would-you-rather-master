import {Component} from 'react';
import React from 'react'

class VoteResult extends Component {

  render() {
    const {poll} = this.props;
    const {name, avatarURL, optionOne, optionTwo, totalVoted} = poll;
    const optionOneVoted = Math.trunc((optionOne.count / totalVoted) * 100);
    const optionTwoVoted = Math.trunc((optionTwo.count / totalVoted) * 100);

    const votedOnePercent = optionOneVoted + '%';
    const votedTwoPercent = optionTwoVoted + '%';
    return (
       <div className='voteresult'>
          <h2 className='title'>Asked by {name}:</h2>
          <h2 className='center'>Vote Results</h2>
          <img className="avatar" src={avatarURL} alt={`${name}'s avatar`} />
          <div className='detail'>
           <h4>{optionOne.text}</h4>
           {optionOne.hasVoted && <label className='labelright'>you voted</label>}
           <progress value={optionOneVoted} max="100" data-label={votedOnePercent} ></progress>
           <div><label>{optionOne.count} out of {totalVoted} votes</label></div>
          </div>
          <p />
          <div className='detail center-block ' >
            <h4>{optionTwo.text}</h4>
            {optionTwo.hasVoted && <label className='labelright'>you voted</label>}
            <progress value={optionTwoVoted} max="100" className='progressbar' data-label={votedTwoPercent} ></progress>
            <div><label>{optionTwo.count} out of {totalVoted} votes</label></div>
          </div>
        </div>
        
    )
 }
}

export default VoteResult;