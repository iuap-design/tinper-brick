const Brick = require('./lib/core');
const app = new Brick();

app.setRouters();

app.listen(3000, '127.0.0.1', () => {
    console.log('服务器启动');
})