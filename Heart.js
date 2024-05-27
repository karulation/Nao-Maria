const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType,
    delay,
    decodeJid
} = require('@whiskeysockets/baileys')
const {
    SendGroupInviteMessageToUser
} = require("@queenanya/invite")
const Config = require("./Config")
const os = require('os')
const fs = require('fs')
const mathjs = require('mathjs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const googleTTS = require('google-tts-api')
const jsobfus = require('javascript-obfuscator')
const chalk = require('chalk')
const dictionary = require('word-definition');
const wikipedia = require('wikipedia');
const npt = require("node-periodic-table");
const pTable = require("ptable");
const mver = require('./package.json').version
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const {
    performance
} = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./Gallery/lib/uploader')
const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
    addExifAvatar
} = require('./Gallery/lib/converter')
const {
    smsg,
    getGroupAdmins,
    formatp,
    jam,
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    reSize
} = require('./Gallery/lib/myfunc')
let afk = require("./Gallery/lib/afk");

const {
    fetchBuffer,
    buffergif
} = require("./Gallery/lib/myfunc2")

/////log
global.modnumber = '60177637943'
//Gallery/database
let ntilinkall = JSON.parse(fs.readFileSync('./Gallery/database/antilink.json'));
let antitoxicall = JSON.parse(fs.readFileSync('./Gallery/database/antitoxicgp.json'));

let toxicWords = JSON.parse(fs.readFileSync('./Gallery/database/toxicWords.json'));
// let autoblck =JSON.parse(fs.readFileSync('./Gallery/database/autoblock.json'));

let _afk = JSON.parse(fs.readFileSync('./Gallery/database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./Gallery/database/total-hit-user.json'))

