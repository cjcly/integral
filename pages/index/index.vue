<template>
	<view class="content">
		<view class="nav">
			<uni-icons type="left" size="30"></uni-icons>
			<text>绿色积分</text>
		</view>
		<view class="bgc">
			<image src="../../static/images/green.png" mode="绿色积分"></image>
			<view class="rule">
				<text>绿色积分</text>
				<text>规则</text>
			</view>
			<view class="integral">300</view>
		</view>
		<view class="record">
			<text class="line"></text>
			<text>明细记录</text>
			<text class="line"></text>
		</view>
		<view class="main">
			<view class="time">
				<text>{{recordTime}}</text>
				<image src="../../static/images/Polygon 1@2x.png" mode="" @tap="toggle('bottom')"></image>
			</view>
			<!-- 这里如果有数据可以使用循环来渲染 -->
			<!-- <view class="box">
				<view class="box-top">
					<view class="left">
						<text>5</text>
						<text>/10</text>
					</view>
					<view class="center">
						<view class="top">
							+12.00
						</view>
						<view class="bottom">
							绿色积分 | 剩余：150
						</view>
					</view>
					<view class="right">
						<text>详情</text>
						<uni-icons type="top" size="16"></uni-icons>
					</view>
				</view>
			</view> -->
			<view class="box" v-for="(item,index) in recordList" :key="item.id">
				<view class="box-top">
					<view class="left">
						<text>5</text>
						<text>/10</text>
					</view>
					<view class="center">
						<view :class="[item.integral>=0?'top1':'top2','top']">
							{{item.integral}}
						</view>
						<view class="bottom">
							绿色积分 | 剩余：{{item.residue}}
						</view>
					</view>
					<view class="right">
						<text>详情</text>
						<uni-icons :type="item.record?'bottom':'top'" size="16" @click="changeRecord(index)" ></uni-icons>
					</view>
				</view>
				<view v-show="item.record" class="line"></view>
				<view v-show="item.record" class="details">
					<view class="list-item">
						<view class="left">
							<image src="../../static/images/code.png" mode=""></image>
							<text>订单编号</text>
						</view>
						<view class="right">
							4143514123214345231421
						</view>
					</view>
					<view class="list-item">
						<view class="left">
							<image src="../../static/images/type.png" mode=""></image>
							<text>交易类型</text>
						</view>
						<view class="right">
							消费积分自动转换
						</view>
					</view>
					<view class="list-item">
						<view class="left">
							<image src="../../static/images/notes.png" mode=""></image>
							<text>交易备注</text>
						</view>
						<view class="right">
							绿色积分抵扣
						</view>
					</view>
					<view class="list-item">
						<view class="left">
							<image src="../../static/images/time.png" mode=""></image>
							<text>交易时间</text>
						</view>
						<view class="right">
							2023-10-12 12:11
						</view>
					</view>
					<view class="list-item">
						<view class="left">
							<image src="../../static/images/source.png" mode=""></image>
							<text>订单来源</text>
						</view>
						<view class="right">
							娜娜(自己)
						</view>
					</view>
				</view>
			</view>
			<!-- <view class="box">
				<view class="box-top">
					<view class="left">
						<text>5</text>
						<text>/10</text>
					</view>
					<view class="center">
						<view class="top">
							+12.00
						</view>
						<view class="bottom">
							绿色积分 | 剩余：150
						</view>
					</view>
					<view class="right">
						<text>详情</text>
						<uni-icons type="bottom" size="16"></uni-icons>
					</view>
				</view>
				<view class="line"></view>
				<view class="details">
					<view class="list-item">
						<view class="left">
							<image src="../../static/images/code.png" mode=""></image>
							<text>订单编号</text>
						</view>
						<view class="right">
							4143514123214345231421
						</view>
					</view>
					<view class="list-item">
						<view class="left">
							<image src="../../static/images/type.png" mode=""></image>
							<text>交易类型</text>
						</view>
						<view class="right">
							消费积分自动转换
						</view>
					</view>
					<view class="list-item">
						<view class="left">
							<image src="../../static/images/notes.png" mode=""></image>
							<text>交易备注</text>
						</view>
						<view class="right">
							绿色积分抵扣
						</view>
					</view>
					<view class="list-item">
						<view class="left">
							<image src="../../static/images/time.png" mode=""></image>
							<text>交易时间</text>
						</view>
						<view class="right">
							2023-10-12 12:11
						</view>
					</view>
					<view class="list-item">
						<view class="left">
							<image src="../../static/images/source.png" mode=""></image>
							<text>订单来源</text>
						</view>
						<view class="right">
							娜娜(自己)
						</view>
					</view>
				</view>
			</view> -->
		</view>
		<view class="popup">
			<uni-popup ref="popup">
				<view class="popup-content">
					<view class="top">
						<view class="tab">
							<view :class="[current===0?'active':'']" @tap="changeActive(0)">月份选择</view>
							<view :class="[current===1?'active':'']" @tap="changeActive(1)">自定义</view>
						</view>
						<view class="icon">
							<uni-icons type="closeempty" size="20" @tap="closeDialog"></uni-icons>
						</view>
					</view>
					<view v-show="current===0" class="pick">
						<picker-view :indicator-style="indicatorStyle" value=" [9999, 13]" @change="bindChange"
							class="picker-view">
							<picker-view-column>
								<view class="item" v-for="(item,index) in years" :key="index">{{item}}年</view>
							</picker-view-column>
							<picker-view-column>
								<view class="item" v-for="(item,index) in months" :key="index">{{item}}月</view>
							</picker-view-column>
						</picker-view>
					</view>
					<view class="time" v-show="current===1">
						<view class="text">
							交易时间
						</view>
						<view class="btns">
							<button :disabled="index==-2" :class="[index===0?'active':'']" @tap="changeIndex(0)">上月</button>
							<button :disabled="index==-2" :class="[index===1?'active':'']" @tap="changeIndex(1)">近三月</button>
							<button :disabled="index==-2" :class="[index===2?'active':'']" @tap="changeIndex(2)">近一年</button>
						</view>
						<view class="text">
							自定义
						</view>
						<view class="pick">
							<picker mode="date" :value="date" :disabled="index>=0" @change="leftDateChange">
								<view class="uni-input">{{leftDate}}</view>
							</picker>
							<view class="line">
								——
							</view>
							<picker mode="date" :value="date" :disabled="index>=0" :start="leftFormatDate" @change="rightDateChange">
								<view class="uni-input">{{rightDate}}</view>
							</picker>
						</view>
					</view>
					<button class="btn" @tap="submit">确定</button>
				</view>
			</uni-popup>
		</view>
		<!-- 提示信息弹窗 -->
		<uni-popup ref="message" type="message">
			<uni-popup-message type="info" :message="messageText" :duration="2000"></uni-popup-message>
		</uni-popup>
	</view>
