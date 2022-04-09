let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [081334177340]
╰────❏

╭─「 Donasi • Non Pulsa 」
│ • Saweria : https://saweria.co/RamzOfc
│ • Gopay : 081341554776
│ • Dana : 081355383396
╰────❏
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler