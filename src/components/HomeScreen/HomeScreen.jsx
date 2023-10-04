import '../../styles.css';
import Clock from './Clock';
const HomeScreen = () => {
	return (
			<div className="container px-4 py-5 h-100">
				<div className="row d-flex flex-row justify-content-center align-items-center h-100">
						<div className="card m-0 col-4" style={{backgroundColor: '#F5FBFF', borderRadius: '35px' }}>
							<div className="card-body p-4">
								<div className="d-flex">
									<h6 className="flex-grow-1">Weather</h6>
								</div>

								<div className="d-flex flex-column text-center mt-3">
		  						<h2 className="city mb-4">Cincinnati, OH</h2>
									<div>
										<img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
											width="100px" />
									</div>
									<h6 className="display-4 mb-0 font-weight-bold mt-3"> 22°F </h6>
									<span className="small">Stormy</span>
								</div>


								<div className="d-flex align-items-left mt-3">
									<div className="flex-grow-1">
										<div> <img src="images/wind_one.png" alt="Wind Speed Icon" style={{ width: '20px' }} /> 15km/h Wind Speed</div>
										<div> <img src="images/humidity_one.png" alt="Humidity Icon" style={{ width: '20px' }} /> 50% Humidity</div>
									</div>
								</div>

							</div>
						</div>

						<div className="card col-4" style={{backgroundColor: '#F5FBFF', borderRadius: '35px', marginLeft: '15px' }}>
							<div className="card-body p-4">
								<div className="d-flex">
									<h6 className="flex-grow-1">Date & Time</h6>
								</div>

								<div className="d-flex flex-column text-center mt-3">
		  						<h2 className="mb-4 light">{ new Date().toDateString() }</h2>
									<div>
										<img src="../images/clock.png"
											width="50%" />
									</div>
								</div>


								<div className="d-flex align-items-left mt-3">
									<div className="flex-grow-1">
										<Clock />
									</div>
								</div>

							</div>
						</div>

						<div className="card col-3" style={{backgroundColor: '#F5FBFF', borderRadius: '35px', marginLeft: '15px' }}>
							<div className="card-body p-4">
								<div className="d-flex">
									<h6 className="flex-grow-1">Upcoming Events</h6>
								</div>

								<div className="d-flex flex-column text-center mt-3">
									<h2 className="mb-4 light">{ new Date().toDateString() }</h2>
									<div>
										<img src="../images/clock.png"
											width="50%" />
									</div>
								</div>


								<div className="d-flex align-items-left mt-3">
									<div className="flex-grow-1">
										<Clock />
									</div>
								</div>

							</div>
						</div>

					
				</div>
			</div>
	);
};

export default HomeScreen;