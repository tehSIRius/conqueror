import React from 'react';
import Link from 'next/link';

const linkStyle = {
    marginRight: 15,
};

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link href="/">
                    <a style={linkStyle} title="Homepage">Conqueror</a>
                </Link>
                <Link href="/about">
                    <a style={linkStyle} title="About Page">About</a>
                </Link>
            </div>
        );
    }
}

export default Header;