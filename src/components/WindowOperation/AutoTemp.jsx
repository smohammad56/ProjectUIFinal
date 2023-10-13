import CircularSlider from '@fseehawer/react-circular-slider';
import React, { useState, useEffect } from 'react';

function AutoTemp(props){
    console.log(props)
    const[tempVal, setTempVal]=useState(0) 

    useEffect(() => {
        if (props.seasonVal == 'Fall') {
            setTempVal(props.fallTemp)
        } else if (props.seasonVal == 'Winter')
        {
            setTempVal(props.winterTemp)
        }
        else if (props.seasonVal == 'Spring')
        {
            setTempVal(props.springTemp)
        }
        else if (props.seasonVal == 'Summer') {
            setTempVal(props.summerTemp)
        }
    }, [props]);


return (
<div className="mt-3">
    <CircularSlider
        label="."
        max={100}
        dataIndex={tempVal}
        min={0}
        appendToValue="°"
        valueFontSize="70px"
        labelColor="beige"
        verticalOffset="60px"
        onChange={(tempValue) => {
            console.log(tempValue);
        }}
        />
    </div>
    );
}
export default AutoTemp;
