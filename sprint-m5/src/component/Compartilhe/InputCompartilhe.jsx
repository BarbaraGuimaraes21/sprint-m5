import React from 'react'
import Label from '../Label/Label'
import S from './InputCompartilhe.module.css'

const InputCompartilhe = () => {
    return (
        <div>
        <p className={S.p}>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
        <div className={S.form}>
            <div className={S.divInput}>
            <form>
                <Label className={S.textlabel} texto={"Nome do seu amigo:"}/>
                <input className={S.input} type="text" required/>
            </form>
            </div>
            <div className={S.divInput}>
                <form action="">
                <Label className={S.textlabel} texto={"E-mail:"}/>
                <input className={S.input} type="email" required/>
                </form>
            </div>
        </div>
        <div className={S.divBtn}>
        <button className={S.btn}>Enviar agora</button>
        </div>
        </div>
    )
}

export default InputCompartilhe