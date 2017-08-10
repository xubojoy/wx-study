module.exports = {
  mtData: mtData,
  searchmtdata: searchmtdata,
}

var mt_data = mtData()
function searchmtdata(id) {
  var result
  for (let i = 0; i < mt_data.list.length; i++) {
    var mt = mt_data.list[i]
    if (mt.id == id) {
      result = mt
    }
  }
  return result || {}
} 

function mtData() {
  var arr = {
    "list": [
      {
        id: 1,
        logo: "../../images/180.png",
        name: "每日高尔夫（北京）科技有限公司",
        code: "9111-0101-3303-7306-17",
      },
      {
        id: 2,
        logo: "../../images/huifenqi.jpg",
        name: "会找房（北京）网络技术有限公司",
        code: "9111-0108-3183-4529-5U",
      },
      {
        id: 3,
        logo: "../../images/th.png",
        name: "北京听花科技有限公司",
        code: "9111-0105-MA00-5LKW-0Y",
      },
      {
        id: 4,
        logo: "../../images/tairui.png",
        name: "泰瑞数创科技（北京）有限公司",
        code: "9111-0108-7662-8712-1Q",
      }
    ]
  }
  return arr
} 