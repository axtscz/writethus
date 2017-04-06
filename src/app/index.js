import React, {Component, PropTypes} from "react";
import Character from "./Components/Character";
import Location from "./Components/Location";
import Genre from "./Components/Genre";

export default class App extends Component {
    render() {
        const {characters} = this.props;
        const {seed} = this.props;
        const {location} = this.props;
        const {genre} = this.props;
        const url = "https://writeth.us/" + this.props.seed;
        return (
            <div>
                <h1>WriteThus</h1>
                <p>Write a story using the following components</p>
                <a href="/">New</a>

                <div className="row">
                    <div className="four columns">
                        <h3>Location</h3>
                        <Location location={location}/>
                    </div>
                    <div className="four columns">
                        <h3>Characters</h3>
                        {this.props.characters.map((character, index) => {
                            return <Character character={character} key={index}/>
                        })}
                    </div>
                    <div className="four columns">
                        <h3>Genre</h3>
                        <Genre genre={genre}/>
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
    seed: PropTypes.string,
    url: PropTypes.string
};
