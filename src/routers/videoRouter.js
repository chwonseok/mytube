import express from 'express';
import { edit, see, remove, upload } from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get('/:id(\\d+)', see);
videoRouter.get('/:id(\\d+)/edit', edit);
videoRouter.get('/:id(\\d+)/remove', remove);
videoRouter.get('/upload', upload); // 위치가 '/:id'보다 위에 있어야 함

export default videoRouter;
