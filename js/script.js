var field = true;

//---- Image ----//
const pic1 =new PANOLENS.ImagePanorama('img/');
const pic2 =new PANOLENS.ImagePanorama('img/');
const pic3 =new PANOLENS.ImagePanorama('img/');
const pic4 =new PANOLENS.ImagePanorama('img/');
const pic5 =new PANOLENS.ImagePanorama('img/');
const pic6 =new PANOLENS.ImagePanorama('img/');

const viewer = new PANOLENS.Viewer({ output : 'console'});

//---- Placement ----//
const theta =Math.PI/10;
const phi = Math.PI;
var rayon =pic1.radius;
console.log("Rayon : " + rayon);

//---- Position ----//
var position = new THREE.Vector3(
    rayon * Math.cos(theta) * Math.sin(phi),
    rayon * Math.sin(theta),
    rayon * Math.cos(theta) * Math.cos(phi)
);

var taille = 300;

//----- InfoSpot -----//
//pic1 -- i4
var infospot1_pic1 = new PANOLENS.Infospot( taille * position.length() / rayon, PANOLENS.DataImage.Info);
var infospot2_pic1 = new PANOLENS.Infospot( taille * position.length() / rayon, PANOLENS.DataImage.Info);
var infospot3_pic1 = new PANOLENS.Infospot( taille * position.length() / rayon, PANOLENS.DataImage.Info);

//pic2 -- I16
var infospot1_pic2 = new PANOLENS.Infospot( taille * position.length() / rayon, PANOLENS.DataImage.Info);
var infospot2_pic2 = new PANOLENS.Infospot( taille * position.length() / rayon, PANOLENS.DataImage.Info);

//pic3 -- Milieu
var infospot1_pic3 = new PANOLENS.Infospot( taille * position.length() / rayon, PANOLENS.DataImage.Info);
var infospot2_pic3 = new PANOLENS.Infospot( taille * position.length() / rayon, PANOLENS.DataImage.Info);
var infospot3_pic3 = new PANOLENS.Infospot( taille * position.length() / rayon, PANOLENS.DataImage.Info);
var infospot4_pic3 = new PANOLENS.Infospot( taille * position.length() / rayon, PANOLENS.DataImage.Info);
var infospot5_pic3 = new PANOLENS.Infospot( taille * position.length() / rayon, PANOLENS.DataImage.Info);

//pic4 -- I17
var infospot1_pic4 = new PANOLENS.Infospot( taille * position.length() / rayon, PANOLENS.DataImage.Info);

//pic5 -- I8
var infospot1_pic5 = new PANOLENS.Infospot( taille * position.length() / rayon, PANOLENS.DataImage.Info);
var infospot2_pic5 = new PANOLENS.Infospot( taille * position.length() / rayon, PANOLENS.DataImage.Info);

//pic6 -- balcon
var infospot1_pic6 = new PANOLENS.Infospot( taille * position.length() / rayon, PANOLENS.DataImage.Info);
var infospot2_pic6 = new PANOLENS.Infospot( taille * position.length() / rayon, PANOLENS.DataImage.Info);
var infospot3_pic6 = new PANOLENS.Infospot( taille * position.length() / rayon, PANOLENS.DataImage.Info);