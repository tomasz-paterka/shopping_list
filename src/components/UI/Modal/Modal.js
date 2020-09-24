import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

/**
 * Modal component,
 * render product modal.
 * @component
 */
const Modal = (props) => (
  <Aux>
    <Backdrop show={props.show} clicked={props.modalClosed}/>
    <div 
      className='Modal'
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}>
      {props.children}
    </div>
  </Aux>
);

Modal.propTypes = {
  /**
   * show checks if Modal is visible
   */
  show: PropTypes.bool,
  /**
   * modalClosed func reference to method
   */
  modalClosed: PropTypes.func.isRequired,
  /**
   * children - input component
   */
  children: PropTypes.node
}

export default Modal;