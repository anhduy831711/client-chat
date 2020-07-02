import React, { useState } from "react";
//import FormControl from "./FormControl";
import { Form, Button, Alert } from "react-bootstrap"
import HOST from "./../variables/host";
import axios from "axios";
import { Link } from "react-router-dom";
import './../assets/css/App.css';

function Login(params) {

    const [show, setShow] = useState(false);
    const handleSubmit = (event) => {
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        axios({
            method: "POST",
            data: {
                email, password
            },
            url: `${HOST}/login`,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            }
        }).then(result => {
            const { data } = result;
            console.log(data);
            
            if (data.code === 200) {
                localStorage.setItem("token", data.data);
                window.location.href = "/";
                return;
            }
            setShow(true);
        }).catch(error => {
            console.log(error);

        })
        event.preventDefault();
    }



    return (
        <Form autoComplete="off" onSubmit={handleSubmit}>
            <Alert show={show} variant={"danger"}>
                Email Or Password Not Match
            </Alert>
            <h1 className="h3 mb-3 font-weight-normal title"> Sign in</h1>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" required placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" required placeholder="Password" />
            </Form.Group>
            <Button className="btn btn-primary btn-block" type="submit">Sign in  </Button>
            <Link to="#" >Forgot password?</Link>
            <hr />
            <Button className="btn btn-primary btn-block"><i className="fas fa-user-plus"></i> Sign up New Account</Button>
        </Form>
    )
}


export default Login;