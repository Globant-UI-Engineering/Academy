import React from 'react';
import './Card.css';

const Card = (props) =>{
				let buttons=null;
				if(props.type==='doing'){
					buttons=<footer>
									<button id='btn-ok' onClick={props.done}>&#10003;</button>
									<button id='btn-cancel' onClick={props.delete}>X</button>
							</footer>;
				}else if(props.type==='done'){
					 buttons=<footer>
									<button id='btn-back' onClick={props.back}>&#8592;</button>
									<button id='btn-cancel' onClick={props.delete}>X</button>
							</footer>
				}

				return(
					<div className="card">
								<div className="card-title">
										<h3>{props.card.name}</h3>
										<div className="card-body">
											<p><b>Start date:</b>{props.card.startDate}</p>

											<p><b>End date:</b>{ props.card.endDate } </p>
										</div>
								</div>
							{buttons}
					</div>			
				);
}


const areEqual=(prevProps, currentProps)=>{
	return (prevProps.card.id === currentProps.card.id && 
		prevProps.card.name === currentProps.card.name); 
}

export default React.memo(Card, areEqual);