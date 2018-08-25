import * as React from 'react'
import Hangman from './Hangman'
import GuessLetterList from './GuessLetterList'
import NewGameButton from './NewGameButton'
import { connect } from 'react-redux'
import { newGame, makeGuess } from '../actions/game'

class HangmanContainer extends React.PureComponent {

  componentDidMount() {
    return this.props.newGame()
  };

  render() {
    return (
      <div>
        <NewGameButton newGame={this.props.newGame}/>
        <Hangman/>
        <GuessLetterList makeGuess={this.props.makeGuess}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    game : state.game
})

export default connect(mapStateToProps, {newGame,makeGuess})(HangmanContainer)