FROM node:current-slim
#MAINTAINER James nicholson <jam3s.nicholson@gmail.com>
WORKDIR /apps/ebay-apollo-server
COPY package.json /apps/ebay-apollo-server
RUN npm install
COPY . /apps/ebay-apollo-server
CMD ["npm", "start"]