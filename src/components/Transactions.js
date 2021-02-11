import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import {ValueToMoney} from './Utils'
import {TimestampToDate} from './Utils'


export default class Transactions extends Component {

  render() {
    return (
      <Container fluid> 
        <h6>Transactions:</h6>
        <Table responsive="sm" variant="dark">
        <thead>
          <tr>
            <th>date</th>
            <th>sender</th>
            <th>value (EGLD)</th>
          </tr>
        </thead>
        <tbody>
        { this.props.transactions.map(t => <tr key={t.hash}> 
          <td>{TimestampToDate(t.timestamp)}</td>
          <td>{t.sender}</td> 
          <td>{ValueToMoney(t.value)}</td> 
          </tr>
        )}
        </tbody>
      </Table>    
      </Container>
    ) }
} 

Transactions.propTypes = {
  transactions: PropTypes.array.isRequired,
  address: PropTypes.string.isRequired
}

