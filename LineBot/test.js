// 引用linebot SDK
var linebot = require('linebot');

// 用於辨識Line Channel的資訊
var bot = linebot({
  channelId: '1656832323',
  channelSecret: '687836dbaf0e4168e5665eb5c4755861',
  channelAccessToken: 'Qp3Q/V+95lkI5+eababXYATCioFyOOzF8tHxv+Tei94THCNKAE8GAUKUWyIw7/0fcePOS6li0R+XNwcKlyhnG5z0+mmMb0cqCCBBL0r6C0PVt0jk3K9XFbtVVF7qh/ZeGa6xokBPfa4FFz8/zmc46AdB04t89/1O/w1cDnyilFU='
});

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
  console.log(event);
  // event.message.text是使用者傳給bot的訊息
  // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
  var replyMsg = `Hello你剛才說的是:${event.message.text}`;
  event.reply(replyMsg).then(function (data) {
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
  });
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
    console.log('[BOT已準備就緒]');
});