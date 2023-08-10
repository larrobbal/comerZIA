const spinner =
  '<div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-colormain motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status"><span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span></div>';
const clientList = document.querySelectorAll("[data-client]");
const galleryThumbnails = document.querySelectorAll("[data-gallery]");

const infoCliente = (idCliente) => {
  let id_cliente = {
    "idCliente": idCliente,
  };
  return fetch("../dist/assets/php/querys.php", {
    method: "POST",
    body: JSON.stringify(id_cliente),
    headers: {
      "Content-Type": "application/json",
    }
  }).then((response) => {
    return response.json();
  });
};

const infoGallery = (idGallery) => {
  let id_gallery = {
    "idGallery": idGallery,
  };
  return fetch("../dist/assets/php/querys.php", {
    method: "POST",
    body: JSON.stringify(id_gallery),
    headers: {
      "Content-Type": "application/json",
    }
  }).then((response) => {
    return response.json();
  });
};

clientList.forEach((client) => {
  client.addEventListener("click", async (event) => {
    event.preventDefault();
    const idCliente = client.dataset.client;
    try {
      let modalTitle = document.querySelector(
        "#exampleModalCenteredScrollableLabel"
      );
      modalTitle.innerHTML = "";
      let modalBody = document.querySelector(
        "#exampleModalCenteredScrollableBody"
      );
      modalBody.innerHTML = "";
      let spinnerDiv = document.querySelector("#div__spinner");
      spinnerDiv.innerHTML = spinner;
      let response = await infoCliente(idCliente);
      spinnerDiv.innerHTML = "";
      response.forEach(element => {
        modalTitle.innerHTML = element.nombre;
        modalBody.innerHTML = `<p>${element.descripcion}</p><div class="flex justify-center my-5"><img class="max-h-40" src="assets/img/portfolio/logos/${element.id_cliente}-media.webp"/></div>`;
      });


    } catch (err) {
      alert("Error en ejecución - " + err);
    }
  });
});

galleryThumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", async (event) => {
    event.preventDefault();
    const idGallery = thumbnail.dataset.gallery;
    try {
      let modalTitle = document.querySelector(
        "#modalCenteredScrollableGalleryLablel"
      );
      modalTitle.innerHTML = "";
      let modalBody = document.querySelector(
        "#modalCenteredScrollableGalleryBody"
      );
      modalBody.innerHTML = "";
      let spinnerDiv = document.querySelector("#div__spinner__gallery");
      spinnerDiv.innerHTML = spinner;
      let response = await infoGallery(idGallery);
      spinnerDiv.innerHTML = "";
      response.forEach(element => {
        modalTitle.innerHTML = element.nombre;
        modalBody.innerHTML = `<div class="flex justify-center my-5"><img class="max-h-80 md:max-h-96" src="assets/img/portfolio/gallery/gallery-${element.id_gallery}-media.webp"/></div><p>${element.descripcion}</p>`;
      });

    } catch (err) {
      alert("Error de ejecución - " + err);
    }
  });
});
