import React from 'react'
import './style/DefaultLayout.css'
import { remote } from 'electron'
import { Icon } from 'antd'

// eslint-disable-next-line
export default class DefaultLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'sakura',
      inHead: false
    }
  }

  drag() {
    const header = document.getElementsByClassName('header')[0];
    if (header) {
      header.addEventListener('mousedown', function (e) {
        this.x = e.screenX;
        this.y = e.screenY;
        var [winX, winY] = remote.getCurrentWindow().getPosition();
        this.winX = winX;
        this.winY = winY;
        this.mousedown = true;
      })
      header.addEventListener('mouseup', function (e) {
        this.x = 0;
        this.y = 0;
        this.mousedown = false;
      })
      header.addEventListener('mousemove', function (e) {
        if (this.mousedown) {
          var x = this.x - e.screenX;
          var y = this.y - e.screenY;
          x = this.winX - x;
          y = this.winY - y;
          remote.getCurrentWindow().setPosition(x, y);
        }
      })
    }
  }

  intoHead(e) {
    this.setState({
      inHead: true
    })
  }

  leaveHead(e) {
    this.setState({
      inHead: false
    })
  }

  componentDidMount() {
    this.drag();
  }
  render() {
    return (
      <div>
        <div onMouseEnter={this.intoHead.bind(this)} onMouseLeave={this.leaveHead.bind(this)} className={'header'}>
          <div className={'header_top'}>
            <p className={'header_title'}>
              {this.state.username}
            </p>
            <div className={this.state.inHead ? 'header_button in_head' : 'header_button'}>
              <span>
                <Icon className={'title_icon'} onClick={
                  () => {
                    remote.getCurrentWindow().minimize()
                  }
                } type="down" />
              </span>
              <span>
                <Icon className={'title_icon'} onClick={
                  () => {
                    remote.getCurrentWindow().close()
                  }
                } type="close" />
              </span>
            </div>
          </div>
          <div className={'head_foot'}>
            <div className={'head_info'}>
              当前没有连接
            </div>
            <div className={'head_user_remain'}>
                {`剩余:${12}天`}
            </div>
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
}
