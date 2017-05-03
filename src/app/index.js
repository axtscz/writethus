import React, {Component, PropTypes} from "react";
import Character from "./Components/Character";
import Location from "./Components/Location";
import Genre from "./Components/Genre";
import {FormattedNumber, IntlProvider} from "react-intl";

export default class App extends Component {
    render() {
        const {characters} = this.props;
        const {seed} = this.props;
        const {location} = this.props;
        const {genre} = this.props;
        const url = "https://writeth.us/" + this.props.seed;
        const {numCombinations} = this.props;
        return (
            <IntlProvider locale="en">
                <div>
                    <h1>WriteThus</h1>
                    <p>Write thus (or don't, it's just a suggestion): </p>
                    <a className="button" href="/">New</a>

                    <div className="row">
                        <div className="four columns">
                            <h3><i className="fa fa-globe" aria-hidden="true"></i> Location</h3>
                            <Location location={location}/>
                        </div>
                        <div className="four columns">
                            <h3><i className="fa fa-user" aria-hidden="true"></i> Characters</h3>
                            {this.props.characters.map((character, index) => {
                                return <Character character={character} key={index}/>
                            })}
                        </div>
                        <div className="four columns">
                            <h3><i className="fa fa-book" aria-hidden="true"></i> Genre</h3>
                            <Genre genre={genre}/>
                        </div>
                    </div>

                    <p>Share this prompt</p>
                    <input type="text" value={url} disabled/>
                </div>
            </IntlProvider>
        );
    }
}

App.propTypes = {
    characters: PropTypes.array,
    location: PropTypes.string,
    genre: PropTypes.string,
    seed: PropTypes.string,
    combinations: PropTypes.string,
    url: PropTypes.string
};
