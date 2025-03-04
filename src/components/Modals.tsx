import React, {useState} from 'react'

const Modals = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showSmallModal, setShowSmallModal] = useState<boolean>(false);
  const [showLargeModal, setShowLargeModal] = useState<boolean>(false);
  const openModal = (type: 'defualt' | 'large' | 'small') => {
    switch (type) {
      case 'defualt':
        setShowModal(true);
        break;
      case 'large':
        setShowLargeModal(true);
        break;
      case 'small':
        setShowSmallModal(true);
        break;
      default:
        setShowModal(true);
        break
  }
  return (
    <>
     
<a className="btn btn-primary" onClick={() => {openModal('defualt')}}>Abrir  Modal normal</a>
<a className="btn btn-primary" onClick={() => openModal('large')}>Abrir Modal grande</a>
<a className="btn btn-primary" onClick={() => openModal('small')}>Open Modal</a>

{showModal && (
  <div className="modal" >
  <a href="#close" className="modal-overlay" aria-label="Close"></a>
  <div className="modal-container">
    <div className="modal-header">
      <a href="#close" className="btn btn-clear float-right" aria-label="Close"></a>
      <div className="modal-title h5">Título de modal</div>
    </div>
    <div className="modal-body">
      <div className="content">
       
      </div>
    </div>
    <div className="modal-footer">
      ...
    </div>
  </div>
</div>
)
  }
  {showSmallModal && (
     <div className="modal-sm" >
     <a href="#close" className="modal-overlay" aria-label="Close"></a>
     <div className="modal-container">
       <div className="modal-header">
         <a href="#close" className="btn btn-clear float-right" aria-label="Close"></a>
         <div className="modal-title h5">Título de modal</div>
       </div>
       <div className="modal-body">
         <div className="content">
          
         </div>
       </div>
       <div className="modal-footer">
         ...
       </div>
     </div>
   </div>
  )}

  {showLargeModal && (
    <div className="modal-sm" >
    <a href="#close" className="modal-overlay" aria-label="Close"></a>
    <div className="modal-container">
      <div className="modal-header">
        <a href="#close" className="btn btn-clear float-right" aria-label="Close"></a>
        <div className="modal-title h5">Título de modal</div>
      </div>
      <div className="modal-body">
        <div className="content">
         
        </div>
      </div>
      <div className="modal-footer">
        ...
      </div>
    </div>
  </div>
     )}




    </>
  )
}
}

export default Modals