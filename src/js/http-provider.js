const jokeUrl = "https://api.chucknorris.io/jokes/random";

const obtenerChiste = async () => {
  try {
    const resp = await fetch(jokeUrl);
    if (!resp.ok) throw "No se pudo realizar la petición";
    const { icon_url, id, value } = await resp.json();
    return { icon_url, id, value };
  } catch (err) {
    // return {
    //   id: "No se encontró",
    // };
    throw err;
  }
};

export { obtenerChiste };

// fetch(jokeUrl).then((resp) => {
//   resp.json().then(({ id, value }) => {
//     console.log(id);
//     console.log(value);
//   });
// });

// fetch(jokeUrl)
//   .then((resp) => resp.json())
//   .then(({ id, value }) => {
//     console.log(id, value);
//   });
