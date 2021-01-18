const jokeUrl = "https://api.chucknorris.io/jokes/random";
const urlUsuarios = "https://reqres.in/api/users?page=2";

// Clouddinary
const cloudPreset = "wmx6hpl1";
const cloudUrl = "https://api.cloudinary.com/v1_1/dkregjlp3/upload";

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

const obtenerUsuarios = async () => {
  const resp = await fetch(urlUsuarios);
  const { data: usuarios } = await resp.json();
  // console.log(usuarios);
  return usuarios;
};
// ArchivoSubir: File
const subirImagen = async (archivoSubir) => {
  const formData = new FormData();
  formData.append("upload_preset", cloudPreset);
  formData.append("file", archivoSubir);
  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });
    if (resp.ok) {
      const cloudResp = await resp.json();
      console.log(cloudResp);
      return cloudResp.secure_url;
    } else {
      throw await resp.js();
    }
  } catch (err) {
    throw err;
  }
};

export { obtenerChiste, obtenerUsuarios, subirImagen };

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
