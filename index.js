require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.static('build'))
app.use(express.json())
var morgan = require('morgan')
const cors = require('cors')
app.use(cors())
morgan.token('data', req => JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))

const Person = require('./models/person')

app.get('/api/info', async (req, res) => {
	const persons = await Person.find({})
	const date = new Date()
	res.send(
		`<div>
			Phonebook has info for ${persons.length} people
				<br /><br />
				${date}
		</div>`
	)
})

app.get('/api/persons', (req, res, next) => {
	Person.find({})	
		.then(persons => res.json(persons.map(person => person.toJSON())))
})

app.get('/api/persons/:id', (req, res, next) => {
	Person.findById(req.params.id)
		.then(person => {
			person 
				? res.json(person) 
				: res.status(404).end()
		})
		.catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res) => {
	Person.findByIdAndRemove(req.params.id)
		.then(person => {
			person 
				? res.status(204).end()
				: res.status(404).end()
		})
    .catch(error => next(error))
})

app.post('/api/persons', (req, res) => {
	const body = req.body

	if (!body || !body.name || !body.number) {
    return res.status(400).json({ 
      error: 'name or number missing' 
    })
	}
	
	const person = new Person({
		"name": body.name,
		"number": body.number,
	})

	person.save()
		.then(savedPerson => {
			res.json(savedPerson)
		})
		.catch(error => next(error))	
})

app.put('/api/persons/:id', (req, res, next) => {
	const body = req.body

	const person = {
		name: body.name,
		number: body.number
	}

	Person.findByIdAndUpdate(req.params.id, person, { new: true })
		.then(updatedPerson => res.json(updatedPerson))
		.catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})