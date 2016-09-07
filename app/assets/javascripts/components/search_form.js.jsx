var SearchForm = React.createClass({
	handleSearch: function(){
		// find the ref value of query
		var query = ReactDOM.findDOMNode(this.refs.query).value;
		var self = this;
		$.ajax({
			url: "/api/events/search",
			data: {query:query},
			success: function(data){
				console.log(self.props)
				self.props.handleSearch(data);
			},
			error: function(xhr, status, error){
				console.log("Search error:", status, xhr, error);
			}
		});
	},
	render: function(){
		return(
			<input onChange = {this.handleSearch}
				type = "text"
				className = "form-control"
				placeholder = "Search Events"
				ref = "query" />
		)
	}

});