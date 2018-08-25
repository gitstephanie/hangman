import * as React from 'react'
import GuessLetterForm from './GuessLetterForm'
import { connect } from 'react-redux'

class GuessLetterFormContainer extends React.Component {

  render() {
    return <GuessLetterForm makeGuess={this.makeGuess} />
  }
}

export default connect()(GuessLetterFormContainer)