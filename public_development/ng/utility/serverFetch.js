
' use strict';
var serverFetch = function (url, subLinks, https, callBackBefore, callBackAfter, callBackAfterError, isWait) {

    this.url = url;
    this.subLinks = subLinks;
    this.callBackBefore = callBackBefore;
    this.callBackAfter = callBackAfter;
    this.callBackAfterError = callBackAfterError;


        this.callBackBefore(url);

};