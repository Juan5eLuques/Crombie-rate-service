import { useState } from "react"

export const useStars = () => {
    
const stars = Array(5).fill(0)
const [currentValue, setCurrentValue] = useState(0)
const [hoverValue,setHoverValue] = useState<undefined | number>(undefined)

const handleClick = (value : number) => {
    setCurrentValue(value)
}

const handleMouseOver = (value : number) => {
    setHoverValue(value)
}

const handleMouseLeave = () => {
    setHoverValue(undefined)
}

return {stars,currentValue,hoverValue,handleClick,handleMouseOver,handleMouseLeave}

}
