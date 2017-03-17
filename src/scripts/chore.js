import React from 'react'
import STORE from './store'



const Chores = React.createClass({


  //if there is a changein the store's data our top-level component should update its state
	componentWillMount(){
		STORE.on('dataUpdated', ()=> {
			this.setState(STORE.data)
		})
	},

  //initialize sending the data to STORE 
	getInitialState: function() {
		return STORE.data
	},


	//render is the view of the page by using return
	render: function() {
		return(
			<div className="container">
					<ChoresToDo />
					<ChoresResults statInfo={STORE.data}/>
			</div>
		)
	}
})


var ChoresToDo = React.createClass({
	render: function() {
		return(
			<div className="buttons">
					<button type="button" onClick={()=>{STORE.sum('strength')}}> Do Push Ups </button>
					<button type="button" onClick={()=>{STORE.sum('knowledge')}}>Read a book </button>
				  <button type="button" onClick={()=>{STORE.sum('cleandish')}}>Clean Dishes </button>
				  <button type="button" onClick={()=>{STORE.sum('health')}}>Eat Veggis </button>
				</div>
			)
	}
})


var ChoresResults = React.createClass({
	render: function() {
		return(
			<div className="results">
					<p>Strength: {this.props.statInfo.strength}</p>
					<p>Knowledge: {this.props.statInfo.knowledge}</p>
					<p>Clean Dishes: {this.props.statInfo.cleandish}</p>
					<p>Healthiness: {this.props.statInfo.health}</p>
					<p>Chores Done: {this.props.statInfo.chores}</p>
			  </div>
			)
	}
})



//export Chores class so can be readed by browser
export default Chores


