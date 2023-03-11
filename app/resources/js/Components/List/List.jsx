import React from 'react'
import s from './List.module.css'

const List = ({children, direction}) => {
  return (
    <div className={direction === 'row' ? s.list_row: s.list}>{children}</div>
  )
}

export default List