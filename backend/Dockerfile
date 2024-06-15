FROM node:18

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN npm install -g prisma
RUN npx prisma generate

RUN apt-get update && \
    apt-get install -y redis-server postgresql postgresql-contrib && \
    rm -rf /var/lib/apt/lists/*

EXPOSE 3001 5432

ENV POSTGRES_USER=c4gt \
    POSTGRES_PASSWORD=c4gt \
    POSTGRES_DB=c4gt

COPY init-db.sh /docker-entrypoint-initdb.d/

CMD service postgresql start && \
    redis-server --daemonize yes && \
    yarn run start:prod
