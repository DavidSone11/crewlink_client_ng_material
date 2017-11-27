module.exports = function(app, express) {
    
    app.use(express.static(__dirname + '/public_dev'));
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade'); //extension of views

    //development configuration
    if(process.env.NODE_ENV === 'development') {
        app.use(express.errorHandler({
            dumpExceptions: true,
            showStack: true
        }));
    }

    //production configuration
    if(process.env.NODE_ENV === 'production') {
        app.use(express.errorHandler());
    }

};