FROM node:7.10.0

ADD . /node_galore
WORKDIR /node_galore

RUN npm install

EXPOSE 80

CMD ["node", "index.js"]
