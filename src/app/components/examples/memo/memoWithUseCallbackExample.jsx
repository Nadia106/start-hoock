import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });

    return (
        <button className="btn btn-info" onClick={onLogOut}>
            Log out
        </button>
    );
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

function areEqual(prevState, nextState) {
    if (prevState.onLogOut !== nextState.onLogOut) {
        return false;
    }
    return true;
}
const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);
// const MemoizedLogOutButton = React.memo(
//     LogOutButton,
//     (prevProps, nextProps) => {
//         if (prevProps === nextProps) return true;
//         return false;
//     }
// );

const MemoWithUseCallbackExample = (props) => {
    const [anyState, setAnystate] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);

    // const handleLogOut = () => {
    //     localStorage.removeItem("auth");
    // };

    return (
        <>
            <button
                className="btn btn-info"
                onClick={() => setAnystate(!anyState)}
            >
                Initiate rerender
            </button>
            <MemoizedLogOutButton onLogOut={handleLogOut} />
        </>
    );
};

export default MemoWithUseCallbackExample;
