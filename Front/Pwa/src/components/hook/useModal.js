import { useState } from 'react'

const UseModal = (initialValue = false) => {

  const [isOpenModal, setIsOpenModal] = useState(initialValue);

  const openModal = () => {
    setIsOpenModal(true);
  }
  
  const closeModal = () => {
    setIsOpenModal(false);
  }

  return [isOpenModal, openModal ,closeModal ];

}

export default UseModal