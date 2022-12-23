import React, { useState } from 'react'
import { BlockForm, BlockInput, BlockItem, Button, WrapperRegister } from './RegisterStyle'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';


interface Props {
    onClose: () => void
}

const registerUrl = 'https://0e4l76puj4.execute-api.eu-central-1.amazonaws.com/prod-sardor-test/register';

const Register = ({ onClose }: Props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState<any>(null);

    const submitHandler = (e: any) => {
        e.preventDefault();
        if (username.trim() === '' || email.trim() === '' || name.trim() === '' || password.trim() === '') {
            setMessage('All fields are required');
            return;
        }
        setMessage(null);
        const requestConfig = {
            headers: {
                "Cache-Control": null,
                "X-Requested-With": null,
                'x-api-key': 'WzMb4C91LO2lNTxgncDAm18iHYMteA6t7ikI36oT'
            }
        }
        const requestBody = {
            username: username,
            email: email,
            name: name,
            password: password
        }
        axios.post(registerUrl, requestBody, requestConfig)
            .then(response => {
                setMessage('Registeration Successful')
                alert('Registeration Successful')
            })
            .catch(error => {
                if (error.response.status === 401) {
                    setMessage(error.response.data.message);
                } else {
                    setMessage('sorry....the backend server is down!! please try again later');
                }
            })
    }

    return (
        <WrapperRegister>
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
                        cursor: 'pointer',
                    }} />
                <BlockItem>
                    <ExitToAppIcon
                        className='gray'
                        sx={{
                            fill: "rgb(125, 125, 125)",
                            width: '40px',
                            height: '40px'
                        }} />
                    <p>Register</p>
                </BlockItem>
                <BlockInput>
                    <input type="text" placeholder='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {/* <span>eror</span> */}
                </BlockInput>
                <BlockInput>
                    <input type="text" placeholder='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    {/* <span>eror</span> */}
                </BlockInput>
                <BlockInput>
                    <input type="text" placeholder='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    {/* <span>eror</span> */}
                </BlockInput>
                <BlockInput>
                    <input type="password" placeholder='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    {/* <span>eror</span> */}
                </BlockInput>
                <Button type='submit'>Register</Button>
            </BlockForm>
        </WrapperRegister>
    )
}

export default Register