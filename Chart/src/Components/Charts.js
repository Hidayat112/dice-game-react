import React from 'react';
import { Bar, Line, Pie } from "react-chartjs-2";

class Charts extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            chartData: {
                labels: this.props.xdata,
                datasets: [
                    {
                        label: 'Population',
                        data: this.props.ydata,
                        backgroundColor :  'rgba(100,200,300)'




                    }
                ]
            }
        };
    }



    render() {
        return (

            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    options={{

                        title: {
                            display: true,
                            text: 'Largest poplulation',
                            fontsize: 25

                        },

                        legend: {
                            display: true,
                            position: 'right'
                        }

                    }}
                />
            </div>

        );
    }

}

export default Charts;