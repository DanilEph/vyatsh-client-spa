import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { Context } from '..';
import ProductItem from './ProductItem';


const ProductList = observer(() => {
    const { product } = useContext(Context);

    return(
        <>
        <h2 className="mt-3 mb-3">Весь товар</h2>
        <Row className="d-flex">
            
            {
                product.products.map((product) => {
                   return <ProductItem id={product.id} product={product} />
                })
            }
        </Row>
        </>
    );
});

export default ProductList;