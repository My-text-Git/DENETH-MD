const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID|| "F783RBDY#dWGUnPbgVx6tCR3Do8vzdwOk58E3fGGtsFQUMfrBLTI",
MONGODB: process.env.MONGODB|| "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/",
ALIVE_IMG: process.env.ALIVE_IMG || "https://iili.io/dbFAKoG.jpg",
AUTO_READ_CMD: process.env.AUTO_READ_CMD || "true",
AUTO_BIO:"true",
AUTO_VOICE:"true"
};