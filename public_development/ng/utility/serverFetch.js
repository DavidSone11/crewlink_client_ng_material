
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

        this.successCallBackAfter(url);

};