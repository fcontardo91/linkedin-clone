import React, { useState } from 'react'
import './Login.css'
import { auth } from '../../services/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';

const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('')
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      dispatch(login({
        email: userCredential.user.email,
        uid: userCredential.user.uid,
        displayName: userCredential.user.displayName,
        profileUrl: userCredential.user.photoURL,
      }))
  })
  .catch((error) => {
    alert(error.message);
  });
  }
  
  const register = () => {
    if(!name){
      return alert('Por favor ingrese su nombre completo!')
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user,{
            displayName: name,
            photoURL: profilePic,
        }).then(() => {
          dispatch(
            login({
              email: userCredential.user.email,
              uid: userCredential.user.uid,
              displayName: name,
              photoURL: profilePic,
          }))
        })
      })
      .catch((error) => {
         alert(error.message);
      });

  }

  return (
    <div className='login'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png' alt='' />

      <form>
        <input value={name} onChange={e => setName(e.target.value)} placeholder='Nombre completo (requerido)' type='text' />
        <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder='Foto de perfil (opcional)' type='text' />
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email(Inventalo!)' type='email' />
        <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Password(Super inventalo!)' type='password' />
        <button type='submit' onClick={loginToApp}>Entrar</button>

        <p>No eres miembro?
          <span 
            className='login__register'
            onClick={register}> Registrate ahora</span>
        </p>
      </form>
    </div>
  )
}

export default Login