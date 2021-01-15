import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleNewQuestion} from '../actions/shared'

class NewQuestion extends Component {

  state = {
    optionOneText: '',
    optioneTwoText: '',
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState(() => ({[e.target.name]: e.target.value}))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    const {optionOneText, optionTwoText} = this.state;
    if(optionOneText.trim() === '' || optionTwoText.trim() === '' ) {
      alert('Please enter option one and option two')
      return;
    }
    this.props.dispatch(handleNewQuestion(this.state));
    this.setState = {
      optionOneText: '',
      optioneTwoText: '',
    }

    this.props.history.push('/');
  }

  render () {
    return (
      <div className='newquestion'>
        <h2 className='title center'>Create New Question</h2>
        <h3 className='center'>Would you rather?</h3>
        <input type='text' name='optionOneText' onChange={this.handleChange} placeholder='Enter option one here' className='center-block questioninput'></input>
        <h3 className='center'>or</h3>
        <input type='text' name='optionTwoText' onChange={this.handleChange} placeholder='Enter option two here' className='center-block questioninput' ></input>
        <br></br>
        <button className='greenbutton center-block ' onClick={this.handleSubmit} >Submit</button>
        <br></br>
      </div>
    )
  }
}

export default connect()(NewQuestion)