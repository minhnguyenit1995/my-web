import  {useEffect , useState} from 'react'
import axios from 'axios'
import Link from "next/link"
const BlogSingle_Suggestion = ({slug}) => {
  const [posts ,setPosts] = useState([])
  useEffect(() => {
    axios.get(`https://adminwebsuper.000webhostapp.com/api/get_api.php?key=post_suggestion&slug=`+slug)
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
    <Link href={"/blog/" + item.post_name}>
      <a>
        <p>{item.post_title}</p>
      </a>
    </Link>
  )
}
export default BlogSingle_Suggestion
