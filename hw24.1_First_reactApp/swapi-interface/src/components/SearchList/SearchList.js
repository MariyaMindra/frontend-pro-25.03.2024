import React from 'react';

export class SearchList extends React.Component {

    render() {
        const { data } =this.props;
        const list= Object.keys(data).map((key) => ({key, value: data[key]}));
        return (
            <ul className="list-group">
                {list.map((el) => (
                    <li className="list-group-item" id={el.key}>{el.key} : {el.value}</li>
                ))}
            </ul>
        );
    }
}

export default SearchList;