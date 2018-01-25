/**
 * 路由配置文件
 * @param {*} app 
 */
module.exports = (app) => {
    return {
        'get /': app.controller.user.getUser
    }
}