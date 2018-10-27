import express from "express"
import { readFileSync } from "fs";

let app = express()

app.get('/', (req, res) =>
{
	res.send(readFileSync('./index.html').toString())
})
app.get('/done', (req, res) =>
{
	res.send(readFileSync('./done.html').toString())
})

console.log('starting server...')

app.listen(8080, () =>
{
	console.log(`server started!`)
})