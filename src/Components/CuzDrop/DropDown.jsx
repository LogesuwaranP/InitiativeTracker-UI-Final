import React, { useState, useEffect } from "react";

import Select from "react-select";

import makeAnimated from "react-select/animated";

import axios from "axios";

import "./Drop.css";




export default function AnimatedMulti({ setContributors }) {

  const [ideas, setIdeas] = useState([]);




  useEffect(() => {

    axios.get(`https://localhost:7265/api/User`).then((response) => {

      // setIdeas(response.data.value);




      setIdeas(

        response.data.value.map((idea) => ({

          value: idea.id,

          label: idea.userName,

        }))

      );

    });

  }, []); // Add an empty dependency array to ensure the effect runs only once on mount.




  function handleChange(selectedOptions) {

    // Access the selected values here

    setContributors(selectedOptions);

  }




  const animatedComponents = makeAnimated();




  return (

    <Select

      closeMenuOnSelect={false}

      components={animatedComponents}

      defaultValue={[]}

      isMulti

      options={ideas}

      onChange={handleChange}

      //   styles={{ container: (provided) => ({ ...provided, height: '60px', backgroundColor:"#fff" }) }}

    />

  );

}