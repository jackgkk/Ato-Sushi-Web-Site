import React from 'react'
import styled from 'styled-components'

export default function Menu({ menu }) {
    return (
        <MenuContent>
            {menu.map((menuM) => {
                return (
                    <>
                        <h4 key={menuM.setType}>{menuM.setType}</h4>
                        <div className="meals">
                            {menuM.meal.map((meal) => {
                                return (
                                    <MealLine>
                                        <div id="nameDesc">
                                            <p className="mealName">
                                                {meal.name}
                                            </p>
                                            <p className="mealDesc">
                                                {meal.description}
                                            </p>
                                        </div>
                                        <p className="mealName">
                                            {meal.price} zł
                                        </p>
                                    </MealLine>
                                )
                            })}
                        </div>
                    </>
                )
            })}
        </MenuContent>
    )
}

const MenuContent = styled.div`
    width: 500px;
    margin-top: -40px;
    h4 {
        margin: 0;
        margin-top: 40px;
    }
`

const MealLine = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    #nameDesc {
        text-align: left;
    }

    .mealName {
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        /* identical to box height */
        text-transform: lowercase;
        margin-bottom: 7px;
        margin-top: 30px;
    }

    .mealDesc {
        font-weight: normal;
        font-size: 13px;
        line-height: 136.4%;
        /* or 18px */
        margin: 0;
        opacity: 80%;
    }

`
