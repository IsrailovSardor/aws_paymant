import { useState, useEffect } from 'react';
import { resetUserSession } from '../sevice/AuthService';
import { getUser } from '../sevice/AuthService'
import router from 'next/router';

type User = {
    name?: string
    username?: string
    email?: string
    balance?: string
}

const Profile = () => {
    const [userData, setUserData] = useState<User>({});
    console.log(userData)
    useEffect(() => {
        const user = getUser();
        if (user !== undefined && user) {
            setUserData(user)
        }
    }, [])

    const logoutHandler = () => {
        resetUserSession();
        router.push("/");
    }

    return (
        <div className='wrapperProfile'>
            <div className='block'>
                <p className='title'>You have been loggined in!!!!</p>
                <div className='blockName'>
                    <span className='span1'>First Name:</span>
                    <span className='span2'>{userData.name}</span>
                </div>
                <div className='blockName'>
                    <span className='span1'>Email: </span>
                    <span className='span2'>{userData.email}</span>
                </div>
                <div className='blockName'>
                    <span className='span1'>Username: </span>
                    <span className='span2'>{userData.username}</span>
                </div>
                <div className='blockName'>
                    <span className='span1'>Balance: </span>
                    <span className='span2'>{userData.balance} som</span>
                </div>
                <button className='btn' onClick={logoutHandler}>Sign out</button>
            </div>
        </div>
    )
}
export default Profile