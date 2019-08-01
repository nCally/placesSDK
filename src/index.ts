/**
 * The Places SDK is a service that returns information 
 * about places through a HTTP request
 */

interface Window {
    PlacesSdk: any
}

window.PlacesSdk = class {
    key:string
    constructor(sdkKey:string){
        this.key = sdkKey
    }

    confirmKey(){
        // send key to server to confirm the validity
        console.log(this.key)
    }
}