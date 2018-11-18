//Install express server
import express from 'express';
import { join } from 'path';

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/grab-a-beer'));

app.get('/*', function(req,res) {
    
res.sendFile(join(__dirname+'/src/grab-a-beer/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
