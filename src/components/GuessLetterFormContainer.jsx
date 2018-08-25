import * as React from 'react'
import GuessLetterForm from './GuessLetterForm'
import { connect } from 'react-redux'
import { newGame, makeGuess } from '../actions/game'


class GuessLetterFormContainer extends React.Component {

  render() {
    return <GuessLetterForm/>
  }
}


const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps, {newGame, makeGuess})(GuessLetterFormContainer)