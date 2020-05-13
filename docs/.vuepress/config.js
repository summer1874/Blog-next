module.exports = {
  title: 'SUMMER-1874',
  theme: 'reco',
  dest: 'blog',
  description: '当我沉默的时候，我觉得很充实，当我开口说话，就感到了空虚。',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#1e90ff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/icon128.jpg' }],
    ['link', { rel: 'mask-icon', href: '/icons/icon128.svg', color: '#1e90ff' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/icon128.jpg' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  themeConfig: {
    type: 'blog',
    authorAvatar: '/avatar.jpg',
    logo: '/avatar.jpg',
    author: 'summer1874',
    startYear: '2018',
    sidebar: 'auto',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebarDepth: 1,
    displayAllHeaders: false,
    nav: [
      { text: 'Timeline', link: '/timeline/', icon: 'reco-date' },
      { text: 'About', link: '/about/', icon: 'reco-account'},
      { text: 'Contact',
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/summer1874', icon: 'reco-github' },
        ]
      }
    ],
    blogConfig: {
      category: {
        location: 1,     // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认文案 “分类”
      },
      tag: {
        location: 2,     // 在导航栏菜单中所占的位置，默认3
        text: 'Tag'      // 默认文案 “标签”
      }
    },
    valineConfig: {
      appId: 'lNUTeNc4FOXX9ay6udnzx1Rq-gzGzoHsz',// your appId
      appKey: 'RLEywQDFJXlC5u1CehjveQse', // your appKey
      placeholder: '我有一言，不知当  不当讲'
    },
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ]
  },
  plugins: [
    'vuepress-plugin-cat',
    [
      require('./plugins/BgMusic'),
      {
        audios: [
          {
            name: '亡灵序曲',
            artist: 'Alsace',
            url: 'http://bucket-ce5b96a087.oss-cn-shenzhen.aliyuncs.com/wms/download/9ef29dbb23744946b98fde259998ace7.m4a',
            cover: 'http://p2.music.126.net/ln6JQjI3BR156RAcLeoQqA==/109951163150014632.jpg?param=130y130'
          },
          {
            name: 'Vakning að elska',
            artist: 'Misha Mishenko',
            url: 'http://bucket-ce5b96a087.oss-cn-shenzhen.aliyuncs.com/wms/download/00290565108340d78281f18d20e58ed2.m4a',
            cover: 'http://p1.music.126.net/euyNgFymq6C7ER1Rao4fsw==/2455209464868207.jpg?param=130y130'
          },
          {
            name: 'Teenage Summer Days',
            artist: 'David Arthur Brown',
            url: 'http://bucket-ce5b96a087.oss-cn-shenzhen.aliyuncs.com/wms/download/b6e7d2038f024ea09d0039e5f47511b9.m4a',
            cover: 'http://p2.music.126.net/VYCboMUhUn55MZmVbaOLQw==/6641050231992624.jpg?param=130y130'
          },
          {
            name: 'いつも何度でも',
            artist: '竹仲絵里',
            url: 'http://bucket-ce5b96a087.oss-cn-shenzhen.aliyuncs.com/wms/download/a5c50295f97f4a42a413906203a9118c.m4a',
            cover: 'http://p2.music.126.net/qpTKrDa6kux6oIje-DLXcQ==/635517720875780.jpg?param=130y130'
          }
        ]
      }
    ]
    ,
    [
      '@vuepress/pwa', 
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    ]
  ]
}
