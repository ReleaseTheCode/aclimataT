import React from 'react';

const SearchForm = props => {
    return (
        <form onSubmit={props.getLocation}>
            <div className="input-group p-2">
                <input type="text" name="city" className="form-control" placeholder="Ciudad" autoComplete="off" required/>
                <div className="input-group-append">
                    <button className="btn btn-outline-dark font-weight-bold text-white"
                    type="submit">
                        Consultar clima
                    </button>
                </div>
            </div>
        </form>
    );
}
export default SearchForm;
