//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2348086541281";
global.sudo = process.env.SUDO || "22382775535";
global.owner = process.env.OWNER_NUMBER || "22382775535";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1A2dXNic2EvNjFxekRFczM4YWFNd0FNTEc2UThRd2dJcmx2Y2cyMzZVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXhxL2Q5Vncva0JnOXFaKzkzdHR3bkcyYzVQR25TUjJMS0hXTTh0bXBWOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrT2VvWjE0eXZYQVNRemhlMnQ3c1hIallNUE5Qc2FtSlVFdW9MN2ZIYUgwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDYXVZbUZNckJxUEdITFJOcjkvKzVBdzBhOGtVRWoraUtFMktESnQ2SkZZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFLWURyRWtrS1hacmRwT053Z2pGdGRMWDgyWGNEQk9GUkx3eTVPTnAzVlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBXM2hpN2xLKzNVbCtiTnM1Sk02enlBTUFMNThqZXBEbHE4NS9uQ1VmMkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUtoU1V0dGpkTWhRS0hsN01FTnRXanhCT0xNRGRRUlUvc2krRGpIUEgwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUEx5MEt4ajYydDJZL2J0WDVNRVNuaEx0MzBLMWpKdS9zYlpHa1ZjSUhDRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBBbUR0WjBpNHRPTllNZHlkbmVkZ0d5ZEJUVDZWZ2ZnQm9ETVUrU0R6eHl5Rjh5dXFFRDF5S3RXWXJoZUZMV3U5ZUc0a2lERzFXTU5zNWtVRWNvYUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzksImFkdlNlY3JldEtleSI6InBWN1JCa1ZCOHdtQkNHSHg5ejVjSEdJVDg2dTNHT3AraFRqeXhLVGdvcjQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjIzODI3NzU1MzVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDhDMjRFRDE4MzRBRTE5NzIxQjkwN0U0Qzk1MjBCQzAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMzY4ODg3OX1dLCJuZXh0UHJlS2V5SWQiOjYxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6NjEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoic0ZsaUItRXZRdm1xbFAta1ctNzJwUSIsInBob25lSWQiOiIzYWRjOTRjZC00MjhjLTQ1MGItOGY0Yi04YmUyYjI1MjRjNGYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia29yS3R1NWpWL3RxRUk2blpmSTdLc01GaTR3PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1oTnE5OFdDK0dOcUlqVi9EUFdVS0RNcjJ5Yz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJKVktQOFJETSIsIm1lIjp7ImlkIjoiMjIzODI3NzU1MzU6MTRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05ucXRNTUJFSjNQOWJVR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im9ST2lqYVRJbHVGYWN2REZZSlB2VlhJRzliMlh1UlJibVZUVG9VT3RxM0E9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikh5cW5qMENkdWYyTWJmK3pxc3V4WEgvd0o1aEIvU3RrMk4wVUdkUGlBZjRKQWF0azRQMDJLVGZiRjYxcWV4a1A0MkZ4ZThmMEJXdFplbEtka2paNUN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJVVEo2Rk9ibzAyZGtYNUl1TUU5U0w0T3h4WEV6T0ZELzV2cTBJQU1QY2srejI3dGs3T0FYOGEwRmVXdWpublFzOHlnZU1ReG5RcHdVZzkzUytKaVpBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIyMzgyNzc1NTM1OjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFFVG9vMmt5SmJoV25Md3hXQ1Q3MVZ5QnZXOWw3a1VXNWxVMDZGRHJhdHcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM2ODg4NzQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRHpjIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "#",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "Ahmed",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "Ahmed-md",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