//time
const replay = (teks) => {
    Maria.sendMessage(m.chat, {
        text: teks
    }, {
        quoted: m
    })
}
const xtime = moment.tz('Asia/Kuala_Lumpur').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kuala_Lumpur').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kuala_Lumpur').format('HH:mm:ss')
if (time2 < "23:59:00") {
    var Karutimewisher = `Good Night 🌌`
}
if (time2 < "19:00:00") {
    var Karutimewisher = `Good Evening 🌃`
}
if (time2 < "18:00:00") {
    var Karutimewisher = `Good Evening 🌃`
}
if (time2 < "15:00:00") {
    var Karutimewisher = `Good Afternoon 🌅`
}
if (time2 < "11:00:00") {
    var Karutimewisher = `Good Morning 🌄`
}
if (time2 < "05:00:00") {
    var Karutimewisher = `Good Morning 🌄`
}
module.exports = Maria = async (Maria, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreply.selectedRowId : (m.mtype == 'templateButtonreplyMessage') ? m.message.templateButtonreplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')

        const prefix = global.prefa || "/"
        const isCmd = body.startsWith(prefix)
        if (!isCmd || !body.startsWith(prefix)) return;
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await Maria.decodeJid(Maria.user.id)
        const itsMe = m.sender == botNumber ? true : false

        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')

        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await Maria.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [botNumber, ...global.ownernumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false;
        const AntiToxicAll = m.isGroup ? antitoxicall.includes(from) : false;
        //   const AutoBlock = m.isGroup ? autoblck.includes(from) : true;
        /////
        const pickRandom = (arr) => {
            return arr[Math.floor(Math.random() * arr.length)]
        }

        //random
        // Function to filter JPG and PNG files from a directory
        const getRandomImage = (directory) => {
            const files = fs.readdirSync(directory)
                .filter(file => {
                    const filePath = path.join(directory, file);
                    return fs.statSync(filePath).isFile() && (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png'));
                });

            if (files.length === 0) return null;

            const randomFile = files[Math.floor(Math.random() * files.length)];
            const randomFilePath = path.join(directory, randomFile);

            if (fs.existsSync(randomFilePath)) {
                return randomFilePath;
            } else {
                console.log(`Selected file ${randomFile} does not exist.`);
                return null;
            }
        };

        const imageDirectory = './Gallery/Theme-logo';
        const randomImage = getRandomImage(imageDirectory);

        //group chat msg by Karu
        const reply = (teks) => {
            Maria.sendMessage(m.chat, {
                text: teks,
                contextInfo: {
                    mentionedJid: [sender],
                    forwardingScore: 9999999,
                    isForwarded: true,
                    "externalAdReply": {
                        "showAdAttribution": true,
                        "containsAutoReply": true,
                        "title": ` ${global.botname}`,
                        "body": `${ownername}`,
                        "previewType": "PHOTO",
                        "thumbnailUrl": ``,
                        "thumbnail": fs.readFileSync(`./Gallery/thumb.jpg`),
                        "sourceUrl": `${link}`
                    }
                }
            }, {
                quoted: m
            })
        }

        //////////

        async function obfus(query) {
            return new Promise((resolve, reject) => {
                try {
                    const obfuscationResult = jsobfus.obfuscate(query, {
                        compact: false,
                        controlFlowFlattening: true,
                        controlFlowFlatteningThreshold: 1,
                        numbersToExpressions: true,
                        simplify: true,
                        stringArrayShuffle: true,
                        splitStrings: true,
                        stringArrayThreshold: 1
                    })
                    const result = {
                        status: 200,
                        author: `${ownername}`,
                        result: obfuscationResult.getObfuscatedCode()
                    }
                    resolve(result)
                } catch (e) {
                    reject(e)
                }
            })
        }



        async function Telesticker(url) {
            return new Promise(async (resolve, reject) => {
                if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return reply('Enter your url telegram sticker link')
                packName = url.replace("https://t.me/addstickers/", "")
                data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {
                    method: "GET",
                    headers: {
                        "User-Agent": "GoogleBot"
                    }
                })
                const mariayresult = []
                for (let i = 0; i < data.data.result.stickers.length; i++) {
                    fileId = data.data.result.stickers[i].thumb.file_id
                    data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
                    result = {
                        status: 200,
                        author: '💙𓆩‎✘AʏᴜSʜ✘𓆪_✰',
                        url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
                    }
                    mariayresult.push(result)
                }
                resolve(mariayresult)
            })
        }

        if (!Maria.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        if (autoread) {
            Maria.readMessages([m.key])
        }
        if (global.autoTyping) {

            Maria.sendPresenceUpdate('composing', from)


        }

        if (global.autoRecording) {

            Maria.sendPresenceUpdate('recording', from)

        }


        //bot number online status, available=online, unavailable=offline
        Maria.sendPresenceUpdate('unavailable', from)

        if (global.autorecordtype) {
            let Karurecordin = ['recording', 'composing']

            let Karurecordinfinal = Karurecordin[Math.floor(Math.random() * Karurecordin.length)]

            Maria.sendPresenceUpdate(Karurecordinfinal, from)

        }

        if (autobio) {
            Maria.updateProfileStatus(`Hey, future leaders! 🌟 Nao Shion is here to inspire and lead, thanks to Karu Shion. 🚀 ${runtime(process.uptime())} `).catch(_ => _)
        }
        if (m.sender.startsWith('212') && global.anti212 === true) {
            return Maria.updateBlockStatus(m.sender, 'block')
        }




        //chat counter (console log)
        if (m.message && m.isGroup) {

            console.log(chalk.redBright(`\n\nGroup Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {

            console.log(chalk.redBright(`\n\nPrivate Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./Gallery/database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./Gallery/database/total-hit-user.json'))[0].hit_cmd
        }
        const photooxy = require('./Gallery/lib/photooxy')



        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    reply(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./Gallery/database/afk-user.json', JSON.stringify(_afk))
                Maria.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }

        /*------ Not allowing  212 and 210 country codes to use bot in DM ---------- */

        const messSenderMain = m.sender;
        const messForm = m.chat;
        if (!m.isGroup) {
            if (messForm.startsWith("212") || messForm.startsWith("210")) {
                return;
            }
        }


        ///Auto Block 
        if (Config.AUTO_BLOCK == 'true' && m.chat.endsWith("@s.whatsapp.net")) {
            return Maria.updateBlockStatus(m.sender, 'block')
        }


        // anti bot
        if (Config.ANTI_BOT == 'true' && m.isBaileys) {
            if (!isBotAdmins) {
                m.reply("\`\`\`🤖 Bot Detected!!\`\`\`\n_but I'm not an admin_");
                return;
            }

            m.reply(`\`\`\`🤖 Bot Detected!!\`\`\`\n\n_✅ Kicked *@${m.sender.split("@")[0]}*_`, {
                mentions: [m.sender]
            });
            Maria.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
            m.deleteMsg(m.key);
            return;
        }

        //neo lounge forward
        if (m.chat === groupID) {
            var gamingGroup = 'groupID here';
            var nonGamingGroup = 'groupID here'; // Assuming another group for non-gaming messages

            // Gaming news
            if (isGamingMessage(m.text)) {
                if (m.type === 'image' || m.type === 'video') {
                    // Message with media (send to original group)
                    var media = m.message[m.type];
		    var textMessage = m.text + `\n\n-by @${m.sender.split('@')[0]}`
                    Maria.sendMessage(gamingGroup, {
                        media: media,
                        caption: textMessage || '',
			mentions: [m.sender]
                    });
                } else {
                    // Non-gaming text message (send to non-gaming group)
		    var textMessage = m.text + `\n\n-by @${m.sender.split('@')[0]}`
                    Maria.sendMessage(gamingGroup, {
                        text: textMessage,
			mentions: [m.sender]
                    });
                }
            } else {
		    
                // General news
                if (m.type === 'image' || m.type === 'video') {
                    // Message with media (send to original group)
                    var media = m.message[m.type];
                    var textMessage = m.text + `\n\n-by @${m.sender.split('@')[0]}`
                    Maria.sendMessage(nonGamingGroup, {
                        media: media,
                        caption: textMessage || '',
			mentions: [m.sender]
                    });
                } else {
                    // Non-gaming text message (send to non-gaming group)
                    var textMessage = m.text + `\n\n-by @${m.sender.split('@')[0]}`
                    Maria.sendMessage(nonGamingGroup, {
                        text: textMessage,
			mentions: [m.sender]
                    });
                }
            }
        }

        // Function to check for gaming keywords
        function isGamingMessage(text) {
            const gamingKeywords = ['wild rift', 'mobile legends', 'league of legends', 'dota', 'pubg', 'fortnite', 'apex legends', 'valorant', 'honkai', 'wuthering waves', 'blue archieve', 'star rail', 'genshin', 'call of duty']; // Add more keywords as needed
            const lowerText = text.toLowerCase(); // Convert text to lowercase for case-insensitive comparison
            return gamingKeywords.some(keyword => lowerText.includes(keyword)); // Check if any keyword exists in the text
        }




        ///antilink 
        if (AntiLinkAll){
            if (budy.match('http') && budy.match('https')) {
                if (!isBotAdmins) return
                // bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nyou are a group admin thats why i wont kick you, but remember from next time`
                if (isAdmins) return reply(bvl)
                if (m.key.fromMe) return reply(bvl)
                if (isCreator) return reply(bvl)
                await Maria.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                    }
                })
                // Maria.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                Maria.sendMessage(from, {
                    text: `\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} sending link is not allowed in this group`,
                    contextInfo: {
                        mentionedJid: [m.sender]
                    }
                }, {
                    quoted: m
                })
            }
	}

	if (AntiToxicAll){
	     if (isToxic(budy)) {
	        if (!isBotAdmins) return
                if (isAdmins) return reply(bvl)
                if (m.key.fromMe) return reply(bvl)
                if (isCreator) return reply(bvl)
		if (!m.isGroup) return replay(mess.grouponly)
                if (!isAdmins && !isCreator) return replay(mess.useradmin)
                let teks = `⚠️*NAO WARNING*⚠️
  
 \n *${m.sender.split('@')[0]} ARE SUSPECTED TO BE TOXIC!*\nCalling out all admin for verification!\n\n`
                for (let mem of groupAdmins) {
                    teks += `🤴 @${mem.split('@')[0]}\n`
                }
                Maria.sendMessage(m.chat, {
                    text: teks,
                    mentions: groupAdmins
                }, {
                    quoted: m
                })
            }
	}
	    
	function isToxic(text) {
		const lowerText = text.toLowerCase(); 
		return toxicWords.some(word => lowerText.includes(word));
	}

	    
        //total features by xeon sir
        const mariafeature = () => {
            var mytext = fs.readFileSync("./Heart.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }

        switch (command) {
	    case 'getID': {
		if (!isCreator) return reply(mess.owner)
		console.log(chalk.yellowright(`\n\n========================================================================`))
		console.log(chalk.greenBright(`\n\n Group ID: ${m.chat}`))
		console.log(chalk.yellowBright(`\n\n========================================================================\n\n`))
		
		await reply(`Master, I already send the ID to your terminal console...`)
	    }
	    break;
            case 'stealdp': {
                const user = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
                if (user === botNumber) return m.reply('_🙅🏻 I can not steal my own profile picture, Darling 🍭_');
                const {
                    key
                } = await m.reply("𝒑𝒍𝒆𝒂𝒔𝒆 𝒘𝒂𝒊𝒕 𝑫𝒂𝒓𝒍𝒊𝒏𝒈 🍭");
                let picture;
                try {
                    picture = await getBuffer(await Maria.profilePictureUrl(user, 'image'));
                } catch (err) {
                    return m.edit(`_❌ @${user.split('@')[0]} Doesn't have a profile picture, or it's hidden.`, key, {
                        mentions: [user]
                    });
                }
                Maria.updateProfilePicture(botNumber, picture)
                    .then(() => m.edit('✅ 𝐏𝐫𝐨𝐟𝐢𝐥𝐞 𝐏𝐢𝐜𝐭𝐮𝐫𝐞 𝐒𝐭𝐞𝐚𝐥𝐞𝐝', key))
                    .catch((error) => {
                        console.error(error);
                        m.edit('Error! try again later', key);
                    });
            }
            break;
            case 'upload': {
                let media = await Maria.downloadAndSaveMediaMessage(qmsg)
                await m.copyNForward(ownernumber + '@s.whatsapp.net')
                //  await pika.copyNForward(pika.chat, true, { readViewOnce: true, quoted: pika,  });
            }
            break;

            /* case 'autoblock': {
if (!isCreator) return replay(mess.botowner)
if (args[0] === "on") {
if (AutoBlock) return reply('Already activated')
ntilinkall.push(from)
fs.writeFileSync('./Gallery/database/autoblock.json', JSON.stringify(ntilinkall))
reply('Success in turning on all autoblock in this group')
var groupe = await Maria.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Maria.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nDont DM or PM or Inbox To The Bot Else You'll Be Blocked l`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AutoBlock) return reply('Already deactivated')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./Gallery/database/autoblock.json', JSON.stringify(ntilinkall))
reply('Success in turning off all autoblock in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break;
  */

            case 'antilink': {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[0] === "on") {
                    if (AntiLinkAll) return reply('Already activated')
                    ntilinkall.push(from)
                    fs.writeFileSync('./Gallery/database/antilink.json', JSON.stringify(ntilinkall))
                    reply('Success in turning on all antilink in this group')
                    var groupe = await Maria.groupMetadata(from)
                    var members = groupe['participants']
                    var mems = []
                    members.map(async adm => {
                        mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    Maria.sendMessage(from, {
                        text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nWarning! If you're not an admin, don't send any link in this group!`,
                        contextInfo: {
                            mentionedJid: mems
                        }
                    }, {
                        quoted: m
                    })
                } else if (args[0] === "off") {
                    if (!AntiLinkAll) return reply('Already deactivated')
                    let off = ntilinkall.indexOf(from)
                    ntilinkall.splice(off, 1)
                    fs.writeFileSync('./Gallery/database/antilinkall.json', JSON.stringify(ntilinkall))
                    reply('Success in turning off all antilink in this group')
                } else {
                    await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
                }
            }
            break;

	    case 'antitoxic': {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[0] === "on") {
                    if (AntiLinkAll) return reply('Already activated')
                    ntilinkall.push(from)
                    fs.writeFileSync('./Gallery/database/antitoxicgp.json', JSON.stringify(antitoxicall))
                    reply('Success in turning on all antitoxic in this group')
                    var groupe = await Maria.groupMetadata(from)
                    var members = groupe['participants']
                    var mems = []
                    members.map(async adm => {
                        mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                } else if (args[0] === "off") {
                    if (!AntiLinkAll) return reply('Already deactivated')
                    let off = ntilinkall.indexOf(from)
                    ntilinkall.splice(off, 1)
                    fs.writeFileSync('./Gallery/database/antitoxicgp.json', JSON.stringify(antitoxicall))
                    reply('Success in turning off all antitoxic in this group')
                } else {
                    await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
                }
            }
            break;

            case 'setppbot':
            case 'setbotpp': {
                if (!isCreator) return replay(mess.botowner)
                if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await Maria.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == `full`) {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await Maria.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    reply(`Succes`)
                } else {
                    var memeg = await Maria.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    reply(`𝑺𝒖𝒄𝒄𝒆𝒔𝒔, 𝑻𝒉𝒂𝒏𝒌 𝒚𝒐𝒖 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒏𝒆𝒘 𝒑𝒓𝒐𝒇𝒊𝒍𝒆 𝒑𝒉𝒐𝒕𝒐, 𝒎𝒚 𝒅𝒂𝒓𝒍𝒊𝒏𝒈 😚`)
                }
            }
            break;

            case 'deletesession':
            case 'delsession':
            case 'clearsession': {
                if (!isCreator) return reply(mess.owner)
                fs.readdir("./Gallery/session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return reply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return reply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    reply(teks)
                    await sleep(2000)
                    reply("Delete junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./Gallery/session/${file}`)
                    });
                    await sleep(2000)
                    reply("Successfully deleted all the trash in the session folder")
                });
            }
            break;
            case 'join': {
                try {
                    if (!isCreator) return reply(mess.owner)
                    if (!text) return reply('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
                    reply(mess.wait)
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await Maria.groupAcceptInvite(result).then((res) => reply(json(res))).catch((err) => reply(json(err)))
                } catch {
                    reply('Failed to join the Group')
                }
                break;
            }
            case 'session': {
                if (!isCreator) return reply(mess.owner)
                reply('Wait a moment, currently retrieving your session file')
                let sesi = await fs.readFileSync('./session/creds.json')
                Maria.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
            }
            break;

            case 'ship': {
                let usep = m.sender;
                let recp = '';
                let jj = '';
                let rate = '';

                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

                if (users == 'none') {
                    recp = `@${m.sender.split("@")[0]} x  themselves`;
                    console.log(recp);
                } else {
                    recp = `@${m.sender.split("@")[0]} x  @${users.split("@")[0]}`;
                    console.log(recp);
                }

                const ll = Math.floor(Math.random() * 100);

                if (ll < 30 && ll < 40) {
                    jj = `\t\t\t\t\t*ShipCent : ${ll}%* \n\t\tThere's still time to reconsider your choices`;
                    rate = "Not Good";
                } else if (ll >= 40 && ll <= 50) {
                    // Add a condition for the range between 40 and 50
                    jj = `\t\t\t\t\t*ShipCent : ${ll}%* \n\t\t Not bad, but not great either`;
                    rate = "Fair";
                } else if (ll > 50 && ll < 60) {
                    jj = `\t\t\t\t\t*ShipCent : ${ll}%* \n\t\t Good enough, I guess!💫`;
                    rate = "Average";
                } else if (ll >= 60 && ll <= 70) {
                    // Add a condition for the range between 60 and 70
                    jj = `\t\t\t\t\t*ShipCent : ${ll}%* \n\t\t Pretty good, you have potential`;
                    rate = "Above Average";
                } else if (ll > 70 && ll < 80) {
                    jj = `\t\t\t\t\t*ShipCent : ${ll}%* \n\t\t\tStay together and you'll find a way⭐️`;
                    rate = "Good";
                } else if (ll >= 80 && ll <= 90) {
                    // Add a condition for the range between 80 and 90
                    jj = `\t\t\t\t\t*ShipCent : ${ll}%* \n\t\t\tYou two are a great match💕`;
                    rate = "Great";
                } else if (ll > 90) {
                    jj = `\t\t\t\t\t*ShipCent : ${ll}%* \n\tAmazing! You two will be a good couple💖`;
                    rate = "Amazing";
                } else if (ll == 100) {
                    jj = `\t\t\t\t\t*ShipCent : ${ll}%* \n\tYou two are fated to be together💙`;
                    rate = "Fated to be together";
                }

                let caption = `\t❣️ *Matchmaking...* ❣️ \n`;
                caption += `\t\t---------------------------------\n`;
                caption += `*${recp}*\n`;
                caption += `\t\t---------------------------------\n`;
                caption += `${jj}`;

                Maria.sendMessage(m.chat, {
                    text: caption,
                    mentions: [users, m.sender]
                }, {
                    quoted: m
                });
            }
            break;




            case 'shutdown': {
                if (!isCreator) return reply(mess.owner)
                reply(`♠️Goodbye........`)
                await sleep(3000)
                process.exit()
            }
            break;

            case 'restart': {
                if (!isCreator) return reply(mess.owner)
                reply('In Process....')
                exec('pm2 restart all')
            }
            break;

            case 'autoread': {
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    reply(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    reply(`Successfully changed autoread to ${q}`)
                }
            }
            break;

            case 'autotyping': {
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoTyping = true
                    reply(`Successfully changed auto-typing to ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    reply(`Successfully changed auto-typing to ${q}`)
                }
            }
            break;

            case 'autorecording': {
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoRecording = true
                    reply(`Successfully changed auto-recording to ${q}`)
                } else if (q === 'off') {
                    autoRecording = false
                    reply(`Successfully changed auto-recording to ${q}`)
                }
            }
            break;

            case 'autorecordtype': {
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autorecordtype = true
                    reply(`Successfully changed auto recording and typing to ${q}`)
                } else if (q === 'off') {
                    autorecordtype = false
                    reply(`Successfully changed auto recording and typing to ${q}`)
                }
            }
            break;

            case 'autoswview': {
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread_status = true
                    reply(`🟨Successfully changed auto status/story view to ${q}`)
                } else if (q === 'off') {
                    autoread_status = false
                    reply(`🟨Successfully changed auto status/story view to ${q}`)
                }
            }
            break;

            case 'autobio': {
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    reply(`🟨Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    reply(`🟨Successfully Changed AutoBio To ${q}`)
                }
            }
            break;

            case 'mode': {
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`📑 Check out this example: ${prefix + command} in public/self`)
                if (q == 'public') {
                    Maria.public = true
                    reply(mess.done)
                } else if (q == 'self') {
                    Maria.public = false
                    reply(mess.done)
                }
            }
            break;

            case 'setexif': {
                if (!isCreator) return reply(mess.owner)
                if (!text) return reply(`Example : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                reply(`Exif successfully changed to\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
            }
            break;

            case 'setpp':
            case 'setpp':
            case 'setppbot': {
                if (!isCreator) return reply(mess.owner)
                if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await Maria.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await Maria.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                } else {
                    var memeg = await Maria.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                }
            }
            break;

            case 'block':
                if (!isCreator) return reply(mess.owner)
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Maria.updateBlockStatus(blockw, 'block').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break;
            case 'unblock':
                if (!isCreator) return reply(mess.owner)
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Maria.updateBlockStatus(blockww, 'unblock').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break;
            case 'leave':
                if (!isCreator) return reply(mess.owner)
                if (!m.isGroup) return reply(mess.group)
                reply('🟨Bye Everyone 🥺')
                await Maria.groupLeave(m.chat)
                break;
            case 'bcgc':
            case 'bcgroup': {
                if (!isCreator) return reply(mess.owner)
                if (!text) return reply(`Which text?\n\nExample : ${prefix + command} It's holiday tomorrow `)
                let getGroups = await Maria.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(2500)
                    let a = '```' + `\n📒${text}\n\n` + '```' + '\n\n*'
                    Maria.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: ' *🎐Nao Shion Broadcast🎐* ',
                                body: `Sent ${i.length} Group`,
                                thumbnailUrl: 'https://telegra.ph/file/3fd18ee11521117c7c882.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                reply(`Broadcast Sent !`)
            }
            break;
            case 'getcase':
                if (!isCreator) return reply(mess.owner)
                const getCase = (cases) => {
                    return "case" + `'${cases}'` + fs.readFileSync("Heart.js").toString().split('case \'' + cases + '\'')[1].split("break;")[0] + "break;"
                }
                reply(`${getCase(q)}`)
                break;
            case 'delete':
            case 'del': {
                if (!isCreator) return reply(mess.done)
                if (!m.quoted) throw false
                let {
                    chat,
                    fromMe,
                    id,
                    isBaileys
                } = m.quoted
                if (!isBaileys) return reply('The message was not sent by a bot!')
                Maria.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: true,
                        id: m.quoted.id,
                        participant: m.quoted.sender
                    }
                })
            }
            break;

            case 'closetime':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                reply(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Closed* group closed by admin\nnow only admin can send messages`
                    Maria.groupSettingUpdate(m.chat, 'announcement')
                    reply(close)
                }, timer)
                break;
            case 'opentime':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                reply(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Opened* The group is opened by admin\nNow members can send messages`
                    Maria.groupSettingUpdate(m.chat, 'not_announcement')
                    reply(open)
                }, timer)
                break;
            case 'kick':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Maria.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
                break;
            case 'add':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                caption = []
                for (const i of blockwwww) {
                    const onwa = await Maria.onWhatsApp(i.split('@')[0]);
                    console.log(onwa);
                    //   console.log(blockwwww);
                    //      console.log(i);
                    /*    if (onwa.length < 1) {
                        //    caption.push(`❌ Can't find *@${i.split('@')[0]}* on WhatsApp`);
                        } else { */
                    const result = await Maria.groupParticipantsUpdate(m.chat, [blockwwww], 'add')
                    console.log(result[0]);
                    const status = {
                        200: `✅ Added *@${i.split('@')[0]}*`,
                        408: `❌ *@${i.split('@')[0]}* previously left the chat, couldn't add`,
                        403: `_Couldn\'t add. Invite sent! to *@${i.split('@')[0]}*_`,
                        409: `⭕ *@${i.split('@')[0]}* already a member`,
                        401: `❌ *@${i.split('@')[0]}* has banned my number`
                    }

                    /*  if (status[result[0].status]) {
                       //    caption.push(status[result[0].status]);
                       } else 
                       */
                    if (result[0].status == 403) {
                        m.reply("inviting");
                        console.log(i);
                        await delay(3000);
                        await SendGroupInviteMessageToUser(result[0].jid, Maria, m.chat);
                        await delay(2000);
                        m.reply("Invited");
                    }
                }
                break;
            case 'promote':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Maria.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break;
            case 'demote':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Maria.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break;
            case 'setname':
            case 'setsubject':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!text) return 'Text ?'
                await Maria.groupUpdateSubject(m.chat, text).then((res) => reply(mess.done)).catch((err) => reply(json(err)))
                break;
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!text) return 'Text ?'
                await Maria.groupUpdateDescription(m.chat, text).then((res) => reply(mess.done)).catch((err) => reply(json(err)))
                break;
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await Maria.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await Maria.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                } else {
                    var memeg = await Maria.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                }
                break;
            case 'tag':
            case 'tagall':
            case 'all': {


                if (!m.isGroup) return replay(mess.grouponly)
                if (!isAdmins && !isCreator) return replay(mess.useradmin)
                let teks = `🧩𝗧𝗮𝗴𝗮𝗹𝗹🧩
  
 *Message : ${args.join(" ") ? args.join(" ") : 'no message'}*\n\n`
                for (let mem of participants) {
                    teks += `🔮 @${mem.id.split('@')[0]}\n`
                }
                Maria.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            }
            break;


            case 'totag':
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                if (!m.quoted) return reply(`Reply messages with captions ${prefix + command}`)
                Maria.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break;
            case 'group':
            case 'grup':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[0] === 'close') {
                    await Maria.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`*_SUCCESSFULLY CLOSED THE GRUP_\n\ngrup has been closed for the time being 😽*`)).catch((err) => reply(json(err)))
                } else if (args[0] === 'open') {
                    await Maria.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`*THE GROUP HAS BEEN OPENED SUCCESSFULLY*`)).catch((err) => reply(json(err)))
                } else {
                    reply(`Mode ${command}\n\n\nType ${prefix + command}open/close`)
                }
                break;
            case 'editinfo':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[0] === 'open') {
                    await Maria.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Group Edit Info 🕊️`)).catch((err) => reply(json(err)))
                } else if (args[0] === 'close') {
                    await Maria.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Closed Group Edit Info🕊️`)).catch((err) => reply(json(err)))
                } else {
                    reply(`Mode ${command}\n\n\nType ${prefix + command}on/off`)
                }
                break;
            case "gclink":
            case "grouplink": {
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)

                let response = await Maria.groupInviteCode(m.chat);
                Maria.sendText(
                    m.sender,
                    ` 🤖𝐵𝑜𝑡 𝑛𝑎𝑚𝑒:- Nao Shion Bot\n\n🔖𝐺𝑟𝑜𝑢𝑝 𝑛𝑎𝑚𝑒:- ${groupMetadata.subject}\n\n🔰𝐺𝑟𝑜𝑢𝑝 𝑙𝑖𝑛𝑘:- https://chat.whatsapp.com/${response}`,
                    m, {
                        detectLink: true
                    }
                );
            }
            await Maria.sendMessage(m.chat, {
                video: {
                    url: `https://media.tenor.com/hzWYhzhMTeEAAAPo/maria-useless.mp4`
                },
                caption: 'I sent you the Group Link in personal message.\n Pls check.',
                gifPlayback: true
            }, {
                quoted: m
            });
            break;

            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                await Maria.groupRevokeInvite(m.chat)
                    .then(res => {
                        reply(`Successful Reset, Group Invite Link ${groupMetadata.subject}`)
                    }).catch((err) => reply(json(err)))
                break;


                //             case "sc": case "script": case"repo": {
                // const axios = require("axios");
                // let repoInfo = await axios.get("https://api.github.com/repos/Karu-PANDEY023/Nao Shion");
                //         let repo = repoInfo.data;
                //         console.log(repo);

                //    const scritxt = `*🚀𝑴𝒂𝒓𝒊𝒂-𝑩𝒐𝒕-𝑺𝒄𝒓𝒊𝒑𝒕🚀*\n
                //   *🌟Creator:* Karu� 𝒑𝒂𝒏𝒅𝒆𝒚\n
                //   *🌟 Repo:* ${repo.html_url}\n
                //   *🌟 Total Forks:* ${repo.forks_count}\n
                //   *⭐ Total Stars:* ${repo.stargazers_count}\n
                //   *📁 Repo Size:* ${(repo.size/1024).toFixed(2)} MB\n
                //   *📅 Last Updated:* ${repo.updated_at}\n

                // ©️ *Karu Bots inc* 
                // *❝ Dont forget to give a Star ⭐ to the repo.*`

                //         Maria.sendMessage(from, { video: { url: 'https://media.tenor.com/Zco-fadJri4AAAPo/code-matrix.mp4' }, gifPlayback: true, caption: scritxt }, { quoted: m })
                // }
                //         break;




            case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return reply(` Reply to Video/Image with Caption ${prefix + command} darling`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await Maria.sendImageAsSticker(m.chat, media, m, {

                        author: global.stickername
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
                    let media = await quoted.download()
                    let encmedia = await Maria.sendVideoAsSticker(m.chat, media, m, {
                        packname: global.stickername,

                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return reply(` 🍭𝑹𝒆𝒑𝒍𝒚 𝒕𝒐 𝑽𝒊𝒅𝒆𝒐/𝑰𝒎𝒂𝒈𝒆 𝑾𝒊𝒕𝒉 𝑪𝒂𝒑𝒕𝒊𝒐𝒏 ${prefix + command} 𝒅𝒂𝒓𝒍𝒊𝒏𝒈`)
                }
            }
            break;
            case 'smeme': {
                let respond = `Send/Reply image/sticker with caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) return reply(respond)
                if (!text) return reply(respond)
                reply(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await Maria.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await Maria.sendImageAsSticker(m.chat, smeme, m, {
                    packname: global.stickername,

                })
                fs.unlinkSync(pop)
            }
            break;
            case 'swm':
            case 'stickerwm':
            case 'take': {
                if (!args.join(" ")) return reply(`Where is the text?`)
                const swn = args.join(" ")
                const pcknm = swn.split("|")[0]
                const atnm = swn.split("|")[1]
                if (m.quoted.isAnimated === true) {
                    Maria.downloadAndSaveMediaMessage(quoted, "gifee")
                    Maria.sendMessage(from, {
                        sticker: fs.readFileSync("gifee.webp")
                    }, {
                        quoted: m
                    })
                } else if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await Maria.sendImageAsSticker(m.chat, media, m, {
                        packname: pcknm,
                        author: atnm
                    })
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
                    let media = await quoted.download()
                    let encmedia = await Maria.sendVideoAsSticker(m.chat, media, m, {
                        packname: pcknm,
                        author: atnm
                    })
                } else {
                    reply(`Photo/Video?`)
                }
            }
            break;
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return reply(`🍭𝑹𝒆𝒑𝒍𝒚 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 𝒘𝒊𝒕𝒉 𝒄𝒂𝒑𝒕𝒊𝒐𝒏 ${prefix + command} 𝑫𝒂𝒓𝒍𝒊𝒏𝒈`)
                reply(mess.wait)
                let media = await Maria.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    Maria.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break;
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return reply(`🍭𝑹𝒆𝒑𝒍𝒚 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 𝒘𝒊𝒕𝒉 𝒄𝒂𝒑𝒕𝒊𝒐𝒏 ${prefix + command} 𝑫𝒂𝒓𝒍𝒊𝒏𝒈`)
                reply(mess.wait)
                let media = await Maria.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await Maria.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break;
            case 'checkdeath':
                if (!text) return replay(`Use Someone's Name, Example : ${prefix + command} Karu`)
                predea = await axios.get(`https://api.agify.io/?name=${q}`)
                reply(`Name : ${predea.data.name}\n*Dead At Age :* ${predea.data.age} Year.\n\n_Quick, Quick, Repent Bro, Because No One Knows About Death_`)
                break;
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio that you want to make into MP3 with caption ${prefix + command}`)
                reply(mess.wait)
                let media = await Maria.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                Maria.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `Nao-bot.mp3`
                }, {
                    quoted: m
                })

            }
            break;
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio that you want to make into a VN with caption ${prefix + command}`)
                reply(mess.wait)
                let media = await Maria.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./Gallery/lib/converter')
                let audio = await toPTT(media, 'mp4')
                Maria.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break;
            case 'togif': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await Maria.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await Maria.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break;
            case 'tourl': {
                reply(mess.wait)
                let media = await Maria.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break;
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return reply(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return reply(`Example : ${prefix + command} 😅+🤔`)
                reply(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await Maria.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.stickername,

                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break;
            case 'toonce':
            case 'toviewonce': {
                if (!quoted) return reply(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await Maria.downloadAndSaveMediaMessage(quoted)
                    Maria.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: `Here you go!`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await Maria.downloadAndSaveMediaMessage(quoted)
                    Maria.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: `Here you go!`,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                }
            }
            break;
            case 'toqr': {
                if (!q) return reply(' Please include link or text!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await Maria.sendMessage(from, {
                    image: medi,
                    caption: "Here you go!"
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break;
            case 'fliptext': {
                if (args.length < 1) return reply(`Example:\n${prefix}fliptext Karu`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break;

            case 'afk':
                if (!m.isGroup) return reply(mess.group)
                if (isAfkOn) return reply("Already afk")
                let reason = text ? text : 'Nothing.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                reply(`@${m.sender.split('@')[0]} Currently AFK\nWith reason : ${reason}`)
                break;
            case 'qc': {
                const {
                    quote
                } = require('./Gallery/lib/quote.js')
                if (!q) return reply('Enter Text')
                let ppnyauser = await await Maria.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
                const rest = await quote(q, pushname, ppnyauser)
                reply(mess.wait)
                Maria.sendImageAsSticker(m.chat, rest.result, m, {
                    packname: `${global.stickername}`

                })
            }
            break;

            case 'play':
            case 'song': {
                Maria.sendMessage(from, {
                    react: {
                        text: "📥",
                        key: m.key
                    }
                })
                if (!text) return reply(`🍭𝑷𝒍𝒆𝒂𝒔𝒆 𝒎𝒆𝒏𝒕𝒊𝒐𝒏 𝒂 𝒔𝒐𝒏𝒈 𝒏𝒂𝒎𝒆 𝒅𝒂𝒓𝒍𝒊𝒏𝒈 \n\n 𝑬𝒙𝒂𝒎𝒑𝒍𝒆: ${prefix + command}  𝒂𝒏𝒊𝒎𝒆 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑 𝒔𝒕𝒂𝒕𝒖𝒔`)
                const Karuplaymp3 = require('./Gallery/lib/ytdl2')
                let yts = require("youtube-yts")
                let search = await yts(text)
                let anup3k = search.videos[0]
                const pl = await Karuplaymp3.mp3(anup3k.url);
                reply('```✅ Song found! Sending...```');
                await Maria.sendMessage(m.chat, {
                    audio: fs.readFileSync(pl.path),
                    fileName: anup3k.title + '.mp3',
                    mimetype: 'audio/mp4',
                    ptt: true,
                    contextInfo: {
                        externalAdReply: {
                            title: anup3k.title,
                            body: botname,
                            thumbnail: await fetchBuffer(pl.meta.image),
                            mediaType: 2,
                            mediaUrl: anup3k.url,
                        }

                    },
                }, {
                    quoted: m
                })
                await fs.unlinkSync(pl.path)
            }
            break;

            case 'ytmp4':
            case 'ytvideo': {
                const Karuvidoh = require('./Gallery/lib/ytdl2')
                if (args.length < 1 || !isUrl(text) || !Karuvidoh.isYTUrl(text)) reply(`Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
                const vid = await Karuvidoh.mp4(text)
                const ytc = `
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`
                await Maria.sendMessage(m.chat, {
                    video: {
                        url: vid.videoUrl
                    },
                    caption: ytc
                }, {
                    quoted: m
                })
            }
            break;
            ///////////////////////////////////////////////////

            case 'chatgpt':
            case 'gpt': {
                Maria.sendMessage(from, {
                    react: {
                        text: "🤖",
                        key: m.key
                    }
                })
                if (!q) return reply(`Please provide a text query. Example: ${prefix + command} Hello, ChatGPT!`);

                const apiUrl1 = `https://vihangayt.me/tools/chatgpt?q=${encodeURIComponent(q)}`;
                const apiUrl2 = `https://gurugpt.cyclic.app/gpt4?prompt=${encodeURIComponent(q)}&model=llama`;

                try {

                    const response1 = await fetch(apiUrl1);
                    const responseData1 = await response1.json();

                    if (response1.status === 200 && responseData1 && responseData1.status === true && responseData1.data) {

                        const message = responseData1.data;
                        const me = m.sender;
                        await Maria.sendMessage(m.chat, {
                            text: message,
                            mentions: [me]
                        }, {
                            quoted: m
                        });
                    } else {

                        const response2 = await fetch(apiUrl2);
                        const responseData2 = await response2.json();

                        if (response2.status === 200 && responseData2 && responseData2.data) {

                            const message = responseData2.data;
                            const me = m.sender;
                            await Maria.sendMessage(m.chat, {
                                text: message,
                                mentions: [me]
                            }, {
                                quoted: m
                            });
                        } else {
                            reply("Sorry, I couldn't fetch a response from both APIs at the moment.");
                        }
                    }
                } catch (error) {
                    console.error(error);
                    reply("An error occurred while fetching the response from both APIs.");
                }
            }
            break;
            case 'dalle': {


                if (!q) return reply(`Please provide a query to generate an image. Example: ${prefix + command} Beautiful landscape`);

                const apiUrl = `https://gurugpt.cyclic.app/dalle?prompt=${encodeURIComponent(q)}`;

                try {
                    await Maria.sendMessage(m.chat, {
                        image: {
                            url: apiUrl
                        }
                    }, {
                        quoted: m
                    });
                } catch (error) {
                    console.error(error);
                    reply("An error occurred while generating the image.");
                }
            }
            break;



            //////////////////////////////
            case "rules":

                const helptxt = `_*📍[Rules for Nao Shion usage]📍*_\n\n\n*>>>* use ${prefix}support to get the Official group link in your dm.\n\n*--->* If you want to add Nao Shion in your group the contact the owner by *${prefix}owner* \n\n*--->* Dont use wrong command, use the command given in the *${prefix}help* list \n\n* Dont spam the bot with commands if Nao Shion is not responding, its means the maybe owner is offline or Nao having maintenance or facing internet issue. \n\n*IF YOU DONT FOLLOW THE RULES THEN YOU WILL BE BANNED* 🚫 \n\n\n*©️ Karu Shion* `

                Maria.sendMessage(from, {
                    video: {
                        url: 'https://c.tenor.com/geMdtLCXZkAAAAPo/rules.mp4'
                    },
                    gifPlayback: true,
                    caption: helptxt
                }, {
                    quoted: m
                })

                break;
            case 'hii':
            case 'hi':
            case 'Hi':


                let txxt = `*U^I^U ♡* Konichiwa ${pushname} Senpai, I'm Nao Shion Created by *_Karu Shion_*.`

                Maria.sendMessage(m.chat, {
                    image: {
                        url: "https://graph.org/file/eb3821e4d2b0a54dd7ea6.jpg"
                    },
                    caption: txxt
                }, {
                    quoted: m
                });

                break;
            case "support":

                let tex = `  [🎀𝙎𝙐𝙋𝙋𝙊𝙍𝙏 𝙂𝙍𝙊𝙐𝙋🎀]\n\n🔖_nhttps://chat.whatsapp.com/I66bF7yF6Yr0D2Q34EMm3f_`

                await Maria.sendMessage(m.sender, {
                    video: {
                        url: "https://media.tenor.com/q5Lo2BINkaUAAAPo/beast-tamer-kanade.mp4"
                    },
                    caption: `${tex}`,
                    gifPlayback: true
                }, );

                await Maria.sendMessage(m.chat, {
                    video: {
                        url: "https://media.tenor.com/27yYlTvQ6B0AAAPo/my-dress-up-darling-my-dress-up-darling-gif.mp4"
                    },
                    caption: '🎀𝑪𝒉𝒆𝒄𝒌 𝑰 𝑺𝒆𝒏𝒕 𝒔𝒖𝒑𝒑𝒐𝒓𝒕 𝒈𝒓𝒐𝒖𝒑 𝒍𝒊𝒏𝒌 𝒊𝒏 𝒚𝒐𝒖𝒓 𝑫𝑴  𝑴𝒚 𝑫𝒂𝒓𝒍𝒊𝒏𝒈',
                    gifPlayback: true
                }, {
                    quoted: m
                });
                break;

            case "info":
                Maria.sendMessage(from, {
                    react: {
                        text: "",
                        key: m.key
                    }
                })
                let pifx = `❁ ════ ❃•💙 *MARIA* 💙•❃ ════ ❁

\`\`\`A FULL FLEDGED MULTI DEVICE WHATSAPP BOT WITH COOL FEATURES\`\`\`

❁ ═══ ❃•📕 *INFORMATION*📕•❃ ═══ ❁
\`\`\`A simple and easy-to-use WhatsApp bot project based on Multi-Device Baileys and written in JavaScript\`\`\`

❁ ══════ ❃•📄 *NOTE* 📄•❃ ══════ ❁
\`\`\`This bot is a free open source project by Karu Shion\`\`\`

❁ ═══ ❃•✍🏻 *CONTRIBUTE* ✍🏻•❃ ═══ ❁
\`\`\`Feel free to open issues regarding any problems or if you have any feature feel free to contact owner by typing ${prefix}owner or ${prefix}mods`

                Maria.sendMessage(m.chat, {
                    image: {
                        url: "https://graph.org/file/c8ad7dc322c0b9b7eca8f.jpg"
                    },
                    caption: pifx,
                    gifPlayback: true
                }, {
                    quoted: m
                });
                break;




            case 'owner': {
                Maria.sendContact(m.chat, Config.ownernumber, m)
            }
            break;




            ///////////////////////////////////////////////////


            case 'wanumber':
            case 'nowa':
            case 'searchnumber': {
                if (!text) return reply(`📵🔢 Enter a number ending with 'x'\n\nExample: ${prefix + command} 601234567xx`)
                var inputnumber = text.split(" ")[0]

                reply(`📱🔍 Exploring for WhatsApp accounts within the range...`)

                function countInstances(string, word) {
                    return string.split(word).length - 1
                }
                var number0 = inputnumber.split('x')[0]
                var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
                var random_length = countInstances(inputnumber, 'x')
                var randomxx
                if (random_length == 1) {
                    randomxx = 10
                } else if (random_length == 2) {
                    randomxx = 100
                } else if (random_length == 3) {
                    randomxx = 1000
                }
                var text66 = `🔖 *WhatsApp Numbers Directory*\n\n`
                var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
                var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
                for (let i = 0; i < randomxx; i++) {
                    var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
                    var status1 = nu[Math.floor(Math.random() * nu.length)]
                    var status2 = nu[Math.floor(Math.random() * nu.length)]
                    var status3 = nu[Math.floor(Math.random() * nu.length)]
                    var dom4 = nu[Math.floor(Math.random() * nu.length)]
                    var random21
                    if (random_length == 1) {
                        random21 = `${status1}`
                    } else if (random_length == 2) {
                        random21 = `${status1}${status2}`
                    } else if (random_length == 3) {
                        random21 = `${status1}${status2}${status3}`
                    } else if (random_length == 4) {
                        random21 = `${status1}${status2}${status3}${dom4}`
                    }
                    var anu = await Maria.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
                    var anuu = anu.length !== 0 ? anu : false
                    try {
                        try {
                            var anu1 = await Maria.fetchStatus(anu[0].jid)
                        } catch {
                            var anu1 = '401'
                        }
                        if (anu1 == '401' || anu1.status.length == 0) {
                            nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                        } else {
                            text66 += `📞 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🌐 ️*Bio :* ${anu1.status}\n⏳️*Last update :* ${moment(anu1.setAt).tz('Asia/Kuala_Lumpur').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                        }
                    } catch {
                        nowhatsapp += `${number0}${i}${number1}\n`
                    }
                }
                reply(`${text66}${nobio}${nowhatsapp}`)
            }
            break;

            case 'dare':

                if (!m.isGroup) return reply(mess.group)
                const dare = [
                    "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
                    "spill people who make you pause",
                    "call crush/pickle now and send ss",
                    "drop only emote every time you type on gc/pc for 1 day.",
                    "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
                    "call ex saying miss",
                    "sing the chorus of the last song you played",
                    "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss🥺👉🏼👈🏼",
                    "Bang on the table (which is at home) until you get scolded for being noisy",
                    "Tell random people - I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
                    "mention ex's name",
                    "make 1 rhyme for the members!",
                    "send ur whatsapp chat list",
                    "chat random people with gheto language then ss here",
                    "tell your own version of embarrassing things",
                    "tag the person you hate",
                    "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
                    "change name to *I AM DONKEY* for 24 hours",
                    "shout *ma chuda ma chuda ma chuda* in front of your house",
                    "snap/post boyfriend photo/crush",
                    "tell me your boyfriend type!",
                    "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
                    "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
                    "prank chat ex and say *i love u, please come back.* without saying dare!",
                    "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
                    "change the name to *I am a child of randi* for 5 hours",
                    "type in bengali 24 hours",
                    "Use selmon bhoi photo for 3 days",
                    "drop a song quote then tag a suitable member for that quote",
                    "send voice note saying can i call u baby?",
                    "ss recent call whatsapp",
                    "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
                    "pop to a group member, and say fuck you",
                    "Act like a chicken in front of ur parents",
                    "Pick up a random book and read one page out loud in vn n send it here",
                    "Open your front door and howl like a wolf for 10 seconds",
                    "Take an embarrassing selfie and paste it on your profile picture",
                    "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
                    "Walk on your elbows and knees for as long as you can",
                    "sing national anthem in voice note",
                    "break;dance for 30 seconds in the sitting room😂",
                    "Tell the saddest story you know",
                    "make a twerk dance video and put it on status for 5mins",
                    "Eat a raw piece of garlic",
                    "Show the last five people you texted and what the messages said",
                    "put your full name on status for 5hrs",
                    "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
                    "call ur bestie, bitch",
                    "put your photo without filter on ur status for 10mins",
                    "say i love oli london in voice note🤣🤣",
                    "Send a message to your ex and say I still like you",
                    "call Crush/girlfriend/bestie now and screenshot here",
                    "pop to one of the group member personal chat and Say you ugly bustard",
                    "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
                    "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
                    "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
                    "use any bollywood actor photo as ur pfp for 3 days",
                    "put your crush photo on status with caption, this is my crush",
                    "change name to I AM GAY for 5 hours",
                    "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
                    "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
                    "slap ur butt hardly send the sound of slap through voice note😂",
                    "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
                    "shout bravooooooooo and send here through voice note",
                    "snap your face then send it here",
                    "Send your photo with a caption, i am lesbian",
                    "shout using harsh words and send it here through vn",
                    "shout you bastard in front of your mom/papa",
                    "change the name to i am idiot for 24 hours",
                    "slap urself firmly and send the sound of slap through voice note😂",
                    "say i love the bot owner Maria through voice note",
                    "send your gf/bf pic here",
                    "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
                    "break;up with your best friend for 5hrs without telling him/her that its a dare",
                    "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
                    "say i love depak kalal through voice note",
                    "write i am feeling horny and put it on status, u can delete it only after 5hrs",
                    "write i am lesbian and put it on status, u can delete only after 5hrs",
                    "kiss your mommy or papa and say i love you😌",
                    "put your father name on status for 5hrs",
                    "send abusive words in any grup, excepting this grup, and send screenshot proof here"
                ]
                const Mariadareww = dare[Math.floor(Math.random() * dare.length)]
                buffer = await getBuffer(`https://graph.org/file/8dd92e67cd4019b092f53.jpg`)
                Maria.sendMessage(from, {
                    image: buffer,
                    caption: '*You have chosen Dare*\n\n' + Mariadareww
                }, {
                    quoted: m
                })
                break;


            case 'truth':
                if (!m.isGroup) return reply(mess.group)


                const truth = [
                    "Have you ever liked anyone? How long?",
                    "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
                    "apa ketakutan terbesar kamu?",
                    "Have you ever liked someone and felt that person likes you too?",
                    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
                    "Have you ever stolen money from your father or mom? The reason?",
                    "What makes you happy when you're sad?",
                    "Ever had a one sided love? if so who? how does it feel bro?",
                    "been someone's mistress?",
                    "the most feared thing",
                    "Who is the most influential person in your life?",
                    "what proud thing did you get this year",
                    "Who is the person who can make you awesome",
                    "Who is the person who has ever made you very happy?",
                    "Who is closest to your ideal type of partner here",
                    "Who do you like to play with??",
                    "Have you ever rejected people? the reason why?",
                    "Mention an incident that made you hurt that you still remember",
                    "What achievements have you got this year??",
                    "What's your worst habit at school??",
                    "What song do you sing most in the shower",
                    "Have you ever had a near-death experience",
                    "When was the last time you were really angry. Why?",
                    "Who is the last person who called you",
                    "Do you have any hidden talents, What are they",
                    "What word do you hate the most?",
                    "What is the last YouTube video you watched?",
                    "What is the last thing you Googled",
                    "Who in this group would you want to swap lives with for a week",
                    "What is the scariest thing thats ever happened to you",
                    "Have you ever farted and blamed it on someone else",
                    "When is the last time you made someone else cry",
                    "Have you ever ghosted a friend",
                    "Have you ever seen a dead body",
                    "Which of your family members annoys you the most and why",
                    "If you had to delete one app from your phone, which one would it be",
                    "What app do you waste the most time on",
                    "Have you ever faked sick to get home from school",
                    "What is the most embarrassing item in your room",
                    "What five items would you bring if you got stuck on a desert island",
                    "Have you ever laughed so hard you peed your pants",
                    "Do you smell your own farts",
                    "have u ever peed on the bed while sleeping ðŸ¤£ðŸ¤£",
                    "What is the biggest mistake you have ever made",
                    "Have you ever cheated in an exam",
                    "What is the worst thing you have ever done",
                    "When was the last time you cried",
                    "whom do you love the most among ur parents",
                    "do u sometimes put ur finger in ur nosetrilðŸ¤£",
                    "who was ur crush during the school days",
                    "tell honestly, do u like any boy in this grup",
                    "have you ever liked anyone? how long?",
                    "do you have gf/bf','what is your biggest fear?",
                    "have you ever liked someone and felt that person likes you too?",
                    "What is the name of your ex boyfriend of your friend that you once liked quietly?",
                    "ever did you steal your mothers money or your fathers money",
                    "what makes you happy when you are sad",
                    "do you like someone who is in this grup? if you then who?",
                    "have you ever been cheated on by people?",
                    "who is the most important person in your life",
                    "what proud things did you get this year",
                    "who is the person who can make you happy when u r sad",
                    "who is the person who ever made you feel uncomfortable",
                    "have you ever lied to your parents",
                    "do you still like ur ex",
                    "who do you like to play together with?",
                    "have you ever stolen big thing in ur life? the reason why?",
                    "Mention the incident that makes you hurt that you still remember",
                    "what achievements have you got this year?",
                    "what was your worst habit at school?",
                    "do you love the bot creator Karu?",
                    "have you ever thought of taking revenge from ur teacher?",
                    "do you like current prime minister of ur country",
                    "you non veg or veg",
                    "if you could be invisible, what is the first thing you would do",
                    "what is a secret you kept from your parents",
                    "Who is your secret crush",
                    "whois the last person you creeped on social media",
                    "If a genie granted you three wishes, what would you ask for",
                    "What is your biggest regret",
                    "What animal do you think you most look like",
                    "How many selfies do you take a day",
                    "What was your favorite childhood show",
                    "if you could be a fictional character for a day, who would you choose",
                    "whom do you text the most",
                    "What is the biggest lie you ever told your parents",
                    "Who is your celebrity crush",
                    "Whats the strangest dream you have ever had",
                    "do you play pubg, if you then send ur id number"
                ]
                const Mariatruthww = truth[Math.floor(Math.random() * truth.length)]
                buffer = await getBuffer(`https://graph.org/file/8dd92e67cd4019b092f53.jpg`)
                Maria.sendMessage(from, {
                    image: buffer,
                    caption: '*You have chosen Truth*\n' + Mariatruthww
                }, {
                    quoted: m
                })
                break;
            case 'insult': {
                if (!m.isGroup) return reply(mess.group)
                const insults = [
                    "You're as useless as the 'ueue' in 'queue'.",
                    "I'm jealous of all the people who haven't met you.",
                    "You bring everyone a lot of joy... when you leave the room.",
                    "If laughter is the best medicine, your face must be curing the world.",
                    "I'd like to see things from your point of view, but I can't seem to get my head that far up my butt.",
                    "If I wanted to kill myself, I'd climb your ego and jump to your IQ.",
                    "You're not stupid; you just have bad luck when thinking.",
                    "I'd slap you, but that would be animal abuse.",
                    "If you were any slower, you’d be going backward.",
                    "You must have been born on a highway because that's where most accidents happen.",
                    "I'd insult you, but then I'd have to explain it afterward.",
                    "You're not dumb. You just have bad luck thinking.",
                    "You're like a cloud. When you disappear, it's a beautiful day.",
                    "I bet your brain feels as good as new, seeing that you never use it.",
                    "You're the reason the gene pool needs a lifeguard.",
                    "It looks like your face caught on fire, and someone tried to put it out with a fork.",
                    "I'm sorry, I didn't mean to give you the impression that I actually cared about your opinion.",
                    "If brains were dynamite, you wouldn’t have enough to blow your nose.",
                    "If you were twice as smart, you'd still be stupid.",
                    "I'm not insulting you; I'm describing you.",
                    "I'm not saying you're stupid; I'm just saying you have bad luck when it comes to thinking.",
                    "The only way you'll ever get laid is if you crawl up a chicken's butt and wait.",
                    "You must have been born at a low altitude because your brain seems to lack oxygen.",
                    "You're not just a clown; you're the entire circus.",
                    "If you were any more inbred, you'd be a sandwich.",
                    "I'd agree with you, but then we'd both be wrong.",
                    "I'd call you a tool, but even they serve a purpose.",
                    "You're like Monday mornings - nobody likes you.",
                    "If ignorance is bliss, you must be the happiest person on Earth.",
                    "You're not the dumbest person in the world, but you'd better hope they don't die.",

                ];


                function getRandomInsult() {
                    return insults[Math.floor(Math.random() * insults.length)];
                }

                const randomInsult = getRandomInsult();
                reply(randomInsult);
            }
            break;


            case 'flirt': {
                if (!m.isGroup) return reply(mess.group)
                const flirtLines = [
                    "Are you a magician? Because whenever I look at you, everyone else disappears.",
                    "Do you have a map? Because I just got lost in your eyes.",
                    "Are you made of copper and tellurium? Because you're Cu-Te.",
                    "Are you a camera? Because every time I look at you, I smile.",
                    "Is it hot in here or is it just you?",
                    "Do you believe in love at first sight, or should I walk by again?",
                    "Excuse me, but I think the stars are shining a little brighter tonight because you're around.",
                    "If beauty were a crime, you'd be serving a life sentence.",
                    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
                    "Do you have a name, or can I call you mine?",
                    "Do you believe in fate? Because I think we were meant to meet.",
                    "If you were a vegetable, you'd be a cute-cumber.",
                    "Do you have a sunburn, or are you always this hot?",
                    "Do you have a map? I keep getting lost in your eyes.",
                    "If you were a fruit, you'd be a fineapple.",
                    "If kisses were snowflakes, I'd send you a blizzard.",
                    "Can I follow you home? Cause my parents always told me to follow my dreams.",
                    "Do you have a name or can I call you mine?",
                    "Are you a parking ticket? Because you've got FINE written all over you.",
                    "Do you have a name or can I call you mine?",
                    "If looks could kill, you'd be a weapon of mass destruction.",
                    "You must be made of copper and tellurium because you're Cu-Te.",
                    "Do you have a name, or can I call you mine?",
                    "Are you a time traveler? Because I can see you in my future.",
                    "Is there an airport nearby or is it my heart taking off?",
                    "Are you a Wi-Fi signal? Because I'm really feeling a connection.",
                    "I must be a snowflake because I've fallen for you.",
                    "Do you believe in love at first sight, or should I walk by again?",
                    "I'm not a photographer, but I can definitely picture us together.",
                    "Do you have a name, or can I call you mine?",
                    "Do you have a name, or can I call you mine?",
                ];

                function getRandomFlirtLine() {
                    return flirtLines[Math.floor(Math.random() * flirtLines.length)];
                }
                const randomFlirtLine = getRandomFlirtLine();
                reply(randomFlirtLine);
            }
            break;


            case 'shayari': {
                if (!m.isGroup) return reply(mess.group)
                const shayariLines = [
                    "Dil se roya humne, aankhon se nikla hai pyaar,\nZakhm gehra humne khaya, dil se hai yaar.\n",
                    "Khuda ke bando pe naaz hai insaan ko,\nApne hi hatho se khud ne ki hai tabaahi.\n",
                    "Mohabbat ek aisi bheed hai,\nJisme har ek dil hai tanha.\n",
                    "Dil ko chhune wale shabd kya kamaal ke hote hain,\nUnki misaalein di jaati hain, aashiq to sirf yaad kiye jaate hain.\n",
                    "Tere bina jeena kya, tere sang mar jaana hai,\nTeri baahon mein kho jaana, yahi toh pyaar ka asli matlab hai.\n",
                    "Mohabbat ka izhaar karne mein waqt toh lagta hai,\nPar sachai aur dil se nikle alfaz kabhi nahin bhoolte.\n",
                    "Har raat rote hain hum, har subah umeed se guzar jaati hai,\nKuchh rishte aise bhi hote hain, jinke saath guzarti zindagi bhi yaadon mein dafan ho jaati hai.\n",
                    "Rishte toh khoon se bhi gehre hote hain,\nPar woh rishte jo dil se jud jaate hain, unka toh koi saani nahin hota.\n",
                    "Mohabbat mein zindagi ko pyaari kar dena,\nAur pyaar mein zindagi ko jeena seekh lena,\nYahi toh hai asli mohabbat ka matlab.\n",

                ];


                function getRandomShayariLine() {
                    return shayariLines[Math.floor(Math.random() * shayariLines.length)];
                }
                const randomShayariLine = getRandomShayariLine();
                reply(randomShayariLine);
            }
            break;




            case 'joke': {
                if (!m.isGroup) return reply(mess.group)

                const jokes = [
                    "Why don't scientists trust atoms? Because they make up everything!",
                    "What do you call fake spaghetti? An impasta!",
                    "Why did the scarecrow win an award? Because he was outstanding in his field!",
                    "Why couldn't the bicycle stand up by itself? It was two-tired!",
                    "I told my wife she was drawing her eyebrows too high. She looked surprised!",
                    "What did one ocean say to the other ocean? Nothing, they just waved!",
                    "Why did the tomato turn red? Because it saw the salad dressing!",
                    "What do you call cheese that isn't yours? Nacho cheese!",
                    "Why did the math book look sad? Because it had too many problems!",
                    "What do you get when you cross a snowman and a vampire? Frostbite!",
                    "Why don't skeletons fight each other? They don't have the guts!",
                    "What did one plate say to the other plate? Dinner's on me!",
                    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
                    "Why couldn't the leopard play hide and seek? Because he was always spotted!",
                    "Why did the man put his money in the blender? He wanted to make liquid assets!",
                    "Why don't eggs tell jokes? Because they'd crack each other up!",
                    "What do you call a bear with no teeth? A gummy bear!",
                    "What did one hat say to the other hat? Stay here, I'm going on ahead!",
                    "Why did the cookie go to the doctor? Because it was feeling crumbly!",
                    "What do you call a fish wearing a bowtie? Sophis-fish-ticated!",
                    "What do you get when you cross a snowman and a dog? Frostbite!",
                    "Why did the picture go to jail? Because it was framed!",
                    "Why did the scarecrow win an award? Because he was outstanding in his field!",
                    "Why did the tomato turn red? Because it saw the salad dressing!",
                    "What did one ocean say to the other ocean? Nothing, they just waved!",
                    "Why did the math book look sad? Because it had too many problems!",
                    "Why don't scientists trust atoms? Because they make up everything!",
                    "What did one plate say to the other plate? Dinner's on me!",
                    "Why couldn't the bicycle stand up by itself? It was two-tired!",
                    "What did one hat say to the other hat? Stay here, I'm going on ahead!",
                    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
                ];

                function getRandomJoke() {
                    return jokes[Math.floor(Math.random() * jokes.length)];
                }
                const randomJoke = getRandomJoke();
                reply(randomJoke);
            }
            break;


            case 'menu':
            case 'help':
            case 'h':
                const txt = `╭─「 *KonNao!* 」
│⋊ 𝕌𝕤𝕖𝕣: ${pushname} 
│⋊ 𝔹𝕠𝕥:  ${botname}
│⋊ ℙ𝕣𝕖𝕗𝕚𝕩:  *${prefix}*
│⋊ 𝔻𝕒𝕥𝕖: ${xdate}
│⋊ 𝕋𝕚𝕞𝕖:  ${xtime}
│⋊ 𝕆𝕨𝕟𝕖𝕣: ${ownername}
│⋊ 𝕧𝕖𝕣𝕤𝕚𝕠𝕟: ${mver}
│⋊ ℍ𝕠𝕤𝕥: ${os.hostname()}
│⋊ ℙ𝕝𝕒𝕥𝕗𝕠𝕣𝕞: ${os.platform()} 
│⋊ ℝ𝕦𝕟𝕥𝕚𝕞𝕖: ${runtime(process.uptime())}
│⋊ 𝕋𝕠𝕥𝕒𝕝𝕔𝕞𝕕: ${mariafeature()}
│⋊ 𝕆𝕗𝕗𝕚𝕔𝕚𝕒𝕝 𝔾𝕣𝕠𝕦𝕡: neoanicom.com?joinUs.php
╰────────────┈平和
 🎀𝐅𝐨𝐥𝐥𝐨𝐰 𝐨𝐧: https://www.instagram.com/karulation

Here's the list of my Commands.🔖
${readmore}
┌──⊰ _*🧧GENERAL🧧*_
│⊳ 🌿 ${prefix}hi
│⊳ 🌿 ${prefix}dev
│⊳ 🌿 ${prefix}info
│⊳ 🌿 ${prefix}support
│⊳ 🌿 ${prefix}rules
│⊳ 🌿 ${prefix}term
│⊳ 🌿 ${prefix}help
│⊳ 🌿 ${prefix}runtime
│⊳ 🌿 ${prefix}ping
│⊳ 🌿 ${prefix}owner
│⊳ 🌿 ${prefix}script
└──────────⊰
┌──⊰ _*🎓Education🎓*_
│⊳ 📚 ${prefix}element 
│⊳ 📚 ${prefix}calculator 
│⊳ 📚 ${prefix}sciencefact
│⊳ 📚 ${prefix}sciencenews
└──────────⊰
┌──⊰ _*💻Coding💻*_
│⊳ 🌀${prefix}exec
│⊳ 🌀${prefix}run
│⊳ 🌀${prefix}gitclone
└──────────⊰
┌──⊰ _*🧩OWNER🧩*_
│⊳ ♠️ ${prefix}session
│⊳ ♠️ ${prefix}join
│⊳ ♠️ ${prefix}mode *[self/public]*
│⊳ ♠️ ${prefix}shutdown
│⊳ ♠️ ${prefix}restart
│⊳ ♠️ ${prefix}autoread *[option]*
│⊳ ♠️ ${prefix}autotyping *[option]*
│⊳ ♠️ ${prefix}autorecording *[option]*
│⊳ ♠️ ${prefix}autorecordtyp *[option]*
│⊳ ♠️ ${prefix}autobio *[option]*
│⊳ ♠️ ${prefix}autoswview *[option]*
│⊳ ♠️ ${prefix}setppbot
│⊳ ♠️ ${prefix}stealdp
│⊳ ♠️ ${prefix}block
│⊳ ♠️ ${prefix}unblock
│⊳ ♠️ ${prefix}backup
│⊳ ♠️ ${prefix}getcase
│⊳ ♠️ ${prefix}creategc
└──────────⊰
┌──⊰ _*👮🏻‍♂️GROUP👮🏻‍♂️*_
│⊳ 🍁 ${prefix}antilink
│⊳ 🍁 ${prefix}antitoxic
│⊳ 🍁 ${prefix}closetime
│⊳ 🍁 ${prefix}opentime
│⊳ 🍁 ${prefix}kick
│⊳ 🍁 ${prefix}promote
│⊳ 🍁 ${prefix}demote
│⊳ 🍁 ${prefix}setdesc
│⊳ 🍁 ${prefix}setppgc
│⊳ 🍁 ${prefix}tagall
│⊳ 🍁 ${prefix}hidetag
│⊳ 🍁 ${prefix}totag
│⊳ 🍁 ${prefix}group *[option]*
│⊳ 🍁 ${prefix}editinfo
│⊳ 🍁 ${prefix}gclink
│⊳ 🍁 ${prefix}revoke
│⊳ 🍁 ${prefix}listonline
└──────────⊰
┌──⊰ _*🎉FUN🎉*_
│⊳🎟️ ${prefix}truth
│⊳🎟️ ${prefix}dare
│⊳🎟️ ${prefix}couple 
│⊳🎟️ ${prefix}Ship
│⊳🎟️ ${prefix}insult 
│⊳🎟️ ${prefix}flirt
│⊳🎟️ ${prefix}shayari
│⊳🎟️ ${prefix}joke
│⊳🎟️ ${prefix}soulmate
│⊳🎟️ ${prefix}checkdeath
│⊳🎟️ ${prefix}uglycheck
│⊳🎟️ ${prefix}lovelycheck
│⊳🎟️ ${prefix}prettycheck
│⊳🎟️ ${prefix}hornycheck
│⊳🎟️ ${prefix}lesbiancheck
│⊳🎟️ ${prefix}lesbicheck
│⊳🎟️ ${prefix}lesbiancheck
│⊳🎟️ ${prefix}cutecheck
│⊳🎟️ ${prefix}gaycheck
│⊳🎟️ ${prefix}greatcheck
│⊳🎟️ ${prefix}awesomecheck 
└──────────⊰
┌──⊰ _*📂download📂*_
│⊳ 📥 ${prefix}play
│⊳ 📥 ${prefix}ytmp3
│⊳ 📥 ${prefix}ytmp4
│⊳ 📥 ${prefix}igimage 
│⊳ 📥 ${prefix}igvideo 
│⊳ 📥 ${prefix}pinterest
│⊳ 📥 ${prefix}apk
└──────────⊰
┌──⊰ _*✨️WALLPAPER✨️*_
│⊳ 🎴 ${prefix}Doraemon
│⊳ 🎴 ${prefix}pokemon 
│⊳ 🎴 ${prefix}zero-two 
└──────────⊰
┌──⊰ _*🎐SnapBlend🎐*_
│⊳🎀 ${prefix}shadow
│⊳🎀 ${prefix}write
│⊳🎀 ${prefix}smoke
│⊳🎀 ${prefix}burnpaper
│⊳🎀 ${prefix}romantic
│⊳🎀 ${prefix}writeart
│⊳🎀 ${prefix}rainboweffect
│⊳🎀 ${prefix}smokyneon
│⊳🎀 ${prefix}underwaterocean
│⊳🎀 ${prefix}coffecup
│⊳🎀 ${prefix}doublelove
│⊳🎀 ${prefix}undergrass
│⊳🎀 ${prefix}love
│⊳🎀 ${prefix}narutobanner
│⊳🎀 ${prefix}shinetext
└──────────⊰
┌──⊰ _*⛩️OTHERS⛩️*_
│⊳ 🏮 ${prefix}sticker
│⊳ 🏮 ${prefix}qc
│⊳ 🏮 ${prefix}smeme
│⊳ 🏮 ${prefix}take
│⊳ 🏮 ${prefix}toimage
│⊳ 🏮 ${prefix}tovideo
│⊳ 🏮 ${prefix}toaudio
│⊳ 🏮 ${prefix}tomp3
│⊳ 🏮 ${prefix}tovn
│⊳ 🏮 ${prefix}togif
│⊳ 🏮 ${prefix}tourl
│⊳ 🏮 ${prefix}toqr
│⊳ 🏮 ${prefix}toviewonce
│⊳ 🏮 ${prefix}fliptext
│⊳ 🏮 ${prefix}emojimix
│⊳ 🏮 ${prefix}circlevideo
│⊳ 🏮 ${prefix}google
│⊳ 🏮 ${prefix}pinterest
│⊳ 🏮 ${prefix}dalle
│⊳ 🏮 ${prefix}gpt
│⊳ 🏮 ${prefix}say
│⊳ 🏮 ${prefix}tts
│⊳ 🏮 ${prefix}obfuscate
└──────────⊰
┌──⊰ _*🃏Games🃏*_
│⊳ 🎰 ${prefix}slot
│⊳ 🎰 ${prefix}poker
│⊳ 🎰 ${prefix}dice
│⊳ 🎰 ${prefix}flipcoin
│⊳ 🎰 ${prefix}Rps
│⊳ 🎰 ${prefix}guess
│⊳ 🎰 ${prefix}roulette
│⊳ 🎰 ${prefix}blackjack
│⊳ 🎰 ${prefix}compliment
└──────────⊰`

                if (randomImage) {
                    Maria.sendMessage(from, {
                        image: {
                            url: randomImage
                        },
                        caption: txt
                    }, {
                        quoted: m
                    });
                }

                break;

            case 'circlevideo': {
                try {
                    const Mariabaileys = await require("@whiskeysockets/baileys").generateWAMessageContent({
                        video: await m.quoted.download()
                    }, {
                        upload: Maria.waUploadToServer
                    })
                    await Maria.relayMessage(from, {
                        ptvMessage: {
                            ...Mariabaileys.videoMessage
                        }
                    }, {})
                } catch (err) {
                    reply(`Reply to a Video with Caption ${prefix + command}`)
                }
            }
            break;

            case 'say':
            case 'tts':
            case 'gtts': {
                if (!text) return reply('Where is the text?')
                let texttts = text
                const xeonrl = googleTTS.getAudioUrl(texttts, {
                    lang: "en",
                    slow: false,
                    host: "https://translate.google.com",
                })
                return Maria.sendMessage(m.chat, {
                    audio: {
                        url: xeonrl,
                    },
                    mimetype: 'audio/mp4',
                    ptt: true,
                    fileName: `${text}.mp3`
                }, {
                    quoted: m,
                })
            }
            break

            case 'obfus':
            case 'obfuscate': {
                if (!q) return reply(`Example ${prefix+command} const Maria = require('baileys')`)
                let meg = await obfus(q)
                reply(`Success
${meg.result}`)
            }
            break

            case "couple": {
                if (!m.isGroup) return reply(mess.group);
                let member = participants.map((u) => u.id);
                let orang = member[Math.floor(Math.random() * member.length)];
                let jodoh = member[Math.floor(Math.random() * member.length)];
                Maria.sendMessage(
                    m.chat, {
                        text: `@${orang.split("@")[0]} ❤️ @${jodoh.split("@")[0]}
Cieeee, What's Going On❤️💖👀`,
                        contextInfo: {
                            mentionedJid: [orang, jodoh],
                            forwardingScore: 9999999,
                            isForwarded: true,
                            externalAdReply: {
                                showAdAttribution: true,
                                containsAutoReply: true,
                                title: ` ${global.botname}`,
                                body: `${ownername}`,
                                previewType: "PHOTO",
                                thumbnailUrl: ``,
                                thumbnail: fs.readFileSync(
                                    `./Gallery/thumb.jpg`
                                ),
                                sourceUrl: `${link}`,
                            },
                        },
                    }, {
                        quoted: m
                    }
                );
            }
            break;

            //mode 

            case 'public': {
                if (!isCreator) return reply(mess.owner)
                Maria.public = true
                reply('*Successful in Changing To Public Usage*')
            }
            break;
            case 'self': {
                if (!isCreator) return reply(mess.owner)
                Maria.public = false
                reply('*Successful in Changing To Self Usage*')
            }
            break;

            case 'doraemon': {
                if (!m.isGroup) return reply(mess.group);
                reply(mess.wait);
                await Maria.sendMessage(m.chat, {
                    image: await getBuffer('https://doremon-api.onrender.com'), // Change the URL to your Doraemon wallpaper
                    caption: 'Check out this Doraemon wallpaper! 🤖✨\n\n© Karu Shion', // Customize the caption as you like
                }, {
                    quoted: m
                });
            }
            break;

            case 'pokemon': {
                if (!m.isGroup) return reply(mess.group);
                reply(mess.wait);
                await Maria.sendMessage(m.chat, {
                    image: await getBuffer('https://Karu-pokemon.onrender.com/'), // Change the URL to your Pokemon wallpaper
                    caption: 'Here is a Pokemon wallpaper for you! ⚡🔥\n\n© Karu Shion', // Customize the caption as you like
                }, {
                    quoted: m
                });
            }
            break;

            case 'zero-two': {
                if (!m.isGroup) return reply(mess.group);
                reply(mess.wait);
                await Maria.sendMessage(m.chat, {
                    image: await getBuffer('https://Karu-zero-two.onrender.com'), // Change the URL to your Zero-Two wallpaper
                    caption: 'Enjoy this Zero-Two wallpaper! ❤️🖤\n\n© Karu Shion', // Customize the caption as you like
                }, {
                    quoted: m
                });
            }
            break;

            ////
            case 'hd': {
                if (!quoted) return reply(`Where is the picture?`)
                if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
                reply(mess.wait)
                const {
                    remini
                } = require('./Gallery/lib/remini')
                let media = await quoted.download()
                let proses = await remini(media, "enhance")
                Maria.sendMessage(m.chat, {
                    image: proses,
                    caption: mess.done
                }, {
                    quoted: m
                })
            }
            break;
            case 'awesomecheck':
            case 'greatcheck':
            case 'gaycheck':
            case 'cutecheck':
            case 'lesbicheck':
            case 'lesbiancheck':
            case 'hornycheck':
            case 'prettycheck':
            case 'lovelycheck':
            case 'uglycheck':
                if (!m.isGroup) return reply(mess.group);
                const cex = body.slice(0)
                const cek1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
                const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
                if (mentionByReply) {
                    Maria.sendMessage(from, {
                        text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByReply.split('@')[0]}` + '\nAnswer : ' + cek2 + '%',
                        mentions: [mentionByReply]
                    }, {
                        quoted: m
                    })
                } else if (mentionByTag[0] && isGroup) {
                    Maria.sendMessage(from, {
                        text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByTag[0].split('@')[0]}` + '\nAnswer : ' + cek2 + '%',
                        mentions: [mentionByTag[0]]
                    }, {
                        quoted: m
                    })
                } else if (!mentionByReply && !mentionByTag[0]) {
                    Maria.sendMessage(from, {
                        text: 'Question : *' + cex + '*\nChecker : ' + `@${sender.split('@')[0]}` + '\nAnswer : ' + cek2 + '%',
                        mentions: [sender]
                    }, {
                        quoted: m
                    })
                }
                break;
                ////////
            case 'hidetag': {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                Maria.sendMessage(m.chat, {
                    text: args.join(" ") ? args.join(" ") : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            }
            break;
            case 'admin':
            case 'tagadmin': {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!text) return replay(`🧩*Please quote or write a meaningful message to tag admins to*`)
                let teks = `*🧩𝗚𝗿𝗼𝘂𝗽 𝗔𝗱𝗺𝗶𝗻𝘀🧩*
  
 *Message : ${text}*\n\n`
                for (let mem of groupAdmins) {
                    teks += `🤴 @${mem.split('@')[0]}\n`
                }
                Maria.sendMessage(m.chat, {
                    text: teks,
                    mentions: groupAdmins
                }, {
                    quoted: m
                })
            }
            break;



            case 'pinterest':
            case 'pin':
            case 'img': {
                if (!args.join(" ")) return reply(`🧩${pushname}Please provide a search term!`);
                reply(mess.waiting)
                let {
                    pinterest
                } = require('./Gallery/lib/scraper');
                let anutrest = await pinterest(text+" dressed");
                let results = [];

                // Get multiple random images (let's say 5 images)
                const numImages = 5;
                for (let i = 0; i < numImages && i < anutrest.length; i++) {
                    results.push(anutrest[Math.floor(Math.random() * anutrest.length)]);
                }

                // Send each image without any caption
                for (let i = 0; i < results.length; i++) {
                    Maria.sendMessage(m.chat, {
                        image: {
                            url: results[i]
                        }
                    }, {
                        quoted: m
                    });
                }
            }
            break;

            case 'runtime':
	    case 'check':{
                let lowq = `*Nao Has Stay Awake For:*\n🎉 *${runtime(process.uptime())}*`
                reply(lowq)
            }
            break;
            ///////////////////////////////////////////////////////
            case 'igimage':
            case 'igimg': {
                if (!text) return reply("🧩Link?")
                let resMaria = await fetch(`https://vihangayt.me/download/instagram?url=${text}`)
                let jsonMaria = await resMaria.json()
                Maria.sendMessage(m.chat, {
                        image: {
                            url: jsonMaria.data.data[0].url
                        },
                        caption: mess.done
                    }, {
                        quoted: m
                    })
                    .catch(console.error)
            }
            break;
            case 'igvideo':
            case 'igvid': {
                if (!q) return reply("🧩Link?")
                let res = await fetch(`https://vihangayt.me/download/instagram?url=${q}`)
                let json = await res.json()
                Maria.sendMessage(m.chat, {
                        video: {
                            url: json.data.data[0].url
                        },
                        caption: mess.done
                    }, {
                        quoted: m
                    })
                    .catch(console.error)
            }
            break;

            case 'apk':
            case 'apkdl': {
                if (!text) return reply("🧩What apk u wanna download?")
                let resMaria = await fetch(`https://vihangayt.me/download/apk?id=${text}`)
                let jsonMaria = await resMaria.json()
                Maria.sendMessage(from, {
                        document: {
                            url: jsonMaria.data.dllink
                        },
                        fileName: jsonMaria.data.name,
                        mimetype: 'application/vnd.android.package-archive'
                    }, {
                        quoted: m
                    })
                    .catch(console.error)
            }
            break;

            case 'mediafire': {
                if (args.length == 0) return reply(`🧩Where is the link ?`)
                if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`🧩The link you provided is invalid`)
                const {
                    mediafireDl
                } = require('./Gallery/lib/mediafire.js')
                const baby1 = await mediafireDl(text)
                if (baby1[0].size.split('MB')[0] >= 100) return reply('Oops, the file is too big...')
                const result4 = `𝙈𝙀𝘿𝙄𝘼𝙁𝙄𝙍𝙀
*❖ Name* : ${baby1[0].nama}
*❖ Size* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}
*❖ Link* : ${baby1[0].link}`
                reply(`${result4}`)
                Maria.sendMessage(m.chat, {
                    document: {
                        url: baby1[0].link
                    },
                    fileName: baby1[0].nama,
                    mimetype: baby1[0].mime
                }, {
                    quoted: m
                })
            }
            break;

            case 'welcome':
            case 'left': {
                if (!m.isGroup) return reply(mess.group)
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply('on/off?')
                if (args[0] === 'on') {
                    welcome = true
                    reply(`${command} is enabled`)
                } else if (args[0] === 'off') {
                    welcome = false
                    reply(`${command} is disabled`)
                }
            }
            break;


            case 'git':
            case 'gitclone':
                if (!text) return reply(`🧩Where is the link?\n🔮Example :\n${prefix}${command} https://github.com/karulation/naoshion `)
                if (!isUrl(text) && !text.includes('github.com')) return reply(`Link invalid!!`)
                let repo = text.split('/');
                let url = `https://api.github.com/repos/${repo[3]}/${repo[4]}/zipball`
                let filename = (await fetch(url, {
                    method: 'HEAD'
                })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                Maria.sendMessage(m.chat, {
                    document: {
                        url: url
                    },
                    fileName: filename + '.zip',
                    mimetype: 'application/zip'
                }, {
                    quoted: m
                }).catch((err) => reply(mess.error))
                break;

            case '':
                if (isCmd) {
                    let nexh = `🍭𝑫𝒂𝒓𝒍𝒊𝒏𝒈 𝑫𝒊𝒅 𝒀𝒐𝒖 𝑴𝒆𝒂𝒏 ${prefix}𝒉𝒆𝒍𝒑`
                    Maria.sendMessage(m.chat, {
                        video: {
                            url: "https://media.tenor.com/M_MWR-Y4eigAAAPo/clannad-after-story-clannad.mp4"
                        },
                        caption: nexh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    });
                }
                break;


            case 'telestick': {
                if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
                    let mariaresources = await Telesticker(args[0])
                    await reply(`Sending ${mariaresources.length} stickers...`)
                    if (m.isGroup && mariaresources.length > 30) {
                        await reply('Number of stickers more than 30, bot will send it in private chat.')
                        for (let i = 0; i < mariaresources.length; i++) {
                            Maria.sendMessage(m.sender, {
                                sticker: {
                                    url: mariaresources[i].url
                                }
                            })
                        }
                    } else {
                        for (let i = 0; i < mariaresources.length; i++) {
                            Maria.sendMessage(m.chat, {
                                sticker: {
                                    url: mariaresources[i].url
                                }
                            })
                        }
                    }
                } else reply(`🧩Telegram sticker Link??\n🔮Example. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
            }
            break;

            case 'shadow':
            case 'write':
            case 'romantic':
            case 'burnpaper':
            case 'smoke':
            case 'narutobanner':
            case 'love':
            case 'undergrass':
            case 'doublelove':
            case 'coffecup':
            case 'underwaterocean':
            case 'smokyneon':
            case 'starstext':
            case 'rainboweffect':
            case 'balloontext':
            case 'metalliceffect':
            case 'embroiderytext':
            case 'flamingtext':
            case 'stonetext':
            case 'writeart':
            case 'summertext':
            case 'wolfmetaltext':
            case 'nature3dtext':
            case 'rosestext':
            case 'naturetypography':
            case 'quotesunder':
            case 'shinetext': {

                if (!q) return reply(`🔮Example : ${prefix+command} Karu`)
                let link
                if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
                if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
                if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
                if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
                if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
                if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
                if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
                if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
                if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
                if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
                if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
                if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
                if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
                if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
                if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
                if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
                if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
                if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
                if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
                if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
                if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
                if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
                if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
                if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
                if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
                if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
                if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
                let dehe = await photooxy.photoOxy(link, q)
                Maria.sendMessage(m.chat, {
                    image: {
                        url: dehe
                    },
                    caption: `${mess.done}`
                }, {
                    quoted: m
                })
            }
            break;

            case 'poll': {
                if (!m.isGroup) return replay(mess.grouponly)
                let [poll, opt] = text.split("|")
                if (text.split("|") < 2)
                    return await reply(
                        `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|Karu,Maria,Owner...`
                    )
                let options = []
                for (let i of opt.split(',')) {
                    options.push(i)
                }
                await Maria.sendMessage(m.chat, {
                    poll: {
                        name: poll,
                        values: options
                    }
                })
            }
            break;
            case "creategc":
            case "creategroup": {
                if (!isCreator) return replay(mess.botowner);
                if (!args.join(" "))
                    return reply(`Use ${prefix + command} groupname`);
                try {
                    let cret = await Maria.groupCreate(args.join(" "), []);
                    let response = await Maria.groupInviteCode(cret.id);
                    teks = ` 《༒𝙂𝙧𝙤𝙪𝙥 𝘾𝙧𝙚𝙖𝙩𝙚༒》

☤Name : ${cret.subject}
☤Owner : @${cret.owner.split("@")[0]}

https://chat.whatsapp.com/${response}
       `;
                    Maria.sendMessage(
                        m.chat, {
                            text: teks,
                            mentions: await Maria.parseMention(teks),
                        }, {
                            quoted: m
                        }
                    );
                } catch {
                    reply("Error!");
                }
            }
            break;
            case 'test':
            case 'p':
            case 'ping':
                let timestampe = speed()
                let latensie = speed() - timestampe
                reply(`🧧Testing successfull, Bot is active\n\n📍*ping* ${latensie.toFixed(4)} miliseconds\n\n🎀Type ${prefix}help to display the menu`)
                break;


            case 'mods':
            case 'developer':
            case 'dev':
                const devmod = `  🍥 *Moderators* 🍥\n\n
*🎫Karu* @60177637943
 \n
\n📛*Don't Spam them to avoid Blocking !*\n\n For any help, type *${prefix}support* and ask in the group.\n\n*✨️Thanks for using Nao Shion* `;

                Maria.sendMessage(m.chat, {
                    text: devmod,
                    mentions: ["60177637943@s.whatsapp.net"]
                }, {
                    quoted: m
                });
                break;




                ////games 

            case 'compliment': {
                let compliments = [
                    "You're amazing!",
                    "You've got a great sense of humor!",
                    "Your kindness is contagious!",
                    "You're a true inspiration!",
                    "Keep shining bright!",
                    "You make the world a better place!",
                    "Your smile lights up the room!",
                    "You're one of a kind!",
                    "You're doing an awesome job!",
                    "You're simply fantastic!",
                ];

                let randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

                let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;

                caption = `\t\uD83C\uDF89 *Compliment Generator* \uD83C\uDF89 \n`;
                caption += `\t\t---------------------------------\n`;
                caption += `@${m.sender.split("@")[0]}, ${randomCompliment} \uD83D\uDE0A`;
                caption += `\n\t\t---------------------------------`;
                Maria.sendMessage(m.chat, {
                    text: caption,
                    mentions: [user, m.sender]
                }, {
                    quoted: m
                });
            }
            break;

            case 'dice': {
                const lastPlayTimestamps = new Map();
                const lastPlayTime = lastPlayTimestamps.get(m.sender) || 0;
                const currentTime = Date.now();
                const timeDifference = currentTime - lastPlayTime;
                const sixHours = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

                // Check if the player has reached the maximum play limit
                if (timeDifference < sixHours && lastPlayTime !== 0) {
                    caption = `\uD83D\uDEAB Sorry, you have reached the maximum play limit. Please try again later.`;
                } else {
                    // Check if the player has already played 20 times
                    const playCount = lastPlayTimestamps.get(m.sender + '_count') || 0;
                    if (playCount >= 20) {
                        caption = `\uD83D\uDEAB Sorry, you have reached the maximum play limit of 20 times in 6 hours. Please try again later.`;
                    } else {
                        // Update the last play timestamp and play count for the player
                        lastPlayTimestamps.set(m.sender, currentTime);
                        lastPlayTimestamps.set(m.sender + '_count', playCount + 1);

                        // Proceed with the dice game
                        let userNumber = parseInt(m.text.split(' ')[1], 10);
                        if (isNaN(userNumber) || userNumber < 1 || userNumber > 6) {
                            caption = `\uD83E\uDD37 Please choose a number between 1 and 6 for the dice game.`;
                        } else {
                            let playerNumber = userNumber;
                            let casinoNumber = Math.floor(Math.random() * 6) + 1;
                            let resultMessage;

                            if (playerNumber > casinoNumber) {
                                resultMessage = `\uD83C\uDFB2 You chose ${playerNumber}! Casino rolled a ${casinoNumber}. You win! \uD83C\uDF89`;
                            } else if (playerNumber < casinoNumber) {
                                resultMessage = `\uD83C\uDFB2 You chose ${playerNumber}! Casino rolled a ${casinoNumber}. You lose! \uD83D\uDE22`;
                            } else {
                                resultMessage = `\uD83C\uDFB2 You chose ${playerNumber}! Casino rolled a ${casinoNumber}. It's a tie! \uD83C\uDF9D`;
                            }

                            caption = `\t\uD83D\uDD22 *Dice Roll Game* \uD83D\uDD22 \n`;
                            caption += `\t\t---------------------------------\n`;
                            caption += `${resultMessage}`;
                            caption += `\n\t\t---------------------------------`;
                        }
                    }
                }

                // Send the result message
                Maria.sendMessage(m.chat, {
                    text: caption,
                    mentions: [m.sender]
                }, {
                    quoted: m
                });
            }
            break;



            // Function to get user balance
            function getUserBalance(userId) {
                const filePath = `balances/${userId}.json`;
                try {
                    const balanceData = fs.readFileSync(filePath, 'utf8');
                    return JSON.parse(balanceData).balance || 0;
                } catch (error) {
                    return 0;
                }
            }

            // Function to update user balance
            function updateUserBalance(userId, newBalance) {
                const filePath = `balances/${userId}.json`;
                const balanceData = {
                    balance: newBalance
                };
                fs.writeFileSync(filePath, JSON.stringify(balanceData), 'utf8');
            }

            // Command for poker game


            case 'poker': {
                let users;

                if (m.mentionedJid && m.mentionedJid.length > 0) {
                    users = m.mentionedJid[0];
                } else if (m.quoted && m.quoted.sender) {
                    users = m.quoted.sender;
                } else {
                    users = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
                }

                // Function to simulate a poker hand
                function playPoker() {
                    const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
                    const userHand = [cards[Math.floor(Math.random() * cards.length)], cards[Math.floor(Math.random() * cards.length)]];
                    const mariaHand = [cards[Math.floor(Math.random() * cards.length)], cards[Math.floor(Math.random() * cards.length)]];

                    // Add logic to determine the winner based on hand strength (e.g., pair, two pairs, etc.)
                    const userScore = calculateHandScore(userHand);
                    const mariaScore = calculateHandScore(mariaHand);

                    let resultMessage = `\t\uD83C\uDCCF *Poker Prestige* \uD83C\uDCCF\n`;
                    resultMessage += `\t\t---------------------------------\n`;
                    resultMessage += `*@${m.sender.split("@")[0]}*'s Hand: ${userHand.join(', ')}\n`;
                    resultMessage += `*Maria*'s Hand: ${mariaHand[0]}, \n`;
                    resultMessage += `\t\t---------------------------------\n`;

                    if (userScore > mariaScore) {
                        resultMessage += `\t\t\uD83C\uDF89 Congratulations! You win! \uD83C\uDF89`;
                    } else if (userScore < mariaScore) {
                        resultMessage += `\t\t\uD83D\uDE22 Better luck next time. Maria wins. \uD83D\uDE22`;
                    } else {
                        resultMessage += `\t\t\uD83C\uDF9D It's a tie! \uD83C\uDF9D`;
                    }

                    return resultMessage;
                }

                // Function to calculate the poker hand score
                function calculateHandScore(hand) {
                    // Add logic to determine the hand score (e.g., check for pairs, two pairs, etc.)
                    // For simplicity, let's assume a basic scoring where the highest card wins
                    const cardValues = {
                        '2': 2,
                        '3': 3,
                        '4': 4,
                        '5': 5,
                        '6': 6,
                        '7': 7,
                        '8': 8,
                        '9': 9,
                        '10': 10,
                        'J': 11,
                        'Q': 12,
                        'K': 13,
                        'A': 14
                    };
                    const sortedHand = hand.sort((a, b) => cardValues[b] - cardValues[a]);
                    return cardValues[sortedHand[0]];
                }

                const pokerResult = playPoker();
                Maria.sendMessage(m.chat, {
                    text: pokerResult,
                    mentions: [users, m.sender]
                }, {
                    quoted: m
                });
            }
            break;

            case 'slot':
            case 'spin': {
                if (!m.isGroup) return reply(mess.grouponly);

                const symbols = ["🍍", "🥥", "🍎"];
                const reel1 = symbols[Math.floor(Math.random() * symbols.length)];
                const reel2 = symbols[Math.floor(Math.random() * symbols.length)];
                const reel3 = symbols[Math.floor(Math.random() * symbols.length)];

                const resultMessage = playSlotMachine(reel1, reel2, reel3, m.sender);

                reply(resultMessage);
                break;
            }

            function playSlotMachine(reel1, reel2, reel3, player) {
                const symbols = [reel1, reel2, reel3];
                const slotSymbols = ['🍒', '🍇', '🍊', '🍋', '🍉', '🍎', '🍓', '🍈'];
                const winMessages = [`*You harvested a basket of*\n\n_--> ${slotSymbols[0]}+${slotSymbols[0]}+${slotSymbols[0]}_`,
                    `*Impressive, You must be a specialist in plucking coconuts*\n\n_--> ${slotSymbols[1]}+${slotSymbols[1]}+${slotSymbols[1]}_`,
                    `*Amazing, you are going to be making pineapple juice for the family*\n\n_--> ${slotSymbols[2]}+${slotSymbols[2]}+${slotSymbols[2]}_`
                ];
                const loseMessages = [`*You suck at playing this game*\n\n_--> ${slotSymbols[0]}-${slotSymbols[1]}-${slotSymbols[2]}_`,
                    `*Totally out of line*\n\n_--> ${slotSymbols[1]}-${slotSymbols[2]}-${slotSymbols[0]}_`,
                    `*Are you a newbie?*\n\n_--> ${slotSymbols[2]}-${slotSymbols[0]}-${slotSymbols[1]}_`
                ];

                // Perform slot machine logic
                if (symbols[0] === symbols[1] && symbols[1] === symbols[2]) {
                    return `🎰 *Slot Symphony* 🎰\n-------------------------\n${winMessages[Math.floor(Math.random() * winMessages.length)]}\n-------------------------\n@${player.split("@")[0]} Congratulations, you won!*`;
                } else {
                    return `🎰 *Slot Symphony* 🎰\n-------------------------\n${loseMessages[Math.floor(Math.random() * loseMessages.length)]}\n-------------------------\n@${player.split("@")[0]} Better luck next time!*`;
                }
            }

            case 'guesspokemon': {
                const pokemonData = [{
                        name: 'Pikachu',
                        type: 'Electric',
                        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
                    },
                    {
                        name: 'Charmander',
                        type: 'Fire',
                        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
                    },
                    {
                        name: 'Bulbasaur',
                        type: 'Grass',
                        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
                    },
                    {
                        name: 'Squirtle',
                        type: 'Water',
                        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'
                    },
                    // Add more Pokémon with their types and image URLs here
                ];

                const randomIndex = Math.floor(Math.random() * pokemonData.length);
                const randomPokemon = pokemonData[randomIndex];

                // Send the type and an image of the Pokémon to the user and ask them to guess
                const message = `Guess the Pokémon based on its type: *${randomPokemon.type}*.\n\nReply with the name of the Pokémon!\n\nImage: ${randomPokemon.image}`;
                Maria.sendMessage(m.chat, {
                    text: message,
                    mentions: [m.sender]
                }, {
                    quoted: m
                });

                // Function to check if the guess is correct
                function checkGuess(guess) {
                    if (guess.trim().toLowerCase() === randomPokemon.name.toLowerCase()) {
                        return `🎉 Congratulations! You guessed it right! It's ${randomPokemon.name}!`;
                    } else {
                        return `❌ Wrong guess! Keep trying!`;
                    }
                }

                // Listen for the user's reply and check if it's the correct Pokémon name
                Maria.onMessage((msg) => {
                    if (msg.body && msg.body.toLowerCase() === randomPokemon.name.toLowerCase() && msg.sender === m.sender) {
                        const resultMessage = checkGuess(msg.body);
                        Maria.sendMessage(m.chat, {
                            text: resultMessage
                        }, {
                            quoted: m
                        });
                        Maria.removeAllListeners('message');
                    }
                });
            }
            break;

            case 'element':
                if (!args[0]) return reply(`Please use this command like this: ${prefix}element br`);
                const queryy = args.join(" ");
                const search = await pTable(queryy);
                if (search === undefined) return reply(`❗️Please provide me a valid element by visiting here !\n\nhttps://en.m.wikipedia.org/wiki/Periodic_table`);

                const responsee = await npt.getByNumber(search.number);
                let caption = "";
                caption = "              *『  Element Details  』*\n\n";
                caption += `🔴 *Elelment:* ${responsee.name}\n`;
                caption += `⬜ *Atomic Number:* ${responsee.number}\n`;
                caption += `🟡 *Atomic Mass:* ${responsee.atomic_mass}\n`;
                caption += `⬛ *Symbol:* ${responsee.symbol}\n`;
                caption += `❓ *Appearance:* ${responsee.apearance}\n`;
                caption += `🟢 *Phase:* ${responsee.phase}\n`;
                caption += `♨️ *Boiling Point:* ${responsee.boil} K\n️`;
                caption += `💧 *Melting Point:* ${responsee.melt} K\n`;
                caption += `🟣 *Density:* ${responsee.density} g/mL\n`;
                caption += `⚫ *Shells:* ${responsee.shells.join(", ")}\n`;
                caption += `🌐 *URL:* ${responsee.source}\n\n`;
                caption += `💬 *Summary:* ${responsee.summary}\n`;
                await Maria.sendMessage(from, {
                    image: {
                        url: 'https://graph.org/file/c8ad7dc322c0b9b7eca8f.jpg'
                    },
                    caption: caption
                }, {
                    quoted: m
                });
                break;


            case 'pokemon': {
                if (!text) return m.reply("❌ No query provided!")
                try {
                    let {
                        data: data
                    } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${text}`)
                    if (!data.name) return m.reply(`❌ No such pokemon`)
                    let yu = `💫 *Name: ${data.name}*\n〽️ *Pokedex ID: ${data.id}*\n⚖ *Weight: ${data.weight}*\n🔆 *Height: ${data.height}*\n🌟 *Base Experience: ${data.base_experience}*\n📛 *Abilities: ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}*\n🎀 *Type: ${data.types[0].type.name}*\n✳ *HP: ${data.stats[0].base_stat}*\n⚔ *Attack: ${data.stats[1].base_stat}*\n🔰 *Defense: ${data.stats[2].base_stat}*\n☄ *Special Attack: ${data.stats[3].base_stat}*\n🛡 *Special Defense:${data.stats[4].base_stat}*\n🎐 *Speed: ${data.stats[5].base_stat}*\n`
                    Maria.sendMessage(m.chat, {
                        image: {
                            url: data.sprites.front_default
                        },
                        caption: yu
                    }, {
                        quoted: m
                    })
                } catch (err) {
                    m.reply("An Error Occurred")
                    console.log(err)
                }
            }
            break

            case 'flipcoin':
            case 'coin': {
                // Simulate flipping a coin (0 for heads, 1 for tails)
                const result = Math.random() < 0.5 ? 'Heads' : 'Tails';

                const flipCoinMessage = `🪙 *Coin Flip Result: ${result}*`;
                reply(flipCoinMessage);
            }
            break;

            case 'rps': {
                // Check if the command includes a valid move (rock, paper, or scissors)
                const validMoves = ['rock', 'paper', 'scissors'];
                if (!args[0] || !validMoves.includes(args[0].toLowerCase())) {
                    return reply('Please provide a valid move: rock, paper, or scissors.');
                }

                // Generate a random move for the bot
                const botMove = validMoves[Math.floor(Math.random() * validMoves.length)];

                // Determine the winner
                const userMove = args[0].toLowerCase();
                let result;

                if (userMove === botMove) {
                    result = 'It\'s a tie!';
                } else if (
                    (userMove === 'rock' && botMove === 'scissors') ||
                    (userMove === 'paper' && botMove === 'rock') ||
                    (userMove === 'scissors' && botMove === 'paper')
                ) {
                    result = `You win! 🥳 ${userMove} beats ${botMove}.`;
                } else {
                    result = `You lose! 🫳🏻 ${botMove} beats ${userMove}.`;
                }

                // Send the result as a response
                reply(`You chose ${userMove}.\nThe bot chose ${botMove}.\n${result}`);
            }
            break;


            case 'calculator':
            case 'cal':
            case 'calculate': {
                if (args.length < 1) return reply(`*Example :*\n${prefix}calculator 2*5\n\n`)
                let qsd = args.join(" ")
                if (typeof mathjs.evaluate(qsd) !== 'number') {
                    reply('Error ❌')
                } else {
                    reply(`\`\`\`「 🧮 Calculator Tool 🧮 」\`\`\`\n\n*Input :* ${qsd}\n*Calculation Result :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
                }
            }
            break;

            case 'guess': {
                // Generate a random number between 1 and 100
                const randomNumber = Math.floor(Math.random() * 100) + 1;

                // Check if the user provided a guess
                const userGuess = parseInt(args[0]);
                if (!userGuess || userGuess < 1 || userGuess > 100) {
                    return reply('Please provide a valid guess between 1 and 100.');
                }

                // Compare the user's guess with the random number
                if (userGuess === randomNumber) {
                    reply(`Congratulations! 🎉 You guessed the correct number ${randomNumber}!`);
                } else {
                    const difference = Math.abs(randomNumber - userGuess);
                    let hint = '';
                    if (difference <= 10) {
                        hint = 'Close! 🔥';
                    } else {
                        hint = 'Not quite! ❄️';
                    }
                    reply(`Wrong guess! ${hint} The correct number was ${randomNumber}.`);
                }
            }
            break;


            case 'google': {
                Maria.sendMessage(from, {
                    react: {
                        text: "🔎",
                        key: m.key
                    }
                })
                if (!q) return reply(`Example : ${prefix + command} Neo Anime Community`)
                let google = require('google-it')
                google({
                    'query': text
                }).then(res => {
                    let teks = `「🏮 *Google Search Engine*🏮」 \n\n
`
                    for (let g of res) {
                        teks += `🧧 *Title* : ${g.title}\n`
                        teks += `🔮 *Description* : ${g.snippet}\n`
                        teks += `📎 *Link* : ${g.link}\n\n────────────────────\n\n`
                    }
                    reply(teks)
                })
            }
            break



            case 'define':
                if (!args[0]) return reply(`Please specify a word to define. For example: ${prefix}define computer`);

                const word = args[0];

                dictionary.getDef(word, 'en', null, async function(definition) {
                    if (!definition || !definition.definition) {
                        return reply(`Definition for "${word}" not found.`);
                    }

                    const meaning = definition.definition;

                    await Maria.sendMessage(from, `📚 *Definition of ${word}*\n\n${meaning}`, {
                        quoted: m
                    });
                });
                break;

            case 'sciencefact':
                // Call a function to fetch a random science fact
                const scienceFact = await fetchRandomScienceFact();

                if (scienceFact) {
                    reply(`*Random Science Fact:*\n\n${scienceFact}`);
                } else {
                    reply('Failed to fetch a random science fact.');
                }
                break;

                // Function to fetch a random science fact
                async function fetchRandomScienceFact() {
                    try {
                        // Call an API or fetch data from a science facts database
                        // Example:
                        const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
                        const data = await response.json();

                        // Extract the science fact from the response
                        const fact = data.text;

                        return fact;
                    } catch (error) {
                        console.error('Error fetching random science fact:', error);
                        return null;
                    }
                }

            case 'sciencenews':
                // Call a function to fetch the latest science news headlines
                const headlines = await fetchScienceNewsHeadlines();

                if (headlines && headlines.length > 0) {
                    reply(`*Latest Science News Headlines:*\n\n${headlines.join('\n')}`);
                } else {
                    reply('Failed to fetch science news headlines.');
                }
                break;

                // Function to fetch the latest science news headlines using the News API
                async function fetchScienceNewsHeadlines() {
                    const apiKey = 'bf17483564e24e2aa83ff6dc6a8e79eb'; // Provided News API key

                    try {
                        const response = await fetch(`https://newsapi.org/v2/top-headlines?category=science&apiKey=${apiKey}`);
                        const data = await response.json();

                        if (data.articles && data.articles.length > 0) {
                            // Extract the headlines from the response
                            const headlines = data.articles.map(article => article.title);
                            return headlines;
                        } else {
                            console.error('No articles found in the response.');
                            return null;
                        }
                    } catch (error) {
                        console.error('Error fetching science news headlines:', error);
                        return null;
                    }
                }

                // Add more cases for other games as needed

                //Function of games
            case 'chat':

                const axios = require("axios");

                botreply = await axios.get(
                    `http://api.brainshop.ai/get?bid=180857&key=SeLyK3P24U91Ed7a&uid=[Mariabot]&msg=[text]`
                );

                txtChatbot = `${botreply.data.cnt}`;
                m.reply(txtChatbot);

                break;

            case "exec":
            case "run":
                if (!text) {
                    return m.reply(
                        `🍭𝑫𝒂𝒓𝒍𝒊𝒏𝒈 𝑷𝒍𝒆𝒂𝒔𝒆 𝒑𝒓𝒐𝒗𝒊𝒅𝒆 𝒂 𝒄𝒐𝒎𝒎𝒂𝒏𝒅 𝒕𝒐 𝒆𝒙𝒆𝒄𝒖𝒕𝒆! \n\n 𝑬𝒙𝒂𝒎𝒑𝒍𝒆: *${prefix}𝒆𝒙𝒆𝒄 𝒎.𝒓𝒆𝒑𝒍𝒚("3𝒓𝒅 𝒑𝒂𝒓𝒕𝒚 𝒄𝒐𝒅𝒆 𝒊𝒔 𝒃𝒆𝒊𝒏𝒈 𝒆𝒙𝒆𝒄𝒖𝒕𝒆𝒅...")*`
                    );
                }
                try {
                    const result = eval(text);
                    out = JSON.stringify(result, null, "\t") || "Evaluated JavaScript";
                } catch (e) {
                    m.reply(`Error: ${e.message}`);
                }
                break;


            case "info":
                Maria.sendMessage(from, {
                    react: {
                        text: "",
                        key: m.key
                    }
                })
                let ifx = `❁ ════ ❃•💙 *MARIA* 💙•❃ ════ ❁

\`\`\`A FULL FLEDGED MULTI DEVICE WHATSAPP BOT BY KARU\`\`\`

❁ ═══ ❃•📕 *INFORMATION*📕•❃ ═══ ❁
\`\`\`A simple and easy-to-use WhatsApp bot project that's still in development\`\`\`

❁ ═════ ❃•📑 *COMMUNITY WEBSITE* 📑•❃ ═════ ❁
*_LINK:- neoanicom.com?joinUs.php*


❁ ═══ ❃•✍🏻 *CONTRIBUTE* ✍🏻•❃ ═══ ❁
\`\`\`Feel free to open issues regarding any problems or if you have any feature feel free to contact owner by typing ${prefix}owner or ${prefix}mods`

                Maria.sendMessage(m.chat, {
                    image: {
                        url: "https://graph.org/file/c8ad7dc322c0b9b7eca8f.jpg"
                    },
                    caption: ifx,
                    gifPlayback: true
                }, {
                    quoted: m
                });
                break;



            case "term":
                Maria.sendMessage(from, {
                    react: {
                        text: "™️",
                        key: m.key
                    }
                })
                let tifx = `*𝚃𝙴𝚁𝙼𝚜 𝙰𝙽𝙳 𝙲𝙾𝙽𝙳𝙸𝚃𝙸𝙾𝙽*\n\n
⍟ *────────────────* ⍟ 

📝 Note: Beware of fake Nao Shion bots! People may falsely claim to represent Nao Shion. Please exercise caution.

_Whatsapp Bots have become increasingly popular, but with that comes the risk of encountering fake accounts. Stay vigilant._

*Ban from using the bot:*

*⛔ Breaking the following rules will result in a ban:*
*⛔ Calling any of the bot numbers*
*⛔ Using unlisted commands (commands not listed in help)*
*⛔ Insulting / ignoring bot / Neo staff / warnings*

*Contact information:*

_We will update the bot's terms and conditions periodically, so it's your responsibility to check our Neo groups for updates._
_If you have any questions regarding our terms, please reach out to us._
_For everything else, use common sense._

*FUTURE IS NOW🚀~Nao Shion*
*_🚀Karu Shion_*

⍟ *────────────────* ⍟`

                Maria.sendMessage(m.chat, {
                    image: {
                        url: "https://graph.org/file/c8ad7dc322c0b9b7eca8f.jpg"
                    },
                    caption: tifx,
                    gifPlayback: true
                }, {
                    quoted: m
                });
                break;
                /////////////////////////////////////////////////////

                if (isCmd) {
                    reply(`No such command, Baka!`)

                }

	 // -------------------------------- NEO INFO START ------------------------------------
	
	      case 'neohistory':
	        
	        var media = 'https://telegra.ph/file/aa321d2670c88d1bc835d.jpg';
	        var textMessage = '══☩═════☩══♛══☩═════☩══\nHistory of the Neo Anime Community\n══☩═════☩══♛══☩═════☩══\nThe Neo Anime Community was founded on July 31, 2021, under the name "Neo Asterisk," by two admins named Karu and Yama, who had previously withdrawn from another anime community. The name "Neo Asterisk," which means "Little Star," reflects the founder vision of a small community that would one day shine.\n\nThe community employs a hierarchical system, where the top admin holds the power to remove any admin below them, and any admin has the right to remove any community member they wish. The current Neo Asterisk admins are Karu, Yamato, Kemey, and Mio.\n\nOn August 9, 2021, the community was unexpectedly "raided" when a video posted by Karu went viral on TikTok. This event brought a sudden influx of people to the Neo Asterisk community, raising its popularity significantly.\n\nOn October 21, 2021, due to the increasing number of members, the community was renamed Neo Anime Community, and Neo Iota was formed. The word "Iota," inspired by one of the Greek alphabets, represents the idea that Neo Iota is a small part of the Neo community. Admin selections were made, and Rin, Rei, and Zangkuro were chosen as the initial admins of Neo Iota. However, Zangkuro later resigned due to personal reasons, and Nash was selected to replace him.\n\nOn March 5, 2022, Kemey created a WhatsApp group called Neo Star and an MCPE server for Neo members to play together. However, some members caused chaos on the server, and Kemey decided to close it down and rename the WhatsApp group to Neo Arcus. Arcus, meaning "the bow used for shooting arrows," reflects the idea that Neo Arcus members are bows that will shoot arrows to bring victory. Kemey appointed Piko and Luqman as admins to manage Neo Arcus.\n\nOn June 17, 2022, Yama, one of the co-founders of the Neo community, left the community due to mental and physical illness.\n\nOn October 3, 2022, Karu made significant changes to the admin team to improve the quality of the community. Nash demoted from her last position as one of the Neo Iota admins, and Reiki and Rin were promoted as admins in the Neo Asterisk WhatsApp group.\n\nOn October 7, 2022, Neo Judgement announced its new staff members: Nagisa, Hazu, Izumi, and Muisu, as neoanimeme.my Instagram admins, and Riezu and Izysis as gaming admins, who are also admins of Neo Arcus. However, Muisu resigned due to personal reasons and Akkinior has been assigned by Karu to fill in the empty space that has been left by Muisu.\n\nOn May 5, 2023, Reiki was promoted to Neo Judgement, where they will join the management team to manage the community inside and out, while Hazu was promoted to Neo Anti-Skill, filling the vacant space left by Reiki to help other admins handle all of the Neo Anime Community WhatsApp groups.\n\nOn May 31, 2023, Riku joined Neo Team as an admin for neoanimeme.my Instagram. We have recognized Riku exceptional capabilities and believe that he will make a valuable contribution to our community.\n\nOn June 5, 2023, following a voting session held on June 4, 2023, Izumi has been announced for selection as the new head of the Instagram department. Out of the 5 members, Izumi received the majority of the votes and will now lead the department in overseeing content posting and management.\n\nOn June 30, 2023, Mio, one of our dedicated admins and a beloved member of the Neo Anime Community, has decided to leave the WhatsApp groups and administration due to personal commitments. With Mio departure from the Neo Anime Community WhatsApp groups, Karu, the founder of Neo Anime Community, remains as the last member of the original Neo Judgement team. Mio will continue to be an active member of our Neo Discord server.';
	        Maria.sendMessage(
	          from, {
	          image: { url: media },
	          caption: textMessage,
	        }, { quoted: m }
	        );
	        break;
	
	      case 'halloffame':
	        
	        var media = 'https://telegra.ph/file/aa321d2670c88d1bc835d.jpg';
	        var textMessage = "🌟 *NEO TEAM HALL OF FAME* 🌟\n\nLet's take a moment to appreciate and remember the incredible individuals who were once a part of our Neo Team. Their dedication, passion, and hard work have left a lasting impact on our community. 🙌🌟\n\n🌟 *Zangkuro* - Former Anti-Skill\n🌟 *Nash* - Former Anti-Skill\n🌟 *Nagisa* - Former Instagram Department Member\n🌟 *Giru* - Former Gaming Department Member\n🌟 *Piko* - Former Gaming Department Member\n🌟 *Akkinior* - Former Instagram Department Member\n🌟 *Eirelle* - Former Design Department Member\n\nThough they may have moved on to new adventures, their contributions will forever be a part of our Neo legacy. We salute you and express our deepest gratitude for your invaluable service! 🚀🌈 #NeoTeamHallOfFame #CommunityHeroes";
	        Maria.sendMessage(
	          from, {
	          image: { url: media },
	          caption: textMessage,
	        }, { quoted: m }
	        );
	        break;
	
	      case 'adminnotbot':
	        
	        var media = 'https://telegra.ph/file/aa321d2670c88d1bc835d.jpg';
	        var textMessage = "✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦\n*ADMINS ARE HUMAN, NOT BOTS!*\n✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦\nWe understand that there may be instances where certain members break the rules, and we might not always be available to handle the situation due to our personal commitments or the need for rest. We sincerely apologize if we haven't been able to fulfill our duties to the best of our abilities. Please remember that we are not automated bots who can be present 24/7 without tending to other responsibilities or taking breaks. We are regular individuals who are dedicated to the community but have limitations. We welcome any complaints or concerns you may have, but accusing us of neglecting our responsibilities, not taking the rules seriously, or disregarding the group is unfair and unfounded. Put yourself in our shoes, and imagine being judged for a single instance of unavailability. If you genuinely care about the community, we urge you to support us instead of pointing fingers and making baseless accusations. Let's work together to create a better community experience for everyone.\n\nSincerely, Neo Team";
	        Maria.sendMessage(
	          from, {
	          image: { url: media },
	          caption: textMessage,
	        }, { quoted: m }
	        );
	        break;
	
	      case "neoart":
	        
	        var notnot = JSON.parse(fs.readFileSync("./src/media/neo/art.json"));
	        var hasil = pickRandom(notnot);
	        Maria.sendMessage(
	          m.chat,
	          {
	            caption: hasil.caption, // Use the caption from the JSON file
	            image: { url: "https://telegra.ph/file/aa321d2670c88d1bc835d.jpg" }
	          },
	          { quoted: m }
	        );
	        break;
	
	      case "neoteam":
	        console.log("NeoTeam");
	        
	        var media = 'https://telegra.ph/file/aa321d2670c88d1bc835d.jpg';
	        var textMessage = "》》》NEO TEAM《《《\n୨⎯ Neo Judgement (Management) ⎯୧\nFounder - Karu Shion\nCo-Founder - Yamato\nAdministrator - Mio\nAssistant Administrator - Kemey\nManager of Anti-Skill - Rei\n\n୨⎯ Neo Anti-Skill (WhatsApp) ⎯୧\nFirst Tier Anti Skill - Rin\nFirst Tier Anti Skill - Hazu\nSecond Tier Anti Skill - Zen\nSecond Tier Anti Skill - ???\n\n୨⎯ Instagram Department ⎯୧\nLeader: Izumi\n- Riku Fubuki\n- Muisu\n- Ren\n- Son\n- Muichiro\n\n୨⎯ Gaming Department ⎯୧\nLeader: Riezu\n- Izsyis\n- Shiroi\n\n୨⎯ Discord Department ⎯୧\nLeader: Mio\n- Edmond\n- Mentos\n\n୨⎯ Graphic Department⎯୧\nLeader: Rika Akari\n- Syaz\n- Nyom\n\n୨⎯ Rikaru Store Team ⎯୧\nOwner - Karu Shion\nPartner - Rika Akari\nAll Neo Dropshippers\n\n_For Neo Hall Of Fame, type /halloffame_";
	        Maria.sendMessage(
	          from, {
	          image: { url: media },
	          caption: textMessage,
	        }, { quoted: m }
	        );
	        break;
	
	      // -------------------------------- NEO INFO END ------------------------------------
	
	
	      //  -------------------------------- NEO RULES START ------------------------------------
	
	      case 'rule1':
	        
	        var media = 'https://telegra.ph/file/aa321d2670c88d1bc835d.jpg';
	        var textMessage = '*RULE 1: No ASEAN normie meme/sticker allowed*\n\nAccording to Judgemento, "Normie Things" refers to stickers or memes that are unrelated to anime or not widely known. To help you understand, lets compare the "RickRoll" meme, which is globally recognized, with most Malaysian/Indonesian influencer/politician memes that are mainly known locally. The goal is to avoid cringeworthy content that lacks wider appeal. If you have an issue with our rules or administration style, the "Leave Group" button is available.\n\nIts important to recognize that every community has its own unique rules and administration style. Please refrain from comparing our community to others. We believe its unfair to compare our structured community with more "anarchy"-style communities. While we may share the same genre, each community has its own distinct characteristics.';
	        Maria.sendMessage(
	          from, {
	          image: { url: media },
	          caption: textMessage,
	        }, { quoted: m }
	        );
	        break;
	      case 'rule2':
	        
	        var media = 'https://telegra.ph/file/aa321d2670c88d1bc835d.jpg';
	        var textMessage = '*Rule Number 2: No Spamming*\n\nWe would like to remind all members that spamming and chain messages are not allowed in our community. Spamming refers to the act of flooding the group chat with multiple messages or sending repetitive content that disrupts the conversation flow. Meanwhile, chain messages refer to any message that encourages members to forward or share the same message to multiple people.\n\nWe consider such actions as disruptive and disrespectful towards other members, and it may lead to unnecessary clutter in the group chat. We encourage all members to respect one anothers space and refrain from sending multiple messages or forwarding chain messages that may annoy other members.\n\nAny member who is found spamming the chat or forwarding chain messages will be warned and reminded to refrain from such actions. If the member continues to do so, they will be removed from the group without any prior warning.\n\nWe want to maintain a healthy and active community where members can interact and engage in meaningful discussions without any disruptions. Therefore, we kindly ask all members to adhere to this rule and respect one anothers space.\n\nThank you for your cooperation.\n\nAny confusion or questions, please do not hesitate to contact any of the admins for clarification.';
	        Maria.sendMessage(
	          from, {
	          image: { url: media },
	          caption: textMessage,
	        }, { quoted: m }
	        );
	        break;
	      case 'rule3':
	        
	        var media = 'https://telegra.ph/file/aa321d2670c88d1bc835d.jpg';
	        var textMessage = '*Rule Number 3: Keep your behavior (use less curse word etc)*\n\nRule 3 of the Neo Anime Community states that all members must keep their behavior in check. This means refraining from using excessive curse words or engaging in any other form of behavior that could be considered offensive or disruptive. We want to maintain a positive and respectful environment within our community, and therefore, any behavior that goes against this rule may result in immediate removal from the group. We ask all members to be mindful of their language and behavior when interacting with others in the community. If you have any doubts or concerns about your behavior, please do not hesitate to ask an admin for clarification. Lets work together to create a welcoming and enjoyable space for everyone in the Neo Anime Community!';
	        Maria.sendMessage(
	          from, {
	          image: { url: media },
	          caption: textMessage,
	        }, { quoted: m }
	        );
	        break;
	      case 'rule4':
	        
	        var media = 'https://telegra.ph/file/aa321d2670c88d1bc835d.jpg';
	        var textMessage = '*Rule Number 4: No spoiler*\n\nRule 4 of our community states that no spoilers are allowed. However, we understand that discussing anime and manga often involves spoilers, so we have a few guidelines to follow. Spoilers should be limited to minor details and should not reveal major plot points or character deaths that would ruin the experience for someone who hasnt watched or read the series yet. Additionally, we recommend using spoiler tags or warning others before discussing spoilers to allow them to opt-out of the conversation if they choose to do so. It is important to respect everyones enjoyment and experience of the series, and to avoid spoiling it for others. Anyone found to be intentionally spoiling anime or manga for others will be subject to immediate removal from the community. If you are unsure about what constitutes a spoiler, please ask an admin for clarification.';
	        Maria.sendMessage(
	          from, {
	          image: { url: media },
	          caption: textMessage,
	        }, { quoted: m }
	        );
	        break;
	      case 'rule5':
	        
	        var media = 'https://telegra.ph/file/aa321d2670c88d1bc835d.jpg';
	        var textMessage = '*Rule Number 5: Ask for permission before promoting stuff*\n\nRule 5 states that if members want to promote something, they need to submit an application to any admin first before promoting it. The application should include the following details:\n\n1. Content name: This refers to the name of the content that the member wants to promote.\n\n2. About: This refers to a brief description of the content that the member wants to promote.\n\n3. Group/Community/owner/etc: This refers to the group, community, owner, or any relevant information about the content that the member wants to promote.\n\nBy submitting an application and obtaining permission from the admin, members can avoid promoting content that may be considered inappropriate or irrelevant to the anime community.';
	        Maria.sendMessage(
	          from, {
	          image: { url: media },
	          caption: textMessage,
	        }, { quoted: m }
	        );
	        break;
	      case 'rule6':
	        
	        var media = 'https://telegra.ph/file/aa321d2670c88d1bc835d.jpg';
	        var textMessage = '*Rule Number 6: no NSFW*\n\nRule 6 of the "Neo Anime Community" states that no NSFW content is allowed in the group. This includes any explicit or suggestive content that is not appropriate for all ages or may offend some members of the community. NSFW content includes but is not limited to sexual content, nudity, and violent or graphic imagery. The aim of this rule is to maintain a safe and respectful environment for all members of the community, regardless of age or personal beliefs. Any member found to be posting NSFW content will be immediately removed from the group.';
	        Maria.sendMessage(
	          from, {
	          image: { url: media },
	          caption: textMessage,
	        }, { quoted: m }
	        );
	        break;
	      case 'rule7':
	        
	        var media = 'https://telegra.ph/file/aa321d2670c88d1bc835d.jpg';
	        var textMessage = '*Rule Number 7: No racist/politic*\n\nRule 7 states that racist or political discussions are not allowed in the community. This means that members should avoid sharing or discussing any content that promotes or expresses racism or discrimination based on race, ethnicity, nationality, or any other personal characteristic. Additionally, members should not engage in any political discussions or debates as these topics can be divisive and may create conflict within the community. The goal is to maintain a friendly and respectful environment where everyone feels comfortable and valued regardless of their background or beliefs. Violating this rule may result in immediate removal from the community';
	        Maria.sendMessage(
	          from, {
	          image: { url: media },
	          caption: textMessage,
	        }, { quoted: m }
	        );
	        break;
	      case 'rule8':
	        
	        var media = 'https://telegra.ph/file/aa321d2670c88d1bc835d.jpg';
	        var textMessage = '*Rule Number 8: No kpop/kdrama things (we dont hate but this is anime community)*\n\nRule 8 states that members are not allowed to post anything related to Kpop or Kdrama in the anime community. This does not mean that the community hates Kpop or Kdrama, but the focus of the community is on anime, so anything outside of that is not allowed.\n\nThe reason for this rule is to maintain the focus and integrity of the community. Posting content related to Kpop or Kdrama may distract members from the main purpose of the community, which is to discuss and enjoy anime-related content.\n\nIt is important to respect the communitys guidelines and focus on the content that is relevant to the communitys interests. If members wish to discuss or share content related to Kpop or Kdrama, they can do so in other communities or groups that are dedicated to those topics.';
	        Maria.sendMessage(
	          from, {
	          image: { url: media },
	          caption: textMessage,
	        }, { quoted: m }
	        );
	        break;
	      case 'rule9':
	        
	        var media = 'https://telegra.ph/file/aa321d2670c88d1bc835d.jpg';
	        var textMessage = '*Rule Number 9:  harassing other members*\n\nRule 9 is a crucial rule that aims to ensure a safe and comfortable environment for all members, especially female members, who might be vulnerable to harassment. The rule strictly prohibits any form of harassment towards other members, and any violation of this rule may result in an immediate kick from the group.\n\nHarassment can take many forms, including but not limited to verbal harassment, sexual harassment, cyberbullying, and stalking. This rule applies to all members regardless of gender, but it is particularly important for female members who may face more aggressive behavior from some male members.\n\nThe rule aims to create a community where everyone feels respected and safe. Members should not engage in any behavior that makes others feel uncomfortable or harassed. If a member feels harassed by another member, they are encouraged to report the incident to any admin, who will take the necessary action to resolve the issue.\n\nIn summary, Rule 9 aims to promote a safe and respectful environment for all members, and any form of harassment towards other members, especially female members, will not be tolerated.';
	        Maria.sendMessage(
	          from, {
	          image: { url: media },
	          caption: textMessage,
	        }, { quoted: m }
	        );
	        break;
	      case 'rule10':
	        
	        var media = 'https://telegra.ph/file/aa321d2670c88d1bc835d.jpg';
	        var textMessage = '*Rule Number 10: Avoid conflicts*\n\nRule 10 of the anime community states "Avoid conflicts". This means that members should refrain from engaging in any behavior that may lead to conflicts or arguments within the community. It is important to maintain a positive and respectful atmosphere for everyone to enjoy.\n\nIf a member is found to be causing conflicts or behaving in a confrontational manner towards others, they may face consequences such as warnings or even being kicked out of the community.\n\nIt is important to remember that conflicts can arise due to differences in opinions and preferences, but it is important to handle them in a mature and respectful manner. If there are any issues or conflicts, members are encouraged to reach out to the admins for help in resolving the situation.';
	        Maria.sendMessage(
	          from, {
	          image: { url: media },
	          caption: textMessage,
	        }, { quoted: m }
	        );
	        break;
	
	      // -------------------------------- NEO RULES END ------------------------------------
	
	
	      // -------------------------------- NEO INTRO START ------------------------------------
	
	      case 'karu':
	        
	        var media = 'https://telegra.ph/file/5787412a7ea13e251aa8e.png';
	        var textMessage = '‿︵‿︵୨˚̣̣̣͙୧ - - ୨˚̣̣̣͙୧‿︵‿︵\n*NEO STAFF INFO*\n*Name :* Karu Shion\n*Position :* Founder of Neo Anime Community\n*TikTok/Instagram :* karulation\n\n*Description :* *Karu* or also known as *Haikaru* is the founder of Neo Anime Community. You may not see him often but he exists. He can be friendly and dry depending on his mood. Have passion in web development and also a cosplayer. Lastly, Nino is his number 1 waifu since 2019. Feel free to chat with him, he doesnt eat people.\n‿︵‿︵୨˚̣̣̣͙୧ - - ୨˚̣̣̣͙୧‿︵‿︵';
	        Maria.sendMessage(
	          from, {
	          image: { url: media },
	          caption: textMessage,
	        }, { quoted: m }
	        );
	        break;
	
	      case 'edmond':
	        
	        var media = 'https://telegra.ph/file/aa321d2670c88d1bc835d.jpg';
	        var textMessage = "‿︵‿︵୨˚̣̣̣͙୧ - - ୨˚̣̣̣͙୧‿︵‿︵\nNEO STAFF INFO \nName : Edmond\nPosition : Member of Discord Department\n\nA shy person but friendly one. Loves spending my leisure time to expand my knowledge of history, aviation, tanks, cars & Motorsports. Plays Sim Racing & FPS, and RTS sometimes.\n‿︵‿︵୨˚̣̣̣͙୧ - - ୨˚̣̣̣͙୧‿︵‿︵";
	        Maria.sendMessage(
	          from, {
	          image: { url: media },
	          caption: textMessage,
	        }, { quoted: m }
	        );
	        break;
	
	      case 'hazu':
	        
	        var media = 'https://telegra.ph/file/aa321d2670c88d1bc835d.jpg';
	        var textMessage = "‿︵‿︵୨˚̣̣̣͙୧ - - ୨˚̣̣̣͙୧‿︵‿︵\nNEO STAFF INFO\nName : Hazu\nPosition : First Tier Neo Anti-Skill\n\nA friendly guy, gamer, not a weeb but likes to watch anime (not much), introvert, I also will give you advice if you did something wrong. I ain't describing my whole personality here, so hope you will have a great day. Just a friendly reminder, we all make mistakes, it's what makes us human. I work in the dark to serve the light, so be careful while chatting. ಡ⁠ ͜⁠ ⁠ʖ⁠ ⁠ಡ\n‿︵‿︵୨˚̣̣̣͙୧ - - ୨˚̣̣̣͙୧‿︵‿︵";
	        Maria.sendMessage(
	          from, {
	          image: { url: media },
	          caption: textMessage,
	        }, { quoted: m }
	        );
	        break;
	
	      case 'izumi':
	        
	        var media = 'https://telegra.ph/file/aa321d2670c88d1bc835d.jpg';
	        var textMessage = "‿︵‿︵୨˚̣̣̣͙୧ - - ୨˚̣̣̣͙୧‿︵‿︵\nNEO STAFF INFO\nName : Izumi\nPosition : Head of Instagram Department\n\nPast is past. It always comes when you're traumatized by itself. If you can't move on, just take it for motivation. Btw, I like coffee, games, and also you.\n‿︵‿︵୨˚̣̣̣͙୧ - - ୨˚̣̣̣͙୧‿︵‿︵";
	        Maria.sendMessage(
	          from, {
	          image: { url: media },
	          caption: textMessage,
	        }, { quoted: m }
	        );
	        break;
	
	      case 'mentos':
	        
	        var media = 'https://telegra.ph/file/82e7c8e5f40aea74247c4.jpg';
	        var textMessage = "MENTOS INTRODUCTION\n══ ══ ══ ≪ °❈° ≫ ══ ══ ══\n\nName: Mentos yamada\nJoined group: Neo Asterisk, Neo arcus, Neo lounge, and Neo iota\nBirthday: 1/9\nDescription: A man whose life is only games, anime, and weeb high-class. Really likes nihongo and anime memes, and also I dont know if Im just a mentos.\n\nTiktok: Just Mentosシ\nIG: irpanmitos\n\nMobile Legend:\nUsername: Just Mentosシ\nId: 792636004\n\nPro lance sing sing sing~~\n=======================\nKeep fighting even if you know you will lose...ฅ⁠^⁠•ω•⁠^⁠ฅ";
	        Maria.sendMessage(
	          from, {
	          image: { url: media },
	          caption: textMessage,
	        }, { quoted: m }
	        );
	        break;
	
	      case 'reiki':
	        
	        var media = 'https://telegra.ph/file/ceeaef936958232fdf7b5.jpg';
	        var textMessage = "*REIKI INTRODUCTION*\n══ ══ ══ ≪ °❈° ≫ ══ ══ ══\n\nName: Setsuna Reiki (yall can just call me Rei)\nPosition: Manager of Neo Anti-Skill\nJoined group: All possible NEO community groups\nBirthday: 9/4\nDescription: Your friendly neighborhood admin. Loves reading, YT reactions or shorts, and sleeping. Feel free to ask or talk to me about anything, Ill try to help as much as I could.\n\nTiktok: Asyraaf-Rei\nIG: asura.reiki_\n\nLike to play games or karaoke at DC, so feel free to join whenever you want.\n=======================\nHave a great day...ฅ⁠^⁠•ω•⁠^⁠ฅ";
	        Maria.sendMessage(
	          from, {
	          image: { url: media },
	          caption: textMessage,
	        }, { quoted: m }
	        );
	        break;
	
	      case 'riezu':
	        
	        var media = 'https://telegra.ph/file/aa321d2670c88d1bc835d.jpg';
	        var textMessage = "‿︵‿︵୨˚̣̣̣͙୧ - - ୨˚̣̣̣͙୧‿︵‿︵\nNEO STAFF INFO\nName : Riezu\nPosition : Head of Gaming Department Admin\n\nOnce a powerful being who guard the gate of dark and light. Now lives among the mortals and observing the world while keeping the balance between peace and chaos\n\n‿︵‿︵୨˚̣̣̣͙୧ - - ୨˚̣̣̣͙୧‿︵‿︵";
	        Maria.sendMessage(
	          from, {
	          image: { url: media },
	          caption: textMessage,
	        }, { quoted: m }
	        );
	        break;
	
	      case 'rika':
	        
	        var media = 'https://telegra.ph/file/aa321d2670c88d1bc835d.jpg';
	        var textMessage = "‿︵‿︵୨˚̣̣̣͙୧ - - ୨˚̣̣̣͙୧‿︵‿︵\nNEO STAFF INFO\nName : Rika Akari\nPosition : Neo Designer/Neo Business Partner\n\nAn Ambivert , i like to spend ma time alot  sleeping cause i don't like to deal with people , i love music alot and also arts . I hate crowds And I'm an easy going person (ㆁωㆁ) if you treat me right , i will treat you the same . If you treat me bad ,i will just ignore you.  Simple . (◍•ᴗ•◍) I'm a goooddd person don't worry. I'm very friendly online , but not in real life . But i will not be online often . Again , I'm a gud person (ㆁωㆁ) okeh .\n‿︵‿︵୨˚̣̣̣͙୧ - - ୨˚̣̣̣͙୧‿︵‿︵";
	        Maria.sendMessage(
	          from, {
	          image: { url: media },
	          caption: textMessage,
	        }, { quoted: m }
	        );
	        break;
	
	      case 'riku':
	        
	        var media = 'https://telegra.ph/file/aa321d2670c88d1bc835d.jpg';
	        var textMessage = "‿︵‿︵୨˚̣̣̣͙୧ - - ୨˚̣̣̣͙୧‿︵‿︵\nNEO STAFF INFO\nName : Riku Fubuki\nPosition : Instagram Admin\n\nDon,t think what anyone else say just do what do you want untill you success\n‿︵‿︵୨˚̣̣̣͙୧ - - ୨˚̣̣̣͙୧‿︵‿︵";
	        Maria.sendMessage(
	          from, {
	          image: { url: media },
	          caption: textMessage,
	        }, { quoted: m }
	        );
	        break;
	
	      case 'rin':
	        
	        var media = 'https://telegra.ph/file/aa321d2670c88d1bc835d.jpg';
	        var textMessage = "*NEO STAFF INFO*\nName : Rin\nPosition : First Tier Neo Anti - Skill\n\nIt student, networking cost. Love traditional art yeah i also makes TikTok for it, mostly i just draw anime, i love colouring. Love to workout 💪. Afraid of woman. I love everything about self improvement or any extreme activity. Tag me if you need anything. Adios🫱\n=======================";
	        Maria.sendMessage(
	          from, {
	          image: { url: media },
	          caption: textMessage,
	        }, { quoted: m }
	        );
	        break;
	
	      case 'shiroi':
	        
	        var media = 'https://telegra.ph/file/b7ed3e737ede1dd5fd885.jpg';
	        var textMessage = "*NEO STAFF INFO*\nName : Shiroi\nPosition : Member of Gaming Department - Skill\nJoined group: Neo Asterisk, Neo arcus, Neo lounge, and Neo iota\nBirthday: 24/11\nDescription: An artist who cant draw cute stuff. An Apex Legends player who avoids ranks. A Genshin Impact addicted person. Very much enjoys voice acting in yandere scripts for fun.\n\nIG: Setsu.illust_0524\nSteam: AnakAyamDikejarMusang (Apex)\nDiscord: ._.7020#0000\n\nHave fun and have a nice day knowing this crazy woman.\n\n=======================\nHave a great day...ฅ⁠^⁠•ω•⁠^⁠ฅ";
	        Maria.sendMessage(
	          from, {
	          image: { url: media },
	          caption: textMessage,
	        }, { quoted: m }
	        );
	        break;
	
	      case 'zen':
	        
	        var media = 'https://telegra.ph/file/81acc75d9671ba3f8401a.jpg';
	        var textMessage = "*NEO STAFF INFO*\nName : Zen\nPosition : Second Tier Neo Anti - Skill\nJoined Group: Neo Asterisk, Neo Arcus, NeoAnicom Lounge\nBirthday: 5/5\nInstagram: yasashiisuisei\nTiktok: yasashijanai\nDescription: Zen or Zenitsu is a man that does exist from an anime yet he is definitely the most coward and hates himself more than others... but other than that he does have hidden strength that he is not discovered yet...\n\nYoroshikune Onegaishimasu Minna 💛\n=======================";
	        Maria.sendMessage(
	          from, {
	          image: { url: media },
	          caption: textMessage,
	        }, { quoted: m }
	        );
	        break;
	
	      case 'mio':
	        
	        var media = 'https://telegra.ph/file/f9285102bf2fb0acfa71c.jpg';
	        var textMessage = "‿︵‿︵୨˚̣̣̣͙୧ - - ୨˚̣̣̣͙୧‿︵‿︵\nNEO STAFF INFO\nName : Mio\nPosition : Administrator and Head of Discord Department\n\nNot kind, not bad either. Quite knowledgeable but will always have the heart open to learn something new, I hope so. Dangerous but silent at times. Into cars and florist, a long journey until I will be able to live such a life. Enjoy reading Manga & LN. Plays VN, Racing Simulator & FPS, wish to improve on such a short duration.";
	        Maria.sendMessage(
	          from, {
	          image: { url: media },
	          caption: textMessage,
	        }, { quoted: m }
	        );
	        break;
	
	
	      // -------------------------------- NEO INTRO END ------------------------------------


            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
        }
    } catch (err) {
        Maria.sendText(m.chat, util.format(err), m)
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function(err) {
    let e = String(err)
    if (e.includes("Socket connection timeout")) return
    if (e.includes("item-not-found")) return
    if (e.includes("rate-overlimit")) return
    if (e.includes("Connection Closed")) return
    if (e.includes("Timed Out")) return
    if (e.includes("Value not found")) return
    console.log('Caught exception: ', err)
})
