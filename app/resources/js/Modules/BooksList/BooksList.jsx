import Card from '@/Components/Card/Card'
import List from '@/Components/List/List'
import React from 'react'
import s from './BooksList.module.css'

const BooksList = ({data}) => {


    const books = [
        {
            "id":"9781593279509",
            "title":"Eloquent JavaScript, Third Edition",
            "author":"Marijn Haverbeke",
            "price":472,
            "image": 'https://basket-05.wb.ru/vol773/part77339/77339029/images/big/1.jpg'
        },
        {
            "id":"9781491943533",
            "title":"Practical Modern JavaScript",
            "author":"Nicolás Bevacqua",
            "price":334,
            "image": 'https://basket-05.wb.ru/vol773/part77339/77339029/images/big/1.jpg'
        },
        {
            "id":"9781593277574",
            "title":"Understanding ECMAScript 6",
            "author":"Nicholas C. Zakas",
            "price":352,
            "image": 'https://basket-05.wb.ru/vol773/part77339/77339029/images/big/1.jpg'
        },
        {
            "id":"9781449365035",
            "title":"Speaking JavaScript",
            "author":"Axel Rauschmayer",
            "price":460,
            "image": 'https://basket-05.wb.ru/vol773/part77339/77339029/images/big/1.jpg'
        },
        {
            "id":"9781449331818",
            "title":"Learning JavaScript Design Patterns",
            "author":"Addy Osmani",
            "price":254,
            "image": 'https://basket-05.wb.ru/vol773/part77339/77339029/images/big/1.jpg'
        },
        {
            "id":"9798602477429",
            "title":"You Don't Know JS Yet",
            "author":"Kyle Simpson",
            "price":143,
            "image": 'https://basket-05.wb.ru/vol773/part77339/77339029/images/big/1.jpg'
        },
        {
            "id":"9781484200766",
            "title":"Pro Git",
            "author":"Scott Chacon and Ben Straub",
            "price":458,
            "image": 'https://basket-05.wb.ru/vol773/part77339/77339029/images/big/1.jpg'
        },
        {
            "id":"9781484242216",
            "title":"Rethinking Productivity in Software Engineering",
            "author":"Caitlin Sadowski, Thomas Zimmermann",
            "price":310,
            "image": 'https://basket-05.wb.ru/vol773/part77339/77339029/images/big/1.jpg'
        }
    ]


  return (
    <div className={s.list}>
        <h1>Книги</h1>
        <List>
            {data?.map(book => (
                <Card book={book}></Card>
            ))}
        </List>
    </div>
  )
}

export default BooksList