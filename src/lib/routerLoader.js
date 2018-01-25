const router = require('koa-router');
const Router = new router();
const fs = require('fs');

// 这里引入service
const services = require('./controllerLoader').loadService();


/**
 * 返回router中间件
 */
const setRouters = (app) => {
    const routers = require('../router/config')(app);
    const svs = {};
    services.forEach((service) => {
        svs[service.name] = service.module;
    })
    Object.keys(routers).forEach((key) => {
        const [method, path] = key.split(' ');
        Router[method](path, (ctx) => {
            const handler = routers[key];
            handler(ctx, svs);
        })
    })
    return Router.routes()
}

module.exports = setRouters;