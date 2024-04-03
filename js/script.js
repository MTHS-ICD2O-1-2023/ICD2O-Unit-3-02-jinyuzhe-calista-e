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
  const lengthOfPyramid = parseInt(document.getElementById('length-of-pyramid').value)
  const widthOfPyramid = parseInt(document.getElementById('width-of-pyramid').value)
  const heightOfPyramid = parseInt(document.getElementById('height-of-pyramid').value)


  // process
  const volumeOfPyramid = (lengthOfPyramid * widthOfPyramid * heightOfPyramid) / 3

  // output
  document.getElementById('area').innerHTML = 'Volume is: ' + volumeOfPyramid + ' mm³'
}
