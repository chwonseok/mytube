import express from 'express';

const PORT = 4000;
const app = express();

const loggerMdw = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  return next();
};

const homeHandler = (req, res) => {
  // return res.end(); // request를 end 시키는 mth
  return res.send('<h1>hey this is finished</h1>');
};

/*
  use()는 global middleware를 만들어 줌(어느 url에서든 작동하는)
  항상 get()전에 위치시켜야 함
*/
app.use(loggerMdw);

app.get('/', homeHandler); // route는 '/' 즉 route이며 homeHandler는 handler

const listeningController = () =>
  console.log(`✅ server listening on http://localhost:${PORT} ✅`);

app.listen(PORT, listeningController);
