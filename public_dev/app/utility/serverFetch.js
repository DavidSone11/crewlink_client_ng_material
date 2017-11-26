
' use strict';
var serverFetch = function (url, subLinks, https, errorCallBackBefore, successCallBackAfter, callBackAfterError, isWait) {

    this.url = url;
    this.subLinks = subLinks;
    this.errorCallBackBefore = errorCallBackBefore;
    this.successCallBackAfter = successCallBackAfter;
    this.callBackAfterError = callBackAfterError;
    this.isWait = isWait;


        if(this.url==''){
            this.errorCallBackBefore("URL IS EMPTY");
        }
        this.processFetch = function(tableState){

            console.log(tableState);

        }
        
        this.add = function(){
            var a= 10;
            var b = 20;
           
		}.bind(this);
        
        this.successCallBackAfter(url);	

};