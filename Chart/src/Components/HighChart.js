import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import React from "react";
let charts = {
  type: "column",
};

let title = {
  text: "John",
};

const HighChart = (props) => (
  <div>
    <HighchartsReact
      highcharts={Highcharts}
      options={{
        title: title,
        chart: charts,
        xAxis: {
          type: "datetime",
          categories: props.xdata,
          labels: {
            format: "{value:%Y-%b-%e %H:%M}",
          },
          title: { text: "Time1" },
        },

        yAxis: [
          {
            title: { text: "No of Issues" },
          },
          {
            //--- Secondary yAxis
            title: {
              text: "No of Comments",
            },
            opposite: true,
          },
        ],
        series: [
          {
            yAxis: 0,
            name: "issues",
            data: props.issue,
          },
          {
            yAxis: 1,
            name: "comments",
            data: props.ydata,
          },
        ],
      }}
    />
  </div>
);

export default HighChart;
