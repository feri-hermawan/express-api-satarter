import express from 'express'
import TestController from '../controller/TestController.js';
const publicRouter = new express.Router();

publicRouter.get('/test', TestController.HelloTest)

export {
    publicRouter
}