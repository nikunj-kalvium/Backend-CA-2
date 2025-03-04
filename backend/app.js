const express = require('express')
const schema = require('./schema')

const app = express();


app.post('/foot', async (req, res)=>{
    try{
        const users = new User(req.body);
        await save();
        res.status(201).json(users);

    }
    catch(error){
        console.error('Please write your email and password', error)
        res.status(500).json({error: error.message})
    }
})

app.get('/foot', async (req, res) => {
    try{
        const user = await User.find(req.body);
        res.status(200).json(user)
    }
    catch(error){
        console.error('Error: Cannot get your data:', error)
        res.status(500).json({error: error.message})
    }
});

const PORT = process.env.PORT || 3331
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost${PORT}`);
})