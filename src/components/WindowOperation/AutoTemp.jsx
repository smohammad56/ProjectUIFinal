import CircularSlider from '@fseehawer/react-circular-slider';
import React from 'react';

function AutoTemp(props){
    console.log(props)
return (
<div className="mt-3">
    <CircularSlider
        label="."
        max={100}
        dataIndex={props.passAuto.temp}
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
