import * as React from 'react'
import Home from './Home'
import { connect } from 'react-redux'
import { newGame, makeGuess } from '../actions/game'

class HomeContainer extends React.PureComponent {
  componentDidMount() {
    
  }

  render() {
    return <Home/>
}

}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps, {newGame, makeGuess})(HomeContainer)