import {React, Component} from 'react'
import { connect } from 'react-redux';
import { NavLink} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { setAuthedUser } from '../actions/authedUser';

class Nav extends Component {
x
  handleLogout = event => {
    event.preventDefault();
    this.props.dispatch(setAuthedUser(null))
    //this.props.history.push('/');
    //return <Redirect to='/' />
  }

  render() {
    const {loginUser, users} = this.props;
    
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
           </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active'>
              New Question
           </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
             Leadboard
            </NavLink>
          </li>

          <li style={{ width: "250px" }}>
          <span>{loginUser}</span>
            <img
                style={{ position:"absolute", marginTop: "-5px" }}
                src={users[loginUser].avatarURL}
                alt={`Avatar of ${loginUser}`}
                className='ui avatar image'
            />
          </li>
          <li >
            <NavLink to='/' activeClassName='active' onClick={this.handleLogout} >
             Logout
            </NavLink>
          </li>
        </ul>
       <hr/>
      </nav>
    )
  }
}


function mapStateToProps ({ authedUser, users}) {
  return {
    loginUser:authedUser,
    users:users
  }
}

export default connect(mapStateToProps)(Nav)