import { Observer } from 'mobx-react-lite';
import React from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN, REGISTRATION } from '../utils/consts';
import style from './styles/RegistAuth.module.scss';

export const RegistAuth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN;

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight - 54}}>
            <Card className="p-5" style={{width: 500, background: '#f1f1f1'}}>
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control placeholder="Введите логин..." className="mt-3"/>
                    <Form.Control placeholder="Введите пароль..." className="mt-3"/>
                    
                    {isLogin ? <>
                    <Button variant="outline-success" className="mt-3">Войти</Button>
                    <div className="mt-2">
                        Нет аккаунта? <NavLink to={REGISTRATION}>Зарегистрируйтесь</NavLink>
                    </div></>
                    :                    
                    <><Button variant="outline-success" className="mt-3">Зарегистрироваться</Button>
                    <div className="mt-2">
                        Есть аккаунт? <NavLink to={LOGIN}>Войдите</NavLink>
                    </div></>}

                </Form>
            </Card>
        </Container>
    )
};