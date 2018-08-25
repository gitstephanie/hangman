import * as React from 'react'

export default class GuessLetterForm extends React.PureComponent {

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.name && this.state.description) {
      this.props.addGuess({
        name: this.state.name,
      })
    }
  }

  render() {
    return (<div>
      <h2>Choose a letter from the alphabet</h2>
      <form onSubmit={this.handleSubmit}>
        <label>
          Letter
          <input type="text" name="letter" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>)
  }
}