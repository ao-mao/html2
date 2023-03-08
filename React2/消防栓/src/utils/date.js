function addZero(data) {
  return +data > 9 ? data : "0" + data;
}

function getTodayAndTarget(target) {
  const date = new Date();
  const start_date =
    date.getFullYear() +
    "-" +
    addZero(date.getMonth() + 1) +
    "-" +
    addZero(date.getDate());
  const end_date =
    date.getFullYear() +
    "-" +
    addZero(date.getMonth() + 1) +
    "-" +
    addZero(date.getDate() + target);
  return [start_date, end_date];
}
//时间戳转换
function timestampToTime(timestamp) {
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = addZero(date.getMonth()+1 )+ '-';
        var D = addZero(date.getDate() )+ ' ';
        var h = addZero(date.getHours()) + ':';
        var m = addZero(date.getMinutes()) + ':';
        var s = addZero(date.getSeconds());
		
        return Y+M+D+h+m+s;
    }
	
export { getTodayAndTarget,timestampToTime};