</template>

<script>
	import {
		getOneMonth,
		getThreeMounth,
		getOneYear
	} from '@/utils/getTime.js';
	export default {
		data() {
			return {
				//记录数组
				recordList: [{
						id: 1,
						record: false,
						integral:+12.00,
						residue:150
					},
					{
						id: 2,
						record: true,
						integral:+12.00,
						residue:138
					},
					{
						id: 3,
						record: true,
						integral:-2,
						residue:126
					}
				],
				recordTime: '2023年10月', //记录时间
				//点击tab
				current: 0,
				//点击btn
				index: -1,
				years: [],
				months: [],
				year: 1990,
				month: 1,
				indicatorStyle: `height: 50px;`,
				value1: [9999, 13, 32],
				value: [9999, this.month - 1],
				//消息提示
				messageText: '',
				//自定义时间
				date: '',
				//左边自定义显示时间
				leftDate: '',
				//左边自定义标准时间
				leftFormatDate: '',
				//右边自定义显示时间
				rightDate: '',
				//右边自定义标准时间
				rightFormatDate: '',
			}
		},
		onLoad() {
			this.getPickerView()
			this.getDate()
		},
		methods: {
			//点击上下箭头
			changeRecord(i){
				this.recordList[i].record=!this.recordList[i].record
			},
			//打开popup
			toggle(type) {
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.$refs.popup.open(type)
			},
			//关闭popup
			closeDialog() {
				this.index=-1
				this.$refs.popup.close()
			},
			//改变类名
			changeActive(num) {
				this.current = num
			},
			//picker-view所需的时间
			getPickerView() {
				const date = new Date()
				for (let i = this.year; i <= date.getFullYear(); i++) {
					this.years.push(i)
				}
				for (let i = 1; i <= 12; i++) {
					this.months.push(i)
				}
			},
			//点击picker-view获取的时间
			bindChange(e) {
				const val = e.detail.value
				this.year = this.years[val[0]]
				this.month = this.months[val[1]]
				console.log(this.year,this.month )
			},
			//点击提交
			submit() {
				if (this.current === 0) {
					console.log(this.year,this.month)
					this.recordTime = `${this.year}年${this.month}月`
				} else {
					if(this.index>-1){
						this.index==0?this.recordTime ='上月':this.index==1?this.recordTime ='近三月':this.recordTime ='近一年'
					}
					if(this.index==-2){
						this.recordTime=`${this.leftDate}至${this.rightDate}`
					}
					this.messageText=`查询${this.leftDate}至${this.rightDate}的记录`
					this.$refs.message.open()
				}
				this.index=-1
				this.$refs.popup.close()
			},
			//改变index和时间
			changeIndex(num) {
				this.index = num
				if (num === 0) {
					this.messageText = JSON.stringify(getOneMonth())
				} else if (num === 1) {
					this.messageText = JSON.stringify(getThreeMounth())
				} else {
					this.messageText = JSON.stringify(getOneYear())
				}
				this.$refs.message.open()
			},
			//点击左边自定义时间
			leftDateChange(e) {
				this.leftFormatDate = e.detail.value
				let arr = this.leftFormatDate.split('-')
				this.leftDate = `${arr[0]}年${arr[1]}月${arr[2]}日`
				this.index=-2

			},
			//点击右边自定义时间
			rightDateChange(e) {
				this.rightFormatDate = e.detail.value
				let arr = this.rightFormatDate.split('-')
				this.rightDate = `${arr[0]}年${arr[1]}月${arr[2]}日`
				this.index=-2
			},
			//获取年月日
			getDate() {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				this.leftDate = `${year}年${month}月${day}日`
				this.rightDate = `${year}年${month}月${day}日`
				this.date = `${year}-${month}-${day}`;
			}
		}
	}
