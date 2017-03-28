FROM node

ENV NODE_ENV=dev

COPY ./ /app
WORKDIR /app

RUN npm install

CMD npm run $NODE_ENV
