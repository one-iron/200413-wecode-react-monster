import React, { Component } from "react";
import Card from "../Card/Card"
import "./CardList.css";

/***********************************************************
  Card 컴포넌트를 import 한 뒤, props로 내려받은 데이터에 
  map 함수를 호출해 각각 다른 데이터를 가진 Card 컴포넌트들을 리턴해주세요!
  Card 컴포넌트에서 필요로 하는 데이터는 id, name, email 입니다.
***********************************************************/

class CardList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const monsterCard = this.props.monsters.map((monster) => (
      <Card key={monster.id} id={monster.id} name={monster.name} email={monster.email} />
    )
    )
    return (
      <div className="card-list">
        {monsterCard}
      </div>
    )
  }
}

export default CardList;
//내가 찍는 대상의 데이터 타입이 정확히 무엇인지 인지하자!
//map에서 받는 인자를 제대로 인지 못하여서 실수를 범함