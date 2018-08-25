import * as React from 'react'

export default class GuessLetterForm extends React.PureComponent {

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('just submitted')
/*
    if (this.state.name && this.state.description) {
      this.props.addPizza({
        name: this.state.name,
        description: this.state.description,
        ingredients: []
      })
    }
*/
}

  render() {
    return (
    <div>
      <h2>Choose a letter from the alphabet</h2>
      <form onSubmit={this.handleSubmit}>
        <label>
          Letter
          <input type="text" guess="letter" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>)
  }
}