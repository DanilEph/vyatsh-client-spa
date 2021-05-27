import React, { useContext } from 'react';
import { Context } from '..';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import mainStyle from './styles/NavBar.module.scss';
import { HOME_PAGE, LOGIN, REGISTRATION, STORE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {

    const { user } = useContext(Context);
    const history = useHistory(); 

    return(
        <Navbar bg="dark" variant="dark" className="d-flex justify-content-between align-items-center">            
            <Nav className="mr-auto" className={mainStyle.nav}>
                <NavLink to={HOME_PAGE} className={mainStyle.logo}>VYATSH</NavLink>
                <NavLink to={HOME_PAGE}>Главная</NavLink>
                <NavLink to={STORE}>Магазин</NavLink>
                <NavLink to={HOME_PAGE}>Доставка</NavLink>
                <NavLink to={HOME_PAGE}>Блог</NavLink>
                <NavLink to={HOME_PAGE}>О нас</NavLink>
                <NavLink to={HOME_PAGE}>Контакты</NavLink>
                
            </Nav>
        
            <Form inline>
                <FormControl type="text" placeholder="Поиск..." className="mr-sm-2" />
                <Button variant="outline-info" className="mr-5">Найти</Button>
                
            </Form>  

            {user.isCustomer && !user.isEmployee &&
                <Nav>
                    <Button className="mr-2">Мой профиль</Button>
                    <Button>Корзина</Button>
                </Nav>
            }
            {user.isEmployee && !user.isCustomer &&
                <Nav>
                    <Button className="mr-2">Мой профиль</Button>
                    <Button>Админ-панель</Button>
                </Nav>
            }
            {!user.isCustomer && !user.isEmployee &&
                <Nav>                    
                    <Button className="mr-2" onClick={() => history.push(LOGIN)}>Войти</Button>
                    <Button onClick={() => history.push(REGISTRATION)}>Зарегистрироваться</Button>
                </Nav>
            }                     
        </Navbar>
    );
});

export default NavBar;
