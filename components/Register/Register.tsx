import React, { useState } from 'react'
import { BlockForm, BlockInput, BlockItem, Button, Modal, WrapperRegister } from './RegisterStyle'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';


interface Props {
    onClose: () => void
}

const registerUrl = 'https://0e4l76puj4.execute-api.eu-central-1.amazonaws.com/prod-sardor-test/register';

const Register = ({ onClose }: Props) => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [modal, setModal] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('');

    const submitHandler = (e: any) => {
        e.preventDefault();
        if (username.trim() === '' || email.trim() === '' || name.trim() === '' || password.trim() === '') {
            setMessage('All fields are required');
            return;
        }
        setMessage('');
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
                setModal(true)
                setTimeout(() => {
                    onClose()
                }, 1500)
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
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                </BlockInput>
                <BlockInput>
                    <input type="email" placeholder='email'
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)} />
                </BlockInput>
                <BlockInput>
                    <input type="text" placeholder='username'
                        value={username}
                        required
                        onChange={(e) => setUsername(e.target.value)} />
                </BlockInput>
                <BlockInput>
                    <input type="password" placeholder='password'
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)} />
                    <span>{message}</span>
                </BlockInput>
                <Button type='submit'>Register</Button>
            </BlockForm>
            {modal &&
                <Modal>
                    <p>Registeration Successful</p>
                </Modal>
            }
        </WrapperRegister>
    )
}

export default Register