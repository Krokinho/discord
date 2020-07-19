var Discord = require('discord.js')

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
    if(!message.member.hasPermission('CREATE_INSTANT_INVITE')) {
        return message.channel.send(`<a:erradoHXZ:727856180663287898> ${message.author} Me parece que você não tem permissão de criar convites no servidor.`)
    }
    try {
    const invite = await message.channel.createInvite({maxAge: 0});

    message.reply(`**<a:corretoHXZ:727856042356244593> Convite Criado:** \n ${invite}`)


} catch (err) {
    message.reply('**<a:erradoHXZ:727856180663287898> Por algum motivo eu não tenho permissão de criar convites nesse servidor.**')
   }
}

module.exports.config = { 
    name: 'cc',
    aliases: ['criarconvite']
}