import {
    appService
} from './js/appService.js'

export class mainController {
    constructor(appService) {
        console.log(1)
        this.appService = appService;
        
       this.photo = appService.getPhoto()
        
    }

}
mainController.$inject = ['appService'];