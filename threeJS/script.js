const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xccaabb } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

let enable = false;

const animate = function () {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    addEventListener('dblclick', (e) => {
        enable = enable ? false : true;
        
        if (enable) {
            addEventListener('mousemove', (e) => {
                cube.position.x = e.clientX / e.currentTarget.innerWidth;
                cube.position.y = -e.clientY / e.currentTarget.innerHeight;
            });
        } else {
            removeEventListener('mousemove', (e) => {});
            removeEventListener('dblclick', (e) => {});
        }
    });

    renderer.render( scene, camera );
};

animate();