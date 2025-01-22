# Պահանջվող node.js պատկեր
FROM node:16

# Ծրագրի տեղադրումը կոնտեյների մեջ
WORKDIR /app

# Copy package.json և package-lock.json (եթե ունեք)
COPY package.json package-lock.json ./

# Տեղադրեք կախվածությունները
RUN npm install

# Copy մնացած ֆայլերը
COPY . ./

# Նշանակում ենք որ ծրագրին պետք է աշխատի npm start
CMD ["npm", "start"]

# Բացեք 3000 պորտը, քանի որ React default կերպով աշխատում է այդ պորտում
EXPOSE 3000
