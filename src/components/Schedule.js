import React, { Component } from 'react'

class Schedule extends Component {
  render() {
    //render시, Schedule 컴포넌트로 this.props.schedule 이 주어진다.
    //그러면 그걸 반복문돌려주면서
    //   <li>
    //     <a href="Sunday">Sunday</a>
    //   </li> 이런 형태로 scheduleList 라고 만들어 주어야한다. (HTML template 이라고 생각하면 된다.)
    // 만든 scheduleList는 return 된다.
    let scheduleList = []
    let scheduleProps = this.props.schedule
    for (let i = 0; i < scheduleProps.length; i++) {
      scheduleList.push(
        <li>
          <a href={'/content/' + scheduleProps[i].title}>{scheduleProps[i].docs}</a>
        </li>,
      )
    }

    return <ul>{scheduleList}</ul>
  }
}

export default Schedule
