import Card from '@/Components/Card/Card'
import List from '@/Components/List/List'
import React from 'react'
import s from './CartList.module.css'

const CartList = ({data}) => {


  let items = data?.map(item => ({...{...item.book, book_id: item.book.id}, ...item, id: item.id}))


  return (
    <div className={s.list}>
        <h1>Корзина</h1>
        <List direction="row">
            {items?.length > 0 ? items?.map(book => (
                <Card type="cart" book={book}></Card>
            )): 'Пусто...'}
        </List>
    </div>
  )
}

export default CartList