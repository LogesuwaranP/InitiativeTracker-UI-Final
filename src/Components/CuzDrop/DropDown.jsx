import React from 'react';
import "./Drop.css"
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
// import { colourOptions } from '../data';
const colourOptions = [
    { value: '3', label: 'Sadham Usen' },
    { value: '1', label: 'Logesuwaran' },
    // ... more options
  ];

const animatedComponents = makeAnimated();


export default function AnimatedMulti({setContributors}) {

  function handleChange(selectedOptions) {
    // Access the selected values here
    setContributors(selectedOptions);
  }
  
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[]}
      isMulti
      options={colourOptions}
      onChange={handleChange}
    //   styles={{ container: (provided) => ({ ...provided, height: '60px', backgroundColor:"#fff" }) }}
    />
  );
}