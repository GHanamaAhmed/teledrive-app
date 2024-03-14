import React, { useState } from 'react'
import { Button, Modal } from 'antd'

const CustomModal = ({ title, onOk, onCancel, children, isModalOpen }) => {
  return (
    <>
      <Modal title={title} open={isModalOpen} onOk={onOk} onCancel={onCancel}>
        {children}
      </Modal>
    </>
  )
}

export default CustomModal
