import React, { Component } from 'react'

class Mantra extends Component {
  render() {
    function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    } //Mantra 중 임의로 아무거나 가져오기 위해 랜덤 숫자 반환하는 함수 이용
    let todayMantra = ''
    let mantraProps = this.props.docs
    let randomNumber = getRandom(1, mantraProps.length)
    for (let i = 0; i < mantraProps.length; i++) {
      if (randomNumber === mantraProps[i].mantraid) {
        todayMantra += mantraProps[i].docs
        break
      }
    }
    return <div>{todayMantra}</div>
  }
}

export default Mantra
