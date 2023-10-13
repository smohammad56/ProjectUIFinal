import '../../styles.css';
import Clock from './Clock';
import Status from './Status';
import Weather from './Weather';
import AnalogClock from 'analog-clock-react'; 

const HomeScreen = (props) => {

    let options = {
        width: "225px",
        borderColor: "#2e2e2e",
        baseColor: "#3498DB",
        centerColor: "#459cff",
        centerBorderColor: "#ffffff",
        handColors: {
          second: "#d81c7a",
          minute: "#ffffff",
          hour: "#ffffff"
        }
      };

    return (

            <div className="container px-4 pb-5 h-100">
				<div className="display-5 pb-5 row d-flex flex-row justify-content-center align-items-center"> 
					<div className="col col-12" style={{ paddingLeft: '100px', fontWeight: 'bolder'}}> {props.content}</div>
				</div>
                <div className="row d-flex flex-row justify-content-center align-items-center h-100">
                        <Weather mode={props.mode} weather={props.weather} />
                        
                        <div className="card col-4" style={{backgroundColor: props.mode === "On" ? '#F5FBFF' : '#d0d0d0', borderRadius: '35px', marginLeft: '15px' }}>
                            <div className="card-body p-4">
                                <div className="d-flex">
                                    <h6 className="flex-grow-1">Date & Time</h6>
                                </div>

                                <div className="d-flex flex-column text-center mt-3 justify-content-center align-items-center">
                                  <h2 className="mb-4 light">{ new Date().toDateString() }</h2>
                                    <div>
                                    <AnalogClock {...options}
                                            />;
                                    </div>
                                </div>

                                <div className="d-flex align-items-left mt-3">
                                    <div className="flex-grow-1">
                                        <Clock />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="card col-3" style={{backgroundColor: props.mode === "On" ? '#F5FBFF' : '#d0d0d0', borderRadius: '35px', marginLeft: '15px' }}>
                            <div className="card-body p-4">
                                <div className="d-flex">
                                    <h6 className="flex-grow-1">Window Status</h6>
                                </div>


                                <div className="d-flex align-items-left mt-3">
                                    <div className="flex-grow-1">
                                        <Status content={props.content} setContent={props.setContent} setShowModal={props.setShowModal} showModal={props.showModal} dt={props.dt} mode={props.mode} setMode={props.setMode} weather={props.weather} />
                                    </div>
                                </div>

                            </div>
                        </div>

                    
                </div>
            </div>
    );
};

export default HomeScreen;