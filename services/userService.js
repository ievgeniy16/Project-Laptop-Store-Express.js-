const fs = require('fs');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const JWT_SECRET = 'dsdfsgrgvdfvdgff3fsgd';


const filename = './models/usersData.json';
const data = JSON.parse(fs.readFileSync(filename));

// record file for create/update/delete
async function persist() {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, JSON.stringify(data, null, 2), (err) => {
            if (err == null) {
                resolve();
            } else {
                reject(err);
            }
        });
    });
}


async function register(email, username, password) {
    const result = data.find(u => u.email == email);
    if (result) {
        throw new Error('Email is taken');
    }
    
    const regexp = /^(\w)+\@(\w)+\.(\w)+$/i;
    const validEmail = regexp.test(email);

    if (!validEmail) {
        throw new Error('Email may contain only english letter and numbers')
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
        id: createIdUser(),
        email,
        username,
        hashedPassword
    };

    data.push(user);
    persist();

    const token = createSession(user);
    return token;
}


async function login(email, password) {
    const user = data.find(u => u.email == email.trim());
    if (!user) {
        throw new Error('Incorrect username or password');
    }

    const passMatch = await bcrypt.compare(password.trim(), user.hashedPassword);
    if(passMatch == false) {
        throw new Error('Incorrect username or password');
    }

    const token = createSession(user);
    return token;
}


function createIdUser(){
    return 'xxxxxxxx-xxxx'.replace(/x/g, () => (Math.random() * 16 | 0).toString(16));
}


function createSession({ id, email, username }) {
    const payload = {
        id,
        email,
        username
    };

    const token = jsonwebtoken.sign(payload, JWT_SECRET);
    return token;
}


function verifyToken(token) {
    return jsonwebtoken.verify(token, JWT_SECRET);
}



module.exports = {
    register,
    login,
    verifyToken
}