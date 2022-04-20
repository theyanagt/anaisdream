function handler(m) {
const PhoneNumber = require('awesome-phonenumber')
let ftroli = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "628884357769-1604595598@g.us"}, "message": {orderMessage: {itemCount: 1,status: 200, surface: 200, message: `                   「 MY OWNER 」            `, orderTitle: 'Ahyan', sellerJid: '0@s.whatsapp.net'}}}
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:; Ahyan;;;'
                    + 'FN: Ahyan\n' // full name
                    + 'ORG:ahyan;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=628884357769:+62 888-4357-769\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Ahyan', contacts: [{ vcard }] } }, { quoted: ftroli })
m.reply(m.chat,'*Tuh nomor owner ku*\n*Chat jika PENTING*', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler