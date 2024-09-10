const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

const usersRoutes = require('/Server/users');

app.use('/api', usersRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
