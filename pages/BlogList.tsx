import Head from "next/head";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post'
import Link from "next/link";
import Search from "../components/Search";
import { useState } from "react";

type Post = {
  slug: string,
  frontmatter: {
    title: string,
    date: string,
    excerpt: string,
    cover_image: string,
  }
}

const BlogList = ({ posts }) => {
  const [postsArray, setPostsArray] = useState(posts);

  const updatePosts = (updatedArray: Array<string>) => {
    setPostsArray(updatedArray)
  }

  const results = postsArray.map((post: Post, index: number) => <Post post={post} key={index} />);
  const content = results?.length ? results : <article><p>No Matching Posts!</p></article>

  return (
    <div className="container">
      <Link href="/" className="btn">Home</Link>
      <Search posts={posts} updatePosts={updatePosts} />
      <Head>
        <title>Blog Posts</title>
      </Head>

      <div className="posts">
        {content}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts
    }
  }
}

export default BlogList;
