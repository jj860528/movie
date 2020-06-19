module.exports = {
    publicPath: './movie',
    lintOnSave: true,
    css: {
        loaderOptions: {
            sass: {
                //引入多个使用；分号隔开
                prependData: `@import "~@/common/stylus/base.scss";@import "~@/common/stylus/variable.scss";`
            },
        }
    },
}
