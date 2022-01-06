import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import loginLogo from '../../images/login-logo.png'
import logGoogle from '../../images/logGoogle.png'
import './Login.css'
import useAuth from '../../Hooks/useAuth';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useLocation } from 'react-router-dom';
const Login = () => {
    const {logInWithGoogle,setError,setUser,setIsLoading}= useAuth();
    const history  = useHistory();
    const location = useLocation();
    const redirectURL = location.state?.from || '/home'

    const userLogin = ()=>{
        setIsLoading(true);
        logInWithGoogle()
         .then((result) => {
            setUser(result.user);
            history.push(redirectURL)
          })
          .catch((error) => {
            setError(error.message);
          })
          .finally(() => setIsLoading(false));
    }
    return (
        <div className='container login-container'>
            <Row>
                <Col className='mx-auto' sm={12} md={5} lg={5}>
                   <img src={loginLogo} className='img-fluid' alt="" />
                </Col>
                <Col className='mx-auto mt-2 d-flex justify-content-start align-items-center' sm={12} md={5} lg={5}>
                    <Button onClick={userLogin} variant='danger'><img className='log-google' src={logGoogle} alt="" /> Login With Google</Button>
                </Col>
            </Row>
        </div>
    );
};

export default Login;