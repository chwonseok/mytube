import express from 'express';
import morgan from 'morgan';
import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';

const PORT = 4000;

const app = express();
const logger = morgan('dev');

app.set('view engine', 'pug');
app.use(logger);
app.use('/', globalRouter);
app.use('/user', userRouter);
app.use('/video', videoRouter);

const listeningController = () =>
  console.log(`✅ server listening on http://localhost:${PORT} ✅`);

app.listen(PORT, listeningController);

/************** Content to remember **************/
/*
  ** use()
  use()는 global middleware를 만들어 줌(어느 url에서든 작동하는)
  항상 get()전에 위치시켜야 함

  ** morgan()
  morgan()은 조금 더 정교한 logger함수, 즉 조금 더 상세한 정보를 return함
*/

/*
const homeHandler = (req, res) => {
  // return res.end(); // request를 end 시키는 mth
  return res.send('<h1>hey this is finished</h1>');
};
app.get('/', homeHandler); // route는 '/' 즉 route이며 homeHandler는 handler
*/
