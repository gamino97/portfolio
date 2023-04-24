FROM node:16 AS builderJs
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7.14.0
WORKDIR /app/client
# pnpm fetch does require only lockfile
COPY ./pnpm-lock.yaml ./
RUN pnpm fetch
ADD ./ ./
RUN pnpm install -r --offline
RUN pnpm run build

FROM nginx:alpine
COPY --from=builderJs /app/client/dist /usr/share/nginx/html