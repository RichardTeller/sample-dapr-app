import React from 'react';
//import { DaprClient, DaprServer, HttpMethod, CommunicationProtocolEnum } from "@dapr/dapr";

class ApiDemo extends React.Component {
    
    private readonly daprHost = "api-weather-forecast";
    private readonly daprHttpPort = "5600";

    //public readonly daprClient: DaprClient

    private apiResponse: string;

    constructor(props: any) {
        super(props);

        //this.daprClient = new DaprClient(this.daprHost, this.daprHttpPort);
        this.apiResponse = "";
    }

    async handleClick(): Promise<void> {

        //const response = await this.daprClient.invoker.invoke("api-weather-forecast", "WeatherForecast", HttpMethod.GET);
        //console.log(response);
    }

    render() {
        return (
            <div>
                <button>Invoke API</button>
                <textarea readOnly>{this.apiResponse}</textarea>
            </div>
        );
    }
}

export default ApiDemo;