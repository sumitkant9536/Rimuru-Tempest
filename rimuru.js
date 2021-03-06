require("./global")
const { generateWAMessage, areJidsSameUser, proto } = require("@adiwajshing/baileys")
const { Simple, Collection, Function } = require("./lib")
const { isUrl, isNumber } = Function
const Func = require("./lib")
const fs = require("fs")
const moment = require("moment-timezone")
const chalk = require("chalk")
const util = require("util")
const { correct } = require("./lib/Correct")

global.config = JSON.parse(fs.readFileSync('./config.json'))
global.db = JSON.parse(fs.readFileSync("./database/db.json"))
if (global.db) global.db = {
    sticker: {},
    database: {},
    chats: {},
    game: {},
    ...(global.db || {})
}

// Entertainment
global.siapakah = db.game.siapakah = {}
global.caklontong = db.game.caklontong = {}
global.family100 = db.game.family100 = {}
global.tebakkalimat = db.game.tebakkalimat = {}
global.tebakkata = db.game.tebakkata = {}
global.asahotak = db.game.asahotak = {}
global.susunkata = db.game.susunkata = {}
global.tebakbendera = db.game.tebakbendera = {}
global.tebakgambar = db.game.tebakgambar = {}
global.tebakkabupaten = db.game.tebakkabupaten = {}
global.tebaklagu = db.game.tebaklagu = {}
global.tekateki = db.game.tekateki = {}
global.tebaklirik = db.game.tebaklirik = {}
global.tebaktebakan = db.game.tebaktebakan = {}

