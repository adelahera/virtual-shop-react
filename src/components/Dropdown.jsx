import "../App.css";
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

export default function ChooseCategory({ onSelectCategory }) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const categories = [
        { name: 'Men\'s clothing', code: 'mc' },
        { name: 'Women\'s clothing', code: 'wc' },
        { name: 'Electronics', code: 'el' },
        { name: 'Jewelery', code: 'jw' },
    ];

    const handleCategory = (e) => {
        setSelectedCategory(e.value);
        onSelectCategory(e.value);
    }
    
    return (
      <div className="dropdown-div">
       <Dropdown value={selectedCategory} onChange={handleCategory} options={categories} optionLabel="name" 
        placeholder="Choose a category" className="w-full md:w-14rem" />
      </div>
    )
}
