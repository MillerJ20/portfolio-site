import { useState } from "react";

const Search = ({ posts, updatePosts }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    if (!value) updatePosts(posts);

    setInputValue(value);

    updatePosts(posts.filter((item) =>
      item.frontmatter.title.toLowerCase().includes(value.toLowerCase())
    ));
  };

  return (
    <input placeholder="Search by Title" type="text" onChange={handleChange} value={inputValue} />
  )
}

export default Search;
