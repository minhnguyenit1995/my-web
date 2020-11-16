import Link from "next/link";
const  BlogHomeFeatured = ({blogs}) =>{
  return (
    <div className="blog__featuredWapper">
      <Title title="Tin tức nổi bật"/>
      <div className="blog__featureds">
        <FItem
          single={true}
          size={'large'}
          item={blogs[0]}/>
        <FItem
          single={false}
          size={"medium"}
          item={blogs[1]}/>
        <FItem
          single={false}
          size={"medium"}
          item={blogs[2]}/>
      </div>
    </div>
  )
}
const FItem = ({single , item , size}) => {
  if(!item) return null
  return (
    <div className={"blog__wapper "+ (single ? " blog__orderFirst" : "")}>
      <Link href={"/tin-tuc/" + item.post_name} >
        <a>
          <div className="img">
            <img src={item.full_sizes[size]} width="100" height="50" alt={item.post_title}/>
          </div>
          <div className="meta">
            <h3 className="meta__name">{item.post_title}</h3>
            <div className="meta__list">
              {item.categories && <FCategories categories={item.categories} />}
              <div className="meta__user">
                <FAuthor author={item.author} />
                <FDate date={item.post_date} />
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

const FDate = ({date}) => {
  return (
    <div className="meta__date">
      <span className="meta__dateIcon" aria-label="date-icon"></span>
      <span>{date}</span>
    </div>
  )
}

const FAuthor = ({author}) => {
  return (
    <div className="meta__author">
      <span className="meta__authorIcon" aria-label="author-icon"></span>
      <span>{author}</span>
    </div>
  )
}

const FCategories = ({categories}) => {
  if(!categories) return null
  return (
    <div className="meta__category">
      { categories.map((c , index) => <FCategory key={index} name={c.name} />) }
    </div>
  )
}

const FCategory = ({name}) => {
  return (
    <div>{name}</div>
  )
}

const Title = ({title}) =>
{
  return (
    <div className="blog__featuredTitle blog__title">
      <h2 className="title"><span>{title}</span></h2>
    </div>
  )
}

export  default  BlogHomeFeatured