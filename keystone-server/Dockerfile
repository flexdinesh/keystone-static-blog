# Build
FROM node:lts as build
RUN apt-get -qy update && apt-get -qy install openssl
# RUN apt-get update
# RUN apt-get install -y openssl
WORKDIR /app
COPY keystone-server/. .
COPY yarn.lock .
ENV NODE_ENV production
RUN yarn install
RUN yarn build

# Serve
FROM node:lts

WORKDIR /app
COPY --from=build /app .

ENV NODE_ENV production
EXPOSE 3000
CMD ["yarn", "start"]