FROM node:7.10.0

ADD . /node-galore
WORKDIR /node-galore

RUN npm install

EXPOSE 80

CMD ["node", "index.js"]
