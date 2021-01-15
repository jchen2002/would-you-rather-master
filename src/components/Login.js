import React, { Component } from 'react'
import { Dropdown, Button, Form, Grid, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  state = {
    loginUser: null,
    toHome: false,
  }

  handleUserSelection = (event, {value}) => {
    this.setState({
      loginUser: value,
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()

    const {loginUser} = this.state
    const {dispatch} = this.props

    dispatch(setAuthedUser(loginUser))

    this.setState({
      toHome:loginUser ? true:false,
    })
  }

  render () {
    const {toHome} = this.state;
    if(toHome === true) {
      return (
          <Redirect to='/' />
      )
    }

    const { usersIds, users } = this.props;
    const usersOptions = usersIds.map((id) => ({
      key: id,
      text: id,
      value: id,
      image: { avatar: true, src: users[id].avatarURL }
    }))
    
    return (
      <div>
      <p/>
     <Grid textAlign='center'>
       <Grid.Column width='6'>
       <Header as='h2' color='teal' textAlign='center'>Would You Rather Login</Header>
       <Form onSubmit={this.handleSubmit}>
        <Dropdown placeholder='Select user' fluid selection options={usersOptions} onChange={this.handleUserSelection}/>
        <p/>
        <Button content='Login' type='submit'/>
      </Form>
      </Grid.Column>
     </Grid>
    </div>
    );
  }
}

function mapStateToProps ({ users }) {
  return {
    users: users,
    usersIds: Object.keys(users),
  }
}

export default connect(mapStateToProps)(Login)