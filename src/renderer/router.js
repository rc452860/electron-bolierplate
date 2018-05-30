import React from 'react';
import {Router, Route, Switch, routerRedux} from 'dva/router';
import {routerConfig} from './config/router';
import {KEY as STORE_KEY,get} from './utils/store';
import DefaultLayout from './layout/DefaultLayout';

function interceptor(app) {
  return function (location) {
    const {_store} = app;
    const {login} = _store.getState();
    if(location.pathname !== '/login' && (!login || login.status !== 'success') && !get(STORE_KEY.TOKEN)){
      _store.dispatch(routerRedux.push("/login"));
    }
  }
}

const RouterConfig = ({history, app}) => {
  const routerData = routerConfig(app);
  //设置拦截器
  history.listen(interceptor(app));
  return (
    <DefaultLayout>
      <Router history={history}>
        <Switch>
          {routerData.map(r => <Route key={r.path} path={r.path} exact component={r.component}/>)}
        </Switch>
      </Router>
    </DefaultLayout>
  )
}

export default RouterConfig;
