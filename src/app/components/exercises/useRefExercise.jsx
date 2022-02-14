import React, { useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";

const UseRefExercise = () => {
    const refStyle = useRef();
    const refText = useRef("Блок");
    const [changeStyle, setChangeStyle] = useState(false);

    const toggleChanger = () => {
        setChangeStyle(!changeStyle);
        changeStyle
            ? (refStyle.current.style.height = "150px")
            : (refStyle.current.style.height = "40px");
        changeStyle
            ? (refStyle.current.style.width = "80px")
            : (refStyle.current.style.width = "60px");
        changeStyle ? (refText.current = "Text") : (refText.current = "Блок");
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={refStyle}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small ref={refText}>{refText.current}</small>
            </div>
            <div>
                <button
                    className="btn btn-warning mt-4"
                    onClick={toggleChanger}
                >
                    Change Block
                </button>
            </div>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
