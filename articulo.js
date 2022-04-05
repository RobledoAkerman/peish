// function addWorkCard(params) {
//   const template = document.querySelector("#entrada-card-template"); //Lo que clonamos (id)
//   const container = document.querySelector(".entrada-content"); //A donde va (class)

//   template.content.querySelector(".entrada-card-title").textContent =
//     params.title;

//   template.content.querySelector(".entrada-card-text").textContent =
//     params.description;
//     // "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatibus accusantium ab commodi esse repellendus officia obcaecati incidunt sint, eaque perspiciatis et omnis possimus quam velit, dolorem iste ea asperiores."

//   // template.content.querySelector(".entrada-card-longtext").src = params.image;
//   template.content.querySelector(".entrada-img").src = params.image;

//   // template.content.querySelector(".entrada-card-link").href = params.image;

//   const clone = document.importNode(template.content, true);
//   container.appendChild(clone);
// }

// function getWorks() {
//   return fetch(
//     "https://cdn.contentful.com/spaces/mk4vl3fftmmq/environments/master/entries?access_token=SXu-PORzNC9pHdn90ZtvT9MQwv8TM4ufqe50AupUxNw&&content_type=pajaroTest"  )
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       const fieldsCollections = data.items.map((i) => {
//         return {
//           title: i.fields.titulo,
//           description: i.fields.descripcion.content[0].content[0].value,
//           imageID: i.fields.foto.sys.id,
//           includes: data.includes.Asset,

//         };
//       });

//       fieldsCollections.forEach((x) => {
//         let idEncontrado = buscarAsset(x.imageID, x.includes);
//         x.image = idEncontrado.fields.file.url;
//       });
//       return fieldsCollections;
//     });
// }

// function buscarAsset(assetID, includes) {
//   const encontrado = includes.find((inc) => {
//     return inc.sys.id == assetID;
//   });
//   return encontrado;
// }

function main() {
  // getWorks().then(function (works) {
  //   for (const w of works) {
  //     addWorkCard(w);
  //   }
  // });
  const header = document.querySelector(".seccion-header");
  headerComponent(header);

  const contactForm = document.querySelector(".seccion-contacto");
  contactComponent(contactForm);
  
  const footer = document.querySelector(".seccion-footer");
  footerComponent(footer);
}
main();
