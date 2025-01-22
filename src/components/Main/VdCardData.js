import vdPhoto from "./base64.json"

export const vCardData = `
BEGIN:VCARD
VERSION:3.0
N:Meliksetyan;Narek;;;
FN:Narek Meliksetyan
TEL;TYPE=HOME:+37477873707
TEL;TYPE=WORK:+37433092313
EMAIL:meliksetyan415@gmail.com
PHOTO;ENCODING=BASE64;TYPE=JPEG:${vdPhoto.img}
URL;TYPE=Website:https://narek-013.github.io/portfolio/#main
URL;TYPE=Instagram:https://www.instagram.com/narek____13/
URL;TYPE=Telegram:https://t.me/narek133
URL;TYPE=Facebook:https://www.facebook.com/meliqsetyan2014/
URL;TYPE=GitHub:https://github.com/Narek-013
URL;TYPE=WhatsApp:https://wa.me/+37477873707?text=Ողջույն%2C%20ինչպե՞ս%20եք%3F
URL;TYPE=LinkedIn:https://www.linkedin.com/in/narek-meliksetyan-838481301/
URL;TYPE=Viber:viber://chat?number=%2B37477873707
URL;TYPE=Slack:https://app.slack.com/client/T07QPDMMHQC/C07QZJYGUGH
URL;TYPE=Upwork:https://www.upwork.com/freelancers/~01f36cbc1a00ac8c0e
URL;TYPE=Messenger:https://www.messenger.com/t/100006356137608
BDAY:2001-03-12
REV:2025-01-23T00:00:00Z
NOTE:I am a Middle Front-End Engineer skilled in JavaScript, React.js, and TypeScript. Additionally, I have experience with Next.js and React Native. During my internship, I worked on developing websites for specific shops and created a form-based website. I also developed a prototype related to Instagram functionalities.
ORG:Phenix Corporation
END:VCARD
`;
