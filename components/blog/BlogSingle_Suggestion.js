import React , {useEffect , useState} from 'react'
import axios from 'axios'
import Link from "next/link"
const BlogSingle_Suggestion = ({slug}) => {
  const [posts ,setPosts] = useState([])
  useEffect(() => {
    axios.get("http://localhost/mytheme/api/get_api.php?key=post_suggestion&slug="+slug)
      .then(res => setPosts(res.data))
  } , [slug])
  if(!posts || posts.length == 0) return  null
  return (
    <div className="__blog_suggestion fix_padding_20">
      { posts.map((item , index) => <SItem item={item} />)}
    </div>
  )
}

const SItem  = ({item}) => {
  return (
    <Link to={"/blog/" + item.post_name}>
      <p>{item.post_title}</p>
    </Link>
  )
}
export default BlogSingle_Suggestion
