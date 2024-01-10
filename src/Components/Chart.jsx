import React, { useEffect } from 'react'
import './chart.css'
import {BarChart} from '@mui/x-charts';
import CircularProgress from '@mui/material/CircularProgress';

function Chart() {
return (
    <div className="chartMain">


<div className='chart1'>
    <p className='retirementIncome'>Retirement Income</p>
    <p className='startingYear'>Starting Year 2056 </p>
</div>
<div className='chart2'>
    <div className='chart2Left'>
        <p className='lightUp'>$300,000</p>
        <p className='lightSmall'>My Goal</p>
        <hr  className='lineStyle'/>
    </div>
    <div className='chart2MR'>
    <div className='chart2Middle'>
        <p className='lightUp'>59%</p>
        <p className='lightSmall'>Goal Achived</p>
        <hr  className='lineStyle'/>
    </div>
    <div className='chart2Right'>
        <p className='lightUp'>$300</p>
        <p className='lightSmall'>Est.Monthly Income</p>
        <hr className='lineStyle'/>
    </div>

    </div>
    
</div>
<div className='chart3'>
    <div className="contribute">
    <p>Contributions Overtime</p>
    </div>
    
</div>
<div className='chart4'>
<BarChart
      series={[
        { data: [2, 4, 1, 6, 5], stack: 'A', label: 'Employer: K 73,500' },
        { data: [4, 3, 1, 5, 8], stack: 'B', label: 'Employee : K 52,500' },
        { data: [4, 2, 5, 4, 1], stack: 'C', label: 'Total Interest : K 224,313' },
    
       
      ]}
      width={600}
      height={350}
    />
</div>
<div className='chart5'>
    <p className='howDo'>How do i compare to my peers?</p>
    <p className='theseNumbers'>These numbers represent current achivements</p>
</div>
<div className='chart6'>
    <div className="chart6left">
        <p>Age:<select name="age" className='dropDownStyleNone' id="">
            <option value="">Under 30</option>
            <option value="">Under 50</option>
            </select></p>
        <hr className='lineFull'/>
        <p>Salary:<select name="salary" className='dropDownStyleNone' id="">
            <option value="">K 20 - K 30</option>
            <option value="">K 40 - K 60</option>
            </select></p>
        <hr className='lineFull' />
        <p>Gender:<select className='dropDownStyleNone' name="gender" id="">
            <option value="">Male</option>
            <option value="">Female</option>
            </select></p>
            <hr className='lineFull' />
    </div>
    <div className="chart6Right">
        <div className="chart6RightTop">
        <div className="average">
        <CircularProgress className='circularProgress' size={70} variant="determinate" value={78} />
        <p className='val78'>78%</p>
        </div>
        <div className="top">
        <CircularProgress className='circularProgress' size={70} variant="determinate"  value={95} />
        <p className='val95'>95%</p>
        
        

        </div>
        <div className="me">
        <CircularProgress className='circularProgress' size={70} variant="determinate" value={59} />
        <p className='val59'>59%</p>
        
        </div>
        </div>
        <div className="chart6RightBottom">
        <p className='avgP pLineHeightNone'>Average</p>
        <p className='topP pLineHeightNone'>Top</p>
        <p className='meP pLineHeightNone'>Me</p>
        </div>

    </div>
    
</div>







    </div>
    
  )
}

export default Chart