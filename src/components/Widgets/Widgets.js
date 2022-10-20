import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {

    const newsArticle = ( heading, subtitle ) => {
        return (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
            </div>

            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
        )
    }

  return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle('Porque contratar a F. Contardo', 'Developers - 10k lectores')}
        {newsArticle('Perros los mejores amigos del hombre', 'PetFriendly - 1235 lectores')}
        {newsArticle('Beneficios de bailar salsa y bachata', 'Hobbys - 6235 lectores')}
        {newsArticle('Fede no para de aprender?', 'Top Noticias - 2122 lectores')}
    </div>
  )
}

export default Widgets