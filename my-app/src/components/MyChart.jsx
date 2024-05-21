import HighchartsReact from "highcharts-react-official";
import Highcharts from 'highcharts'

const options = {
    title: {
        text: 'Chart'
    },
    series: [{
        data: [1, 2, 3]
    }]
}

const MyChart = () => <div>
    <HighchartsReact
        highcharts={Highcharts}
        constructorType={'chart'}
        options={options}
    />
</div>



// const MyChart = () => <HighchartsReact
//     highcharts={Highcharts}
//     constructorType={'mapChart'}
//     options={options}
// />

export default MyChart;