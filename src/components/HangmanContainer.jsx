import * as React from 'react'
import Hangman from './Hangman'
import GuessLetterList from './GuessLetterList'
import NewGameButton from './NewGameButton'
import PlayingField from './PlayingField'
import WrongGuessCounter from './WrongGuessCounter'
import { connect } from 'react-redux'
import { newGame, makeGuess } from '../actions/game'

class HangmanContainer extends React.PureComponent {

  componentDidMount() {
    return this.props.newGame()
  };

  render() {
    console.log(this.props.word, this.props.guesses)
    return (
      <div>
        <Hangman/>
        <PlayingField word={this.props.word} guesses={this.props.guesses}/>
        <WrongGuessCounter word={this.props.word} guesses={this.props.guesses}/>
        <GuessLetterList makeGuess={this.props.makeGuess}/>
        <NewGameButton newGame={this.props.newGame}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    word : state.game.word,
    guesses : state.game.guesses,
})

export default connect(mapStateToProps, {newGame,makeGuess})(HangmanContainer)