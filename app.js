const express = require('express');
const methodOverride = require('method-override');

// const methodOverride = require('methodOverride');
const app = express();
const path = require('path');


const mainroutes = require('./src/routes/main.routes');
const shoproutes = require('./src/routes/shop.routes');
const adminroutes = require('./src/routes/admin.routes');
const authroutes = require('./src/routes/auth.routes');


const PORT = 3004;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('_method'));

app.use(express.static('public'));

app.use('/',mainroutes);
app.use('/shop',shoproutes);
app.use('/admin',adminroutes);
app.use('/auth',authroutes);

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
