module.exports = {
    async getUser(ctx, service) {
        await service.userService.storeInfo();
        ctx.body = 'getUser';
    },
    async getUserInfo(ctx) {
        ctx.body = 'getUserInfo';
    }
};