import React, { Component } from 'react'
import ImageMapper from 'react-img-mapper';

function imageMapper(){
    const URL = 'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.jpg';
  const MAP = {
    name: 'my-map',
    // GET JSON FROM BELOW URL AS AN EXAMPLE
    areas: 'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.json',
  };
  
  return <ImageMapper src={URL} map={MAP} />;
}

export default imageMapper;

