const express = require('express')
const app = express()
app.use(express.json())
var morgan = require('morgan')
const cors = require('cors')

app.use(cors())
app.use(express.static('build'))

let persons = require('./persons')

morgan.token('data', req => JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))

app.get('/api/info', (req, res) => {
	const date = new Date()
	res.send(
		`<div>
			Phonebook has info for ${persons.length} people
				<br /><br />
				${date}
		</div>`
	)
})

app.get('/api/persons', (req, res) => {
	res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
	const id = Number(req.params.id)
	const person = persons.find(person => person.id === id)

	person ? res.json(person) : res.status(404).end()
})

app.delete('/api/persons/:id', (req, res) => {
	const id = Number(req.params.id)
	persons = persons.filter(person => person.id !== id)

	res.status(204).end()
})

app.post('/api/person', (req, res) => {
	const id = Math.floor((Math.random()+1)*999)
	const body = req.body

	if (!body.name || !body.number) {
    return res.status(400).json({ 
      error: 'name or number missing' 
    })
	}

	if (persons.some(item => item.name === body.name)) {
    return res.status(400).json({ 
      error: 'name already exists' 
    })
	}
	
	const person = {
		"name": body.name,
		"number": body.number,
		"id": id
	}

	persons = persons.concat(person)
	
	res.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})