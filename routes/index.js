import error from "#middlewares/error";

const routes = (app) => {
  app.use('/', (req, res) => {
    res.status(200).send('Server is Running')
  });

  app.use(error)
}

export default routes
