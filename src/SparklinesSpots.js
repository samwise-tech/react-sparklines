import PropTypes from 'prop-types';
import React from 'react';

export default class SparklinesSpots extends React.Component {

    static propTypes = {
        size: PropTypes.number,
        style: PropTypes.object,
        spotColors: PropTypes.object
    };

    static defaultProps = {
        size: 2,
        spotColors: {
            '-1': 'red',
            '0': 'black',
            '1': 'green'
        }
    };

    getDirection(points, index) {
        return points[index - 1] ? Math.sign(points[index - 1].y - points[index].y) : 0;
    }

    render() {
        const { points, size, style, spotColors, indexes = [0, points.length - 1] } = this.props;
        return (
            <g>
                {indexes
                    .filter(i => points[i])
                    .map((index, i) => {
                        return (
                        <circle
                            key={index + ' ' + i}
                            cx={points[index].x}
                            cy={points[index].y}
                            r={size}
                            style={style || { fill: spotColors[this.getDirection(points, index)] }}
                        />
                    )})}
            </g>
        )
    }
}
