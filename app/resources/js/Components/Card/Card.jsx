import React from 'react'
import s from './Card.module.css'
import PrimaryButton from '../PrimaryButton'

const Card = ({book, type}) => {

  const handleAddToCart = (e) => {

    let fd = new FormData() 
    fd.append('book_id', book?.id)

    e.preventDefault();

    console.log(fd)

    axios.post('/api/add/cart_item', fd).then(res => {
        console.log(res)
        window.location.reload()

    })
  }

  const handleDeleteFromCart = (e) => {

    let fd = new FormData() 
    fd.append('cart_item_id', book?.id)

    e.preventDefault();

    console.log(fd)

    axios.post('/api/remove/cart_item', fd).then(res => {
        console.log(res)
        window.location.reload()
    })
  }



  return (
    <div className={s.card}>
      <img src={'/images/' + book?.image}></img>
      <h3>{book?.title}</h3>
      <h4>{book?.author}</h4>
      <div className={s.footer}>
        <p>{book?.price} руб.</p>
        {type == 'cart' ? (
          <PrimaryButton className="ml-4 bg-red-500 " onClick={handleDeleteFromCart}>
          Удалить
          </PrimaryButton>
        ) : (
          <PrimaryButton className="ml-4" onClick={handleAddToCart}>
          В корзину
          </PrimaryButton>
        )}
      </div>
    </div>
  )
}

export default Card