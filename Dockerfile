FROM node:latest
WORKDIR /usr/src/app
RUN npm install -g webpack nodemon
COPY .  /usr/src/app
RUN npm install

EXPOSE 3000
CMD ["npm", "run","dev"]