import React from "react";
import { useSelector } from "react-redux";
import classes from "./App.module.css";
import { useActions } from "./hooks/useActions";
import { Typography, Space, Row, Col, Button, notification } from "antd";
import UserCard from "./components/UserCard";
import AddressOptionsMenu from "./components/AddressOptionsMenu";
import ModalClients from "./components/ModalClients";

function App() {
  const { createClient, updateClient, deleteClient } = useActions();

  const {
    data: clients,
    isLoading: clientsIsLoaded,
    responseMessage: clientResponseMsg,
  } = useSelector((state) => state.clients);

  const [activeQuery, setActiveQuery] = React.useState({
    street: "",
    house: "",
    flat: "",
    flatId: null,
  });
  const [modalVisible, setModalVisible] = React.useState(false);
  const [addUserButton, setAddUserButton] = React.useState(false);
  const [userEdit, setUserEdit] = React.useState();

  const setModal = () => {
    setUserEdit(null);
    setModalVisible(!modalVisible);
  };

  const editUserHandler = React.useCallback((data) => {
    setUserEdit(data);
    setModalVisible(true);
  }, []);

  const onDeleteUserHandler = React.useCallback((id) => {
    deleteClient(id);
  }, [deleteClient]);

  const onSaveUserHandler = (data) => {
    if (data.bindId) {
      updateClient(data);
    } else {
      createClient({
        ...data,
        phone: data.phone,
        bindId: activeQuery.flatId,
      });
    }
  };

  React.useEffect(() => {
    if (clientResponseMsg) {
      notification.open({
        message: clientResponseMsg,
        duration: 3,
      });
      setModalVisible(false);
    }
  }, [clientResponseMsg]);

  return (
    <div className={classes.container}>
      <Typography style={{ marginBottom: 8 }}>Адрес</Typography>
      <Row gutter={[0, 24]}>
        <Col span={24}>
          <Space align="baseline" wrap>
            <AddressOptionsMenu
              setActiveQuery={setActiveQuery}
              setAddUserButton={setAddUserButton}
            />
            {addUserButton && (
              <>
                <Button type="primary" shape="round" onClick={setModal}>
                  Добавить жильца
                </Button>
                <ModalClients
                  activeQuery={activeQuery}
                  defaultUser={userEdit}
                  modalHandler={setModalVisible}
                  onSubmitHandler={onSaveUserHandler}
                  modalVisible={modalVisible}
                />
              </>
            )}
          </Space>
        </Col>
        {clientsIsLoaded && (
          <>
            <Typography>
              {`${activeQuery.street}, ${activeQuery.house}, ${activeQuery.flat}`}
            </Typography>
            <Col span={24}>
              <Space wrap size={24}>
                {clients.map((client) => (
                  <UserCard
                    onDeleteClient={onDeleteUserHandler}
                    onEditHandler={editUserHandler}
                    {...client}
                    key={client.id}
                  />
                ))}
              </Space>
            </Col>
          </>
        )}
      </Row>
    </div>
  );
}

export default App;
