/**
 * Created by Alex Cruz on 4/5/2017.
 */
import React, {Component, PropTypes} from 'react';

export default class Character extends React.Component {
    render() {
        function capitalize(s)
        {
            return s[0].toUpperCase() + s.slice(1);
        }
        return (
            <div>
                <h4>{capitalize(this.props.character.name.toLowerCase())} </h4>
                <h6>{this.props.character.occupation.occupation}</h6>
            </div>
        );
    }
}
