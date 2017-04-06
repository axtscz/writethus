/**
 * Created by Alex Cruz on 4/6/2017.
 */
/**
 * Created by Alex Cruz on 4/6/2017.
 */
import React, {Component, PropTypes} from 'react';

export default class Genre extends React.Component {
    render() {
        return (
            <div className="item">
                <h4>{this.props.genre}</h4>
            </div>
        );
    }
}
