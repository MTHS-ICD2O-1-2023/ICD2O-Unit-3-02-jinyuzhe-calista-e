// Copyright (c) 2024 Mr. Coxall All rights reserved
//
// Created by: Calista.E
// Created on: Apr 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates volume of a pyramid.
 */
function calculateVolumeOfPyramid() {
  // input
  const lengthOfPyramid = parseFloat(document.getElementById('length-of-pyramid').value)
  const widthOfPyramid = parseFloat(document.getElementById('width-of-pyramid').value)
  const heightOfPyramid = parseFloat(document.getElementById('height-of-pyramid').value)


  // process
  const volumeOfPyramid = (lengthOfPyramid * widthOfPyramid * heightOfPyramid) / 3 

  // output
  document.getElementById('volume').innerHTML = 'Volume is: ' + volumeOfPyramid.toFixed(2) + ' mm³'
}
