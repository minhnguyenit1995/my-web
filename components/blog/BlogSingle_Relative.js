import  {useEffect , useState} from 'react'
import axios from 'axios'
import Link from "next/link"
const BlogSingle_Relative = ({slug , category}) => {
  const [posts ,setPosts] = useState([])
  useEffect(() => {
    axios.get("http://localhost/mytheme/api/get_api.php?key=post_list&slug="+category+"&page=1&limit=6")
      .then(res => {
        setPosts(res.data.collection)
      })
  } , [slug , category])
  if(!posts || posts.length == 0) return  null

  return (
    <div className="__blog_relative fix_padding_20">
      <div className="__blog_relative_cotnainer">
        <RTitle title={"Tin tức liên quan"}/>
        <div className="__blog_relative_list">
          { posts.map((item , key) => item.post_name != slug &&  <RItem key={key} item={item}/>)}
        </div>
      </div>
    </div>
  )
}

const RTitle = ({title}) => {
  return (
    <h2 className="__blog_relative_title">{title}</h2>
  )
}

const RItem = ({item}) => {
  return (
    <div className="__blog_relative_item">
      <div className="__img">
        <Link href={"/blog/" + item.post_name}>
          <a>
            {/*<img src={item.full_sizes['300x200']} />*/}
            <h1>oke</h1>
          </a>
        </Link>
      </div>
      <div className="__meta">
        <Link href={"/blog/" + item.post_name}>
          <a href="">
            <h3 className="__meta_name">
              {item.post_title}
            </h3>
            <div className="__meta_list">
              <div className="__meta_user">
                <div className="__meta_date">
                  <span className="__meta_date_icon"></span>
                  <span>{item.post_date}</span>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default BlogSingle_Relative