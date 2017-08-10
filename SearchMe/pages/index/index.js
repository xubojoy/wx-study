var fileData = require('../../utils/config.js')
var WxSearch = require('../../wxSearch/wxSearch.js')
var app = getApp()
Page({
  data: {
    showData: fileData.mtData().list,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    companys: [],
  },

  onLoad: function () {
    console.log('----onLoad-------');
    var that = this;
    var data = that.data.showData;
    that.setData({ 
      companys: data
    });
    //初始化的时候渲染wxSearchdata
    WxSearch.init(that, 43, ['北京百度网讯科技有限公司', '阿里巴巴（中国）网络技术有限公司', '深圳市腾讯计算机系统有限公司']);
    WxSearch.initMindKeys(['https://www.baidu.com/', 'http://www.alibaba.com/', 'http://www.tencent.com/']);
  },
  addBtnClick: function (){
    console.log('-------点击了添加公司')
   wx.navigateTo({
     url: '../addCompany/addCompany',
   })
  },
  wxSearchFn: function (e) {
    console.log('----wxSearchFn-------');
    var that = this
    WxSearch.wxSearchAddHisKey(that);
  },
  wxSearchInput: function (e) {
    var that = this
    WxSearch.wxSearchInput(e, that);
  },
  wxSerchFocus: function (e) {
    console.log('----wxSerchFocus-------');
    var that = this
    WxSearch.wxSearchFocus(e, that);
  },
  wxSearchBlur: function (e) {
    var that = this
    WxSearch.wxSearchBlur(e, that);
  },
  wxSearchKeyTap: function (e) {
    // console.log('----wxSearchKeyTap-------');
    var that = this
    WxSearch.wxSearchKeyTap(e, that);
    console.log('----wxSearchKeyTap-------'+e);
  },
  wxSearchDeleteKey: function (e) {
    var that = this
    WxSearch.wxSearchDeleteKey(e, that);
  },
  wxSearchDeleteAll: function (e) {
    var that = this;
    WxSearch.wxSearchDeleteAll(that);
  },
  wxSearchTap: function (e) {
    console.log('----wxSearchTap-------');
    var that = this
    WxSearch.wxSearchHiddenPancel(that);
  },
  searchResultClick: function(){
    console.log('----searchResultClick-------');
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
    console.log('onShareAppMessage')
    return {
      title: '查我',
      desc: '小程序',
      path: '/pages/index/index'
    }
  },
})