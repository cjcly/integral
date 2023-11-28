//获取上月
export function getOneMonth() {
	var end = new Date();
	var year = end.getFullYear();
	var month = end.getMonth() + 1 < 10 ? `0${end.getMonth() + 1}` : end.getMonth() + 1
	var day = end.getDate() > 9 ? end.getDate() : '0' + end.getDate();
	var dateObj = {};
	dateObj.now = year + '-' + month + '-' + day;
	var endMonthDay = new Date(year, month, 0).getDate();
	if (month - 1 <= 0) {
		dateObj.last = (year - 1) + '-' + 12 + '-' + day;

	} else {
		var startMonthDay = new Date(year, (parseInt(month) - 1), 0).getDate();
		if (startMonthDay < day) {
			if (day < endMonthDay) {
				dateObj.last = year + '-' + (month - 1) + '-' + (startMonthDay - (endMonthDay - day));
			} else {
				dateObj.last = year + '-' + (month - 1) + '-' + startMonthDay;
			}
		} else {
			dateObj.last = year + '-' + ((month - 1) < 10 ? `0${(month - 1)}` : (month - 1)) + '-' + day;
		}
	}
	return dateObj
}
//前三月
export function getThreeMounth() {
	var end = new Date();
	var year = end.getFullYear();
	var month = end.getMonth() + 1 < 10 ? `0${end.getMonth() + 1}` : end.getMonth() + 1
	var day = end.getDate() > 9 ? end.getDate() : '0' + end.getDate();
	var dateObj = {};
	dateObj.now = year + '-' + month + '-' + day;
	var endMonthDay = new Date(year, month, 0).getDate(); //当前月的总天数
	if (month - 3 <= 0) { //如果是1、2、3月，年数往前推一年
		var start3MonthDay = new Date((year - 1), (12 - (3 - parseInt(month))), 0).getDate(); //3个月前所在月的总天数
		if (start3MonthDay < day) { //3个月前所在月的总天数小于现在的天日期
			dateObj.last = (year - 1) + '-' + (12 - (3 - month)) + '-' + start3MonthDay;
		} else {
			dateObj.last = (year - 1) + '-' + (12 - (3 - month)) + '-' + day;
		}
	} else {
		var start3MonthDay = new Date(year, (parseInt(month) - 3), 0).getDate(); //3个月前所在月的总天数
		if (start3MonthDay < day) { //3个月前所在月的总天数小于现在的天日期
			if (day < endMonthDay) { //当前天日期小于当前月总天数,2月份比较特殊的月份
				dateObj.last = year + '-' + (month - 3) + '-' + (start3MonthDay - (endMonthDay - day));
			} else {
				dateObj.last = year + '-' + (month - 3) + '-' + start3MonthDay;
			}
		} else {
			dateObj.last = year + '-' + ((month - 3) < 10 ? `0${(month - 3)}` : (month - 3)) + '-' + day;
		}
	}
	return dateObj
}
// 近一年
export function getOneYear() {
    var nowDate = new Date()
    var dates = new Date(nowDate)
    var year = dates.getFullYear();
    var month = dates.getMonth() + 1;//0-11表示1-12月
    var day = dates.getDate();
    var dateObj = {};
    dateObj.now = year + '-' + month + '-' + day;
    dates.setDate(dates.getDate() - 365)
    var seperator1 = '-'
    var year = dates.getFullYear()
    var month = dates.getMonth() + 1
    var strDate = dates.getDate()
    if (month >= 1 && month <= 9) {
        month = '0' + month
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
    }
    dateObj.last = year + seperator1 + month + seperator1 + strDate
    return dateObj
}