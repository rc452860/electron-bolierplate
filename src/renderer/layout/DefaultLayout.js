import React from 'react'
import './style/DefaultLayout.css'
// eslint-disable-next-line
export default class DefaultLayout extends React.Component {
  render() {
    console.log(this.props.children)
    return (
      <div>
        <div className={'title'} style={{height:'30px',width:'100%',position:'fixed',top:'0px',background:'black'}}>
            状态栏
        </div>
        {this.props.children}
      </div>
    )
  }
}
