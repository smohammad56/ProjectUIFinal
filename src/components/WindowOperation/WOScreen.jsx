import Arrows from "./Arrows";
import React from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';
import SeasonSets from "./SeasonSets";
import PreSetModal from "./PreSetModal";
import './SeasonSets.css'



function WOScreen(props) {
    return (
		<div className="container px-4 pb-5 h-100">
				<div className="display-5 pb-5 row d-flex flex-row justify-content-center align-items-center"> 
					<div className="col col-12" style={{ paddingLeft: '100px', fontWeight: 'bolder'}}> {props.content}</div>
				</div>
                <div className="row d-flex flex-row justify-content-center align-items-center h-100">
                        <div className="card col-3" style={{backgroundColor: props.mode === "On" ? '#F5FBFF' : '#d0d0d0', borderRadius: '35px', marginLeft: '15px' }}>
                            <div className="card-body p-4">
                                <div className="d-flex">
                                    <h6 className="flex-grow-1">Window Operation</h6>
                                </div>
                                <div className="d-flex flex-column text-center mt-1">
                                  <h2 className="mb-4 light"> <Arrows/></h2>
                                </div>
                            </div>
                        </div>
                
                        <div className="card col-3" style={{backgroundColor: props.mode === "On" ? '#F5FBFF' : '#d0d0d0', borderRadius: '35px', marginLeft: '15px' }}>
                            <div className="card-body p-4">
                                <div className="d-flex">
                                    <h6 className="flex-grow-1 pb-3">Set Auto-Open Temperature</h6>
                                </div>


                                <div className="d-flex flex-column justify-content-center align-items-center pb-3">
                                    <div className="d-flex justify-content-center mb-1">
                                        <button className="btn btn-primary mx-2">On</button>
                                        <button className="btn btn-primary mx-2">Off</button>
                                    </div>
                                    <div className="mt-3">
                                        <CircularSlider
                                        label="."
                                        max={100}
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
                                    </div>
                            </div>
                            
                        </div>
                        <div className="card col-3" style={{ backgroundColor: props.mode === "On" ? '#F5FBFF' : '#d0d0d0', borderRadius: '35px', marginLeft: '15px' }}>
                            <div className="card-body p-3">
                                <div className="d-flex">
                                <h6 className="flex-grow-1 pb-3">Seasonal Pre-Sets</h6>
                                </div>
                                <PreSetModal/>
                                {<SeasonSets/>}
                            </div>
                            </div>

                </div>
            </div>
                            
							
    );
};

export default WOScreen;