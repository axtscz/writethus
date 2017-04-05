/**
 * Created by Alex Cruz on 4/5/2017.
 */
import React, {Component, PropTypes} from 'react';

export default class Character extends React.Component {
    render() {
        return (
            <div className="character">
                <h4>{this.props.character.name}</h4>
                <p>{this.props.character.culture}</p>
            </div>
        );
    }
}
