import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import React from "react";
let charts = {
  type: "pie",
};

let title = {
  text: "Micky",
};

const Piechart = (props) => (
  <div>
    <HighchartsReact
      highcharts={Highcharts}
      options={{
        title: title,
        chart: charts,
        series: [{
            name: 'Users',
            colorByPoint: true,
            data: props.data
        }]
      }}
    />
  </div>
);

export default Piechart;
