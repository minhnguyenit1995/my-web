import Link from 'next/link'
export default function shop_index() {
  return (
    <div>
      <h1>This is page home</h1>
      <Link href="/tin-tuc">Blog</Link>
      <Link href="/tin-tuc-cong-nghe">Blog List</Link>
      <Link href="/tin-tuc/abc">Blog Single</Link>
      <Link href="/banner">Banner Page</Link>
    </div>
  )
}