import React from 'react'
import s from './List.module.css'

const List = ({children}) => {
  return (
    <div className={s.list}>{children}</div>
  )
}

export default List