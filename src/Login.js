import React from "react";
import Form from "react-bootstrap/Form";
import {NavLink, Link} from "react-router-dom";
import Footer from "./Footer";

import HeaderMain from "./HeaderMain";

import "./Login.css";

function Login() {
    return(
        <div className="login-page-container">
            <div className="login-page-card">
                <h2 id="title-card-login">Login</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Usuário" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Senha" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <NavLink className="btn btn-primary buttom-submit-custom" to="/filterpage">Entrar</NavLink>
                    </Form.Group>

                    <Link className="forgot-password" to="/">Esqueceu sua senha?</Link>
                </Form>
            </div>
        </div>
    );
}

export default Login;