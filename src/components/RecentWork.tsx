import React from 'react';

export const RecentWork = (props: {
  changeTitle: (newTitle: string) => void;
}) => {
  const { changeTitle } = props;
  changeTitle("Recent Work");
  return (
    <div className='recentWork'>
      <h2 className='recentWork-header'>I'm Miller!</h2>
      <div className='recentWork-content'>
        <div className='recentWork-content-container'>
          <h2 className='recentWork-content-header'>Software Engineer</h2>
            <ul>
            <li>Loves drum breaks</li>
            <li>Indie Game Development</li>
            <li>Dragon Quest enthusiast</li>
            <li>On a quest for the next best frontend framework</li>
            </ul>
        </div>
      </div>
    </div>
  );
};
