import React, { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

// export const Modal = ({ images }) => {
//   return (
//     <Overlay>
//       <ModalWindow>
//         {images.map(image => (
//           <img src={image.largeImageURL} alt="" key={image.id} />
//         ))}
//       </ModalWindow>
//     </Overlay>
//   );
// };

export default class Modal extends Component {
  // componentDidMount() {
  //   window.addEventListener('click', e => {
  //     console.log(e.currentTarget);
  //     if (e.target !== e.currentTarget) {
  //       this.props.onModalToggle();
  //     }
  //   });
  // }

  render() {
    return (
      <Overlay onClick={this.props.toggleModal}>
        <ModalWindow onClick={e => e.stopPropagation()}>
          {this.props.children}
        </ModalWindow>
      </Overlay>
    );
  }
}
