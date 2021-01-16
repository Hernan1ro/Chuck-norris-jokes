import * as CRUD from "./js/crud-provider.js";

// CRUD.getUsuario(1).then(console.log);
// CRUD.crearUsuario({
//   name: "Fernando",
//   job: "Carpintero",
// }).then(console.log);

// CRUD.actualizarUsuario(1, {
//   name: "melisa",
//   job: "Developer",
// }).then(console.log);

CRUD.borrarUsuario(1).then(console.log);
// import { obtenerChiste } from "./js/http-provider";
// obtenerChiste().then(console.log);

// import { init } from "./js/usuarios-page";
// // import { obtenerUsuarios } from "./js/http-provider";

// init();
// obtenerUsuarios().then(console.log);
