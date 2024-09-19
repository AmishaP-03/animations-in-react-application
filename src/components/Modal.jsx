import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog 
        open 
        className="modal"
        variants={{
          visible: {opacity: 1, y: 0},
          hidden: {opacity: 0, y: 30}
        }}
        initial='hidden' /** Push modal down initially */
        animate='visible'  /** Final state (during apperance) */
        exit='hidden' /** handles the disapperance of modal */ 
        /** Defining this prop here alone won't add animations during disapperance because React will instant remove this component
         *  from the DOM when condition on line 18 in Header.jsx (isCreatingNewChallenge) fails upon closing the dialog. To avoid this,
         *  we will wrap this piece of code within AnimatePresence component provided by framer-motion. It will make sure that the exit
         *  animation is played before React removes the component from the DOM. */
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
