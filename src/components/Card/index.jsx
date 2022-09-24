import React from "react"
import * as S from "./style"

export default function Recipes({ itens }) {



    return (
        <>
            {
                itens.map((item) => (
                    <S.Card>
                        <>
                            <S.Foto>
                                <img src={item.image} alt={item.name} />
                            </S.Foto>
                            <S.Text>
                                <S.LineRecipe></S.LineRecipe>
                                <h3>{item.name}</h3>
                            </S.Text>
                        </>
                    </S.Card>
                ))
            }
        </>
    )
}