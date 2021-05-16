import { useEffect, useState } from 'react'
import { auth } from '../../common/firebase';
import { useRouter } from 'next/router';
import { message, Button, Space } from 'antd';


export default function UserInfo () {

    const router = useRouter();

    const logout = () => {
        auth.signOut().then(() => {
            // Sign-out successful.
            message.success('Sign-out successful');
            router.push('/')
          }).catch((error) => {
            // An error happened.
            console.log('signout error', error)
        });
    }


    return(
        <div onClick={logout}>Logout</div>
    )
}