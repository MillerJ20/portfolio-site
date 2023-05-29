import React from 'react'
import Link from 'next/link';

export const Menu = (props: {
  links: Array<{ name: string; to: string }>;
}) => {
  const { links } = props;
  const menuLinkMapper = (): Array<JSX.Element> =>
    links.map((link, index) => (
        <Link key={index} onMouseOver={ () => document.documentElement.style.setProperty('--active-index', `${index}`) } href={link.to} className='menu-item' >{link.name}</Link>
    ));
  const mappedLinks = menuLinkMapper();

  return (
    <div id='menu'>
      <div id='menu-items'>
        {mappedLinks}
      </div>
      <div id='menu-background-pattern' className='left'></div>
      <div id='menu-background-pattern' className='right'></div>
    </div>
  )
}
