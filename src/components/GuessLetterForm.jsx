import * as React from 'react'

export default class GuessLetterForm extends React.PureComponent {

  

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('just submitted', this.props)
      this.props.makeGuess({
        letter: this.props.letter
      })
  }

  render() {
    return (
    <div>
      <h2>Choose a letter from the alphabet</h2>
      <form onSubmit={this.handleSubmit}>
        <label>
          Letter
          <input type="text" key="letter" name="letter" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
    )
  }
}