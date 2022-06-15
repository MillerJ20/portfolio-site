import React from 'react';

export const RecentWork = (props: {
  changeTitle: (newTitle: string) => void;
}) => {
  const { changeTitle } = props;
  changeTitle("Recent Work");
  return<div>Recent Work</div>;
};
