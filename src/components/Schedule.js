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
          <a
            href={'/content/' + scheduleProps[i].title}
            // data-id={scheduleProps[i].id}
            onClick={(e) => {
              e.preventDefault() //이걸하지 않으면 원래 onClick의 실행방식이 실행되면서 화면 새로고침이 된다.

              this.props.onChangePage(scheduleProps[i].id) ////scheduleProps[i].id 이렇게만 넣어주니까 클릭해도 selected_day가 바뀌지 않는다.
              // console.log(scheduleProps[i].id)
              //debugger
            }}
          >
            {scheduleProps[i].title}
          </a>
        </li>,
      )
    }

    return <ul>{scheduleList}</ul>
  }
}

export default Schedule
