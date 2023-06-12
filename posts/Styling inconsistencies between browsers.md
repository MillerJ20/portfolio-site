---
title: 'Make a responsive React Component'
date: 'June 11 2023'
excerpt: 'My journey making the BlogList responsive, with consistent styling across web browsers'
cover_image: '/images/posts/react-3.png'
---

The following blog post contains my personal notes while addressing an issue I found with my website. What initially began as a journey to troubleshoot and debug styling inconsistencies between Firefox and Google Chrome turned into me finally making the BlogList page responsive to different screen sizes. The page was mostly created from top to bottom, so you can see the path follow out as I discovered new pieces of information, and the solution I ultimately went with. Enjoy!


## What I know

On Firefox, the styling for the BlogList page is loading properly when the page is full-sized. Will need to Make BlogList responsive

For Google Chrome, when the BlogList page is loaded, the styling for the cards is scuffed. The `Read More` button doesn't fit properly into the card. 

## What I don't know

How the different browser rendering engines are affecting the CSS. Will need to do some preliminary googling. 

## What I've learned

There is an npm package called normalize.css that can be imported inside of the global css file, or at the root level of the root HTML.

I ended up adding my own normalize.css file into the project and importing it in `App.css` using `@import "./normalize.css"`, since I was getting an error when importing the npm package using `@import-normalize`. The error is `Unknown rule @import-normalize css (unknownAtRules)` which is a known warning, with solutions in VSCode. Didn't feel like figuring out how to ignore in NeoVim, though I'm sure it's easy enough. 

Normalize.css works well enough, and it seems that other issues with my styling not being responsive enough are the root cause of the problems. Working on conditionally rendering the preview images for the post cards in the BlogList right now. 

Fixed responsiveness of my styling in other places. Normalize.css did not fix the chrome nonsense. For now, it seems that CSS Grid is handled differently in chrome than in Firefox, since the issue is that the grid items seem to have inconsistent heights in Chrome. 

## Log

This has become an issue to fix responsiveness in the BlogList page. The styling differences are frustrating, but I have no idea how to tackle them. For now, my issue is that `window.innerHeight` and `window.innerWidth` are not accessible to React on first render. I need to either find a way to await the window object being loaded, or grab the size of the screen before loading. 

I initially used ChatGPT to generate some boilerplate code for this responsiveness, using React's conditional rendering to render specific components based on window size. It generated some decent code: 
``` jsx
import React, { useState, useEffect } from 'react';

const MyContainerComponent = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`container ${windowWidth <= 600 ? 'small-screen' : ''}`}>
      {windowWidth <= 600 ? (
        <div>
          {/* Render only the text for small screens */}
        </div>
      ) : (
        <div>
          {/* Render both text and image for larger screens */}
        </div>
      )}
    </div>
  );
};

export default MyContainerComponent;
```

I did some minor refactoring and ended up using: 
``` jsx
const Post = ({ post }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
    console.log("Height: " + windowHeight);
    console.log("Width: " + windowWidth);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowHeight, windowWidth]);

  return (
    <>
      {windowWidth >= 900 && windowHeight > 800 ? (
        <div className="card">
          <img src={post.frontmatter.cover_image} alt='Blog-Post Cover Image' />
          <div className="card-date"> Posted on {post.frontmatter.date}</div>
          <h3 className="card-title">{post.frontmatter.title}</h3>
          <p className="card-excerpt">{post.frontmatter.excerpt}</p>
          <Link href={`/blog/${post.slug}`} className='btn' id='post-btn'>Read More</Link>
        </div>
      ) : (
        <div className="card-small-screen">
          <div className="card-date-small"> Posted on {post.frontmatter.date}</div>
          <h3 className="card-title-small">{post.frontmatter.title}</h3>
          <p className="card-excerpt-small">{post.frontmatter.excerpt}</p>
          <Link href={`/blog/${post.slug}`} className='btn' id='post-btn'>Read More</Link>
        </div>
      )}
    </>
  )
}
```

With that in my codebase, I have a PR made that I will merge when it is ready. My next step is to try to implement suggestions from: https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs

Namely: creating a `useWindowDimensions()` hook to grab the dimensions of the window across the entire application, and then also using `globalThis?.window?.innerWidth` to attempt to grab the viewport dimensions on first load. 

Creating the useWindowDimensions Hook was all I needed, works well on both Firefox and Chrome, just need to address the CSS Grid issues now. I'll keep the globalThis line in mind in case I ever run into bugs, but for now the hook by itself is working for me. 

The hook code is from user `giovannipds` on SO that I just lifted into its own file in my `/hooks` folder:
``` jsx
import { useState, useEffect } from 'react';

export default function useWindowDimensions() {

  const hasWindow = typeof window !== 'undefined';

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}
```

`Post.tsx` now looks like: 
``` jsx
const Post = ({ post }) => {
  const { height, width } = useWindowDimensions();
	
  return (
    <>
      {width >= 900 && height > 800 ? (
        <div className="card">
          <img src={post.frontmatter.cover_image} alt='Blog-Post Cover Image' />
          <div className="card-date"> Posted on {post.frontmatter.date}</div>
          <h3 className="card-title">{post.frontmatter.title}</h3>
          <p className="card-excerpt">{post.frontmatter.excerpt}</p>
          <Link href={`/blog/${post.slug}`} className='btn' id='post-btn'>Read More</Link>
        </div>
      ) : (
        <div className="card-small-screen">
          <div className="card-date-small"> Posted on {post.frontmatter.date}</div>
          <h3 className="card-title-small">{post.frontmatter.title}</h3>
          <p className="card-excerpt-small">{post.frontmatter.excerpt}</p>
          <Link href={`/blog/${post.slug}`} className='btn' id='post-btn'>Read More</Link>
        </div>
      )}
    </>
  )
}
```

Well, I like a comment buried-ish in the SO post more than I like what ChatGPT suggested. When I prompted ChatGPT to correct the "window not being defined" error it suggested that in my `useState()` I do something like:
``` jsx
const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0)
```
Inside of my `Post.tsx` which means all the logic is in that component and can't be shared like it can be with the `useWindowDimensions()` hook, and is also pretty ugly. 

So the solution was actually related to what i thought it was, which makes me a coding genius. 

My old CSS code was: 
``` css
grid-template-rows: repeat(auto-fill, 30%)
```
But I adjusted it to be: 
``` css
grid-template-rows: auto auto 1fr;
```

And just like that, Chrome scales perfectly! Issue closed. lol
