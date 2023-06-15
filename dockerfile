FROM keymetrics/pm2:16-alpine

# Bundle APP files
COPY src src/
COPY package.json .
COPY ecosystem.config.js .
COPY .env .
COPY VUE_SRC VUE_SRC/
# Install app dependencies
RUN apk add yarn
RUN npm install -g npm
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production
WORKDIR "/VUE_SRC"
RUN yarn global add @vue/cli
RUN npm install --force
RUN npm run build
WORKDIR "/"
# Expose the listening port of your app
EXPOSE 5000

# Show current folder structure in logs
RUN ls -al -R

CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]
