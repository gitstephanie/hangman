import * as React from 'react'
import Hangman from './Hangman'
//import GuessLetterForm from './GuessLetterForm'
import NewGameButton from './NewGameButton'
import { connect } from 'react-redux'
import { newGame } from '../actions/game'

class HangmanContainer extends React.PureComponent {
  state = {}

  componentDidMount() {
    return this.props.newGame()
  };

  render() {
    return (
      <div>
        <NewGameButton newGame={this.props.newGame}/>
        <Hangman/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    game : state.game
})

export default connect(mapStateToProps, {newGame})(HangmanContainer)