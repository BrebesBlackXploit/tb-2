let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
@6281264038909 Ada Yang Manggil Tod
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /nabil/i
handler.command = new RegExp

module.exports = handler