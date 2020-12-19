import React, { useState } from 'react'

export default function Image({index, image, handleRemove }) {
    const [IsHovering, setIsHovering] = useState(false);
    return (
        <div className="w-1/3 my-1 flex justify-center" >
          <div
            className="relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <i
              className={`fas fa-times color-tomato absolute right-0 cursor-pointer opacity-25 hover:opacity-100 ${
                IsHovering ? "" : "hidden"
              }`}
              onClick={() => handleRemove(index)}
            ></i>
            <img src={image} width="150" />
          </div>
        </div>
    )
}