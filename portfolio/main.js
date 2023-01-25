import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { PlaneGeometry } from 'three';






// sets the scene
const scene = new THREE.Scene();

//the arguments passed are: field of view, aspect ratio, view frustrum.
// the view frustrum controlls what objects are visible relative to the camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//the renderer will render the graphics to the screen

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});
//This sets the renders to scale of the screen and full screen
renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight );
//Moves camera along Z-axis
camera.position.setZ(-100);

//Add an object 

const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
//texture
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347 } );
//make mesh by combining geometry with material
const torus = new THREE.Mesh( geometry, material );

//add object to scene
scene.add(torus)

//add lighting to the scene

const pointLight = new THREE.PointLight(0xffffff);
//Positions the light away from the center
pointLight.position.set(5,5,5)

//set the lighting for the scene
const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight, ambientLight)
//shows the position of a point light
const lightHelper = new THREE.PointLightHelper(pointLight)
//draws a 2d grid along the scene
const gridHelper = new THREE.GridHelper(800, 200);


scene.add(lightHelper, gridHelper)
// listens to dom events on the mouse and ajusts position accordingly
const controls = new OrbitControls(camera, renderer.domElement);

//populate scene with star objects

function addStar() {
  const geometry = new THREE.SphereGeometry(0.7, 24, 24);
  const material = new THREE.MeshStandardMaterial( { color: 0xffffff } )
  const star = new THREE.Mesh( geometry, material );

  //randomly generate stars position
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 2100 ) );
  star.position.set(x, y, z);
  scene.add(star)

}

//amount of stars in scene

Array(2100).fill().forEach(addStar)


const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture;



const harryTexture = new THREE.TextureLoader().load('harry.png');

const harry = new THREE.Mesh(
  new THREE.BoxGeometry(6,6,6),
  new THREE.MeshBasicMaterial( { map: harryTexture } )
);


scene.add(harry);

/* PLANETS */

/* relative size to earth */
const earthSize = 32
const mercurySize = earthSize * 0.38
const venusSize = earthSize * 0.95
const marsSize = earthSize * 0.53
const jupiterSize = earthSize * 11.20
const saturnSize = earthSize * 9.45
const uranusSize = earthSize * 4.00
const neptuneSize = earthSize * 3.88







  


/* UNFINISHED DISTANCE NOT WORKING */





const mercuryTexture = new THREE.TextureLoader().load('mercury.jpg');
const mercuryTexture2 = new THREE.TextureLoader().load('mercuryTexture.jpg');

const mercury = new THREE.Mesh(
  new THREE.SphereGeometry(mercurySize, 96, 96),
  new THREE.MeshStandardMaterial( { 
    map: mercuryTexture,
    normalMap: mercuryTexture2
  } )
);

mercury.position.z = -800;
mercury.position.setX(50);
mercury.position.y = 50;

const venusTexture = new THREE.TextureLoader().load('venus.jpg');
const venusTexture2 = new THREE.TextureLoader().load('venusTexture.jpg');

const venus = new THREE.Mesh(
  new THREE.SphereGeometry(venusSize, 96, 96),
  new THREE.MeshStandardMaterial( { 
    map: venusTexture,
    normalMap: venusTexture2
  } )
);

venus.position.z = -600;
venus.position.setX(100);
venus.position.y = -60;

const earthTexture = new THREE.TextureLoader().load('earth.jpg');
const earthTexture2 = new THREE.TextureLoader().load('earthCloud.png');

const earth = new THREE.Mesh(
  new THREE.SphereGeometry(earthSize, 96, 96),
  new THREE.MeshStandardMaterial( { 
    map: earthTexture,
    normalMap: earthTexture2
  } )
);

earth.position.z = -400;
earth.position.setX(150);
earth.position.y = 120;

const marsTexture = new THREE.TextureLoader().load('mars.jpg');
const marsTexture2 = new THREE.TextureLoader().load('marsTexture.jpg');

const mars = new THREE.Mesh(
  new THREE.SphereGeometry(marsSize, 96, 96),
  new THREE.MeshStandardMaterial( { 
    map: marsTexture,
    normalMap: marsTexture2
  } )
);

