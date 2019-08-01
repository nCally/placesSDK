window.PlacesApi = (function () {
    function class_1(sdkKey) {
        this.key = sdkKey;
    }
    class_1.prototype.sayMyName = function () {
        console.log(this.key);
    };
    return class_1;
}());
