import Link from "next/link";
const BlogViewest = ({blogs}) => {
  return (
    <div className="blog__viewestWapper">
      <Title title={"Xem nhiều nhất"}/>
      <div className="blog__viewList">
        {blogs.map((item, index) => <VItem item={item} key={index} />)}
      </div>
    </div>
  )
}
const Title = ({title}) => {
  return (
    <div className="blog__viewTitle blog__title">
      {title}
    </div>
  )
}

const VItem =  ({item}) => {
  return (
    <Link href={"/tin-tuc/"+item.post_name}  className="blog__view">
      <a>
        <div className="img">
          <img src={item.full_sizes['shop_thumbnail']} alt=""/>
        </div>
        <div className="meta">
          <h3 className="meta__name">{item.post_title}</h3>
          <div className="meta__list">
            <div className="meta__user">
              <div className="meta__author">
                <span className="meta__authorIcon" aria-label="author-icon"></span>
                <span>{item.author}</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}
export  default  BlogViewest