import React from 'react'
import './style/DefaultLayout.css'
import {remote} from 'electron'
import {Icon} from 'antd'

// eslint-disable-next-line
export default class DefaultLayout extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username:'sakura',
    }
  }
  render() {
    console.log(this.props.children)
    return (
      <div>
        <div className={'drag header'}>
            <div className={'header_top'}>
              <p className={'header_title no_drag'}>
                {this.state.username}
              </p>
              <div className={'header_button no_drag'}>
                <span>
                  <Icon onClick={
                    () => {
                      remote.getCurrentWindow().minimize()
                    }
                  } type="down" />
                </span>
                <span>
                  <Icon onClick={
                    () => {
                      remote.getCurrentWindow().close()
                    }
                  } type="close" />
                </span>
              </div>
            </div>
        </div>
        {this.props.children}
      </div>
    )
  }
}
