import React from "react";
import GetData from "./GetData";
import Spinner from "./Spinner";
import HighChart from "./HighChart";
import Piechart from './Piechart';

class App extends React.Component {
  state = {
    Issue: [],
    X: [],
    Y: [],
    isload: true,
    isclicked: false,
    err: false,
    Bars: false,
    Pie: false,
    Piedata : []
  };
  //  get data from children backward
  onSearchSubmit = async (name, pass) => {
    this.setState({Bars : false  , Pie : false})
    if (
      (name.toUpperCase() === "JOHN" && pass === "12345") ||
      (name.toUpperCase() === "MICKY" && pass === "98765")
    ) {
      this.setState({ isclicked: true, isload: true });
      fetch("https://api.github.com/repositories/19438/issues")
        .then((res) => res.json())
        .then((res) => {
          if (name.toUpperCase() === 'JOHN') {
            let xdata = [];
            let ydata = [];
            let issue = [];
            console.log(typeof res);
            res.map((e) => {
              xdata.push(e["created_at"]);
              ydata.push(e["comments"]);
              issue.push(e["number"]);
            });
            this.setState({
              X: xdata,
              Y: ydata,
              Issue: issue,
              isload: false,
              isclicked: false,
              err: false,
              Bars: true,
            }

            );
          }

          else {
            let Piedata = [];
            res.map((e, id) => {
              Piedata.push({
                name: `User ${id}`,
                y: e['number']
              });

            });

            this.setState({
              Piedata : Piedata,
              isload: false,
              isclicked: false,
              err: false,
              Pie : true,
            }

            );
          }


        });
    } else {
      this.setState({ err: true });
    }
  };

  render() {
    if (this.state.isclicked && this.state.isload) {
      return <Spinner style={{ backgroundColor: "#302F4D" }} />;
    } else
      return (
        <div
          className="ui container"
          style={{
            marginTop: "50px",
            border: "none",
            textAlign: "center",
            width: "500px",
          }}
        >
          <h1>Dashboard</h1>
          {/* function call to get data from children */}
          <h1>
            <GetData onAppsubmit={this.onSearchSubmit} />
          </h1>
          {this.state.err && <p>error</p>}
          {this.state.Bars && (
            <HighChart
              xdata={this.state.X}
              ydata={this.state.Y}
              issue={this.state.Issue}
            />
          )}

          {this.state.Pie && <Piechart data = {this.state.Piedata} />}
        </div>
      );
  }
}

export default App;
