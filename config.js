const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb://uwrr2obvrb4kbwnrvimy:rbgieh8nfk7EylXCh2D@byg4ii8uzy5rro8bcdfu-mongodb.services.clever-cloud.com:2008/byg4ii8uzy5rro8bcdfu"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/vajirabot1/KING-VAJIRA-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '94719199757'
global.devs = '94719199757';
global.website = 'https://github.com/vajirabot1/KING-VAJIRA-MD' //wa.me/+25000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/09ab24679fb3a297a8905.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'VAJIRA 𝐁𝐨𝐭' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Vajira' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? VAJIRA;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEFvUGc0V05vbHh2NE1jdVUvdDF5NDFQVmxzUHhHWlJURG9yckxhN1ZIOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRE9LZVo5czJabmVMa0hKZDR0SStPcSs3SDdEOVZpVE9mQVhEbTc3NGFYcz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQ3c5eHBZYnZ4ODhJS0VKcy93bHZzRFFCTEJXb01ML3hQNm1UNXVWRGtvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQWlducGRWRHYwVXlQd1QyTnFGNDV2dFFZZkhPTEJhUi9PcjBNWWlMUFhrPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNQY1dySDFjVUNUN1dYbG5kSTM5Q2VKNWdLYjJyYUxGbzFPdDRKcE5RMjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktIZ1RvTzlhQXZKZzh5ZVNaYlN0WlFndUtjOWI3NUxZODNnb29uOEp6eE09In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvM2ZlWWFzL3NQeVpoVlUzdHp1eW5qKzR0dkMrUzNiZlVJR1hLQ1ZVMnVuL0tTRzZCcllVMDVkNm1wZkN1dXVYaEFLNVFMUWNOaVp0SjZVZVdXc0hBdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIwNSwiYWR2U2VjcmV0S2V5IjoiUUZtdFpreFBPWk9GQjBkNWN5ZzI4cW5la0VlZlp2U0VReCtUSDg1OUp3QT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTk9Yek5PY2pUWEd2SjRKV2V3VWl2ZyIsInBob25lSWQiOiI2MGFiZDVjYi1mOWZmLTQ4ZTItODY4NC1jYzZiMWM1MDlmYTciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUzhSemlaWmRKSTRud1NBT1A5UDNzTlNUT3MwPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTUFnMFJaUFM1MEZYSWhURTA0TXE2MU1aWEE9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNQblgzTzBERUl5L3I2c0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjViR3V6QVdVUW9SZEsrUWFISGN6aG9zZTk1bElHNyt6QU1OdXMvTW90M1E9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkU4a1dvRUlpY1hzdnZjLzB3RStKbXNnVlgvZEkvYkY2ZWRWR0hnWXVGVzF2TDFGMlpQUWNaWXlycXpwVzZaWW5SODY1bWRnVDN1QzBERDRIdm14NUJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJFTzVEeGVKUXZlUThadnRNTU5ZVXNJaVpCVVZXek1nUTBwL040bmUyYSt5UVlhV0lXbFBRYjFFVE1wRzJEMVRtWXBDRytmcFBZalRFdXdrTWRWVklEdz09In0sIm1lIjp7ImlkIjoiMTY2MjI5ODI1NjM6OEBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxNjYyMjk4MjU2Mzo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVXeHJzd0ZsRUtFWFN2a0doeDNNNGFMSHZlWlNCdS9zd0REYnJQektMZDAifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDE1NjgzOTh9 : process.
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'vajira' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'VAJIRA-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'VAJIRA',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
