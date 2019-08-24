
export class mainController {
    constructor(appService) {
        this.appService = appService
        this.init()
    }
    
init(){
    console.log(3333)
    this.appService.getPhoto()
}
}

mainController.$inject = ["appService"]


//appService.getPhoto()