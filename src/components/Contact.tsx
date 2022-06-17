import React from 'react'

export const Contact = (props: {
  changeTitle: (newTitle: string) => void;
}) => {
  const { changeTitle } = props;
  changeTitle("Contact Me!");
  return (
    <div>Contact</div>
  )
}
