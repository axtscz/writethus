import React, {Component, PropTypes} from "react";
import Character from "./Components/Character";
import Location from "./Components/Location";
import Genre from "./Components/Genre";

export default class App extends Component {
    render() {
        const {characters} = this.props;
        const {url} = this.props;
        const {location} = this.props;
        const {genre} = this.props;
        return (
            <div>
                <h1>WriteThus</h1>
                <p>Write a story using the following components</p>
                <a href="/">New</a>

                <div className="item-container">
                    <div className="item">
                        <h3>Characters</h3>
                        {this.props.characters.map((character, index) => {
                            return <Character character={character} key={index}/>
                        })}
                    </div>
                    <div className="item">
                        <h3>Location</h3>
                        <div className="item-container">
                            <Location location={location}/>
                        </div>
                    </div>
                    <div className="item">
                        <h3>Genre</h3>
                        <div className="item-container">
                            <Genre genre={genre}/>
                        </div>
                    </div>
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
    genre: PropTypes.string,
    url: PropTypes.string
};
