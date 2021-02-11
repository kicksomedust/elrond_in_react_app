import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import PropTypes from 'prop-types'
import {ValueToMoney} from './Utils'

export default class Account extends Component {

    render() {
        return (
            <Container>
                <h2>Account details</h2>   
                <h6>Address: {this.props.address}</h6>
                <h6>Balance (EGLD): {ValueToMoney(this.props.balance)}</h6>
            </Container>
        )
    }
}

Account.propTypes = {
    address: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired
}
