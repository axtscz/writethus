import React, {Component, PropTypes} from 'react';

export default class App extends Component {
    render() {
        const {isMobile} = this.props;
        const {characters} = this.props;

        return (
            <div className="container">
                <h1>WriteThus</h1>
                <div>
                    {this.props.characters.map((character, index) => {
                        return <div key={character.name}>
                            <h4>{character.name}</h4>
                            <p>{character.culture} {character.gender}</p>
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    isMobile: PropTypes.bool.isRequired,
    characters: PropTypes.array
};
