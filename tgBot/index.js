const TelegramApi = require('node-telegram-bot-api')

const token = '6974434828:AAH1TnA9B3vm5v5p8x4Z7rqsKTbq6yhZ4Hk'

const bot = new TelegramApi(token, {polling: true})

const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Начальное приветсвие'},
        {command: '/info', description: 'Получить информацию о пользователе'},
    ])
    
    
    bot.on('message', async msg => {
    
        const text = msg.text;
        const chatId = msg.chat.id;
    
        if(text === '/start') {
            await bot.sendSticker(chatId, 'https://chpic.su/_data/stickers/s/Sandwicat/Sandwicat_001.webp?v=1701205804')
            return bot.sendMessage(chatId, 'Добро пожаловать в наш скромный бот, желаем хорошего времяпрепровождение')
        }
    
        if (text === '/info') {
            return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${ msg.from.last_name}`)
        }
    
        return bot.sendMessage(chatId, 'Я тебя не понял, попробуй еще раз!')
    
    })

}

start()