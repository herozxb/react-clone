import React from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';
import { auth, provider } from './firebase';



function Login() {


    const signIn = () =>{

       auth
        .signInWithPopup(provider)
        .then( result =>{
 
           console.log(result);
        }).
        catch((error) => alert(error.message));

    }


    return (
        <div className='login'>
            <div className='login__logo'>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Discord-512.webp/512px-Discord-512.webp.png"
                    alt=""
                />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    );
}

export default Login;
