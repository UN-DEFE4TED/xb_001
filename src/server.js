
const dotenv = require('dotenv')

const app = require('./app');
dotenv.config({path: './.env'});

const PORT = process.env.PORT || 80;

app.listen(PORT, ()=>{
    console.log(`\u001b[1;36m Server listing on http://127.0.0.1:${PORT} \u001b[0m`)
})