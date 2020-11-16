import Link from "next/link";

const BlogProductest = ({blogs}) => {
  return (
    <div className="blog__productestContainer">
      <Title title={"Sản phẩm mới"} />
      { blogs.map((blog , index) => <PItem item={blog} key={index} />) }
      <ReadMore/>
    </div>
  )
}
const Title = ({title}) => {
  return (
    <h2 className="blog__productTitle">{title}</h2>
  )
}

const ReadMore = () => {
  return (
    <div className="blog__readMore">
      <a href="">xem thêm</a>
    </div>
  )
}

const PItem = ({item}) => {
  return (
    <Link href="/">
      <a className="blog__product">
        <div className="img">
          <img src={item.full_sizes['thumbnail']} alt=""/>
        </div>
        <div className="meta">
          <h2 className="meta__name">{item.name}</h2>
          <div className="price__group">
            {item.price ? <span className="price__promotion">{item.price}</span> : null}
            {item.regular_price ?  <span className="price__regular">{item.regular_price}</span> : null }
          </div>
        </div>
      </a>
    </Link>
  )
}


export default BlogProductest