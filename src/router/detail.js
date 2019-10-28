export default [
  {
    path: '/bill',
    name: 'Bill',
    component: () => import('../views/detail/Bill'),
    meta: {
      title: '账单'
    }
  },
  {
    path: '/install',
    name: 'Install',
    component: () => import('../views/detail/Install'),
    meta: {
      title: '安装单'
    }
  },
  {
    path: '/official',
    name: 'Official',
    component: () => import('../views/detail/Official'),
    meta: {
      title: '官派单'
    }
  },
  {
    path: '/slip',
    name: 'Slip',
    component: () => import('../views/detail/Slip'),
    meta: {
      title: '核销'
    }
  },
  {
    path: '/upload',
    name: 'Upload',
    component: () => import('../views/detail/Upload'),
    meta: {
      title: '上传视频'
    }
  }
]
