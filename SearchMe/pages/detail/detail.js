//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    name: "",
    logo: "",
    code: "",
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({

    })
  },
  onLoad: function (options) {
    console.log('onLoad')
    var that = this
    console.log(options.name);
    console.log(options.logo);
    console.log(options.code);
    that.setData({
      name: options.name,
      logo: options.logo,
      code: options.code,
    })
  },
  chooseImageTap: function () {
    let _this = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#f7982a",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            _this.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            _this.chooseWxImage('camera')
          }
        }
      }
    })

  },
  chooseWxImage: function (type) {
    let _this = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function (res) {
        console.log(res);
        _this.setData({
          logo: res.tempFilePaths[0],
        })
      }
    })
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
    console.log('onShareAppMessage')
    return {
      title: '查我',
      desc: '小程序',
      path: '/pages/detail/detail'
    }
  },
})
