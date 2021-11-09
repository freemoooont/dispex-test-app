import React from "react";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PhoneTwoTone,
  MailOutlined,
} from "@ant-design/icons";

const UserCard = React.memo(
  ({ name, email, phone, bindId, id, onEditHandler, onDeleteClient }) => {
    const onClickEditHandler = () => {
      onEditHandler({ name, email, phone, bindId, id });
    };
    const onDeleteHandler = () => {
      onDeleteClient(id);
    };

    return (
      <Card
        style={{ width: "100%" }}
        actions={[
          <DeleteOutlined onClick={onDeleteHandler} key="ellipsis" />,
          <EditOutlined onClick={onClickEditHandler} key="edit" />,
        ]}
      >
        <Card.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={name === "" ? "No name" : name}
          description=<Description phone={phone} email={email} />
        />
      </Card>
    );
  }
);

const Description = ({ phone, email }) => (
  <>
    <div style={{ color: "green" }}>
      <PhoneTwoTone /> {phone}
    </div>
    <MailOutlined /> {email}
  </>
);
export default UserCard;
