import React, {Component} from 'react';

//引入路由组件
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';

/**
* 导入各页面组件
* */
import asyncComponent from '@/utils/asyncComponent';
import HomePage from "@/pages/HomePage";
const RecordAsyncPage = asyncComponent(() => import("@/pages/record/record"));
const HelpcenterAsyncPage = asyncComponent(() => import("@/pages/HelpcenterPage"));
const ProductionAsyncPage = asyncComponent(() => import("@/pages/ProductionPage"));
const BalanceAsyncPage = asyncComponent(() => import("@/pages/BalancePage"));


/**
* 【路由】
* */
class RouteConfig
    extends Component
{
    render()
    {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/record" component={RecordAsyncPage}/>
                    <Route path="/helpcenter" component={HelpcenterAsyncPage}/>
                    <Route path="/production" component={ProductionAsyncPage}/>
                    <Route path="/balance" component={BalanceAsyncPage}/>
                    <Redirect to="/"/>
                </Switch>
            </HashRouter>
        )
    }
}

export default RouteConfig