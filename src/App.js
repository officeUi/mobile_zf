

import React, { Component } from 'react'
import{HashRouter,BrowserRouter,Link,Route} from 'react-router-dom'
import Home from './Home'
import CityList from './CityList'
export default class App extends Component {
  render() {
    return (
      <HashRouter>
        {/* 导航 */}
        <ul>
          <li>
            <Link to="/home">首页</Link>
          </li> <li>
            <Link to="/citylist">城市选择页面</Link>
          </li>
        </ul>
        {/* 路径和页面组件的关系 */}
        <Route path='/home' component={Home}/>
        <Route path='/citylist' component={CityList}/>
      </HashRouter>
    )
  }
}
