import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import Card from '../Cards/Card'
import S from './Section.module.css'

const arr = []

const Main = () => {

    const [produto, setProduto] = useState([])
    const [pag, setPag] = useState(1)

    async function handleApi() {
        const response = await fetch(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${pag}`)
        const json = await response.json()
        arr.push(json.products)
        setProduto(arr)
        console.log(json);
    }

    useEffect(() => {
        handleApi()
    }, [pag])

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
            {produto.map((div, index) => {
                return (
                    <div className={S.cards} key={index}>
                        {div.map((produto) => {
                            return (
                                <Card key={produto.id}
                                    imagem={produto.image}
                                    titulo={produto.name}
                                    descricao={produto.description}
                                    preco={produto.oldPrice}
                                    precoDesc={produto.price}
                                    qtdParcela={produto.installments.value}
                                    valorParcela={produto.installments.count}
                                />
                            )
                        })}
                    </div>
                )
            })}
            <div className={S.main2}>
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