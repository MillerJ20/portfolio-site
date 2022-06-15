import React from 'react';

export const Technologies = (props: {
  changeTitle: (newTitle: string) => void;
}) => {
  const { changeTitle } = props;
  changeTitle("Technologies");
  return<div>Technologies</div>;
};
