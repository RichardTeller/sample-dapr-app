import React from 'react';
import './ApiDemo.css';
//import { DaprClient, DaprServer, HttpMethod, CommunicationProtocolEnum } from "@dapr/dapr";

class ApiDemo extends React.Component {
    
    private readonly daprHost = "api-weather-forecast";
    private readonly daprHttpPort = "5600";

    //public readonly daprClient: DaprClient

    state: {
        apiResponse: string
    };

    constructor(props: any) {
        super(props);

        //this.daprClient = new DaprClient(this.daprHost, this.daprHttpPort);

        this.state = {
            apiResponse: ""
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        console.log(this.state.apiResponse);
        this.setState({ apiResponse: this.state.apiResponse + " a"});
        //const response = await this.daprClient.invoker.invoke("api-weather-forecast", "WeatherForecast", HttpMethod.GET);
        //console.log(response);
    }

    render() {
        return (
            <div className="ApiDemo">
                <button className="MyButton" onClick={this.handleClick}>Invoke API</button>
                <textarea value={this.state.apiResponse}></textarea>
            </div>
        );
    }
}

export default ApiDemo;