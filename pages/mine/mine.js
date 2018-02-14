// pages/mine/mine.js

var helloData={
  name:'wechat1',
  num:0
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'wechat1',
    num: 0
  },

  changeName:function(e){
    this.setData({
      name:'朱洪到此一游'
    })
  },
  changeNum:function(){
    this.data.num = this.data.num+1
    this.setData({
      num: this.data.num
    })
  },

  /**
   * 生命周期函数--监听页面加载
   * 一个页面只会调用一次，可以在onLoad中获取打开当前页面所调用的query参数
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   * 每次打开页面都会调用一次
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   * 页面隐藏
   * 当navigateTo或者底部tab切换时调用
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})