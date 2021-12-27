import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  PointLight,
  AmbientLight,
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import '../static/meadowcroft_chair.glb';

export default function displayThree() {
  const scene = new Scene();
  const camera = new PerspectiveCamera(75, window.innerWidth / 2 / window.innerHeight, 0.01, 1000);
  camera.position.x = .15;
  camera.position.y = .6;
  camera.position.z = 1;
  const renderer = new WebGLRenderer();

  // Orbit Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  // Model
  const loader = new GLTFLoader();
  loader.load('/assets/models/meadowcroft_chair.glb', function(glb){
    scene.add( glb.scene );
    const model = glb.scene
    model.rotation.y = 4.04;
    controls.target.set(model.position.x, model.position.y+.33, model.position.z);
  });

  // Lights
  const pointLight001 = new PointLight(0xffffff, 3);
  const pointLight002 = new PointLight(0xffffff, 3);
  const ambientLight001 = new AmbientLight(0xffffff, 2);
  scene.add(pointLight001);
  scene.add(pointLight002);
  scene.add(ambientLight001);
  pointLight001.position.set(-4,-4, 0);
  pointLight002.position.set(4, 4, 9);

  renderer.setSize(window.innerWidth / 2, window.innerHeight);

  if (window.matchMedia("(max-width:980px").matches){
    camera.aspect = (window.innerWidth)/window.innerHeight;
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.updateProjectionMatrix();
  }

  const main = document.getElementById('3d');
  main.appendChild(renderer.domElement);

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update();
  }

  window.addEventListener('resize', onWindowResize, false);

  function onWindowResize() {
    if (window.matchMedia("(max-width:980px").matches){
      camera.aspect = (window.innerWidth)/window.innerHeight;
      renderer.setSize(window.innerWidth, window.innerHeight);
    } else {
      camera.aspect = (window.innerWidth/2)/window.innerHeight;
      renderer.setSize(window.innerWidth/2, window.innerHeight);
    }
    camera.updateProjectionMatrix();
  }

  animate();
}
