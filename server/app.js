const express = require ('express')
const app = express()
const apiMoviesRouter = require('./routers/apiMovieRoute')

app.use(express.urlencoded({extended: false}));
app.use(express.json())
/* const mainRouter = require('./routers/mainRoutes') */

app.listen(3002,() => console.log('Server running http://localhost:3002'))

app.set('view engine', 'ejs');

app.use('/api/movie', apiMoviesRouter)
/* app.use('/',mainRouter) */
