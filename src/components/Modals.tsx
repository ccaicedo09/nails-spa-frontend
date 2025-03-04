import React, { useState } from 'react';

// import 'spectre.css/dist/spectre.min.css';
// import 'spectre.css/dist/spectre-icons.min.css';
// import 'spectre.css/dist/spectre-exp.min.css';

const Modals = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showSmallModal, setShowSmallModal] = useState<boolean>(false);
  const [showLargeModal, setShowLargeModal] = useState<boolean>(false);

  const openModal = (type: 'default' | 'large' | 'small') => {
    switch (type) {
      case 'default':
        setShowModal(true);
        break;
      case 'large':
        setShowLargeModal(true);
        break;
      case 'small':
        setShowSmallModal(true);
        break;
    }
  };

  const closeModal = (type: 'default' | 'large' | 'small') => {
    switch (type) {
      case 'default':
        setShowModal(false);
        break;
      case 'large':
        setShowLargeModal(false);
        break;
      case 'small':
        setShowSmallModal(false);
        break;
    }
  };

  return (
    <>
      <a className="btn btn-primary btn-block mt-2" onClick={() => openModal('default')}>Abrir Modal</a>
      <a className="btn btn-primary btn-block mt-2" onClick={() => openModal('large')}>Abrir Modal grande</a>
      <a className="btn btn-primary btn-block mt-2" onClick={() => openModal('small')}>Abrir modal pequeño</a>

      {showModal && (
        <div className="modal active">
          <a onClick={() => closeModal('default')} className="modal-overlay" aria-label="Close"></a>
          <div className="modal-container">
            <div className="modal-header">
              <a onClick={() => closeModal('default')} className="btn btn-clear float-right" aria-label="Close"></a>
              <div className="modal-title h5">Título de modal</div>
            </div>
            <div className="modal-body">
              <div className="text-left content">
                <p>Contenido del modal</p>

              <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, quod neque. Unde commodi explicabo minima consequatur possimus numquam molestias, corporis amet iste mollitia nobis sit iusto odio voluptate assumenda placeat.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, quod neque. Unde commodi explicabo minima consequatur possimus numquam molestias, corporis amet iste mollitia nobis sit iusto odio voluptate assumenda placeat.

              </p>

              <button className="btn tooltip" data-tooltip={`First Line Tooltip Text \n Second Line Tooltip Text`}>multiline tooltip</button>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={() => closeModal('default')}>Aceptar</button>
            </div>
          </div>
        </div>
      )}

      {showSmallModal && (
        <div className="modal active modal-sm">
          <a onClick={() => closeModal('small')} className="modal-overlay" aria-label="Close"></a>
          <div className="modal-container">
            <div className="modal-header">
              <a onClick={() => closeModal('small')} className="btn btn-clear float-right" aria-label="Close"></a>
              <div className="modal-title h5">Título de modal pequeño</div>
            </div>
            <div className="modal-body">
              <div className="text-left content">
                <div className="empty">
  <div className="empty-icon">
    <i className="icon icon-people"></i>
  </div>
  <p className="empty-title h5">You have no new messages</p>
  <p className="empty-subtitle">Click the button to start a conversation.</p>
  <div className="empty-action">
    <button className="btn btn-primary">Send a message</button>
  </div>
</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showLargeModal && (
        <div className="modal active modal-lg">
          <a onClick={() => closeModal('large')} className="modal-overlay" aria-label="Close"></a>
          <div className="modal-container">
            <div className="modal-header">
              <a onClick={() => closeModal('large')} className="btn btn-clear float-right" aria-label="Close"></a>
              <div className="modal-title h5">Título de modal grande</div>
            </div>
            <div className="modal-body">
              <div className="text-left content">
                <p>Contenido del modal grande:</p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime error vitae veniam est, dignissimos itaque quidem id ab corporis doloremque dolore qui fuga explicabo? Aliquid saepe doloremque commodi blanditiis.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque nostrum magni, ducimus reprehenderit molestiae facilis non atque voluptas tenetur, excepturi accusamus perferendis optio! A animi laborum accusantium accusamus, obcaecati numquam.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ipsam nobis quas, neque ea quasi incidunt quibusdam molestiae vel quam! Eligendi, reprehenderit. Repellat hic nisi quasi neque tempora in libero!
                  <br />
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, quod neque. Unde commodi explicabo minima consequatur possimus numquam molestias, corporis amet iste mollitia nobis sit iusto odio voluptate assumenda placeat.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, quod neque. Unde commodi explicabo minima consequatur possimus numquam molestias, corporis amet iste mollitia nobis sit iusto odio voluptate assumenda placeat.

                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, quod neque. Unde commodi explicabo minima consequatur possimus numquam molestias, corporis amet iste mollitia nobis sit iusto odio voluptate assumenda placeat.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, quod neque. Unde commodi explicabo minima consequatur possimus numquam molestias, corporis amet iste mollitia nobis sit iusto odio voluptate assumenda placeat.

                </p>

                
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={() => closeModal('large')}>Aceptar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modals;