# Cometa Test (Web)

Proyecto web hecho con React sobre NestJS, con Typescript, y Tailwind para los estilos. Test con Vitest y Cypress.

### Para correr el proyecto por primera vez

```bash
$ npm install
```

_Importante: Es obligatorio levantar el proyecto del API antes de navegar por el sitio_

Ejecutar el server para ver el sitio:

```bash
$ npm run dev
```

Y abrir [http://localhost:3000](http://localhost:3000).

# Testing

### Para correr los unit-test (Vitest):

```bash
$ npm run test
```

### Para correr los end-to-end (Cypress):

(Debes tener el server corriendo `npm run dev`)

```bash
$ npm run cypress
```

_Importante: Es obligatorio levantar el proyecto del API antes ejecutar las pruebas E2E_

Se abrirá la ventana de Cypress y debes seleccionar la opción:

- _E2E Testing_
- Seleccionar el navegador de preferencia > _Start E2E..._
- En la opción Specs hacer click en "user-flow" y se ejacutará el test.
