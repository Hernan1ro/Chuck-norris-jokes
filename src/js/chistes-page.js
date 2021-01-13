import { obtenerChiste } from "./http-provider.js";

const body = document.body;
let btnOtro, olList;

const crearChistesHtml = () => {
  const html = `
  <h1 class="mt-5">Chistes</h1>
    <!-- <br /> -->
    <hr />
    <button class="btn btn-primary">Nuevo chiste</button>
    <ol class="mt-2 list-group">
    </ol>
  `;
  const divChistes = document.createElement("div");
  divChistes.innerHTML = html;

  body.append(divChistes);
};

const eventos = () => {
  olList = document.querySelector("ol");
  btnOtro = document.querySelector("button");

  btnOtro.addEventListener("click", async () => {
    btnOtro.disable = true;
    dibujarChiste(await obtenerChiste());
    btnOtro.disable = false;
  });
};

const dibujarChiste = (chiste) => {
  const olItem = document.createElement("li");
  olItem.innerHTML = `<b>${chiste.id}<b>: ${chiste.value}`;
  olItem.classList.add("list-group-item");
  olList.append(olItem);
};

export const init = () => {
  crearChistesHtml();
  eventos();
};
