var EventApplication = React.createClass({
	getInitialState: function(){
		return { events:[]};
	},
	componentDidMount: function(){
		this.getDataFromApi();
	},
	getDataFromApi: function(){
		var self = this;
		$.ajax({
			url:'/api/events',
			success: function(data){
				self.setState({ events: data});
			},
			error: function(xhr, status, error){
				alert('Cannot get info from API',error);
			}
		});
	},
	handleSearch: function(events){
		//when I did not have this, the handleSearch in the component was undefined
		this.setState({events:events});
	},
	render: function(){
		return(
			<div className = "container">
				<div className = "jumbotron">
					<h1>Events</h1>
				</div>
				<div className = "row">
					<div className = "col-sm-3">
						<SearchForm handleSearch = {this.handleSearch} />
					</div>
				</div>
				<div className = "row">
					<div className = "col-md-12">
						<EventTable events ={this.state.events} />
					</div>
				</div>
			</div>
		)
	}
});