import React from 'react';
import { connect } from 'react-redux';

import { fetchBooks, toggleBookIsRead } from '../actions/MyBooksActions';

import Navbar from './Navbar';
import BookContainer from './BookContainer'

class App extends React.Component{

	componentWillMount(){
		this.props.dispatchFetchBooks();
	}

	render() {
		const { searchString, books, isFetching, initSpinner, dispatchBookIsReadClick, displayAll } = this.props;
		const spinnerStyle = { display: isFetching ? 'block' : 'none' };
		return(
			<div>
				<Navbar displayAll={displayAll} />
				<div style={spinnerStyle} className={`ibm-spinner-container ${initSpinner ? 'init-spin' : 'end-spin'}`}>
					<div className="ibm-spinner">
						<svg width="150" height="150" viewBox="-75 -75 150 150">
							<circle cx="0" cy="0" r="37.5" />
						</svg>
					</div>
				</div>
				<BookContainer books={books} searchString={searchString} onBookIsReadClick={dispatchBookIsReadClick} displayAll={displayAll} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	books: state.myBooks.books,
	isFetching: state.myBooks.isFetching,
	initSpinner: state.myBooks.initSpinner,
	searchString: state.navbar.searchString,
	displayAll: state.navbar.displayAll
});

const mapDispatchToProps = (dispatch) => ({
	dispatchFetchBooks: () => {
		dispatch(fetchBooks());
	},
	dispatchBookIsReadClick: (id) => {
		dispatch(toggleBookIsRead(id));
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


// Replace <BookContainer line with this to test componentWillUnmount>
// {this.state.searchString === 'testunmount' ? <div></div> : <BookContainer searchString={this.state.searchString} />}
