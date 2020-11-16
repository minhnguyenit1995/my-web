import Link from 'next/link'
import BlogHeader from "../../components/blog/BlogHeader";
import BlogFooter from "../../components/blog/BlogFooter";
import {useRouter} from "next/router";
import fetch from "isomorphic-unfetch";
// import BreadCrumb from "../../../../mytheme/src/components/blog/common/BreadCrumb";
// import BlogSuggestion from "../../../../mytheme/src/components/blog/blog_single/BlogSuggestion";
// import CommentWapper from "../../../../mytheme/src/components/comment/CommentWapper";
import BlogSingle_Relative from "../../components/blog/BlogSingle_Relative";
import BlogSingle_Suggestion from "../../components/blog/BlogSingle_Suggestion"
const blog_single = ({post}) => {
  return (
    <div className="blog__container blog__single">
      {/*<BreadCrumb paths={paths}/>*/}
      <div className="container">
        <div className="blog__singleContainer">
          {/*<Category categories={post.categories}/>*/}
          {post.post_title && <Title title={post.post_title}/>}
          <Meta author={post.author} time={post.post_date} view={0} comment={0}/>
          {post.full_sizes && <ImageMain image={post.full_sizes['large']} />}
          <Article content={post.post_content} />
          <BlogSingle_Suggestion slug={post.post_name} />
          <BlogSingle_Relative slug={post.post_name} category={"thu-thuat"} />
        </div>
        {/*<CommentWapper post_id={post.ID} />*/}
      </div>
      <Link href={"/tin-tuc"}>
        <a href="">Go to home</a>
      </Link>
    </div>
  )
}

const ImageMain = ({image}) => {
  return <div className="blog__singleImage"><img src={image} alt=""/></div>
}

const Category = ({categories}) => {
  if(!categories) return null
  return (
    <div className="blog__singleCategory fix__padding20">
      {categories.map(category => category.category_parent == 0 || <Link key={category.term_id} to={"/blog-" + category.slug } >{category.name}</Link> )}
    </div>
  )
}

const Title = ({title}) => {
  return <h1 className="blog__title fix__padding20">{title}</h1>
}

const Article = ({content})  => {
  return (
    <article className="blog__artice fix__padding20">
      <div dangerouslySetInnerHTML={{__html : content}}></div>
    </article>
  )
}

const Meta = ({author , time ,  comment , view}) => {
  return (
    <div className="meta__user fix__padding20">
      <div className="meta__author meta__item">
        <span className="meta__authorIcon"></span>
        <span>{author}</span>
      </div>
      <div className="meta__date meta__item">
        <span className="meta__dateIcon"></span>
        <span>{time}</span>
      </div>
      <div className="meta__comment meta__item">
        <span className="meta__comementIcon"></span>
        <span>{comment}</span>
      </div>
      <div className="meta__view meta__item">
        <span className="meta__viewIcon"></span>
        <span>{view}</span>
      </div>
    </div>
  )
}

blog_single.getInitialProps = async  function(context){
  const slug = context.query.slug
  const [post] = await Promise.all([
    fetch(`http://localhost/mywebsite/api/get_api.php?key=post_single&slug=${slug}`).then(r => r.json())
  ])
  return {post}
}

export default blog_single