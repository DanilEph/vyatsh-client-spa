import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';

const cardStyle = {
    width: 200,
    // background: '#f1f1f1'
}

const imgContainer = {
    height: 160,
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
}

const imgStyle = {
    position: 'absolute',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	margin: 'auto',
}

const ProductItem = observer(({product}) => {
    return(
        <Col md={3}>
            <Card border={"light"} style={cardStyle} className="mb-4">
                <div className="d-block w-100 m-auto" style={imgContainer}>
                    <Image width={150} src={product.img}  className="d-block m-auto" style={imgStyle} />
                </div>
                <div style={{marginTop: 5, fontSize: '1.5rem', paddingLeft: 10}}>Название</div>
                <p style={{paddingLeft: 10}}>Какое-то описание</p>
                <div className="d-flex justify-content-between align-items-center" style={{paddingBottom: 10, paddingLeft: 10, paddingRight: 10}}>
                    <div style={{fontSize: 20}}>$1000</div>
                    <Button variant="danger" size="sm">купить</Button>
                </div>
            </Card>
        </Col>
    );
});

export default ProductItem;