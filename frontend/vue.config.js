// vue.config.js
module.exports = {
    outputDir: '../public',
    css: {
        sourceMap: true
    },
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://lartify.ddev.site'
            },
            '^/404': {
                target: 'http://lartify.ddev.site'
            }
        }
    },
    indexPath: process.env.NODE_ENV === 'production'
        ? '../resources/views/index.blade.php'
        : 'index.html'
};
