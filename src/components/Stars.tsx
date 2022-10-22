import { useState } from "react"
import {FaStar} from 'react-icons/fa'
import '../styles/Stars.css'
import { useStars } from '../hooks/useStars'

type StarsProps = {
  getStars : (stars : number) => void
}

const colors = [{
  index: 0,
  starColor: '#ffb82a'
},{
  index: 1,
  starColor: '#25b9e9'
},
{
  index: 2,
  starColor: '#f5326c'
},
{
  index: 3,
  starColor: '#8031a2'
},
{
  index: 4,
  starColor: '#1bbc5f'
},
]

export const Stars : React.FC<StarsProps> = ({getStars}) => {

const handlerClickStar = (stars : number) => {
  getStars(stars)
  star.handleClick(stars + 1)
}

const star = useStars();

return (
  <div className="stars-container">
    <span> Assessment ! </span>
    <div>
      {star.stars.map((_, index) => {
        return (
          <FaStar
            className="stars"
            size={34}
            key={index}
            color={
              (star.hoverValue || star.currentValue) > index
                ? //colors.find(element => element.index === index)?.starColor <- Stars with Crombie colors
                'orange'
                : 'gray'
            }
            onClick={() =>handlerClickStar(index + 1)}
            onMouseOver={() => star.handleMouseOver(index + 1)}
            onMouseLeave={() => star.handleMouseLeave}
          />
        );
      })}
    </div>
  </div>
);
}

