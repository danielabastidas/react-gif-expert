import { useState } from "react";
import { AddCategory,GifGrid } from './components'



export const GitExpertApp = ()=>{
    const [categories, setCategories] = useState(['Sakura'])

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory) ) return;

        //categories.push('valorant');
      setCategories([newCategory,...categories])
    }

    return(
        <>
            <h1>GifExpertApp</h1>
           
            <AddCategory 
                onNewCategory={(value) => onAddCategory(value)}
            />
                { categories.map(category => {
                    return (
                        <GifGrid
                        key={category} 
                        category={category}/>  
                    )
                })} 
        </>
    )
}