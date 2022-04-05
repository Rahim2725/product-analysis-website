import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const data = [
    {
        "month": "Mar",
        "investment": 10000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 20000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 50000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 50000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 60000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 70000,
        "sell": 670,
        "revenue": 65000
    }
]

const Dashboard = () => {
    return (
        <div className='reachart-contaner'>
            <LineChart width={500} height={300} data={data}>
                <CartesianGrid strokeDasharray="4 4" />
                <XAxis dataKey="month"></XAxis>
                <Line type="monotone" dataKey="sell"></Line>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend> </Legend>
            </LineChart>

            <AreaChart width={500} height={300} data={data}>
                <XAxis dataKey="month"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <CartesianGrid strokeDasharray="4 4"></CartesianGrid>
                <Area type="monotone" dataKey="investment" stroke="#8884d8" fill='#8884d8' ></Area>
                <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fill="#82ca9d"></Area>
            </AreaChart>
        </div>
    );
};

export default Dashboard;