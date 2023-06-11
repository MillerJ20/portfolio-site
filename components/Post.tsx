import Link from "next/link";
import useWindowDimensions from "../hooks/useWindowDimensions"
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


export default Post;
