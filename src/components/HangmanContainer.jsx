import * as React from 'react'
import Hangman from './Hangman'
import { connect } from 'react-redux'
import { newGame, makeGuess } from '../actions/game'
import GuessLetterFormContainer from './GuessLetterFormContainer';

class HangmanContainer extends React.PureComponent {
  componentDidMount() {
    return this.props.newGame()
  }

  render() {
    return (
    <div>
      <Hangman/>
      <GuessLetterFormContainer/>
    </div>
    )
}

}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps, {newGame, makeGuess})(HangmanContainer)