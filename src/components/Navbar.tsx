import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = (props: {
  brand: { name: string; to: string };
  links: Array<{ name: string; to: string }>;
}) => {
  const { brand, links } = props;
  const NavLinkMapper = (): Array<JSX.Element> => links.map((link: { name: string, to: string }, index: number) => <NavLink to={link.to} key={index}>{link.name}</NavLink>);
  const mappedLinks: Array<JSX.Element> = NavLinkMapper();

  return (
    <nav>
      <a href={brand.to}>{brand.name}</a>
      {mappedLinks}
    </nav>
  );
};
