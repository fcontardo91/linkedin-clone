import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import './Sidebar.css'

const Sidebar = () => {

    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src='https://static.vecteezy.com/system/resources/thumbnails/005/724/725/small_2x/marble-unicorn-abstract-background-liquid-blue-and-pink-watercolor-texture-with-stars-wavy-illustration-vector.jpg' alt='img-bg' />
            <Avatar src={user.photoURL} className='sidebar__avatar'>
                {user.email[0]}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>Quien ha visto tu perfil</p>
                <p className='sidebar__statNumber'>14</p>
            </div>
            <div className='sidebar__stat'>
                <p>Impresiones de tu publicación</p>
                <p className='sidebar__statNumber'>52</p>
            </div>
        </div>
            <div className='sidebar__bottom'>
                <p>Recientes</p>
                {recentItem('reactJs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
    </div>
  )
}

export default Sidebar