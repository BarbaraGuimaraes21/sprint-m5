import React from 'react'
import S from './Section.module.css'

const Main = () => {
    return (
        <div>
        <div className={S.main}>
            <section className={S.textosectionh3}>
                <div className={S.linhah3}>
                    <div>
                        <hr />
                    </div>
                        <h3 className={S.texto1h3}>Sua seleção especial</h3>
                    <div>
                        <hr />
                    </div>
                </div>
            </section>
            </div>
            <div className={S.main}>
            <section className={S.textosectionh3}>
                <div className={S.linhah3}>
                    <div>
                        <hr />
                    </div>
                        <h3 className={S.texto2h3}>Compartilhe a novidade</h3>
                    <div>
                        <hr />
                    </div>
                </div>
            </section>
            </div>
            </div>
    )
}

export default Main