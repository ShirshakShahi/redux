import { FC, memo } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import RouteConstants from "../../constants/routes_config";

interface TodoProps {
  _id: string;
  title: string;
  description?: string;
  isDone?: boolean;
  handleDeletion: (id: string) => void;
}

const TodoItem: FC<TodoProps> = ({
  _id,
  title,
  description,
  handleDeletion,
}) => {
  const navigate = useNavigate();

  const deleteHandler = (_id: string) => {
    handleDeletion(_id);
  };

  const editHandler = (_id: string) => {
    navigate(`${RouteConstants.EDIT}/${_id}`);
  };

  return (
    <div
      style={{
        height: "15vh",
        width: "60vw",
        backgroundColor: "#fff5ee",
        borderRadius: "15px",
        display: "flex",
        margin: "10px 0",
      }}
    >
      <div
        style={{
          flex: "4",
          margin: "10px 5px",
          borderRadius: "15px",
        }}
      >
        <Typography>
          <Typography.Title level={3} style={{ margin: "0px" }}>
            {title}
          </Typography.Title>
          <Typography.Paragraph ellipsis type="secondary" italic>
            {description}
          </Typography.Paragraph>
        </Typography>
      </div>
      <div
        style={{
          flex: "1",
          borderRadius: "15px",
          margin: "5px 5px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Button
          style={{ height: "40%", width: "70%" }}
          icon={<EditOutlined />}
          type="primary"
          shape="round"
          onClick={() => editHandler(_id)}
        >
          edit
        </Button>
        <Button
          onClick={() => deleteHandler(_id)}
          style={{ height: "40%", width: "70%" }}
          icon={<DeleteOutlined />}
          type="primary"
          shape="round"
        >
          delete
        </Button>
      </div>
    </div>
  );
};

export default memo(TodoItem);
