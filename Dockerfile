FROM node:7.10.0

ADD . /node-galore
WORKDIR /node-galore

EXPOSE 80

CMD ["node", "index.js"]
