const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {

    
    const embed = new Discord.MessageEmbed()

.setColor(`BLUE`)
.setAuthor(`Güncelleme Bilgi ✅`)
.setDescription(`**Kral Bot 👑 v3.0 Güncellemesi**
1- Altyapı Tümüyle Değiştirilerek Yeniden Kodlandı !! ✅
2- Kayıt Sistemi Eklendi !! ✅
3- Level Sistemi Eklendi !! ✅
4- Oto-Rol Sistemi Eklendi !! ✅
5- Butonlu Mute Eklendi !! ✅
6- Yavaş Mod Eklendi !! ✅
7- Hg-bb (Karşılama) Komutu Eklendi !! ✅
8- Kullanıcı Bilgi Eklendi !! ✅
9- Sayaç Komutu Eklendi !! ✅
10- Küfür Engel Komutu Eklendi !! ✅
11- Yardım Komutu Geliştirildi !! ✅
12- Eğlence Komutlarına Çay Ismarlama Komutu Eklendi !! ✅
13- Bazı Komutlar Kaldırıldı İlerki Güncellemelerde Geri Gelebilirler !! ✅
14- Çökmeye Veya Hataya Sebep Olabilecek Buglar Fixlendi !! ✅
15- Eğlence Komutları Arttırıldı !! ✅
16- Easter Egg Komutlar Eklendi !! ✅
`)
.setFooter(`Güncelleme Tarihi 📑:`)

    message.reply({embeds: [embed]})


},

name: "güncelleme-bilgi",
description: "Güncellemem Hakkında Bilgi Veririm !!",
aliases: ['güncellemebilgi'],
kategori: "diğer",
usage: "",
}