module.exports = async (rimuru, m, commands, chatUpdate) => {
    try {
        let { type, isGroup, sender, from } = m
        let body = (type == "buttonsResponseMessage") ? m.message[type].selectedButtonId : (type == "listResponseMessage") ? m.message[type].singleSelectReply.selectedRowId : (type == "templateButtonReplyMessage") ? m.message[type].selectedId : m.text 
        let metadata = isGroup ? await rimuru.groupMetadata(from) : {}
        let pushname = isGroup ? metadata.subject : m.pushName
        let participants = isGroup ? metadata.participants : [sender]
        let groupAdmin = isGroup ? participants.filter(v => v.admin !== null).map(v => v.id) : []
        let isBotAdmin = isGroup ? groupAdmin.includes(rimuru.user?.jid) : false
        let isAdmin = isGroup ? groupAdmin.includes(sender) : false
        let isOwner = [rimuru.user?.jid, ...config.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(sender)
        
        global.isPremium = user.checkPremiumUser(m.sender, _user)
        global.isAntidelete = group.cekAntidelete(m.from, _group)
        global.isOffline = group.cekOffline(from, _group)
        global.isAntilink = group.cekAntilink(m.from, _group)

        user.expiredCheck(rimuru, m, _user);

        if (config.options.autoRead) (rimuru.type == "legacy") ? await rimuru.chatRead(m.key, 1) : await rimuru.sendReadReceipt(from, sender, [m.id])
        if (config.options.mute && !isOwner) return
        if (config.options.self && !isOwner && !m.fromMe) return

        var prefix = /^[??????????????????????????????+???_=|~!?@#%^&.??^]/gi.test(body) ? body.match(/^[??????????????????????????????+???_=|~!?@#%^&.??^]/gi)[0] : Function.checkPrefix(prefa, body).prefix ?? "#"

        let isCmd = body.startsWith(prefix)
        let quoted = m.quoted ? m.quoted : m
        let mime = (quoted.msg || m.msg).mimetype
        let isMedia = /image|video|sticker|audio/.test(mime)
        let budy = (typeof m.text == "string" ? m.text : "")
        let args = body.trim().split(/ +/).slice(1)
        let ar = args.map((v) => v.toLowerCase())
        let text = q = args.join(" ")
        let cmdName = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const cmd = commands.get(cmdName) || Array.from(commands.values()).find((v) => v.alias.find((x) => x.toLowerCase() == cmdName)) || ""

        if (isOffline && cmdName && !isOwner && !cmd.isOffline) return
        if (isGroup) group.addGroup(m.from)
        user.addUser(m.sender, m.pushName, _user)
        
        if (m.message && isGroup) {
            console.log("" + "\n" + chalk.black(chalk.bgWhite('[ GRUP ]')), chalk.black(chalk.bgBlueBright(isGroup ? metadata.subject : m.pushName)) + "\n" + chalk.black(chalk.bgWhite('[ TIME ]')), chalk.black(chalk.bgBlueBright(new Date)) + "\n" + chalk.black(chalk.bgWhite('[ FROM ]')), chalk.black(chalk.bgBlueBright(m.pushName + " @" + m.sender.split('@')[0])) + "\n" + chalk.black(chalk.bgWhite('[ BODY ]')), chalk.black(chalk.bgBlueBright(body || type)) + "\n" + "")
        }
        if (m.message && !isGroup) {    
            console.log("" + "\n" + chalk.black(chalk.bgWhite('[ PRIV ]')), chalk.black(chalk.bgRedBright('PRIVATE CHATT')) + "\n" + chalk.black(chalk.bgWhite('[ TIME ]')), chalk.black(chalk.bgRedBright(new Date)) + "\n" + chalk.black(chalk.bgWhite('[ FROM ]')), chalk.black(chalk.bgRedBright(m.pushName + " @" + m.sender.split('@')[0])) + "\n" + chalk.black(chalk.bgWhite('[ BODY ]')), chalk.black(chalk.bgRedBright(body || type)) + "\n" + "")
        }

        // STICKER COMMAND
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString("hex") in global.db.sticker)) {
            let hash = global.db.sticker[m.msg.fileSha256.toString("hex")]
            let { text, mentions } = hash
            let messages = await generateWAMessage(m.from, { text, mentions }, {
                userJid: rimuru.user.jid,
                quoted: m.quoted && m.quoted.fakeObj
            })
            messages.key.fromMe = await areJidsSameUser(m.sender, rimuru.user.jid)
            messages.key.id = m.id
            messages.pushName = m.pushName
            if (m.isGroup) messages.participant = m.sender
            let msg = {
                ...chatUpdate,
                messages: [proto.WebMessageInfo.fromObject(messages)],
                type: "append"
            }
            rimuru.ev.emit("messages.upsert", msg)
        }

        // DATABASE
        try {
            let chat = global.db.chats[m.from]
            if (typeof chat !== "object") global.db.chats = {}
            if (chat) {
                if (!('antidelete' in chat)) chat.antidelete = true
            } else global.db.chats[m.from] = {
                antidelete: true
            }
        } catch(e) {
            console.error(e)
        }

        setInterval(() => {
            fs.writeFileSync('./database/db.json', JSON.stringify(global.db, null, 2))
        }, 15 * 1000)

        // ANTILINK
        if (isGroup && isBotAdmin && isAntilink && !isAdmin && !isOwner) {
            if (budy.match("://chat.whatsapp.com/")) {
                setTimeout( () => {
                    rimuru.groupParticipantsUpdate(from, [sender], "remove")
                }, 5 * 1000)
                setTimeout( () => {
                    m.reply('*???Detected Link in this Group!*\n_Sorry you will be kicked from this group!_')
                }, 0)
            }
        }

        // ANTI DELETE
        if (isAntidelete && m.message && m.message.protocolMessage && m.message.protocolMessage.type == 0) {
            if (!db.chats[m.from].antidelete) return
            let key = m.message.protocolMessage.key
            let msg = await rimuru.serializeM(await Store.loadMessage(key.remoteJid, key.id))
            let teks = `??? Message Delete Detect ???\n\n??? Name : ${msg.pushName}\n??? User : @${msg.sender.split("@")[0]}\n??? Date : ${moment(msg.messageTimestamp * 1000).tz(config.timezone)}\n??? Type : ${msg.type}\n`
            let tekss = teks.replace("GMT+0530", "")
            rimuru.relayMessage(m.from, msg.message, { messageId: msg.id })
            await rimuru.sendText(m.from, tekss, msg, { mentions: [msg.sender] })
        }

        /* uncomment jika ingin menggunakan
        if (!isOffline && isCmd && !cmd) {
            var array = Array.from(commands.keys());
            Array.from(commands.values()).map((v) => v.alias).join(" ").replace(/ +/gi, ",").split(",").map((v) => array.push(v))
            
            var anu = correct(cmdName, array)
            var alias = commands.get(anu.result) || Array.from(commands.values()).find((v) => v.alias.find((x) => x.toLowerCase() == anu.result)) || ""
            teks = `Command Not Found!\nMaybe you mean is\n\n*_Command :_* ${prefix + anu.result}\n*_Alias :_* ${alias.alias.join(", ")}\n\n_Send command again if needed_`
            m.reply(teks)
        } else if (!cmd) return

        if (cmd.isPremium && !isPremium) {
			return global.mess("premium", m)
		}

        if (cmd.isLimit && !isPremium) {
            if (user.isLimit(m.sender, isPremium, isOwner, config.options.limitCount, _user) && !m.fromMe)
            return m.reply(`Your limit has run out, please send ${prefix}limit to check the limit`);
            user.limitAdd(m.sender, isPremium, isOwner, _user);
        }*/

        if (cmd.isMedia && !isMedia) {
            return global.mess("media", m)
        }

        if (cmd.isOwner && !isOwner) {
			return global.mess("owner", m)
		}

        if (cmd.isGroup && !isGroup) {
            return global.mess("group", m)
        }

        if (cmd.isPrivate && isGroup) {
            return global.mess("private", m)
        }

        if (cmd.isBotAdmin && !isBotAdmin) {
            return global.mess("botAdmin", m)
        }

        if (cmd.isAdmin && !isAdmin) {
            return global.mess("admin", m)
        }

        if (cmd.isBot && m.fromMe) {
            return global.mess("bot", m)
        }

        if (cmd.disable == true && cmd.disable == false) {
            return global.mess("dead", m)
        }

        if (cmd.desc && text.endsWith("--desc")) return m.reply(cmd.desc)
        if (cmd.example && text.endsWith("--use")) {
            return m.reply(`${cmd.example.replace(/%prefix/gi, prefix).replace(/%command/gi, cmd.name).replace(/%text/gi, text)}`)
        }

        if (cmd.isQuery && !text) {
            return m.reply(`${cmd.example.replace(/%prefix/gi, prefix).replace(/%command/gi, cmd.name).replace(/%text/gi, text)}`)
        }

        try {
			if (cmd && !cmd.noLimit) {
                if (user.isLimit(m.sender, isPremium, isOwner, config.options.limitCount, _user) && !m.fromMe)
				return m.reply(`Your limit has run out, please send ${prefix}limit to check the limit`);
				user.limitAdd(m.sender, isPremium, isOwner, _user);
			}
			cmd.start(rimuru, m, {
                name: 'Rimuru tempest',
                metadata,
                pushName: pushname,
                participants,
                body,
                args,
                ar,
                text,
                quoted,
                mime,
                prefix,
                command: cmd.name,
                commands,
                Function: Func,
                toUpper: function toUpper(query) {
                    return query.replace(/^\w/, c => c.toUpperCase())
                }
            })
		} catch (e) {
            e = String(e)
            if (!e.includes("cmd.start"))
			console.error(e);
		}
    } catch (e) {
        console.log(e)
    }
}

global.reloadFile(__filename)