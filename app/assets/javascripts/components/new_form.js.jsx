var NewForm = React.createClass({
	propTypes:{
		name: React.PropTypes.string,
		event_date: React.PropTypes.string,
		place: React.PropTypes.string,
		description: React.PropTypes.string
	},
	getInitialState: function(){	
		return {
			name: "",
			place: "",
			event_date: "",
			description: ""
		}
	},
	handleAdd: function(e){
		e.preventDefault();
		var self = this;
		if(this.validForm()){
			$.ajax({
				url: "/api/events",
				method:"POST",
				data: {event: self.state},
				success: function(data){
					self.props.handleAdd(data);
					self.setState(self.getInitialState());
				},
				error: function(xhr, status, error){
					console.log("Cannot add new event", error);
				}
			})
		} else {
			alert("Fill out all fields")
		}

	},
	validForm: function(){
		//checks to see if all fields are filled
		if(this.state.name && this.state.place &&
		this.state.event_date && this.state.description){
			return true;
		} else{
			return false;
		}
	},
	handleChange: function(e){
		var input_name = e.target.name;
		var value = e.target.value;
		this.setState({[input_name] : value});
	},
	render: function(){
		return(
			<form className = "form-inline" onSubmit = {this.handleAdd}>
				<div className = "form-group">
					<input className = "form-control"
						type = "text"
						ref = "name"
						name = "name"
						placeholder = "Event Name"
						value = {this.state.name}
						onChange = {this.handleChange}/>
				</div>
				<div className = "form-group">
					<input className = "form-control"
						type = "text"
						ref = "place"
						name = "place"
						placeholder = "Location"
						value = {this.state.place}
						onChange = {this.handleChange}/>
				</div>
				<div className = "form-group">
					<input className = "form-control"
						type = "date"
						ref = "event_date"
						name = "event_date"
						placeholder = "Date"
						value = {this.state.event_date}
						onChange = {this.handleChange}/>
				</div>
				<div className = "form-group">
					<input className = "form-control"
						type = "text"
						ref = "description"
						name = "description"
						placeholder = "description"
						value = {this.state.description}
						onChange = {this.handleChange}/>
				</div>
				<button type ="submit" className = "btn btn-warning"> Add</button>
			</form>

		)
	}	
});