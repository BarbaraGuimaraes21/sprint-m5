import React from 'react'
import Diagonal from '../Diagonal/Diagonal'
import S from './Header.module.css'

const Header = () => {
  return (
    <div>
      <Diagonal />
      <div className={S.header}>
        <h2 className={S.textoh2}>uma seleção de produtos</h2>
        <h1 className={S.textoh1}>especial para você</h1>
        <h3>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</h3>
        <div className={S.divButtons}>
          <button className={S.headerButton}>Conheça a Linx</button>
          <button className={S.headerButton}>Ajude o algoritmo</button>
          <button className={S.headerButton}>Seus produtos</button>
          <button className={S.headerButton}>Compartilhe</button>
        </div>
      </div>
    </div>
  )
}

export default Header