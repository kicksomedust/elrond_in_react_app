import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container'

export default class EnterAddress extends Component {

    state= {
        address: ''
    }

    onChange = (e) => this.setState({ [e.target.name] : e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.enterAddress(this.state.address);
        this.setState({address: ''});
    }

    render() {
        return (
            <Container>
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>

                <input 
                    type="text"
                    name="address" 
                    placeholder="Elrond account address ..." 
                    style={{flex: '10', padding: '5px' }}
                    value={this.state.address} 
                    onChange={this.onChange}/>
                <input 
                    type="submit" 
                    value="Submit" 
                    className="btn" 
                    style={{flex: '1'}} />           
            </form>
            </Container>
        )
    }
}

EnterAddress.propTypes = {
    enterAddress: PropTypes.func.isRequired
}
