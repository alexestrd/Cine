import {Router} from 'express';

import moviesController from '../controllers/moviesController';

class MoviesRoutes{

    public router : Router = Router();

    constructor(){
        this.config();
    }
    
    config(): void {
        this.router.get('/',moviesController.list);
        this.router.get('/:nombre_p',moviesController.getOne);
        this.router.post('/',moviesController.create);
        this.router.delete('/:nombre_p',moviesController.delete);
        this.router.put('/:nombre_p',moviesController.update);
    }
}

const moviesRoutes =  new MoviesRoutes();
export default moviesRoutes.router;