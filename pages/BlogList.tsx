import Head from "next/head";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BlogList = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>List</title>
      </Head>

      <div className="posts">
        {posts.map((post: {string}, index: number) => {
          <h3 key={index}>{post.frontmatter.title}</h3>
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