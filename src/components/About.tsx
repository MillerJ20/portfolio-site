import React from 'react';

export const About = (props: {
  changeTitle: (newTitle: string) => void;
}) => {
  const { changeTitle } = props;
  changeTitle("About Me");
  return<div>About</div>;
};
