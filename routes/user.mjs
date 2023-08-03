import { Router } from 'express';

import { 
    usersGet, 
    usersPut, 
    usersPost, 
    usersDelete, 
    usersPatch } from "../controllers/users.mjs";

export const router = Router();

router.get('/', usersGet );

router.put('/:id',usersPut);

router.post('/', usersPost );

router.delete('/', usersDelete);

router.patch('/', usersPatch);