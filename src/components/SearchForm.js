import React from 'react';

const SearchForm = props => {
    console.log(props)
    return (
        <form onSubmit={props.getLocation}>
            <div className="input-group mb-3 p-2">
                <input type="text" name="city" className="form-control" placeholder="Ciudad" autoComplete="off" required/>
                <div className="input-group-append">
                    <button className="btn btn-outline-success font-weight-bold"
                    type="submit">
                        Consultar clima
                    </button>
                </div>
            </div>
        </form>
    );
}
export default SearchForm;
