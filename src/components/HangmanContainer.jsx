import * as React from 'react'
import Hangman from './Hangman'
import { connect } from 'react-redux'
import { newGame, makeGuess } from '../actions/game'

class HangmanContainer extends React.PureComponent {
  componentDidMount() {
    
  }

  render() {
    return <Hangman/>
}

}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps, {newGame, makeGuess})(HangmanContainer)