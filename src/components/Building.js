import { func } from 'prop-types'
import React from 'react'
import { useSelector } from 'react-redux'

const Building = () => {
    const UnitData = useSelector(state => state.UnitData)
    
    // console.log("checking data 123 1 " + UnitData )
    return(
        <div className='building_info'>
            <h2>Total Data fetched {UnitData.length}</h2>

            <div className="card">        
                {UnitData.map(data => (
                    <div className="card-body" key={data.uniqueID}>
                        <h1>{data.uniqueID}</h1>
                    </div>
                ))
                }
            </div>
        </div>
    )
}


export default Building
