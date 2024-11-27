# build environment
FROM node:18-slim as builder
WORKDIR /app

COPY package*.json ./

RUN npm install

ARG REACT_APP_VERSION=0.0.0.0
ENV REACT_APP_VERSION=${REACT_APP_VERSION}

COPY . ./
RUN npm run build

# production environment
FROM node:18-slim

ARG imageUser=appuser
ARG imageUserGroup=appgroup
ARG imageUserId=1375
ARG imageUserGroupId=1375

RUN addgroup --system --gid $imageUserGroupId $imageUserGroup && \     
    adduser --system --uid $imageUserId --ingroup $imageUserGroup $imageUser

COPY --chown=$imageUser:$imageUserGroup --from=builder /app/build ./build
COPY --chown=$imageUser:$imageUserGroup --from=builder /app/setenv.js ./setenv.js

RUN npm install -g serve@6

USER $imageUser

EXPOSE 8080

CMD ["sh","-c","node setenv.js && serve -s build -p 8080"]
