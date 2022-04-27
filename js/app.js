let data = [
    {
      titulo:"Animales fantásticos",
      genero: " Aventura/Fantasía",
      año: "2022",
      sinopsis: "",
    },
    {
        titulo:"Sonic 2",
        genero: "Aventura/Fantasía ",
        año: "2022",
        sinopsis: " ",
    },
    {
        titulo:"La ciudad perdida",
        genero: "Comedia/Accion",
        año: "2022",
        sinopsis: "  ",
    },
   
  ];

  console.log("--- Peliculas ---")
  for (let i = 0; i < data.length; i++) {
    console.log(`Titulo: ${data[i].titulo}`);
    console.log(`Genero: ${data[i].genero}`);
    console.log(`Año: ${data[i].año}`);
    console.log(`Sinopsis: ${data[i].sinopsis}`);
    console.log(`--------------------`);
  }



