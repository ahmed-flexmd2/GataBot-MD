let handler = async (m, { conn }) => {
let user = global.db.data.users[m.sender];
let name = conn.getName(m.sender);
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
let message = `⎔⋅• ━ ╼╃ ⌬〔﷽〕⌬ ╄╾ ━ •⋅⎔
> NIGHT↳🏮↲𝐁𝐎𝐓
> 〔قـسـم  المشرفين┊ ˼‏ 🤑˹ 〕↶
⌬∙ • ──╾⊱﹝🍁﹞⊰╼── • ∙⌬
             نايــــ🍁ــت بــ🤑ــوت
⌬∙ • ──╾⊱﹝🍁﹞⊰╼── • ∙⌬
⌬ 🍁🤑 .طرد
⌬ 🍁🤑.حذف
⌬ 🍁🤑.جروب قفل
⌬ 🍁🤑.جروب فتح
⌬ 🍁🤑.تنزيل
⌬ 🍁🤑.معلومات-الجروب
⌬ 🍁🤑.رابط
⌬ 🍁🤑.رفع-ترقيه
⌬ 🍁🤑.تعيين-رابط
⌬ 🍁🤑.تعيين-مغادره
⌬ 🍁🤑.تعيين-وصف
⌬ 🍁🤑.تعيين-اسم
⌬ 🍁🤑.تعيين-صوره
⌬ 🍁🤑.تعيين-الترحيب
⌬ 🍁🤑.منشن
⌬∙ • ──╾⊱﹝🍁﹞⊰╼── • ∙⌬
> ملحوظه لازم يكون البوت🤖 ادمن وانت ادمن🫵`

conn.sendFile(m.chat, 'https://telegra.ph/file/b0f78c8483ccd9e628688.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(L)$/i;
handler.command = new RegExp;

export default handler;
