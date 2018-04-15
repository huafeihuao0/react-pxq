import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router';
import FastClick from 'fastclick';
import registerServiceWorker from './registerServiceWorker';
import {AppContainer} from 'react-hot-loader'; //app热加载
import {Provider} from 'react-redux';   //store提供者
import store from '@/store/store';

import './utils/setRem';
import './style/base.css';

(function init()
{
    //渲染根组件
    renderRoot(Route);
    //热替换
    hotReplace();

    //附着点击事件
    FastClick.attach(document.body);
    //注册后台缓存服务
    registerServiceWorker();
})()


/**
 * 渲染根组件
 * */
function renderRoot(Route)
{
    ReactDOM.render(
        //绑定redux、热加载
        <Provider store={store}>
            <AppContainer>
                <Route />
            </AppContainer>
        </Provider>,
        document.getElementById('root'),//root挂载点
    )
}

/**
* 热替换
* */
function hotReplace()
{
    if (module.hot)
    {
        module.hot.accept('./router', () =>
        {
            renderRoot(Route);
        })
    }
}


