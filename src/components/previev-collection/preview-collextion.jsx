import React from "react";
import './styles.scss'
import CollectionItem from "../collection-item/collection-item";

const CollectionPreview=({title,items})=>(
    <div className="collection-preview">
        <h1 className="title">{title}</h1>

        <div className="preview">
           {items.filter((item,idx)=>idx<5).map(({id,...itemProps})=>
           <CollectionItem key={id} {...itemProps}/>
                
          
           )}



        </div>

    </div>


)
export default CollectionPreview