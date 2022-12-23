import React, { useState } from 'react'
import { BlockForm, BlockInput, BlockItem, Button, WrapperLogin } from './LoginStyle'
import CloseIcon from '@mui/icons-material/Close';
import LoginIcon from '@mui/icons-material/Login';
import axios from 'axios';
import { setUserSession } from '../../sevice/AuthService'
import router from 'next/router';
interface Props {
    onClose: () => void
}

const loginAPIUrl = 'https://0e4l76puj4.execute-api.eu-central-1.amazonaws.com/prod-sardor-test/login';

const Login = ({ onClose }: Props) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');


    const submitHandler = (event: any) => {
        event.preventDefault();
        if (username.trim() === '' || password.trim() === '') {
            setErrorMessage('Both username and password are required');
            return;
        }

        setErrorMessage('');
        const requestConfig = {
            headers: {
                'x-api-key': 'WzMb4C91LO2lNTxgncDAm18iHYMteA6t7ikI36oT'
            }
        }

        const requestBody = {
            username: username,
            password: password
        }

        axios.post(loginAPIUrl, requestBody, requestConfig).then((response) => {
            setUserSession(response.data.user, response.data.token);
            router.push("/profile");
        }).catch((error) => {
            if (error.response.status === 401 || error.response.status === 403) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('sorry....the backend server is down. please try again later!!');
            }
        })
    }


    return (
        <WrapperLogin>
            <BlockForm onSubmit={submitHandler}>
                <CloseIcon
                    onClick={onClose}
                    sx={{
                        fill: "rgb(125, 125, 125)",
                        width: '26px',
                        height: '26px',
                        position: 'absolute',
                        right: '30px',
                        top: '30px',
                        cursor: 'pointer'
                    }} />
                <BlockItem>
                    <LoginIcon
                        className='gray'
                        sx={{
                            fill: "rgb(125, 125, 125)",
                            width: '40px',
                            height: '40px'
                        }} />
                    <p>Login</p>
                </BlockItem>
                <BlockInput>
                    <input type="text" value={username} required onChange={event => setUsername(event.target.value)} />
                </BlockInput>
                <BlockInput>
                    <input type="password" value={password} required onChange={event => setPassword(event.target.value)} />
                    {errorMessage && <span >{errorMessage}</span>}
                </BlockInput>
                <Button type='submit'>Login</Button>
            </BlockForm>
        </WrapperLogin>
    )
}


export default Login