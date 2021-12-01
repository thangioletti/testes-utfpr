FROM ubuntu

LABEL name="Testes Lista 5"


RUN apt upgrade && apt update && apt install nodejs -y && apt install npm -y 

ENTRYPOINT cd /var/node && npm i && npm install -g tiny-server && /bin/bash 