import './App.css';
import React from 'react';

function App() {

  const [showModal, setShowModal] = React.useState(false);
  const refModal = React.useRef(null);
  const hideModal = () => setShowModal(false);

  const handleClick = () => alert('Zdarzenie po kliknięciu przycisku Send')

  const message = 'Przykładowy komponent okna dialogowego w aplikacji React.'

  React.useEffect(() => {
      const modalNode = refModal.current;

      if (!modalNode) {
          return;
      }

      modalNode.addEventListener('close', hideModal);
      modalNode.addEventListener('btn-click', handleClick);
       
      return () => {
          modalNode.removeEventListener('close', hideModal);
          modalNode.removeEventListener('btn-click', handleClick);
      };
  });
  
  return (
    <div className="App">
        <button type="button" onClick={() => setShowModal(true)}>
          Open modal
        </button>
        <custom-modal ref={refModal} 
                      title="Modal Web Components" 
                      button="Send"
                      size="l"
                      open={showModal}>
          <div slot="content">
            <p>{message}</p>
          </div>
        </custom-modal>
    </div>
  );
};

export default App;
