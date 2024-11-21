# build environment
FROM node:18-slim AS builder
WORKDIR /app

COPY package*.json ./
<%_ if(packageManager === 'yarn'){ _%>
COPY yarn.lock ./
<%_}_%>
RUN <%=packageManager%> install

ARG VITE_APP_VERSION=0.0.0.0
ENV VITE_APP_VERSION=${VITE_APP_VERSION}

COPY . ./
RUN <%=packageManager%> run build

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

RUN <%=packageManager%> install -g serve@14

USER $imageUser

EXPOSE 8080

CMD ["sh","-c","node --experimental-default-type=module setenv.mjs && serve -s build -p 8080"]
