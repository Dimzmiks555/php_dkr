import React from 'react'
import s from './Card.module.css'
import PrimaryButton from '../PrimaryButton'

const Card = ({book}) => {


  return (
    <div className={s.card}>
      <img src={'/images/' + book?.image}></img>
      <h3>{book?.title}</h3>
      <h4>{book?.author}</h4>
      <div className={s.footer}>
        <p>{book?.price} руб.</p>
        
        <PrimaryButton className="ml-4" >
            В корзину
        </PrimaryButton>
      </div>
    </div>
  )
}

export default Card