const TelegramApi = require('node-telegram-bot-api')

const token = '6974434828:AAH1TnA9B3vm5v5p8x4Z7rqsKTbq6yhZ4Hk'

const bot = new TelegramApi(token, {polling: true})

const chats = {};

const gameOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: '1', callback_data: '1'},{text: '2', callback_data: '2'},{text: '3', callback_data: '3'}],
            [{text: '4', callback_data: '4'},{text: '5', callback_data: '5'},{text: '6', callback_data: '6'}],
            [{text: '7', callback_data: '7'},{text: '8', callback_data: '8'},{text: '9', callback_data: '9'}],
        ]
    })
}

const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Начальное приветсвие'},
        {command: '/info', description: 'Получить информацию о пользователе'},
        {command: '/game', description: 'Игра: угадай цифру'},
    ])
    
    
    bot.on('message', async msg => {
    
        const text = msg.text;
        const chatId = msg.chat.id;
    
        if(text === '/start') {
            await bot.sendSticker(chatId, 'https://chpic.su/_data/stickers/s/Sandwicat/Sandwicat_001.webp?v=1701205804')
            return bot.sendMessage(chatId, 'Добро пожаловать в наш скромный бот, желаем хорошего времяпровождения')
        }
    
        if (text === '/info') {
            return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${ msg.from.last_name}`)
        }


        if(text=== '/game') {
            return bot.sendMessage(chatId, `Сейчас я загадаю цифру от 0 до 9, а ты попробуй отгадать`)
            const randomNum = Math.floor(Math.random() * 10);
            chatId[chatId] = randomNum;
            return bot.sendMessage(chatId, 'Отгадывай');
        }


    
        return bot.sendMessage(chatId, 'Я тебя не понял, попробуй еще раз!')
        
    
    })

    bot.on('message', async msg => {
    
        const data = msg.data;
        const chatId = msg.message_id.chat.id;

        bot.sendMessage(chatId,`Ты выбрал цифру ${data}`)
    })

}

start()