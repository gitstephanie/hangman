import * as React from 'react'
import GuessLetterForm from './GuessLetterForm'
import { connect } from 'react-redux'

class GuessLetterFormContainer extends React.Component {
  addPizza = (pizza) => {
    this.props.dispatch({
      type: 'ADD_PIZZA',
      payload: {
        id: Math.ceil(Math.random()*10000),
        ...pizza
      } 
    })
  }

  render() {
    return <GuessLetterForm addPizza={this.addPizza} />
  }
}

export default connect()(GuessLetterFormContainer)