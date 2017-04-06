import React, {Component, PropTypes} from 'react';
import Character from "./Character";

export default class App extends Component {
    render() {
        const {characters} = this.props;

        return (
            <div>
                <h1>WriteThus</h1>
                <p>Write a story using the following components</p>
                <a href="/">New</a>
                <h3>Characters</h3>
                <div className="item-container">
                    {this.props.characters.map((character, index) => {
                        return <Character character={character} key={index}/>
                    })}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    characters: PropTypes.array
};
