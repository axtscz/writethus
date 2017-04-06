import React, {Component, PropTypes} from "react";
import Character from "./Character";
import Location from "./Location";

export default class App extends Component {
    render() {
        const {characters} = this.props;
        const {url} = this.props;
        const {location} = this.props;
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
                <h3>Location</h3>
                <div className="item-container">
                    <Location location={location}/>
                </div>
                <p>Share this prompt</p>
                <input type="text" value={url} disabled/>
            </div>
        );
    }
}

App.propTypes = {
    characters: PropTypes.array,
    location: PropTypes.string,
    url: PropTypes.string
};
