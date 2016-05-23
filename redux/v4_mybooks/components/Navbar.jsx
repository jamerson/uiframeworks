import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSearchString, swithDisplayAll } from '../actions/NavbarActions';

class Navbar extends Component {

	handleInputChange(){
		this.props.onInputChange(this.refs.searchInputText.value);
	}

	render(){
		return(
			<div className="panel panel-default mybooks-mainpanel">
			    <div className="panel-body mybooks-mainpanelbody">
			        <div className="panel panel-default mybooks-filterpanel">
			            <div className="panel-body">
			                <div className="row">
			                    <div className="col-xs-1">
			                        <button type="button" className="btn btn-default navbar-btn" onClick={this.props.dispatchDisplayAll.bind(null, !this.props.displayAll)}>
			                            <span className={"glyphicon glyphicon-"+ ((this.props.displayAll) ? "globe" : "unchecked")} ></span>
			                        </button>
			                    </div>
			                    <div className="col-xs-11">
			                        <div className="input-group">
			                            <input ref='searchInputText' type="text" className="form-control" placeholder="Search..." onChange={this.handleInputChange.bind(this)}  />
			                            <span className="input-group-addon glyphicon glyphicon-search"></span>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
		);
	}
};

const mapDispatchToProps = (dispatch) => ({
	onInputChange: (value) => {
		dispatch(setSearchString(value));
	},
	dispatchDisplayAll: (value) => {
		dispatch(swithDisplayAll(value));
	}
});

export default connect(null, mapDispatchToProps)(Navbar);
