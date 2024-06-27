import React from 'react';

export class SearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {query: ''};
    }
    render() {
        return (
            <div className="card mb-4">
                <div className="card-header">People</div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="peopleSearch">Search People</label>
                            <input type="text" className="form-control" id="peopleSearch" placeholder="Enter character name" />
                        </div>
                        <button type="submit" className="btn btn-primary">Search</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchForm;


