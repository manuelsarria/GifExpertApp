import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories])
    // setCategories( cat => [...cat, 'Valorant']);

  }

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* Gif items */}
    </>
  );
}