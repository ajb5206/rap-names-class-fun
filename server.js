const express = require('express')
const app = express() // app holds express
const PORT = 8000

const savage = {
	'age': 29,
	'birthName': 'Something something SOmething',
	'birthLocation': 'London, England'
}

app.get('/', (request, response) =>{
	response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) =>{
	response.json(savage)
})

app.listen(PORT, () => {
	console.log(`The server is running on ${PORT}`)
})