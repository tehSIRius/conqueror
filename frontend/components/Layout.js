import React from 'react';
import Header from './Header/Header';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};


class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={layoutStyle}>
                <Header />
                {this.props.children}
            </div>
        );
    }
}

export default Layout;