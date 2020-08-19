# build environment
FROM node:12 as builder
WORKDIR /app

COPY package*.json ./
RUN npm install

ARG REACT_APP_VERSION=0.0.0.0
ENV REACT_APP_VERSION=${REACT_APP_VERSION}

COPY . ./
RUN npm run build

# production environment
FROM node:12
COPY --from=builder /app/build ./build
COPY --from=builder /app/setenv.js ./setenv.js
RUN npm install -g serve
EXPOSE 80
CMD ["sh","-c","node setenv.js && serve -s build -p 80"]