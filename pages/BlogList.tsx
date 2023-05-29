import Head from "next/head";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post'

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
  return (
    <div className="container">
      <Head>
        <title>List</title>
      </Head>

      <div className="posts">
        {posts.map((post: Post, index: number) => {
          return <Post post={post} key={index} />
        })}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))
  
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');

    const { data:frontmatter } = matter(markdownWithMeta)

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
