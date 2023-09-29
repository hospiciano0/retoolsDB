Herramientas para inversión inmobiliaria
El objetivo de estos repositorios es entregar herramientas para la inversión inmobiliaria que tengan una fácil importación de datos y que permitan hacer análisis de estos datos para la toma de decisiones. 

## Instalación en local

Para correr el proyecto necesitas correr 3 servicios:
    - Base de datos. Ubicado en el repositorio [retoolsDB](https://github.com/hospiciano0/retoolsDB)
    - Servicios/Scrapper. Ubicado en el repositorio [retools-scrapper](https://github.com/hospiciano0/retools-scrapper)
    - Frontend. Ubicado en el repositorio [retools](https://github.com/hospiciano0/retools)
Puedes ver el detalle de cada instalación en los repositorios correspondientes.	

### Base de datos
    El proyecto ocupa pocketbase para la base de datos. No es necesario hacer ninguna instalación, solo clonar el repositorio y correr el comando `./pocketbase serve`.
    Para las migraciones es necesario tener la carpeta /pb_migrations al momento de hacer el serve. 
    Para cargar la data [...]
    Puerto por defecto 8080

### Servicios/Scrapper
    El servicio de scrapper esta hecho con typescript y node. Para correrlo es necesario tener instalado node y npm. Recomendado 19.4.0
    Para instalar las dependencias correr `npm install`
    Para correr el proyecto `npx tsc` & `npm run start`
    Puerto por defecto 3000

### Frontend
    El frontend esta hecho con astro y solidjs. Para correrlo es necesario tener instalado node y npm. Recomendado 19.4.0
    Para instalar las dependencias correr `npm install`
    Para correr el proyecto `npm run start`
    Puerto por defecto 4321

## Despliegue en Fly.io
    Para deployear los servicios en Fly.io, necesitas crearte una cuenta en Fly.io y tener instalado el [cliente de fly](https://fly.io/docs/hands-on/install-flyctl).
    `curl -L https://fly.io/install.sh | sh`
    Luego iniciar sesión con `fly auth signup` y/o `fly auth login`.

    Crea un nuevo proyecto con `fly launch`. Selecciona `No` en `add postgress database` y `No` en `add redis cache`.
    Ocupa los Dockerfile de cada repositorio y luego hace el deploy con `flyctl deploy`.
    No es necesario instalar docker en local pero es recomendado para crear y probar las imagenes.

    La máquina del servicio de scrapper necesita mucha RAM. Probar con GB.
    `/home/USER/.fly/bin/flyctl scale memory 1024` o `flyctl scale memory 1024` en la carpeta del proyecto scrapper.
