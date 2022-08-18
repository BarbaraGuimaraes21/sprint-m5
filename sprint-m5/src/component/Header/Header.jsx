import React from 'react'
import Diagonal from '../Diagonal/Diagonal'
import S from '../Header/Header.module.css'

const Header = () => {
  return (
    <div>
    <Diagonal/>
    <div className={S.div}>
    </div>
    </div>
  )
}

export default Header