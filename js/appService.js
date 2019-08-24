export class appService {

    constructor() {
        this.appService = appService
    }
        getPhoto() {
                const promise = fetch('https://makevoid-skicams.p.mashape.com/cams.json ', {
                    method: 'GET',
                    headers: {
                        'X-Mashape-Key': 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw'
                    }
                }).then(ret => ret.json()).then(data => console.log('Data', data))
                console.log('promise', promise)
            }


}
