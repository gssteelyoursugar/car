export default [
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/shop/Shop'),
    meta: {
      title: '店铺资料'
    }
  },
  {
    path: '/add-shop',
    name: 'AddShop',
    component: () => import('../views/shop/AddShop'),
    meta: {
      title: '店铺资料'
    }
  },
  {
    path: '/manage-shop',
    name: 'ShopFile',
    component: () => import('../views/shop/ShopFile'),
    meta: {
      title: '店铺管理'
    }
  },
  {
    path: '/manage-business',
    name: 'ShopBusiness',
    component: () => import('../views/shop/ShopBusiness'),
    meta: {
      title: '店铺管理'
    }
  }
]