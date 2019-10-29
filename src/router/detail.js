export default [
  {
    path: '/order-detail/:id',
    name: 'Detail',
    component: () => import('../components/Detail/Detail'),
  },
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
    path:'/slip-succ',
    component: () => import('../views/detail/SlipSucc'),
    meta: {
      title: '核销成功'
    }
  },
  {
    path: '/upload',
    name: 'Upload',
    component: () => import('../views/detail/Upload'),
    meta: {
      title: '上传视频'
    },
  },
  {
    path: '/upload-video/:id',
    name: 'UploadVideo',
    component: () => import('../views/detail/UploadVideo'),
    meta: {
      title: '上传视频'
    },
  },
  {
    path: '/upload-succ',
    name: 'UploadSucc',
    component: () => import('../views/detail/UploadSucc'),
    meta: {
      title: '上传视频结果'
    },
  }
]
