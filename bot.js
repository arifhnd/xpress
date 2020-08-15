var Telegraf = require('telegraf');
var Extra = require('telegraf/extra')
var Markup = require('telegraf/markup')

const bot = new Telegraf('1258564484:AAFweQJ647YlBenFcPnqCqZ0xLGmUnc5wyY');

bot.start((ctx) => 
ctx.reply('<b>Assalamualaikum</b>. <i>How are you today?</i>',
    Telegraf.Extra.HTML()
    .markup(Markup.inlineKeyboard([
      Markup.callbackButton('Not bad', 'not bad'),
      Markup.callbackButton('All right', 'all right')
    ])))
)

bot.hears('Assalamualaikum', (ctx) => ctx.reply('Waalaikumsalam'))

bot.hears('what is yourname', (ctx) => ctx.reply(ctx.getChat('@Akbarpramono')))

bot.hears('hi', (ctx) => {
  ctx.reply('<b>Hello</b>. <i>How are you today?</i>',
    Telegraf.Extra.HTML()
    .markup(Markup.inlineKeyboard([
      Markup.callbackButton('Not bad', 'not bad'),
      Markup.callbackButton('All right', 'all right')
    ])))
})

bot.action('not bad', (ctx) => {
  ctx.reply('<i>Have a nice day 😊</i>',
    Extra.HTML())
})

bot.action('all right', (ctx) => {
  ctx.reply('<i>May happiness be with you 🙏</i>',
    Extra.HTML())
})

module.exports = bot;