</script>

<style>
	.content {
		width: 750rpx;
		background: #FAFBFD;
		font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
		font-weight: normal;
		padding-bottom: 40rpx;
	}
	.nav{
		width: 100%;
		height:76rpx;
		display: flex;
		justify-content: left;
		align-items: center;
		margin-top: 46rpx;
		background: #FFFFFF;
		font-size: 36rpx;
		color: #333333;
		box-shadow: 0rpx 2rpx 2rpx 0rpx rgba(0,0,0,0.11);
	}
	.bgc {
		width: 686rpx;
		height: 240rpx;
		position: relative;
		margin: 32rpx;
		color: #FFFFFF;
		;
	}

	.bgc image {
		width: 100%;
		height: 100%;
	}

	.bgc .rule {
		width: 606rpx;
		height: 44rpx;
		position: absolute;
		top: 40rpx;
		left: 40rpx;
		display: flex;
		justify-content: space-between;
		line-height: 44rpx;
		font-size: 32rpx;
	}

	.bgc .integral {
		position: absolute;
		left: 40rpx;
		bottom: 36rpx;
		font-size: 76rpx;
	}

	.record {
		height: 44rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.record .line {
		width: 48rpx;
		height: 0rpx;
		border: 1rpx solid #BCBCBC;
	}

	.record :nth-child(2) {
		font-size: 32rpx;
		color: #999999;
		line-height: 44rpx;
		margin: 0 16rpx;
	}

	.main {
		margin-top: 36rpx;
	}

	.time {
		margin-left: 66rpx;
		height: 44rpx;
		font-size: 32rpx;
		color: #333333;
		line-height: 44rpx;
		font-weight: 600;
	}

	.time image {
		width: 30rpx;
		height: 18rpx;
		margin-left: 8rpx;
	}

	.box {
		width: 686rpx;
		margin: 20rpx 34rpx;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
	}

	.box-top {
		height: 134rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.left {
		margin-left: 24rpx;
		display: flex;
		justify-content: left;
		align-items: center;
	}
	.right {
		margin-right: 24rpx;
	}
	.left text:nth-child(1) {
		font-size: 48rpx;
		color: black;
	}

	.left text:nth-child(2) {
		font-size: 24rpx;
		font-weight: 600;
		color: #333333;
		margin-top: 14rpx;
	}
	.center{
		border-left: 2rpx solid #E4E4E4;
		padding-left: 28rpx;
		margin-right: 90rpx;
	}
	.center .top {
		height: 50rpx;
		font-size: 36rpx;
		font-weight: 600;
		line-height: 50rpx;
	}
	.center .top1{
		color: #ED1F23;
	}
	.center .top2{
		color: #3A9E44;
	}
	.center .bottom,
	.right text {
		height: 34rpx;
		font-size: 24rpx;
		color: #888888;
		line-height: 34rpx;
	}

	.box .line {
		width: 100%;
		height: 0rpx;
		border: 1rpx solid #E2E2E2;
	}

	.details {
		width: 100%;
		margin-top: 20rpx;
		padding-bottom: 32rpx;
	}

	.details .list-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 12rpx;
	}

	.details .list-item .left {
		margin-left: 12rpx;
		height: 34rpx;
		font-size: 24rpx;
	}

	.details .list-item .left image {
		width: 24rpx;
		height: 24rpx;
		margin-top: 14rpx;
	}

	.details .list-item .left text {
		color: #888888;
		line-height: 34rpx;
	}

	.details .list-item .right {
		height: 34rpx;
		font-size: 24rpx;
		color: #333333;
		line-height: 34rpx;
	}

	.popup .popup-content {
		position: relative;
		width: 750rpx;
		height: 682rpx;
		border-radius: 16rpx 16rpx 0 0;
		background-color: #FFFFFF;
	}

	.popup .popup-content .top {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.popup .popup-content .top .tab {
		height: 138rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-left: 66rpx;
		line-height: 138rpx;
	}

	.popup .popup-content .top .tab view {
		height: 138rpx;
		width: 138rpx;
		color: #333333;
		font-size: 32rpx;
		margin-right: 94rpx;
		text-align: center;
	}

	.popup .popup-content .top .tab .active {
		font-weight: 600;
		border-bottom: 6px solid #333333;
		line-height: 152rpx;
	}

	.popup .popup-content .top .icon {
		margin-right: 50rpx;
	}


	.popup .popup-content .picker-view {
		width: 750rpx;
		height: 300rpx;
		margin-top: 20rpx;
	}

	.popup .popup-content .picker-view .item {
		line-height: 100rpx;
		text-align: center;
	}

	.popup .popup-content .time {
		width: 100%;
	}

	.popup .popup-content .time .text {
		height: 44rpx;
		font-size: 32rpx;
		color: #AAAAAA;
		line-height: 44rpx;
		margin-top: 42rpx;
	}

	.popup .popup-content .time .btns {
		display: flex;
	}

	.popup .popup-content .time .btns button {
		width: 160rpx;
		height: 64rpx;
		border-radius: 8rpx 8rpx 8rpx 8rpx;
		line-height: 64rpx;
		text-align: center;
		margin-left: -15rpx;
		border: 2rpx solid #999999;
		font-size: 32rpx;
		color: #333333;
	}
	.popup .popup-content .time .btns button:nth-child(1){
		margin-left: 0;
	}
	.popup .popup-content .time .btns .active {
		border: 2rpx solid #2EDF85;
		color: #2EDF85;
	}

	.popup .popup-content .time .pick {
		display: flex;
		justify-content: left;
		align-items: center;
	}

	.popup .popup-content .time .pick .line {
		height: 64rpx;
		line-height: 64rpx;
		text-align: center;
		margin: 24rpx;
	}

	.popup .popup-content .time .pick .uni-input {
		width: 260rpx;
		height: 64rpx;
		background: #F1F1F1;
		border-radius: 8rpx 8rpx 8rpx 8rpx;
		margin-top: 24rpx;
		font-size: 28rpx;
		color: #888888;
		line-height: 64rpx;
		text-align: center;
	}

	.popup .popup-content .btn {
		position: absolute;
		left: 32rpx;
		bottom: 98rpx;
		width: 686rpx;
		height: 84rpx;
		background: #2EDF85;
		border-radius: 74rpx 74rpx 74rpx 74rpx;
		font-size: 32rpx;
		color: #FFFFFF;
		line-height: 84rpx;
	}
</style>