'use strict';
export class offersController{
    static get(req, res, next){
        res.status(200).json({
            'data' : [
                {
                    'id': 1,
                    'title': 'Vacanza Caraibi',
                    'description': 'Offerta! Viaggio ai Caraibi! incredibile offerta posta dal nostro team 2 persone VOLO + HOTEL, colazione inclusa, wi-fi! Cosa aspetti prenota ora!',
                    'img': 'img/vacanza_1.jpg',
                    'price': 700,
                    'discount' : 20.5,
                    'qnt_target': 20,
                    'qnt_reached':19,
                    'expire_date': Date.now(),
                    'fee': 40,
                    'creationTime': Date.now()
                },
                {
                    'id': 2,
                    'title': 'Vacanza Cerrano',
                    'description': 'Offerta! Viaggio a Cerrano! incredibile offerta posta dal nostro team 2 persone VOLO + HOTEL, colazione inclusa, wi-fi! Cosa aspetti prenota ora!',
                    'img': 'img/vacanza_1.jpg',
                    'price': 300,
                    'discount' : 14.5,
                    'qnt_target': 20,
                    'qnt_reached':19,
                    'expire_date': Date.now(),
                    'fee': 40,
                    'creationTime': Date.now()
                }
            ]
        });
    }

    static show(req, res, next){
        res.status(200).json({
            'data' : {
                'id': 1,
                'title': 'Vacanza Caraibi',
                'description': 'Offerta! Viaggio ai Caraibi! incredibile offerta posta dal nostro team 2 persone VOLO + HOTEL, colazione inclusa, wi-fi! Cosa aspetti prenota ora!',
                'img': 'img/vacanza_1.jpg',
                'price': 700,
                'discount' : 20.5,
                'qnt_target': 20,
                'qnt_reached':19,
                'expire_date': Date.now(),
                'fee': 40,
                'creationTime': Date.now()
            }
        });
    }
}