import React, {useState, useEffect, useRef} from 'react';
import {InputGroup, Form, Button, Card, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loginRequest } from '../../db/action/login';
import { HiOutlineMail, HiLightBulb } from 'react-icons/hi';
import { RiLockPasswordFill } from 'react-icons/ri';
import {isUndefined} from 'lodash'
import PageHeader from '../PageHeader';
import Error from '../Error';
import isEmail from 'validator/es/lib/isEmail';
import isStrongPassword from 'validator/es/lib/isStrongPassword';

const Login = (props) => {
    const navigate = useNavigate();
    const {login} = props;
    const [showError, setShowError] = useState(false);
    const [tooltip, setTooltip] = useState(false);
    const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState({
        content: '',
        variant: ''
    });
    const [user, setUser] = useState({
        email:'',
        password:''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        const object = {...user};
        object[name] = value;
        setUser(object);
    };

    const handleRegister = () => {
        navigate('/register');
    }

    const handleLogin = () => {
        if (isEmail(user.email) === false) {
              setInfo({
                  ...info,
                    content: 'Invalid Email',
                    variant: 'warning'
              });
              setShowError(true);
              return;  
        }
        if (isStrongPassword(user.password) === false) {
            setInfo({
                ...info,
                  content: 'Invalid Password: minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1',
                  variant: 'warning'
            });
            setShowError(true);
            return;  
        }
        setLoading(true);
        props.loginRequest(user);
    }

    useEffect(() => {
        const {success, code, message} = login;
        if(isUndefined(success)) {
            return false;
        }
        if(success === true) { 
            navigate('/dashboard');
        } else {
            if(code === 'PAY032') {
                navigate('/active');
            } 
            setInfo({
                ...info,
                    content: `${code} - ${message}`,
                    variant: 'warning'
            });
            setShowError(true);
            setLoading(false);
        } 
    }, [login]);

    return (
        <React.Fragment>
        <PageHeader title={'Login'} show={loading} className={'mb-4'}/>
        {showError && <Error content={info.content} variant={info.variant} setShowError={setShowError} />}
        <Card border={'light'} className={'border-0'}>
            <Form.Group className={'mb-2 border ew-border-gradient'}>
                <InputGroup>
                <InputGroup.Text className={'bg-white border-0'}><HiOutlineMail /></InputGroup.Text>
                <Form.Control type={'email'} size={'lg'} placeholder={'Email'} className={'border-0'} required
                    defaultValue={user.email} name={'email'} onChange={(event) => handleChange(event)} /> 
                </InputGroup>
            </Form.Group>
            <Form.Group className={'mb-2 border ew-border-gradient'}>
                <InputGroup>
                <InputGroup.Text className={'bg-white border-0'}><RiLockPasswordFill /></InputGroup.Text>
                <Form.Control size={'lg'} 
                className={'border-0'} 
                placeholder={'Password'} required type={'password'}
                defaultValue={user.password} name={'password'} onChange={(event) => handleChange(event)} /> 
                <InputGroup.Text className={'bg-white border-0'}>
                    <HiLightBulb color={tooltip === true ? '#101010' : '#000000'} onClick={() => setTooltip(!tooltip)} />
                </InputGroup.Text>
                </InputGroup>
            </Form.Group>
            {tooltip === true && 
                <Form.Group className={'mb-2 border border-danger'}>
                 <ListGroup>
                    <ListGroupItem><small>minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1</small></ListGroupItem>
                </ListGroup>
            </Form.Group> }
            <Form.Group className={'mt-1 mb-4'}>
                <Row className={'justify-content-end'}>
                    <Col md={4}>
                        <Link to={'/forget'} className={'text-dark text-decoration-none'}><small>Forget Password</small></Link>                            
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className={'mt-2'}>
                <Row>
                    <Col md={12}>
                    <Button
                        onClick={() => handleLogin()}
                    >Login</Button>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className={'m-2 text-center'}>
                <hr/>
            </Form.Group>
            <Form.Group>
                <Row>
                    <Col md={8} className={'pt-1'}>Don't have an account?</Col>
                    <Col md={4}><Button onClick={() => handleRegister()}>Sign up</Button></Col>
                </Row>
            </Form.Group>      
        </Card>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
      login: state.login || {}
    }
  };
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loginRequest,
    }, dispatch);
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);