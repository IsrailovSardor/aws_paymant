
import { useState } from 'react'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LoginIcon from '@mui/icons-material/Login';
import Login from '../Login/Login'
import Register from '../Register/Register';

const Welcome = () => {
    const [login, setLogin] = useState(false)
    const [register, setRegister] = useState(false)

    return (
        <div className='WelcomWrapper'>
            <div className='register' onClick={() => setRegister(true)}>
                <ExitToAppIcon
                    className='gray'
                    sx={{
                        fill: "rgb(125, 125, 125)",
                        width: '80px',
                        height: '80px',
                    }} />
                <ExitToAppIcon
                    className='white'
                    sx={{
                        fill: "white",
                        width: '80px',
                        height: '80px'
                    }} />
                <p className='text'>Register</p>
            </div>
            <div className='register' onClick={() => setLogin(true)}>
                <LoginIcon
                    className='gray'
                    sx={{
                        fill: "rgb(125, 125, 125)",
                        width: '80px',
                        height: '80px'
                    }} />
                <LoginIcon
                    className='white'
                    sx={{
                        fill: "white",
                        width: '80px',
                        height: '80px'
                    }} />
                <p className='text'>Login</p>
            </div>
            {login && <Login onClose={() => setLogin(false)} />}
            {register && <Register onClose={() => setRegister(false)} />}
        </div>
    )
}
export default Welcome;