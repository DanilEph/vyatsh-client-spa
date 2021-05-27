import { observer } from 'mobx-react-lite';
import React from 'react';
import { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Context } from '..';
import { customerRoute } from '../routes';

const listTitle = {
    background: '#f7f7f7'
};

const list = {
    paddingLeft: 40,
    cursor: 'pointer'
};

const TypeBar = observer((props) => {
    const { product } = useContext(Context);
    const { title, arrOfItems, } = props;

    return(
        <ListGroup className="mb-2">
            <ListGroup.Item style={listTitle}>
                <h4>{title}</h4>
            </ListGroup.Item>
            {
                product[arrOfItems].map((item) => {
                    return(
                        <>
                        {(arrOfItems === 'categories') && <ListGroup.Item 
                            key={item.id} 
                            style={list}
                            onClick={() => product.setSelectedCategory(item)}
                            active={item.id === product.selectedCategory.id }
                            
                        >
                            {item.name}
                        </ListGroup.Item>}
                        {(arrOfItems === 'suppliers') && <ListGroup.Item 
                            key={item.id} 
                            style={list}
                            onClick={() => product.setSelectedSupplier(item)}
                            active={item.id === product.selectedSupplier.id }
                            
                        >
                            {item.name}
                        </ListGroup.Item>}
                        </>
                    )
                })
            }
        </ListGroup>
    );
});

export default TypeBar;