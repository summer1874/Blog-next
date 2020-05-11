module.exports = {
  title: 'SUMMER-1874',
  theme: 'reco',
  description: '当我沉默的时候，我觉得很充实，当我开口说话，就感到了空虚。',
  head: [
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
    }
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
            url: 'https://m801.music.126.net/20200511113434/c5be44787e7112844f0f7008b8bb98df/jdyyaac/0e0c/525d/040f/9ffd4abf5ce721eb2cb63e57fa5d8e22.m4a',
            cover: 'http://p2.music.126.net/ln6JQjI3BR156RAcLeoQqA==/109951163150014632.jpg?param=130y130'
          },
          {
            name: 'Vakning að elska',
            artist: 'Misha Mishenko',
            url: 'https://m701.music.126.net/20200511114028/d68fc825bfcc4a42f1978759949cac81/jdyyaac/560c/0e5a/515b/af4e49871290808ef605f114d4f5cccc.m4a',
            cover: 'http://p1.music.126.net/euyNgFymq6C7ER1Rao4fsw==/2455209464868207.jpg?param=130y130'
          },
          {
            name: 'Teenage Summer Days',
            artist: 'David Arthur Brown',
            url: 'https://m701.music.126.net/20200511114342/accdb2857eeec384d304794682a9a3e3/jdyyaac/560f/0e5c/0f5e/ae9a9531cf969a24ac4e844cc9ea8f62.m4a',
            cover: 'http://p2.music.126.net/VYCboMUhUn55MZmVbaOLQw==/6641050231992624.jpg?param=130y130'
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
