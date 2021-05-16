import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import { useRouter } from 'next/router';
import { message, Button, Space } from 'antd';


var firebaseConfig = {
    apiKey: "AIzaSyBous2mPrksz1KSvEWRv2BDh9HCVlgUTTc",
    authDomain: "chatapp-61180.firebaseapp.com",
    databaseURL: "https://chatapp-61180.firebaseio.com",
    projectId: "chatapp-61180",
    storageBucket: "chatapp-61180.appspot.com",
    messagingSenderId: "555894515739",
    appId: "1:555894515739:web:89363d9a7bc2eb6c2c30be"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const provider = new firebase.auth.GoogleAuthProvider();


export const auth = firebase.auth();
export const firestore = firebase.firestore();

// sign in with google
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider).then((res) => {
    console.log('google login success', res);
    localStorage.setItem('userInfo', JSON.stringify(res.additionalUserInfo.profile));
    localStorage.setItem('creds', JSON.stringify(res.credential));

    firebase.database().ref('users/' + res.additionalUserInfo.profile.name).set({
        userInfo: res.additionalUserInfo.profile
    });

    message.success('Successfully Signed In');
    }).catch((err) => {
        console.log('google error', err);
        message.error(err.message);
    });
};