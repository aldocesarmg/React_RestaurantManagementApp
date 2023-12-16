import chartValues from '../objects/chart.js';
import { dashboardIcons } from "../objects/icons";
import ImgCard from "./ImgCard.js";

// recharts
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
    const dashboardItemsIterator = dashboardIcons.map(dashboardItem => {
        return <li><ImgCard name={dashboardItem.name} imgSrc={dashboardItem.icon} title={dashboardItem.title} description={dashboardItem.description} /></li>;
    })

    return(
        <div className='dashboard-container'>
            <div className='dashboard-top-cards-container card-space'>
                <ul className='dashboard-top-cards'>
                    {dashboardItemsIterator}
                </ul>
            </div>
            <div className='recharts-container card'>
                <div className='recharts-title'>
                    <h4>Monthly Progress Report</h4>
                    <h5>This Year 2021</h5>
                </div>
                <hr className='recharts-divisor'></hr>
                <div className='recharts-chart'>
                    <AreaChart
                        width={1300}
                        height={450}
                        data={chartValues}
                        margin={{
                            top: 20,
                            right: 10,
                            left: 10,
                            bottom: 20,
                        }}
                    >
                        <defs>
                            <linearGradient id="colorSaleAmount" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#854efb" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#854efb" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid />
                        <XAxis dataKey="name" />
                        <YAxis tickCount={7} />
                        <Tooltip />
                        <Area type="basis" dataKey="saleAmount" stroke="#8884d8"  fillOpacity={1} fill="url(#colorSaleAmount)" />
                    </AreaChart>
                </div>
            </div>
        </div>
    );
}