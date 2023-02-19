var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
camera.position.z = 30;

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#000000");
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
})

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

var geometry = new THREE.TorusGeometry(10, 3, 16, 100);
var material = new THREE.MeshPhongMaterial({color: 0xfc03d7});
var torus = new THREE.Mesh(geometry, material);
scene.add(torus);

//sphere
var geometry2 = new THREE.SphereGeometry(4, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
const material2 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
var sphere = new THREE.Mesh(geometry2, material2);
//sphere.position.set(15,0,15);
scene.add(sphere);

const light = new THREE.PointLight(0xFFFFFF, 2, 1000);
light.position.set(15,0,15);
scene.add(light);


const gridHelper = new THREE.GridHelper(200, 50, 0xff0000, 0xffffff);

gridHelper.rotation.x = Math.PI/2.6;
gridHelper.rotation.y = Math.PI/1.5;
scene.add(gridHelper);

var render = function() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.02;
    torus.rotation.z += 0.00;


    var time = Date.now() * 0.001;
    material.color.setHSL( (Math.sin(time) + 0.2) / 2, 3, 0.5 );
    material2.color.setHSL( (Math.sin(time) + 0.2) / 4, 0.5, 0.5 );


    renderer.render(scene, camera);



}

animate();


//window.addEventListener('mousemove', onMouseMove);
render();