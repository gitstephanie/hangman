import * as React from 'react'
import Hangman from './Hangman'
import { connect } from 'react-redux'
import { newGame, makeGuess } from '../actions/game'
import GuessLetterFormContainer from './GuessLetterFormContainer';

class HangmanContainer extends React.PureComponent {
  
  handleClick = (event) => {
    return this.props.newGame(event)
  };
  
  componentDidMount() {
    return this.props.newGame()
  };

  render() {
    return (
    <div>
      <Hangman/>
      <GuessLetterFormContainer/>
      <button onClick={event => this.handleClick(event)}>New Game</button>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps, {newGame, makeGuess})(HangmanContainer)