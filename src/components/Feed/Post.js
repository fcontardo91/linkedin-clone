import React, { forwardRef } from 'react'
import './Post.css'
import InputOption from './InputOption'
import { Avatar } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SendIcon from '@mui/icons-material/Send';
import ReplyIcon from '@mui/icons-material/Reply';
import CommentIcon from '@mui/icons-material/Comment';

const Post = forwardRef (({name, description, message, photoUrl }, ref) => {
   return (
    <div ref={ref} className='post'>
        <div className='post__header'>
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className='post__info'>
                <h2>{name}</h2>
                <p>{description}</p>    
            </div>    
        </div>      

        <div className='post__body'>
            <p>{message}</p>
        </div>

        <div className='post__buttons'>
            <InputOption 
                Icon={ThumbUpIcon}
                title='Recomendar'
                color='gray'/>
            <InputOption 
                Icon={CommentIcon}
                title='Comentar'
                color='gray'/>
            <InputOption 
                Icon={ReplyIcon}
                title='Compartir'
                color='gray'/>
            <InputOption 
                Icon={SendIcon}
                title='Enviar'
                color='gray'/>
        </div>

    </div>
  )
})

export default Post