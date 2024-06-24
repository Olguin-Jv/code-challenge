README
-----
# Local MongoDB Setup
## 1) Pre-requisites
- Node.js: 20.11.0
- NPM: 10.2.4
- Docker & Docker-Compose ([setup guide](https://docs.docker.com/get-docker/))

## 2) Local setup
- Clone repository
- Run `npm ci` on both folders: *back-end* and *front-end*

Inside back-end folder:
- download MongoDB image: `docker pull mongo`
  - run this only once

## 3) Run local environment
This app requires to run *back-end* and *front-end* at the same time.

**Back end** 
- run docker to enable local mongodb: `docker-compose up`
    - for detached mode: `docker-compose up -d`
- run api: `npm run dev`
- Back end will run on port 3001

**Back end** 
- run `npm start`
- Front end will run on port 3000
----



    




