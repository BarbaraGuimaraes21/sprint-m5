import React from 'react'
import Label from '../Label/Label'
import S from './Form.module.css'

const Form = () => {
    return (
        <div className={S.div1}>
            <div className={S.divdescription}>
                <h2 className={S.textoh2}>Ajude o algoritmo a ser mais certeiro</h2>
                <p className={S.textop}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend.
                    <br />
                    <br />
                    Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus.
                </p>
            </div>
            <div>
                <form>
                    <Label texto="Seu nome:" />
                    <input className={S.input} type="text" />
                    <Label texto="E-mail:" />
                    <input className={S.input} type="email" />
                    <Label texto="CPF:" />
                    <input className={S.input} type="text" />
                    <div>
                        <Label className={S.textoradio} texto="Masculino" />
                        <input className={S.radio} type="radio" />
                        <Label className={S.textoradio} texto="Feminino" />
                        <input className={S.radio} type="radio" />
                    </div>
                    <button className={S.btnform}>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Form