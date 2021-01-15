import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import Login from './Login'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import Question from './Question'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {   
    return (
      <Router>
        <LoadingBar />
        <div className='container'>
          <Fragment>
            <div className='container' >
            {this.props.loading === true ? <Route path='/' component={Login} /> :
             <div>
             <Nav />
             <Switch>
             <Route path='/' exact component={Dashboard} />
             <Route path='/questions/:qid' component={Question} />
             <Route path='/add' component={NewQuestion} />
             <Route path='/leaderboard' component={Leaderboard} />
            </Switch>
            </div>
           }
          </div>
          </Fragment> 
        </div>
      </Router>
   )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loggedIn: authedUser !== null,
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App)

