const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email"anonymous303ruby@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Anonymous2066/Suhail-Md";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ANONYMOUS " 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349137924240";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_30_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA3NyxcbiAgICAgICAgMixcbiAgICAgICAgODksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODEsXG4gICAgICAgIDc4LFxuICAgICAgICAyOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTEyLFxuICAgICAgICA2MixcbiAgICAgICAgNjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAzMixcbiAgICAgICAgNjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTksXG4gICAgICAgIDU2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgODAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwLFxuICAgICAgICA0LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNixcbiAgICAgICAgMTY5LFxuICAgICAgICA3MixcbiAgICAgICAgMTYxLFxuICAgICAgICA5NixcbiAgICAgICAgNzAsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzksXG4gICAgICAgIDExMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3NixcbiAgICAgICAgNTcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDI3LFxuICAgICAgICA5MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgODIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgODQsXG4gICAgICAgIDM5LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjExLFxuICAgICAgICAzNSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MSxcbiAgICAgICAgODksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0LFxuICAgICAgICAxODEsXG4gICAgICAgIDI2LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjhDY01BYUswdGp4RkUxdytWQWExblgxZXVaNXQvNjZoMUkzUkphWmRqUkU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm8tcDFQUVJIUXYydlI3b2V0OF9HbGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGFkOTk1MzMtZTI1Ni00YWY2LWE1OGItMDZhODE0NDE2YjU3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUwLFxuICAgICAgMTg5LFxuICAgICAgMjE4LFxuICAgICAgMTkwLFxuICAgICAgOTcsXG4gICAgICA1LFxuICAgICAgMTUzLFxuICAgICAgODgsXG4gICAgICAxNTUsXG4gICAgICAyMDMsXG4gICAgICAyMixcbiAgICAgIDE4MyxcbiAgICAgIDE2LFxuICAgICAgMTA3LFxuICAgICAgMjQzLFxuICAgICAgMjE2LFxuICAgICAgMjUsXG4gICAgICAxNzYsXG4gICAgICAxNzMsXG4gICAgICAyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDcsXG4gICAgICAxMTYsXG4gICAgICAzNCxcbiAgICAgIDEzMSxcbiAgICAgIDE0NixcbiAgICAgIDQ4LFxuICAgICAgMTMyLFxuICAgICAgMzQsXG4gICAgICA5MyxcbiAgICAgIDExNixcbiAgICAgIDIxOCxcbiAgICAgIDE4MixcbiAgICAgIDIsXG4gICAgICAxMzAsXG4gICAgICA2OCxcbiAgICAgIDI2LFxuICAgICAgODUsXG4gICAgICA3MSxcbiAgICAgIDYyLFxuICAgICAgMjE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlkyOUtOTVdaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTM3OTI0MjQwOjg1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQU5PTllNT1VTXCIsXG4gICAgXCJsaWRcIjogXCIxMDQ3ODQ3NTMzNDg4NTA6ODVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2pteVpVREVKYXJyYlVHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSNTM4eWNoTDVIVUZ1ZlBkYnlCYlpxQ1NhbkJ1T3pkRUdHR2didDhyZUIwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkNtazRVZnBEcTFLTWRFalQ4amUrTDY1UU1BN0RDQ1gwbnhIZU5FSUVIZDQzRFZ1NjdxYkJDVWN3TlB2V0ZXRXlnMVhzakRkU0xENXBNc1cremR2SEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjNPVWJVTjhBS2JrWWxhanZjeXgyN0NTRHN6TkpueGx6WTV4VVdQdk5nOXRMUVAvZnZGeWR2MXZGcCs0dktaK1NtR2p1aXZLR3VUN2hkMTMrR1NrZGp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzc5MjQyNDA6ODVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjUwNDYwMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZmOVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRmY5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiRDRzclhoNUZKOVpJZVlFaE5wN29qU3M3VGd5WGpiL1hTc1lWckg5QUIzdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NTA1NTU3NTIsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjUwNDU3NzI1MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "dick",
  packname: process.env.PACK_NAME || "pussy",
  botname : process.env.BOT_NAME  || "BOT?",
  ownername:process.env.OWNER_NAME|| "ANONYMOUS?",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "ANONYMOUS"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "composing", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
