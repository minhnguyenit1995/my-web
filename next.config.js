module.exports = {
  async rewrites(){
    return [
      //blog
      {source: '/tin-tuc/:slug(.*?)' , destination : '/blog/blog_single'},
      {source: '/tin-tuc:slug(.*?)' , destination: '/blog/blog_index'},

      {source: '/banner' , destination : '/test/banner'} ,
      //shop
      {source: '/' , destination : '/shop/shop_index'} ,
      {source: '/gio-hang' , destination : '/shop/shop_cart'} ,
      {source: '/thanh-toan' , destination : '/shop/shop_checkout'} ,
      {source: '/:cat(.*?\.cat)' ,destination:"/shop/shop_list"},
      {source: '/:slug(.*?).html' ,destination:"/shop/shop_single"},
      //page
      {source: '/:slug(.*?)' ,destination:"/page/page_index"},
    ]
  } ,
  async headers () {
    return [
      {
        source: '/(.*)?' ,
        headers : [
          {
            key: 'Access-Control-Allow-Origin',
            value : '*'
          } ,
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET',
          }
        ]
      }
    ]
  } ,
  pageExtensions:['jsx' , 'js']
}