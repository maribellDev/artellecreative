import React from "react";
import style from "../styles/modal.module.scss";
import styles from "../styles/form.module.scss";

export default class Modal extends React.Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ isOpen: true })}>
          Open modal
        </button>

        {this.state.isOpen && (
          <div className={style.modal}>
            <div className={style.modalbody}>
              <h1>Modal title</h1>
              <p>I am awesome modal!</p>
              <button onClick={() => this.setState({ isOpen: false })}>
                Close modal
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
