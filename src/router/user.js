const mapRouter = require('../lib/routerLoader').mapRouter;

const getUser = async (ctx,next) => {
    ctx.body = "getUser";
}

const getUserInfo = async (ctx, next) => {
    ctx.body = 'getUserInfo';
}

/**
 * 规范：HTTP方法放在前面，path放在后面，中间用空格隔开
 */

 module.exports = {
     'get /':getUser,
     'get /getUserInfo': getUserInfo
 }