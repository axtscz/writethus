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
                <h4>{capitalize(this.props.character.name.toLowerCase())} <span>{this.props.character.gender}</span></h4>
                <p>{this.props.character.culture}</p>
                <p>{this.props.character.plot.plotline}</p>
            </div>
        );
    }
}
