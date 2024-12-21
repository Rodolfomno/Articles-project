# Bem vindo ao Articles project!


## Tecnologias

## Back-end
* PHP
* Laravel
* Mysql2


## Front-end
* Javascript
* Typescript
* React
* React Hooks
* Styled-components


## Como usar


No seu terminal digite:
```
git clone git@github.com:Rodolfomno/Articles-project.git

cd Articles-project

```


## Inicializando o backend


No seu terminal digite:

```

cd Articles-server

```

Instale as dependencias

```

npm install && npm run build

```

Abra o .ENV e coloque suas informações do banco de dados

Populando o bacno de dados:

```

php artisan migrate:fresh --seed

```

Para inicializar a aplicação, digite

```

composer run dev

```

Servidor agora está rodando!


## Inicializando o front

Em outro linux terminal, digite:

```

cd Articles-front

```

Instale as dependencias

No seu terminal digite:

```

npm install

```

Para iniciar o front:

No seu terminal digite:

```

npm run dev

```



Pronto, agora você pode listar e ver artigos completos!


## Observações


Se a requisição do front não tiver êxito, ele usará um mock de teste para exibir as informações.