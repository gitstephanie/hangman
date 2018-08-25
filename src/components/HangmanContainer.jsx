import * as React from 'react'
import '../styling/Hangmancontainer.css';
import Hangman from './Hangman'
import GuessLetterList from './GuessLetterList'
import NewGameButton from './NewGameButton'
import PlayingField from './PlayingField'
import WrongGuessCounter from './WrongGuessCounter'
import { connect } from 'react-redux'
import { newGame, makeGuess } from '../actions/game'
import {isWinner, gameFinished} from '../lib/game'

class HangmanContainer extends React.Component {

  componentDidMount() {
    return this.props.newGame()
  };
  componentDidUpdate() {
    if (this.props.word && this.props.guesses) {
      if (isWinner(this.props.word, this.props.guesses)) {
        window.alert('Winner winner chicken dinner')
      }
      if (gameFinished(this.props.word, this.props.guesses)) {
        window.alert('Game finished!')
      }
    }
    return true
  }

  render() {
    console.log(this.props.word, this.props.guesses)
    return (
      <div>
        <h1>Hangman</h1>
        <Hangman word={this.props.word} guesses={this.props.guesses}/>
        <PlayingField word={this.props.word} guesses={this.props.guesses}/>
        <p>Wrong guessed letters so far:</p>
        <WrongGuessCounter word={this.props.word} guesses={this.props.guesses}/>
        <p>Click on a letter to make a guess:</p>
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