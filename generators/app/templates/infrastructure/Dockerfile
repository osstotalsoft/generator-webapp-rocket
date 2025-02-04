# build environment
FROM node:22-slim AS builder
WORKDIR /app

COPY package*.json ./

RUN npm install

ARG VITE_APP_VERSION=0.0.0.0
ENV VITE_APP_VERSION=${VITE_APP_VERSION}

COPY . ./
RUN npm run build

# production environment
FROM node:22-slim

ARG imageUser=appuser
ARG imageUserGroup=appgroup
ARG imageUserId=1375
ARG imageUserGroupId=1375

RUN addgroup --system --gid $imageUserGroupId $imageUserGroup && \     
    adduser --system --uid $imageUserId --ingroup $imageUserGroup $imageUser

COPY --chown=$imageUser:$imageUserGroup --from=builder /app/build ./build
COPY --chown=$imageUser:$imageUserGroup --from=builder /app/setenv.js ./setenv.js

RUN npm install -g serve@14

USER $imageUser

EXPOSE 8080

CMD ["sh","-c","node --experimental-default-type=module setenv.js && serve -s build -p 8080"]
