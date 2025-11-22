import React from 'react';

export const RecentWork = () => {
  return (
    <div className="recentWork">
      <div className="recentWork-content">
        <div className="recentWork-content-container">
          <p>
            I most recently launched SvelteStorm, a frontend-focused desktop IDE application built in Svelte and Electron. <br/>
            <br />
            Svelte is a tool deeply rooted in open-source development and has a passionate following, and my team wanted to contribute to that culture. I worked primarily on a search-and-display feature
            that parsed through user-inputted files and transformed the data into an Abstract Syntax Tree, and from there Svelte state dependencies were identified and displayed back via a window on the application page.
            SvelteStorm also includes a BrowserWindow to display client views while working on an application, a fully-featured code editor including bracket pairing and syntax highlighting using CodeMirror, and 
            a functional terminal utilizing XTerm. <br />
            <br />
            You can visit <a href='https://svelte-storm.com'>svelte-storm.com</a> to learn more about the tool, or visit my GitHub page to see the code for yourself!
          </p>
        </div>
      </div>
    </div>
  );
};
