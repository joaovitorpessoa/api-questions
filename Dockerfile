FROM node

WORKDIR /usr/app/api_duo_programming_test

COPY package.json .

RUN npm i

COPY . .

EXPOSE 3333

CMD ["npm", "run", "prod"]