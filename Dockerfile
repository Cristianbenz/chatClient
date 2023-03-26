FROM node:18.14.2
EXPOSE 4200
RUN npm install -g @angular/cli@15.2.1

WORKDIR usr/src/app
COPY package*.json .
RUN npm ci

COPY . .
CMD ["ng", "serve", "--host", "0.0.0.0"]
