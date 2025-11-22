import React from 'react'

export const Header = (props: { brand: {name: string, to: string} }) => {
  const { brand } = props;
  return (
    <div className='header'>{brand.name}</div>
  )
}
