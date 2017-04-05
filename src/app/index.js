import React, {Component, PropTypes} from 'react';
import Character from "./Character";

export default class App extends Component {
    render() {
        const {characters} = this.props;

        return (
            <div className="container">
                <h1>WriteThus</h1>
                <div className="item-container">
                    <h2>Characters</h2>
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
