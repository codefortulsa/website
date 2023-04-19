FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY ./package.json ./yarn.lock ./
RUN npm install yarn && yarn install --frozen-lockfile

FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

FROM node:16-alpine AS runner
WORKDIR /app
ENV NODE_ENV development

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules 
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

ENV PORT 3000

CMD [ "yarn", "dev" ]
