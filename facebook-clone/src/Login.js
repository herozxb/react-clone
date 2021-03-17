import React from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';
import { auth, provider } from './Firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer'



function Login() {

    const [state,dispatch] = useStateValue();


    const signIn = () =>{

       auth
        .signInWithPopup(provider)
        .then( result =>{
            dispatch({
                type : actionTypes.SET_USER,
                user:result.user,
            })
            console.log(result);
        }).
        catch((error) => alert(error.message));

    }


    return (
        <div className='login'>
            <div className='login__logo'>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Facebook_f_Logo_%28with_gradient%29.svg"
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
