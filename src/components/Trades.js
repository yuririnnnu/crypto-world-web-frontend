import React, { useState, useEffect } from 'react'
import TradeHistory from './TradeHistory'
import axios from 'axios'

const Trades = () => {
    const [ histories, setHistory ] = useState([])
    
    useEffect(() => {
        const user_id = localStorage.getItem('id')
        const sid = localStorage.getItem('sid')
        axios.post(`http://localhost:9000/api/trade/history`, {user_id: user_id}, {
            headers:{
                sid: sid,
            }
        })
        .then(res => {
            res.data.map(h => {
                let time = new Date(h['execution_time'])                
                h['execution_time'] = time.toLocaleString()                
                return h
            })
            setHistory(res.data)
        })
        .catch(e => console.log(e))
    }, [])

    return (
        <div className='orders-header'>
            <h1>Your Trades</h1>
            <h3>Filter out your trade by inputting values below each columns.</h3>
            <TradeHistory histories={histories} />
        </div>
    )
}
export default Trades