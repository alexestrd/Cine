import {Request, Response } from 'express';
import Pool from 'mysql'

import pool from '../database';

class MoviesController{

    public async list (req: Request, res: Response): Promise<void> {
        const movies = await pool.query('SELECT * FROM peliculas');
        res.json(movies);
}
    public async getOne(req: Request, res : Response) : Promise<any>{
        const {nombre_p} = req.params;
        const movies =  await pool.query('SELECT * FROM peliculas WHERE nombre_p = ?', [nombre_p]);
        if(movies.length > 0){
            return res.json(movies[0])
        }
        res.status(404).json({text: "La pelicula no existe"});
    }

    public async create(req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO peliculas set ?', [req.body])
        console.log(req.body);
        res.json({text: "Pelicula creada"});

    }
    public async delete(req: Request,res: Response):Promise<void>{
        const {nombre_p} = req.params;
        await pool.query('DELETE FROM peliculas WHERE nombre_p = ?', [nombre_p]);
        res.json({message: 'Pelicual eliminada '});
    }
    public async update(req: Request,res: Response): Promise<void>{
        const {nombre_p}= req.params;
        await pool.query('Update peliculas set ? WHERE nombre_p = ?', [req.body,nombre_p]);
        res.json({message: 'Pelicula Actualizada '});
    }

}


const moviesController = new MoviesController();
export default moviesController;