import React from 'react';

export default function SearchForm(props){

    return (
        <form >
            <div className="input-group mb-3 p-2">
                <input type="text" name="city" className="form-control" placeholder="Ciudad" required/>
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
