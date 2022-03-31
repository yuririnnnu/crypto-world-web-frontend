import React from 'react'
import { PropTypes } from 'prop-types'
import ReactFlexyTable from "react-flexy-table"
import "react-flexy-table/dist/index.css"

const TradeHistory = props => {
    const { histories } = props
    
    return (
        <div className='history-table'>
            <ReactFlexyTable data={histories} filterable/>    
        </div>
    )
}

export default TradeHistory

TradeHistory.propTypes = {
    histories: PropTypes.array,
}