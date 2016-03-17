var Container=React.createClass({
	loadOwnerFromServer: function(){
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			typs: 'GET',
			success: function(data){
				console.log(data);
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err){
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	getInitialState: function() {
	    return {data: []};
	},
	componentDidMount: function() {
	    this.loadOwnerFromServer();
	},
	render: function() {
	    return (
	      <div>
	        <h1>Try</h1>
	      </div>
	    );
	}
});
React.render(
  <Container url="owner.json"/>,
  document.getElementById('about')
);
