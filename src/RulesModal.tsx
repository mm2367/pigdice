import Modal from 'react-bootstrap/Modal'
import * as React from "react";
import {staticTexts} from "./staticText";

export interface ModalProps {
    show: boolean
}

export const RulesModal: React.FunctionComponent<ModalProps> = (props: ModalProps) => {

    return (

        <Modal
            show={props.show}
            animation={false}
        >
            <Modal.Header>
                <Modal.Title>Rules</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul>
                    <li>{staticTexts.rules.ruleOne}</li>
                    <ul>
                        <li>{staticTexts.rules.ruleOneA}</li>
                    </ul>
                    <li>{staticTexts.rules.ruleTwo}</li>
                    <li>{staticTexts.rules.ruleThree}</li>
                    <li>{staticTexts.rules.ruleFour}</li>
                </ul>
            </Modal.Body>
        </Modal>

    )
}
