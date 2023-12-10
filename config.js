const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("942829204")
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
  sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID || 'VAJIRA;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ01QT3JBZVphTnhuSmkzVy9JQXdGZFNCM0gvU0VjT0ltQXFZUXZyak5rTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclJxY0R4VmNFc3d0ZjI3TTU3VW5sSEtITFlqTjlkNGhja0ZIQ2s0dDVpRT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4UDhxeWl4Q0pLempKVi9JMWgrc0I0WWJ5d2dIaFlDOXhIczZlVEd4UTNrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZVHVtN1g3a2dnNHRPZHR6OE1ROWVDdjRXWGVDemxTMlFDVEYzNWJBWFh3PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndLTjFjNkYra00zRUs2a1hORU1JRFNnemZGczZjYWJmcGNPUWdwYUFlM2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZGbWJEVk8zSjZ6S3RyV1U3andtanM5aUltanFOTDRJTDRNRm5mREtTUXc9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVMG5kTUF5Q2pNM29LMWxiUlkrYStqL244Sm1YTzBrQ2hBeTNnc1lYYmVzZ0hVTzF1RVdXb25lVk9sUTVTaUprd3RlbXY5ZEZIeWtYTG1rbUFtNkVDZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE4MiwiYWR2U2VjcmV0S2V5IjoiZlUyREl0aEtpVHNOeHRtcE5wRVNxb3daTFMvU0lhSzJqV2xTWmhSRDhEbz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTm5BcVlFaENScS1iV2FWVEhLNmU1dyIsInBob25lSWQiOiJjOTVlM2M5Yy04MDgxLTRjNWMtODI4My1kMzlkYjZjYzJkMWMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibW0zMWdTQWU4bDJ5U2hBMnRWV0Yyb0tFLy9vPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGV1pmdmdSS2dWMFJjSzZQQnc0WkdWT3pPbzA9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNQZkN5cmNDRU9xdDE2c0dHQVE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlpjMHg4SllmV0xoc0hscGZ1SUMzU2o0Z1hYLzB2NjFEeFc4ZkV2NGNsQkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjAvOFJmRDI1T25GdDNtQlh2bG5SS3FOUHBMcmp1WWpBS0d5Y0NqdHJwVG1MQnpQanVPdUdoR2R4ZmIzeGZGSGlUS1ZNcTBibDNaNnRkOHlTcWFxRkN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJrd0FCSlMyc3N0SnRteHU5OVpYUVJQNTdwMGdaN2VJUGZjUnIwZWVmMEgvTWhPK1gzdDdid2xMWFdJNE1aU2s3OEE3S0l2MDFiZzdmRCtrRkFwWnBBUT09In0sIm1lIjp7ImlkIjoiMTY2MjI5ODI1NjM6MzdAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTY2MjI5ODI1NjM6MzdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV1hOTWZDV0gxaTRiQjVhWDdpQXQwbytJRjEvOUwrdFE4VnZIeEwrSEpRUyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMjIyMTU1MH0='
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
