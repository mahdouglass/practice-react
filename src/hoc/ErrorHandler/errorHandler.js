import React from "react";

import Modal from "../../components/UI/Modal/Modal";

const ErrorHandler = (WrappedComponent) => {
    return (props) => {
        return (
            <React.Fragment>
                <Modal>
                    Something went wrong
                </Modal>
                <WrappedComponent {...props} />
            </React.Fragment>
        );
    }
}

export default ErrorHandler;