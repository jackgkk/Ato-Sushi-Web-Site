import * as React from "react";
import { useState } from "react";
import { MenuSushi, Meal } from "../types";
import { sushiMenu } from "../data";
import {
  Background,
  Body,
  Container,
  Center,
  DarkOverlay,
} from "../styles/reuseStyle";
import styled from "styled-components";
import groupBy from "lodash.groupby";
import _ from "lodash";
import Menu from "../components/menu";
import { createNonNullExpression } from "typescript";
import sushi from "../../assets/sushies.png";
import NavFrame from "../components/navFrame";

export default function MenuPage() {
  const [menuList, setMenuList] = useState<Array<MenuSushi>>(sushiMenu);
  const [showMenu, setShowMenu] = useState<Array<MenuSushi>>(sushiMenu);
  const groupedByCategory = _(menuList)
    .groupBy("category")
    .map((menu, category) => {
      return {
        category,
        menu,
      };
    })
    .value();

  const groupedBySubCategory = _(menuList)
    .filter((menu) => menu.category === "Sushi")
    .groupBy("subcategory")
    .map((menu, subcategory) => {
      return {
        menu,
        subcategory,
      };
    })
    .value();

  React.useEffect(() => {
    handleCategory("Sushi");
  }, [menuList]);

  function handleCategory(cat: string) {
    const selectedMenu = menuList.filter((menu) => menu.category === cat);
    if (cat === "Sushi") handleSubcategory("nigiri");
    else setShowMenu(selectedMenu);
  }

  function handleSubcategory(subcat: string) {
    const selectedMenu = menuList.filter((menu) => menu.subcategory === subcat);
    setShowMenu(selectedMenu);
  }

  return (
    <ContainerOut>
      <Background>
        <DarkOverlay />
        <div className="hero">
          <img src={sushi} alt="ato sushi sushi rolls" id="hero" />
        </div>
      </Background>
      <h2>Menu</h2>
      <div className="categories">
        {groupedByCategory &&
          groupedByCategory.map((group) => {
            return (
              <h3
                id={showMenu[0].category === group.category ? "picked" : ""}
                onClick={() => handleCategory(group.category)}
              >
                {group.category}
              </h3>
            );
          })}
      </div>
      <CenterS>
        <Menu menu={showMenu} />

        <div className="subcat">
          {groupedBySubCategory &&
            groupedBySubCategory.map((group) => {
              return (
                <h3
                  id={
                    showMenu[0].subcategory === group.subcategory
                      ? "picked"
                      : ""
                  }
                  onClick={() => handleSubcategory(group.subcategory)}
                >
                  {group.subcategory}
                </h3>
              );
            })}
        </div>
      </CenterS>
      <NavFrame />
    </ContainerOut>
  );
}

const ContainerOut = styled(Container)`
  overflow-y: auto;
  justify-content: flex-start;
  flex-direction: column;
  h2 {
    margin-top: 90px;
    margin-bottom: 30px;
  }

  h3 {
    text-transform: lowercase;
    color: white;
    padding: 0 35px;
    opacity: 50%;
    cursor: pointer;
  }
  h3:hover {
    opacity: 80%;
  }

  #picked {
    opacity: 100%;
  }

  .categories {
    display: flex;
    margin-bottom: 60px;
  }

  .subcat {
    position: absolute;
    left: 64px;
    h3 {
      text-align: left;
    }
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
    background-color: #474747;
  }

  .hero {
    position: absolute;
    right: -4.1%;
    transform: rotate(9deg);
    top: -8%;
    height: 130vh;
    overflow: hidden;
    div {
      width: 100%;
      height: 100%;
    }
    img {
      transform: rotate(-9deg);
      object-fit: cover;
      width: 100%;
      transform-origin: bottom right;
    }
  }
`;

const CenterS = styled(Center)`
  margin: 0;
`;
