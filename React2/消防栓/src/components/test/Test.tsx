import React from "react";
import ReactEcharts from "echarts-for-react";
import styles from './Test.module.scss'
export class Test extends React.Component {
  // constructor(props) {
  //     super(props)
  // }
  state = {
    option: {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
        },
      ],
    },
  };
  render() {
    const { option } = this.state;
    const a:number = 2
    return (
      <div>
        <div className={styles.fuck}>66</div>
        <ReactEcharts
          option={option}
          style={{ width: 400, height: 300 }}
          ></ReactEcharts>
      </div>
    );
  }
}

// export default Test;
