let handler = async (m, { conn }) => {
let user = global.db.data.users[m.sender];
let name = conn.getName(m.sender);
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
let message = `⎔⋅• ━ ╼╃ ⌬〔﷽〕⌬ ╄╾ ━ •⋅⎔
> ZETA↳🐢↲𝐁𝐎𝐓
*⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • ∙⌬*
> 〔قـسـم الـمـشـرفـيـن┊ ˼‏ 🧑‍💻˹ 〕
*⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • ∙⌬*
           *زيــت🐢ــا بــ🤖ــوت*
*⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • ∙⌬*
> 🧑‍💻.طرد
> 🧑‍💻.ترقية
> 🧑‍💻.اعفاء
> 🧑‍💻.رفع_انذار
> 🧑‍💻.انذار
> 🧑‍💻.تغير-الاسم
> 🧑‍💻.حذف
> 🧑‍💻.منشن
> 🧑‍💻.تسجيل (منشن الشخص)لقبو
> 🧑‍💻.لقب (حط القب)
> 🧑‍💻.الألقاب
> 🧑‍💻.مخفي
> 🧑‍💻.دعوه
> 🧑‍💻.تغيير_اللينك
> 🧑‍💻.الترحيب
> 🧑‍💻.المغادره
> 🧑‍💻.جروب قفل او فتح
> 🧑‍💻.لينك
*⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • ∙⌬*
*~⌬ تــ✍︎ــوقــيــع ↡~*🖋️
*⌞⚜️┊ZETA   𝐊.𝐠.𝐦┊⚜️⌝*
*⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • `

conn.sendFile(m.chat, 'https://telegra.ph/file/b0f78c8483ccd9e628688.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(L)$/i;
handler.command = new RegExp;

export default handler;
