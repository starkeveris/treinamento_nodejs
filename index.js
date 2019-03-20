const app = require('./config/express')();

app.listen(process.env.PORT, () => {
    console.log('The server is running on the port, ['+process.env.PORT+']!');
});