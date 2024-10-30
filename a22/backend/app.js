import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import signupModel from './signupSchema.js'
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = 1010
const DBURI = 'mongodb+srv://farrukhboss38:farrukhkhan0027@firstdb.okoxs.mongodb.net/?retryWrites=true&w=majority&appName=FirstDB'

mongoose.connect(DBURI)
mongoose.connection.on('connected',()=>console.log('MongoDB connected...'));
mongoose.connection.on('error',(err)=>console.log('MongoDB error...',err));

app.post('/',async(req,res)=>{
    const {name,email,password} = req.body

     
    const userAccountData = {
        name,
        email,
        password
    }

    await signupModel.create(userAccountData).then((response)=>{
        res.send('Account created')
    })
})













app.get('/',(req,res)=>{
    res.send('Server Started...')
})


//Server Starting
app.listen(PORT,()=>{
    console.log('Server Started...');
    
})