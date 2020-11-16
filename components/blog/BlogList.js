import Link from "next/link";
import {useState , useCallback , useEffect} from 'react'
import axios from 'axios'

const initState = {
  blogs : [],
  total : 0,
  page : 1,
  isLoadingMore : false,
  limit : 10
}

const BlogList = ({blogsData}) => {
const [{blogs , total , page , limit , isLoadingMore} , setState] =
  useState({
    ...initState ,
    blogs: blogsData.collection ,
    total : blogsData.total
  })

  useEffect(() => {
    if(isLoadingMore){
      axios.get(`https://adminwebsuper.000webhostapp.com/api/get_api.php?key=post_list&page=${page}&limit=10&slug=`)
      .then(res => {
        setState(prevState => ({
          ...prevState ,
          isLoadingMore : false ,
          blogs: [...blogs , ...res.data.collection]
        }))
      })
    }
  }, [page])

  const onLoadReadMore = useCallback(() => {
    setState(prevState => ({
      ...prevState ,
      page : page + 1 ,
      isLoadingMore: true
    }))
  })

  if(!blogs || 0 == blogs.length) return null
  return (
    <div className="blogs__newestContainer">
      {blogs.map((blog , index) => <LItem post={blog} key={index} />)}
      {(page * limit < total) && <ReadMore onLoadReadMore={onLoadReadMore} isLoadingMore={isLoadingMore}/>}
    </div>
  )
}

const ReadMore = ({onLoadReadMore , isLoadingMore}) => {
  return (
    <div className="readMore" onClick={onLoadReadMore}>
      {isLoadingMore ? "Đang tải tin tức" : "Xem thêm tin tức"}
    </div>
  )
}

const LItem = ({post}) => {
  return (
    <div className="blogs__newest blogs__newestItem">
      <div className="img">
        <Link  href={"/tin-tuc/"+post.post_name}>
          <a><img src={post.full_sizes ? post.full_sizes['medium'] : ""} alt={post.post_title}/></a>
        </Link>
      </div>
      <div className="meta">
        <LCategory categories={post.categories} />
        <Link href={"/tin-tuc/"+post.post_name}>
          <a>
            <h3 className="meta__name">{post.post_title}</h3>
            <p className="meta__descreption">
              {post.post_excerpt}
            </p>
            <div className="meta__list">
              <div className="meta__user">
                <LAuthor author={post.author} />
                <LDate date={post.post_date} />
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

const LDate = ({date}) => {
  return (
    <div className="meta__date">
      <span className="meta__dateIcon"></span>
      <span>{date}</span>
    </div>
  )
}

const LAuthor = ({author}) => {
  if(!author) return null
  return (
    <div className="meta__author">
      <span className="meta__authorIcon"></span>
      <span>{author}</span>
    </div>
  )
}

const LCategory = ({categories}) => {
  if(!categories) return null
  return (
    <div className="meta__categoryv2">
      { categories.map(cate => cate.term_id != 27 && <Link key={cate.term_id} href={"/blog-"+cate.slug}>{cate.name}</Link>)}
    </div>
  )
}
export  default BlogList