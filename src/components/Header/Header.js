import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import HeaderOption from './HeaderOption';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch} from 'react-redux';
import { auth } from '../../services/firebase';
import { logout} from '../../features/userSlice';

const Header = () => {
  
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  }

  return (
      <div className='header'>
      <div className='header__left'>
        <img src='https://cdn-icons-png.flaticon.com/512/3536/3536505.png' 
        alt='linkedin logo'/>

        <div className='header__search'>
          <SearchIcon />
          <input placeholder='Buscar' type='text'/>
        </div>

      </div>
      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Inicio'/>
        <HeaderOption Icon={SupervisorAccountIcon} title='Mi red'/>
        <HeaderOption Icon={BusinessCenterIcon} title='Empleos'/>
        <HeaderOption Icon={SmsIcon} title='Mensajes'/>
        <HeaderOption Icon={NotificationsIcon} title='Notificaciones'/>
        <HeaderOption 
          avatar={true}
          title='Yo'
          onClick={logoutOfApp}/>
      </div>
    </div>
  )
}

export default Header 