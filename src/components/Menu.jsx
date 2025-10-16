import React from 'react'
import MenuItem from './MenuItem'

const Menu = ({itens}) => {
  return (
    <div>
        {itens.map((item)=>(
            <MenuItem key={item} {...item}/>
        ))}
    </div>
  )
}

export default Menu