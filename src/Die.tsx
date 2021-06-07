import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiceFive, faDiceFour, faDiceOne, faDiceSix, faDiceThree, faDiceTwo} from "@fortawesome/free-solid-svg-icons";

export type face = "one" | "two" | "three" | "four" | "five" | "six";

export interface DieStateProps {
    face: face;
    rolling: boolean;
}

export const Die: React.FunctionComponent<DieStateProps> = (props: DieStateProps) => {
    const faceMappings = {
        "one": faDiceOne,
        "two": faDiceTwo,
        "three": faDiceThree,
        "four": faDiceFour,
        "five": faDiceFive,
        "six": faDiceSix
    };
    return (
        <FontAwesomeIcon className={`Die m-5 ${props.rolling && 'Die-shaking'}`}
                         icon={props.face ? faceMappings[props.face] : faDiceOne} size={"10x"}/>

    )
};
