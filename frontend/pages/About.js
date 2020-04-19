import React from 'react';
import Layout from '../components/Layout';

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Layout>
                <h1>This is about page</h1>
            </Layout>
        );
    }
}

export default About;