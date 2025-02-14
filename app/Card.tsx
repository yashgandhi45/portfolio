import React from 'react'

interface CardProps {
    icon : React.ReactNode;
}

const Card : React.FC<CardProps> = ({icon}) => {
  return (
    <div className='flex justify-center items-center'>
        {icon}
    </div>
  )
}

export default Card;