import React from 'react';
import './page-not-found.styles.scss'
import { Link, Redirect } from 'react-router-dom';

class PageNotFound extends React.Component {

    state = {
        time: this.props.countdown
    }

    componentDidMount() {
        this.id = setInterval(() => {
            this.setState({ time: this.state.time - 1 });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.id)
    }

    render() {
        return (
            this.state.time > 0 ?
                (<div className='page-not-found'>
                    <h1>Oops Seems Like Your'e Lostt!</h1>
                    <h4>Returning to Homepage in {this.state.time}</h4>
                    <h3><Link to="/" className='blue-link' >Go back now</Link></h3>
                </div>)
                :
                (<Redirect to="/" />)
        );
    }
}

export default PageNotFound;