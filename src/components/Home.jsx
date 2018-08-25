import * as React from 'react'
import {Link} from 'react-router-dom'


//export default class AddAlbumForm extends React.PureComponent {
//export default function Home(props) {
export default class Home extends React.PureComponent {

    handleClick = (e) => {
        return this.state.newGame(e)
    }

render() {
    return (
            <div>
                <h1>Welcome!</h1>
                <Link to={`/hangman`} onClick={event => this.handleClick(event)} >Let's play hangman!</Link>
            </div>
        )
    }
}