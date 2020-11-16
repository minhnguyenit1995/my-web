import Link from "next/link";
const BlogPromotion = ({blogs}) => {
  return (
    <div className="blog__promotionContainer">
      <Title title={"Khuyến mãi"} />
      <div className="blog__promotionList">
        { blogs.map((item , index) => <PItem key={index} item={item}/>) }
      </div>
    </div>
  )
}

const Title = ({title}) => {
  return (
    <h2 className="blog__promotionTitle">{title}</h2>
  )
}

const PItem = ({item}) => {
  return (
    <Link href={"/tin-tuc/"+item.post_name} className="blog__promotion" >
      <a>
        <div className="img">
          <img src={item.full_sizes['shop_catalog']} alt={item.post_title}/>
        </div>
        <div className="meta">
          <h2 className="meta__name">{item.post_title}</h2>
        </div>
      </a>
    </Link>
  )
}
export  default  BlogPromotion