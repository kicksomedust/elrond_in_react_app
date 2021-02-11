import React, { Component } from 'react'
import logo from './BiteTheBullet.png'
import Image2 from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'

export default class Image extends Component {
    render() {
        return (
            <Container fluid> 
            <Image2 src={logo} fluid rounded/>
            </Container>
        )
    }
}
