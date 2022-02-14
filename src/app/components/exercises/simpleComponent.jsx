import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onClick, name }) => {
    return (
        <>
            <button className="btn btn-seccess" onClick={onClick}>
                {name}
            </button>
        </>
    );
};

SimpleComponent.propTypes = {
    onClick: PropTypes.func,
    name: PropTypes.string
};

export default SimpleComponent;
