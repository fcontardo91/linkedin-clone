import React, { useEffect, useState } from 'react'
import './Feed.css'
import InputOption from './InputOption';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ArticleIcon from '@mui/icons-material/Article';
import Post from './Post';
import { db } from '../../services/firebase';
import { addDoc, onSnapshot, serverTimestamp, collection, orderBy} from "firebase/firestore"
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import FlipMove from 'react-flip-move'

const Feed = () => {

  const user = useSelector(selectUser)
  const [input, setInput] = useState('')  
  const [posts, setPosts] = useState([])
  
  useEffect (() => {
    onSnapshot(collection(db, "posts"),
     orderBy("timestamp", "desc"), (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    });
  },[])
  

  const sendPost = (e) => {
    e.preventDefault();
     addDoc(collection(db, "posts"), {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || '',
      timestamp: serverTimestamp(), 
    });

    setInput('')
  }

  return (
    <div className='feed'>
        <div className='feed__inputContainer'>
            <div className='feed__input'>
                <CreateIcon />
                <form>
                    <input
                      value={input}
                      onChange={e => setInput(e.target.value)} 
                      type='text'/>
                    <button 
                      onClick={sendPost} 
                      type='submit'>Send</button>
                </form>
            </div>
            <div className='feed__inputOptions'>
                <InputOption Icon={ImageIcon} title='Photo' color='#70b5f9'/>
                <InputOption Icon={SmartDisplayIcon} title='Video' color='#e7a33e'/>
                <InputOption Icon={DateRangeIcon} title='Evento' color='#c0cbcd'/>
                <InputOption Icon={ArticleIcon} title='Escribir artículo' color='#7fc15e'/>
            </div>
        </div>
        
        {/* Post */}
      <FlipMove>
        {posts.map(({id, data:{name, description, message, photoUrl}}) =>  (
          <Post 
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl} 
          />
          ))}
      </FlipMove>
    </div>
  )
}

export default Feed