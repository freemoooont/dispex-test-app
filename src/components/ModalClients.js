import { Modal } from "antd";
import AddUserForm from "./AddUserForm";
import React from "react";

const ModalClients = ({
  defaultUser,
  onSubmitHandler,
  activeQuery,
  modalVisible,
  modalHandler,
}) => {
  return (
    <Modal
      visible={modalVisible}
      title={defaultUser ? "Изменить данные" : "Добавить жильца"}
      footer={null}
    >
      <p>{`${activeQuery.street}, ${activeQuery.house}, ${activeQuery.flat}`}</p>
      <AddUserForm
        defaultUserValue={defaultUser}
        onSaveUser={onSubmitHandler}
        onCancel={() => modalHandler(false)}
      />
    </Modal>
  );
};

export default ModalClients;
