import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';



@Component({
  selector: 'app-view-scene',
  imports: [],
  templateUrl: './view-scene.component.html',
  styleUrl: './view-scene.component.css'
})
export class ViewSceneComponent{
  // iniciamos el metodo de vida del componente, para que inicie las configuraciones de three.js
  ngOnInit(): void {
    this.initThreeJs();
    
  }

  // declaramos las configuraciones a utilizar
  initThreeJs(): void{
    // declaramos la constante que sera la escena, camara y el renderizado de los objetos 3d
    const scene = new THREE.Scene();
    const camera= new THREE.PerspectiveCamera();
    const renderer = new THREE.WebGLRenderer();
    // definimos el tamaño del renderizado, o de la pantalla que tendremos
    renderer.setSize(window.innerWidth,window.innerHeight);
    // agregamos el comoponente renderer a el cuerpo de la pagina
    document.body.append(renderer.domElement);

    // declaramos los onjetos a utilizar







    //

    // damos posicion a la camara
    camera.position.set(0 , 2, 5);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Activar amortiguación (opcional)
    controls.dampingFactor = 0.25; // Factor de amortiguación (opcional)
    controls.screenSpacePanning = false; // Desactivar el desplazamiento en el espacio de la pantalla (opcional)


  }

}
