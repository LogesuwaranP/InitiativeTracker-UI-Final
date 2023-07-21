import React, { useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import "./Check.css"
const CheckboxMultiSelect = () => {
  const [options] = useState([
    { name: 'Option 1️⃣', id: 1 },
    { name: 'Option 2️⃣', id: 2 }
  ]);
  const [selectedValue, setSelectedValue] = useState([]);

  const onSelect = (selectedList, selectedItem) => {
    setSelectedValue(selectedList);
  };

  const onRemove = (selectedList, removedItem) => {
    setSelectedValue(selectedList);
  };

  return (
    <Multiselect
        options={options}
        selectedValues={selectedValue}
        onSelect={onSelect}
        onRemove={onRemove}
        displayValue="name"
        className="multiselect-selected-list"
        placeholder="Select ..."
        emptyRecordMsg="No options found"
        style={{
            multiselectContainer: { margin:0 },
            searchBox: { fontSize: '14px', height: '50px', padding: "10px" , backgroundColor: "#fff"},
            chips: { background: 'red' },
            optionContainer: { border: '2px solid' },
            option: { color: 'blue' },
            groupHeading: { /* ... */ }
        }}
      
    />
  );
};

export default CheckboxMultiSelect;
