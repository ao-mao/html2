import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react'  //全部引用
import 'echarts/extension/bmap/bmap';
import { useDispatch,useSelector } from 'react-redux'
import { selectDeviceActionCreator} from '../../redux/serviceList/serviceListActions'



export default class Map extends Component {
  state = {option: {} };
  
  
  //获取定位
  initFormList = () => {
    var data = []
    const deviceList = this.props.deviceList;
    for (var i = 0; i < deviceList.length; i++) {
      var device = deviceList[i]
      var id = device.device_id
      var name = device.device_name
      var location = device.location
      var locationXY = [device.locationXY.split(",")][0]
      var mapData = [Number(locationXY[1]), Number(locationXY[0])]
      console.log(mapData);
      var locationData = {}
      locationData['id'] = id
      locationData['name'] = name
      locationData['value'] = mapData
      locationData['location'] = location
      data.push(locationData)
    }
    return data
  }

  onclick = {
    'click': this.onChartClick.bind(this)
  }
  // 地图点击事件
  onChartClick(param) {
    var id = param.data.id
    console.log(useDispatch());
  }



  componentDidMount() {
    
    const data = this.initFormList()
    console.log(data);
    let option = {
      tooltip: {
        trigger: 'item',
      },
      bmap: {
        center: [113.27324, 23.15792],
        zoom: 8,
        roam: true,
        mapStyle: {
          style: 'midnight'
        }
      },
      series: [
        {
          name: 'pm2.5',//标签名字
          type: 'scatter',//散点图
          coordinateSystem: 'bmap',
          data: data,
          symbol: 'pin',//热气球
          symbolSize: 30,
          color: 'red',//热气球颜色
          encode: {
            value: 5
          },
          label: {
            formatter: '{b}',
            position: 'right',
            show: false
          },
          emphasis: {
            label: {
              show: true
            }
          }
        }
      ]
    };
    this.setState({ option })

  }
  
  render() {

    return (
       <div >
        <ReactEcharts style={{ height: '75vh'}} option={this.state.option} onEvents={this.onclick} > </ReactEcharts>
      </div>
    );
  }
}
