var map = L.map('map').setView([4.551923606760363, -74.10008874583308], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 15,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

async function loadPolygon() {
    let myData = await fetch ("San_martin.geojson");
    let myPolygon = await myData.json();
    L.geoJSON (myPolygon,
    {
        style: {
            color: 'blue'
        }
    }
    ).addTo (map);
}
loadPolygon();

let btnTrees = document.getElementById('btnTrees');
btnTrees.addEventListener('click',

async function loadPolygon() {
    let myData = await fetch ("arboles_san_martin.geojson");
    let datos = await response.json();
    L.geoJSON (datos,
    {
        pointToLayer: (feature, latlong)=>{
            radius:5,
            fillColor:'green',
            wight:1,
            opacity:1
            fillOpacity:1.0

        }
    }
    ).addTo (map);
}
)
let btndistance = document.getElementById('btnTrees');
btnTrees.addEventListener('click',

async function loadPolygon() 
{
    let myData = await fetch ("arboles_san_martin.geojson");
    let datos = await response.json();

    let trees= datos.feature.map((myElement,index)=>({
        id:index+1,
        coordenates: myElement.geometry.coordenates
    }));
    console.log(trees);
    let distances=[];
    trees.array.forEach(tree1) => {
        trees.forEach
        (
            (tree2)=>{
                //calcular la distancias
                let distance = turf.distance(
                    turf.point(tree1.coordinates),
                    turf.point(tree2.coordinates),
                );
                distances.push(
                    [
                        Árbol ${tree1.id},
                        Árbol ${tree2.id},
                    distance.toFixed(3)
                    ]
                )

            }
        )
    })
    generatePDF(distaces, trees.lenght);
}
)
function generatePDF(distances, totalTrees){
    let{jsPDF}= window.jspdf;
    let documentPDF= new jsPDF();

    documentPDF.text("REPORTE DE ARBOLES EN EL BARRIO SAN MARTIN",10,10)
    documentPDF.text("EL BARRIO SAN MARTIN TIENE"+totalTrees+ "ARBOLES",20,30)
    if(typeof documentPDF.autoTable !="function")
    documentPDF.autoTable(
        head:{["arbol1","Arbol 3", "distance"]},
        body: distances
    );
    documentPDF.save("san_marti.pdf")
}