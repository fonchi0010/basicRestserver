import  express  from 'express';
import 'dotenv/config';
import cors from 'cors';
import { router } from "../routes/user.mjs";

export class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT

        this.usersPath = '/api/users'

        this.middlewares();

        this.routes();
    }

    middlewares(){
        this.app.use(cors());

        this.app.use( express.static('public'));

        this.app.use( express.json() );
    }

    routes(){
       this.app.use( this.usersPath, router );
    }

    listen(){
        this.app.listen( this.port, () =>{
            console.log('Server running in port', this.port );
        });
    }


}