import React from 'react'
import {Button} from '@material-ui/core'
import './Login.css'
import { useDispatch } from 'react-redux'
import { auth, provider } from './firebase'
import { login, logout  } from './features/appSlice'

const Login = () => {
  const dispatch = useDispatch()

  const signIn = () =>{
      auth
      .signInWithPopup(provider)
      .then((result) =>{
          dispatch(
              login({
              username: result.user.displayName,
              profilePic: result.user.photoURL,
              id: result.user.uid,
            }))    
               
        })
      .catch(error => alert(error.message))
       
  }

  return (
    <div className="login">
        <div className="login__container">
          <img src="http://assets.stickpng.com/images/5a4e30612da5ad73df7efe71.png" alt=""/>
          <Button  variant="outlined"
                    onClick={signIn}
          > Sign In </Button>
       
        </div>
    </div>
  )
}

export default Login
