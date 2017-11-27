module.exports = function(app, express,path) {
    
   
    
    

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