import React from "react"
import * as S from "../Recipes/style"
import Subtitle from "../Subtitle"
import Card from "../Card"
import Image1 from "../../assets/images/cake.png"
import Image2 from "../../assets/images/pizza.png"
import Image3 from "../../assets/images/smoothie.png"

export default function Recipes() {

    const recipes = [
        {
            name: 'Red Velvet Cake',
            image: Image1,
            id: 1,
        },
        {
            name: 'Margherita Pizza',
            image: Image2,
            id: 2,
        },
        {
            name: 'Peanut Smoothie',
            image: Image3,
            id: 3,
        },
    ]

    return (
        <S.SectionStyle>
            <Subtitle name="lastest recipes" line="true" id="RECIPES" />
            <S.Container>
                <Card itens={recipes} />
            </S.Container>
        </S.SectionStyle>
    )
}