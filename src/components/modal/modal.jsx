import React from 'react';
import Modal from 'react-modal';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import emailjs from 'emailjs-com';
import {Link} from 'react-router-dom';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    borderRadius          : '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
};

Modal.setAppElement('#root')


const ModalView = (props) => {

  const [modalIsOpen,setIsOpen] = React.useState(true);

  const submitMail = (e) => {
    e.preventDefault();

       emailjs.sendForm('service_j469yju','template_6x6clz3', e.target, 'user_ynNZxMuwAewsmAq1Up9BB')
         .then((result) => {
              setIsOpen(false);
         }, (error) => {
             console.log(error.text);
         });
         e.target.reset();
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  return(
    <Modal
         isOpen={modalIsOpen}
         style={customStyles}
         contentLabel="Example Modal"
         transparent={true}
       >


         <form className="modal-form" onSubmit={submitMail}>
           <h2 style={{color: 'white'}}>Need help in getting right wheelchair? <HighlightOffIcon onClick={closeModal} fontSize = "large"/></h2>
           <h4 style={{color: 'white'}}>Contact Us</h4>
         <input type="text" name="name"  required placeholder="Name"/>
         <input type="text" name="phone" required placeholder="Phone/Email"/>
         <textarea name="message" className="message" placeholder="Message"/>
         <input type="submit" className="btn btn-danger-gradiant m-t-20 btn-arrow" value="Send" />
         </form>
       </Modal>
  )
}

export default ModalView;
