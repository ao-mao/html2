import React, { useEffect,useState } from "react";
import ReactEcharts from "echarts-for-react"; //全部引用
import "echarts/extension/bmap/bmap";
import './map.css'
import { useDispatch } from 'react-redux'
import { selectDeviceActionCreator } from '../../redux/serviceList/serviceListActions'
import img from './dinwei.svg'


const MapItem = (props) => {
  const dispatch = useDispatch()
  // const data = []
  var mapDataX = 0
  var mapDataY = 0
  const [data,setData] = useState([])
  const [x,setX] = useState(0)
  const [y,setY] = useState(0)
  console.log(9.13)

  const { deviceList } = props;
  var listLength = deviceList.length


  //设备坐标数据
  useEffect(()=>{
    initFormList(props)
  },[x,y])
  const initFormList = (props) => {
    let dataTemp = []
    for (var i = 0; i < listLength; i++) {
      const device = deviceList[i]
      const id = device.device_id
      const name = device.device_name
      const location = device.location
      const locationXY = [device.locationXY.split(",")][0]
      mapDataX = Number(locationXY[1]) + mapDataX
      mapDataY = Number(locationXY[0]) + mapDataY
      const mapData = [Number(locationXY[1]), Number(locationXY[0])]
      // console.log(mapData);
      const locationData = {}
      locationData['name'] = name
      locationData['id'] = id
      locationData['value'] = mapData
      locationData['location'] = location
      dataTemp.push(locationData)
    }
    setData(dataTemp)
    let x = (mapDataX / listLength)
    let y = (mapDataY / listLength)
    // setCenter([x,y])
    setX(x)
    setY(y)
    // console.log(x, y)
  }
  

  //更新设备
  onclick = {
    'click': (e) => {
      const id = e.data.id
      dispatch(selectDeviceActionCreator(id));
    }
  }

  const option = {
      tooltip: {
        trigger: "item",
        formatter: function (params) { //提示框
          return '设备名称：<a>' + params.name + '</a><br/>'
            + '经度：' + params.value[0] + '<br/>'
            + '纬度：' + params.value[1] + '<br/>'
  
        },
      },
      bmap: {
        center: [x,y],//中心点
        viewport: data.values,
        zoom: 10,
        roam: true,
        mapStyle: {
          style: "midnight",
        },
      },
      series: [
        {
          name: "设备", //标签名字
          type: "scatter", //散点图
          coordinateSystem: "bmap",
          data: data,
          symbol: 'image://' + img,
          symbolSize: 50,
          // color: "#33FFCC",
          label: { //标签样式设置
            normal: {
              show: true,
              formatter: function (params) { //标签内容
                return params.name
              },
  
            },
          },
        },
      ],
    };
  

 
  // setOption(options)

  return (
    <div>
       <ReactEcharts style={{ height: "76vh" }} option={option} onEvents={onclick}></ReactEcharts>
    </div>
  );


};

export default MapItem;
