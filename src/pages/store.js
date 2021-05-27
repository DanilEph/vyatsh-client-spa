import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductList from '../components/ProductList';
import TypeBar from '../components/TypeBar';

const colStyle = {
    background: 'black'
}

export const Store = () => {
    return(
        <Container fluid> 
            <Row>
                <Col md={3} className="mt-3" >
                    <TypeBar title="Категории" arrOfItems="categories" />
                    <TypeBar title="Производители" arrOfItems="suppliers" />
                </Col>
                <Col md={9}>
                    <ProductList />
                </Col>
            </Row>
        </Container>
    )
};