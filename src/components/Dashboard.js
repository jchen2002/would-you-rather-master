import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tab } from 'semantic-ui-react'
import QuestionPoll from './QuestionPoll'

class Dashboard extends Component {

  render () {
    const {unansweredIds, answeredIds} = this.props;

    const panes = [
      { menuItem: 'UnAnswered Questions', render: () => <Tab.Pane> {unansweredIds.map((id) => (
        <li key={id}>
            <QuestionPoll id={id} answered='no'/>
        </li>
        ))}
      </Tab.Pane>},

      { menuItem: 'Answered Questions', render: () => <Tab.Pane> {answeredIds.map((id) => (
        <li key={id}>
            <QuestionPoll id={id} answered='yes'/>
        </li>
        ))} </Tab.Pane>},
    ]

    return (
     <div>
        <Tab panes={panes} className='questiontab'/>
      </div> 
    );
  }
}

function mapStateToProps({authedUser, users, questions}) {

  const questionIds = Object.keys(questions);
  const answers = users[authedUser].answers;
  //const answeredIds = Object.keys(users[authedUser].answers);

  //const answered = !users[authedUser] ? [] : Object.keys(users[authedUser].answers)
  //const unAnswered = questionIds.filter((qid) => (
  //       !answered.includes(qid)
   //    ))

  questionIds.sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  return {
    answeredIds: questionIds.filter((id) => answers.hasOwnProperty(id)),
    unansweredIds: questionIds.filter((id) => !answers.hasOwnProperty(id))
  };
}

export default connect(mapStateToProps)(Dashboard);
