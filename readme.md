![alt text](https://moodle.utfpr.edu.br/pluginfile.php/1/core_admin/logocompact/300x300/1636484097/UTFPR%20-%20Identidade%20Visual%20-2.png)

# Lista 5 - Planejamento e Gestão de Testes de Software

# Rodar com node apenas
```
npm i
npm test
```

# Rodar usando docker
```
docker build -t testesutfpr .
docker run -it -v ${PWD}/project:/var/node -p 3000:4141 testesutfpr 
npm test
```

## Teste de cobertura
```
npm run coverage
```
se você estiver rodando no docker apenas abra http://localhost:4141
caso contrario o index se encontra em project/coverage/index.html