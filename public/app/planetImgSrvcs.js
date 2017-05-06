angular.module('myStarWarsApp')
    .service('planetImgSrvcs', function(){
        const images = [{
            image: './app/images/Alderaan.jpg',
            name: "Alderaan",
            imageLife: './app/images/alderaanLiving.png'
        },
        {
            image: './app/images/yavinIV.jpg',
            name: "Yavin IV",
            imageLife: './app/images/yavinLiving.jpg'
        },
        {
            image: './app/images/Hoth.jpg',
            name: "Hoth",
            imageLife: './app/images/HothLiving.jpg'
        },
        {
            image: './app/images/Dagobah.jpg',
            name: "Dagobah",
            imageLife: './app/images/dagobahLiving.jpg'

        },
        {
            image: './app/images/Bespin.png',
            name: "Bespin",
            imageLife: './app/images/bespinLiving.jpg'
        },
        {
            image: './app/images/endor.jpg',
            name: "Endor",
            imageLife: './app/images/endorLiving.jpg'
        },
        {
            image: './app/images/naboo.png',
            name: "Naboo",
            imageLife: './app/images/nabooLiving.png'
        },
        {
            image: './app/images/Coruscant.jpg',
            name: "Coruscant",
            imageLife: './app/images/CoruscantLiving.jpg'
        },
        {
            image: './app/images/Kamino.jpg',
            name: "Kamino",
            imageLife: './app/images/kaminoLiving.png'
        },
        {
            image: './app/images/Geonosis.jpg',
            name: "Geonosis",
            imageLife: './app/images/geonosisLiving.jpg'
        }
        
        ]
        this.getImages = function(){
            return images;
        }
        
    })