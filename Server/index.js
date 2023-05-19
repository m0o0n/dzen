require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const http = require('http')
const { Server } = require('socket.io')
const models = require('./models/models')
const router = require('./routes/index')
const path = require('path')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const { disconnect } = require('process')
const PORT = process.env.PORT || 5000


const app = express()
app.use(cors())
app.use(express.json())
app.use(fileUpload({}))

app.use('/api', router)
app.use(express.static(path.resolve(__dirname, 'static')))
const server = http.createServer(app)
app.use(errorHandler)

app.get('/', (req, res) => {
    res.status(200).json({ message: 'working' })
})


const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    }
})

io.on('connection', (socket) => {
    socket.on('userCount', (_, callBack) => {
        callBack(socket.client.conn.server.clientsCount)
        socket.broadcast.emit('userCount', socket.client.conn.server.clientsCount)
    })

    socket.on('disconnect', () => {
        socket.broadcast.emit('userCount', socket.client.conn.server.clientsCount)
        console.log("----------- Disconnect --------")
    })
})

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        server.listen(PORT, () => console.log(`Server have been started on Port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

