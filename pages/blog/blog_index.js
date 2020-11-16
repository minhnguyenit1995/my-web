import Link from "next/link";
import BlogHeader from "../../components/blog/BlogHeader";
import BlogFooter from "../../components/blog/BlogFooter";
import BlogHome_Featured from "../../components/blog/BlogHome_Featured";
import BlogViewest from "../../components/blog/BlogViewest";
import BlogPromotion from "../../components/blog/BlogPromotion";
import BlogProductest from "../../components/blog/BlogProductest";
import BlogList from "../../components/blog/BlogList";

import fetch from "isomorphic-unfetch"
const blog_index = ({blogs_featured , blogs_viewest , blogs_promotion , blogs_productest , blogs}) => {
  return (
    <div className="blog__wapper">
      <BlogHeader/>
      <div className="blog__container">
        <div className="blog__left">
          <BlogHome_Featured blogs={blogs_featured} />
          <BlogProductest blogs={blogs_productest}/>
        </div>
        <div className="blog__right">
          <BlogViewest blogs={blogs_viewest}  />
          <BlogPromotion blogs={blogs_promotion} />
          <BlogList blogsData={blogs} />
        </div>
        <Link href="/">Go to home</Link>
      </div>
      <BlogFooter/>
    </div>
  )
}
blog_index.getInitialProps = async function(context){
  let page = Math.max(context.query.page , 1)
  let slug = context.query.slug
  if(slug) {
    slug = slug.substring(1 , slug.length)
  }
  const [blogs_featured , blogs_viewest ,blogs_promotion , blogs_productest , blogs] = await Promise.all([
    fetch('http://localhost/mywebsite/api/get_api.php?key=post_featured').then(r => r.json()),
    fetch('http://localhost/mywebsite/api/get_api.php?key=post_viewest').then(r => r.json()),
    fetch('http://localhost/mywebsite/api/get_api.php?key=post_promotion').then(r => r.json()),
    fetch('http://localhost/mywebsite/api/get_api.php?key=post_productest').then(r => r.json()),
    fetch(`http://localhost/mywebsite/api/get_api.php?key=post_list&page=${page}&limit=10&slug=${slug}`).then(r => r.json())
  ])
  return {blogs_featured , blogs_viewest , blogs_promotion , blogs_productest , blogs }
}
export default blog_index