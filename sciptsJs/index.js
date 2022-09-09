// este es un algoritmo para mi carrito de mi  web 

// este array guarda los id de mis productos
let entradaCliente
productos=[
    id=1, 
    id=2,
    id=3,
    id=4,
];
// aca se guadaran lo productos seleccionados
carrito=[];

constructor(id, nombre);{
    id=id;
    nombre=nombre;

}
const producto1=new producto(  "placa video" );
const producto2=new producto(  "placa madre" );
const producto3=new producto(  "procesador " );
const producto4=new producto( "ram" );

//  con esta linea pusheamos los nombres de los producto
productos.push(producto1,producto2,producto3,producto4);

function seleccionarProducto(){
// aca validos que la entrda sea correcta
     entradaCliente=parseInt(prompt("elija un producto del 1 al 4 " ));
     while (entradaCliente<=0 || entradaCliente >10)isNaN(entradaCliente);   {
        entradaCliente=parseInt(prompt(" usted no ingreso un dato valido  elija un producto del 1 al 4   " ));

        
    }
    // una ves el usurio  haya elegido un producto debemos buscarlo 
    productoElegido=productos.find(productoExistente=>productoExistente.id==producto);
    // esta linea mostramos el producto elegido al user 

    alert("el producto elegido es "+  productoElegido.nombre);
    carrito.push(productoElegido);
    alert(productoElegido);





}