mars.position.z = -200;
mars.position.setX(200);
mars.position.y = -80;

const jupiterTexture = new THREE.TextureLoader().load('jupiter.jpg');
const jupiterTexture2 = new THREE.TextureLoader().load('jupiterTexture.jpg');

const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(jupiterSize, 96, 96),
  new THREE.MeshStandardMaterial( { 
    map: jupiterTexture,
    normalMap: jupiterTexture2
  } )
);

jupiter.position.z = 0;
jupiter.position.setX(250);
jupiter.position.y = 180;

const saturnTexture = new THREE.TextureLoader().load('saturn.jpg');
const saturnTexture2 = new THREE.TextureLoader().load('saturnTexture.jpg');

const saturn = new THREE.Mesh(
  new THREE.SphereGeometry(saturnSize, 96, 96),
  new THREE.MeshStandardMaterial( { 
    map: saturnTexture,
    normalMap: saturnTexture2
  } )
);

saturn.position.z = 200;
saturn.position.setX(400);
saturn.position.y = -220;

const uranusTexture = new THREE.TextureLoader().load('uranus.jpg');
const uranusTexture2 = new THREE.TextureLoader().load('uranus.jpg');

const uranus = new THREE.Mesh(
  new THREE.SphereGeometry(uranusSize, 96, 96),
  new THREE.MeshStandardMaterial( { 
    map: uranusTexture,
    normalMap: uranusTexture2
  } )
);

uranus.position.z = 400;
uranus.position.setX(200);
uranus.position.y = 230;

const neptuneTexture = new THREE.TextureLoader().load('neptune.jpg');
const neptuneTexture2 = new THREE.TextureLoader().load('neptuneTexture.jpg');

const neptune = new THREE.Mesh(
  new THREE.SphereGeometry(neptuneSize, 96, 96),
  new THREE.MeshStandardMaterial( { 
    map: neptuneTexture,
    normalMap: neptuneTexture2
  } )
);

neptune.position.z = 600;
neptune.position.setX(300);
neptune.position.y = 120;


/* MOON /*
const moonTexture = new THREE.TextureLoader().load('moon.jpg');
const normalTexture = new THREE.TextureLoader().load('normal.jpg');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial( { 
    map: moonTexture,
    normalMap: normalTexture
  } )
);

scene.add(moon); */

/* POSITIONS */
moon.position.z = -120;
moon.position.setX(-10); 

scene.add(moon)
scene.add(mercury)
scene.add(venus)
scene.add(earth)
scene.add(mars)
scene.add(jupiter)
scene.add(saturn)
scene.add(uranus)
scene.add(neptune)


function moveCamera() {
  //this shows the dimentions of the viewpot and top shows us how far away from the top of the webpage
  const t = document.body.getBoundingClientRect().top;
  
  mercury.rotation.x += 0.06;
  mercury.rotation.y += 0.08;
  mercury.rotation.z += 0.15;

  venus.rotation.x += 0.1;
  venus.rotation.y += 0.08;
  venus.rotation.z += 0.15;
 
  earth.rotation.x += 0.03;
  earth.rotation.y += 0.03;
  earth.rotation.z += 0.03;

  mars.rotation.x += 0.03;
  mars.rotation.y += 0.08;
  mars.rotation.z += 0.08;

  jupiter.rotation.x += 0.1;
  jupiter.rotation.y += 0.01;
  jupiter.rotation.z += 0.01;

  saturn.rotation.x += 0.1;
  saturn.rotation.y += 0.1;
  saturn.rotation.z += 0.0;

  uranus.rotation.x += 0.06;
  uranus.rotation.y += 0.08;
  uranus.rotation.z += 0.15;

  neptune.rotation.x += 0.06;
  neptune.rotation.y += 0.08;
  neptune.rotation.z += 0.15;

  /*moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05; */

  harry.rotation.y += 0.01;
  harry.rotation.z += 0.05;

  camera.position.z = t * -0.2;
  camera.position.x = t * -0.0015;
  camera.rotation.y = t * -0.0015;

  








}

document.body.onscroll = moveCamera;




//function to call render method automatically

function animate() {
  requestAnimationFrame( animate );

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  controls.update();




  renderer.render( scene, camera );
}

animate()