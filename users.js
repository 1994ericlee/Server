const express = require('express');
const router = express.Router();

let users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@doe.com',
        password: '123456',
        worker_Id: 'PO56',
        mac_Address: '00:01:FC:D5:CE:A5',
    },
    {
        id: 2,
        name: 'Jane Doe',
        email: 'jane@doe.com',
        password: '123456',
    },
];

router.get('/users', (req, res) => {
    res.json(users);
});

router.get('/users/:id', (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    res.json(user);
});

router.get('/login/:worker_Id/:mac_Address', (req, res) => {
    const user = users.find(user => user.worker_Id === req.params.worker_Id && user.mac_Address === req.params.mac_Address);
    if (user) {
        res.json({ login_result: true });
    } else {
        res.json({ login_result: false });
    }
});

router.get('/login/', (req, res) => {
    const worker_cd = req.query.worker_cd;
    const mac_address = req.query.mac_address;
    const user = users.find(user => user.worker_Id === worker_cd && user.mac_Address === mac_address);
    console.log(worker_cd, mac_address);
    if (user) {
        res.json({ login_result: true });
    } else {
        res.json({ login_result: false });
    }
});





router.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.json(user);
});

module.exports = router;

    
