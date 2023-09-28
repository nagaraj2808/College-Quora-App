# College-Quora-Hub
Make sure mongodb and node.js is installed in your system
### step 1: create a ".env" file in server/ directory and paste the following in it 
#### Note the name should be .env it is not .env.txt
```env
SERVER_URL=http://localhost:4000/
SERVER_PORT=4000
DB_URL=mongodb://127.0.0.1:27017/SomeDB
SECRET=THISISTHEBIGGESTSECRET
```

## step 2: create a database with name CQHub 

```mongo
mongo
use CQHub
```

### step 3: add an "uploads" folder in server directory
<br />



### step 4: open 2 terminals and paste the following commands

```
cd server
npm i
npm start
```

```
cd client
npm i
npm start
```
