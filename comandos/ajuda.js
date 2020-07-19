const Discord = require('discord.js')
const config = require("../config.json")

exports.run = (client, message, args) => {
  message.delete()
    let av = message.author.avatarURL
    let user = message.author.username
    let botav = client.user.avatarURL
    let botuser = client.user.username
    let servidores = client.guilds.size
    let usuarios = client.users.size

    let embed = new Discord.RichEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
        .setTitle(`Clique no emoji parar abrir a categoria.`, `** **`)
        .setDescription(`<a:emoji_7:726047716832051301>  Comandos de Anúncio
<a:emoji_9:726047802152452178>  Comandos de Utilidade
<a:emoji_13:726047916300435556>  Comandos de Status
<a:emoji_16:726048038170263593>  Comandos de Moderação
 <:b_seta1:727857235786465372>  Voltar para o Painel

`)
        .setColor('#000000')
        .setThumbnail(botav)
        .setFooter(user + ' • Painel de ajuda', av)
    
    message.channel.send(embed).then((c) => {
            c.react('726047716832051301').then(() => {
            c.react('726047802152452178').then(() => {
            c.react('726047916300435556').then(() => {
            c.react('726048038170263593').then(() => {
            c.react('727857235786465372').then(() => {
        })
        })
        })
        })
        })
        

        let AnúncioFilter = (reaction, user, ) => reaction.emoji.id === '726047716832051301' && user.id === message.author.id;
        let UtilidadeFilter = (reaction, user, ) => reaction.emoji.id === '726047802152452178' && user.id === message.author.id;
        let StatusFilter = (reaction, user, ) => reaction.emoji.id === '726047916300435556' && user.id === message.author.id;
        let ModeraçãoFilter = (reaction, user, ) => reaction.emoji.id === '726048038170263593' && user.id === message.author.id;
        let VoltarFilter = (reaction, user, ) => reaction.emoji.id === '727857235786465372' && user.id === message.author.id;
        let Anúncio = c.createReactionCollector(AnúncioFilter, { time: 80000 });
        let Utilidade = c.createReactionCollector(UtilidadeFilter, { time: 80000 });
        let Status = c.createReactionCollector(StatusFilter, { time: 80000 });
        let Moderação = c.createReactionCollector(ModeraçãoFilter, { time: 80000 });
        let Voltar = c.createReactionCollector(VoltarFilter, { time: 80000 });


        Anúncio.on('collect', r2 => { 
           let anuncio = new Discord.RichEmbed()
                .setTitle("<a:staffHXZ_2:730973006062551060> ┆ Comandos para Anúncio")
                .setDescription(`» \`${config.prefix}anuncio\` (msg) - Manda um anúncio em todos dm do servidor.\n\n` +
                `» \`${config.prefix}aembed\` | titulo | descrição | link de foto ou gif |\n` +
                `Manda um anúncio em embed em todos dm do servidor.\n` +
                `\`Exemplo:\` [Clique aqui](http://prntscr.com/o8pluq)\n` +
                `Obs: não tire os separadores |\n\n`)
                .setColor("#000000")
                .setThumbnail("https://cdn.discordapp.com/emojis/614407332155359244.gif?v=1")
                .setFooter(user + " • Pág. 1/4", av)
            c.edit(anuncio);
        });

        Utilidade.on('collect', r2 => { 
            let util = new Discord.RichEmbed()
                .setTitle("<a:staffHXZ_2:730973006062551060> ┆Comandos de Utilidade")
                .setDescription(`» \`${config.prefix}cc\` - Cria um convite permanente do servidor.\n\n` +
                `» \`${config.prefix}clima (cidade)\` - Mostra o clima de uma cidade.\n\n` + 
                `» \`${config.prefix}dtimer (tempo em segundos)\` - Apaga sua mensagem depois de um determinado tempo.
                `)
                .setColor("#000000")
                .setThumbnail("https://cdn.discordapp.com/emojis/614407332058890241.gif?v=1")
                .setFooter(user + " • Pág. 2/4", av)
            c.edit(util);
        });
        
        Status.on('collect', r2 => { 
            let status = new Discord.RichEmbed()
                .setTitle("<a:staffHXZ_2:730973006062551060> ┆Comandos de Status")
                .setDescription(`» \`${config.prefix}ping\` - Mostra o ping do bot.\n\n`)
                .setColor("#000000")
                .setThumbnail("https://cdn.discordapp.com/emojis/614407332780310539.gif?v=1")
                .setFooter(user + " • Pág. 3/4", av)
            c.edit(status);
        });
      
        Moderação.on('collect', r2 => { 
            let mod = new Discord.RichEmbed()
                .setTitle("<a:staffHXZ_2:730973006062551060> ┆Comandos de Moderação")
                .setDescription(`» \`${config.prefix}travar\` - Trava o chat impedindindo os membros de digitar.\n\n` +
                                `» \`${config.prefix}destravar\` - Destrava o chat bloqueado.\n\n`)
                .setColor("#000000")
                .setThumbnail("https://cdn.discordapp.com/emojis/614759344072032268.gif?v=1")
                .setFooter(user + " • Pág. 4/4", av)
            c.edit(mod);
        });
         
        Voltar.on('collect', r2 => { 
            c.edit(embed);
        })
    });
};