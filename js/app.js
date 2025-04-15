
//console.log("JS cargado correctamente");



let productos = [];


//menu
function mostrarMenu() {
  let opcion = prompt("ECOMMERCE \n\n 1. Agregar producto \n 2. Ver productos");

  if (opcion == "1") {
    agregarProducto();
  } else if (opcion == "2") {
    verProductos();
  } else {
    alert("Opcion inválida");
  }
}

//agrego articulos
function agregarProducto() {
  let nombre = prompt("Ingrese nombre del artículo o X para volver al menu anterior");
  
  while (nombre !== "X") {
    let categoria = prompt("Ingrese categoría del artículo");
    let precio = prompt("Ingrese precio del artículo");

    let articulo = {
      nombre: nombre,
      categoria: categoria,
      precio: precio
    };

    productos.push(articulo);
    console.log(articulo);

    nombre = prompt("Ingrese nombre del próximo artículo o X para volver al menú anterior");
  }

  mostrarMenu(); //llamo al menu despues de agregar
}

function verProductos() {
  console.log("Productos cargados:");
  for (let producto of productos) {
    alert(`Nombre: ${producto.nombre}  Categoria: ${producto.categoria}  Precio: ${producto.precio}`);
  }

  mostrarMenu(); //llamo al menu despues de ver
}


//INICIO LA FUNCION
mostrarMenu(); 
