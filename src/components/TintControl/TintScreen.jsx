import TintButtons from "./TintButtons";
import RangeSlider from "./RangeSlider";

function TintScreen(props) {
	console.log(props)
    return (
		<div className="container px-4 pb-5 h-100">
			<div className="display-5 pb-5 row d-flex flex-row justify-content-center align-items-center"> 
				<div className="col col-12" style={{ paddingLeft: '100px', fontWeight: 'bolder'}}> {props.content}</div>
			</div>
			<div className="row d-flex flex-row justify-content-center align-items-center h-100">
					
					<div className="card col-5" style={{backgroundColor: props.mode === "On" ? '#F5FBFF' : '#d0d0d0', borderRadius: '35px', marginLeft: '15px' }}>
						<div className="card-body p-4">
							<div className="d-flex">
								<h6 className="flex-grow-1">Tint Application Type</h6>
							</div>

							<div className="d-flex flex-column text-center mt-3">
							  <h2 className="mb-2 light"></h2>
								<div>
								<TintButtons mode={props.mode} setMode={props.setMode} seasonVal={props.seasonVal} falltintOperation={props.fall.tintOp} wintertintOperation={props.winter.tintOp} springtintOperation={props.spring.tintOp} summertintOperation={props.summer.tintOp}/>
								</div>
							</div>

						</div>
					</div>

					<div className="card col-4" style={{backgroundColor: props.mode === "On" ? '#F5FBFF' : '#d0d0d0', borderRadius: '35px', marginLeft: '15px' }}>
						<div className="card-body p-4">
							<div className="d-flex">
								<h6 className="flex-grow-1">Tint Level</h6>
							</div>


							<div className="d-flex align-items-left mt-3">
								<div className="flex-grow-1">
								<RangeSlider mode={props.mode} setMode={props.setMode} seasonVal={props.seasonVal} falltintLvl={props.fall.tintLvl} wintertintLvl={props.winter.tintLvl} springtintLvl={props.spring.tintLvl} summertintLvl={props.summer.tintLvl} />
								</div>
							</div>

						</div>
					</div>
				
					</div>
					</div>
    );
};

export default TintScreen;
