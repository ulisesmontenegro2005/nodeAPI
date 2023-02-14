import express from 'express';
import routes from './src/routes/routes.js';

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./public'))

app.use('/api', routes)

const PORT = procces.env.PORT || parseInt(process.argv.slice(2)) || 8080

app.listen(PORT, () => {
    console.log(`Server listening in the port: ${PORT}`);
})
