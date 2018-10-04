import React from 'react';

class Title extends React.Component {
    render () {
        return (
            <h3>{ this.props.text }</h3>
        )
    }
}

export default Title