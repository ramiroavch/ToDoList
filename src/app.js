import express from "express";
import routes from "../common/routes.js"

const app = express();

//--importing routes

//---settings
app.set('port', process.env.PORT || 3001);
app.use(express.json());
app.use('/',routes);

app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
});