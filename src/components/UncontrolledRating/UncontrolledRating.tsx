import React, {useState} from "react";

type RatingPropsType = {}

export const UncontrolledRating = (props: RatingPropsType) => {
    let [value, setValue] = useState(0)
    const onClickHandler = (valueStar: number) => setValue(valueStar)

    return (
        <div>
            <Star selected={value > 0}/>
            <button onClick={() => onClickHandler(1)}>1</button>
            <Star selected={value > 1}/>
            <button onClick={() => onClickHandler(2)}>2</button>
            <Star selected={value > 2}/>
            <button onClick={() => onClickHandler(3)}>3</button>
            <Star selected={value > 3}/>
            <button onClick={() => onClickHandler(4)}>4</button>
            <Star selected={value > 4}/>
            <button onClick={() => onClickHandler(5)}>5</button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

const Star = (props: StarPropsType) => {
    if (props.selected) {
        return (
            <span><b>star</b> </span>
        )
    } else {
        return (
            <span>star </span>
        )
    }
}