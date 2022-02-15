import React from 'react'
import Chart from 'react-google-charts'

const pieData = [
    ['Programming', 'level'],
    ['JavaScript', 100],
    ['C++', 30],
    ['Java', 20],
    ['MySQL', 10],
    ['HTML', 100],
    ['CSS', 100]
]
const pieOptions = {
    title: 'Web Development Experience',
    pieHole: 0.4,
    bars: 'horizontal'
}
function PieChart() {
        return (
            <div>
                <h2 className={'display-4'}>Experience</h2>
                <Chart
                    width={'100%'}
                    height={'50vh'}
                    chartType="Bar"
                    loader={<div>Loading...</div>}
                    data={pieData}
                    options={pieOptions}
                    rootProps={{ 'data-testid': '3' }}
                />
            </div>
        )
}
export default PieChart