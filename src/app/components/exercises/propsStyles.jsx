import React from "react";
import CardWrapper from "../common/Card";

const PropsStyles = (SimpleComponent) => (props) => {
    return (
        <CardWrapper>
            <SimpleComponent {...props} />
        </CardWrapper>
    );
};

export default PropsStyles;
