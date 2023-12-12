import { Button, Checkbox, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import Typography from "antd/es/typography/Typography";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  clearSingleTodo,
  getSingleTodo,
  updateTodo,
} from "../../redux/actions/todoActions";
import { singleTodoReducerInterface } from "../../redux/reducer/singleTodoReducer";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import RouteConstants from "../../constants/routes_config";

const EditTodo: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { singleTodo, isLoading } = useSelector(
    (state: { singleTodo: singleTodoReducerInterface }) => state.singleTodo
  );

  const [updatedTitle, setUpdatedTitle] = useState<string>(
    singleTodo?.title || ""
  );
  const [updatedDescription, setUpdatedDescription] = useState<string>(
    singleTodo?.description || ""
  );
  const [updatedIsDone, setUpdatedIsDone] = useState<boolean>(
    singleTodo?.isDone || false
  );

  const { Item } = Form;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleTodo(id));

    return () => {
      dispatch(clearSingleTodo());
    };
  }, [dispatch]);

  const finishHandler = (values: any) => {
    dispatch(updateTodo(singleTodo._id, values));
    navigate(RouteConstants.HOME);
  };

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <Form onFinish={finishHandler}>
      <div
        style={{
          backgroundColor: "#FFF5EE",
          display: "flex",
          height: "55vh",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h3
          style={{
            textAlign: "center",
          }}
        >
          EDIT TODO
        </h3>
        <Item label="title" htmlFor="title" name="title">
          <Input
            type="text"
            name="title"
            placeholder="title"
            style={{ width: "40rem" }}
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
        </Item>
        <Item label="description" htmlFor="desc" name="description">
          <TextArea
            name="description"
            placeholder="description"
            style={{ width: "37rem" }}
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
        </Item>
        <Item name="isDone" valuePropName="checked">
          <Checkbox
            checked={updatedIsDone}
            onChange={(e: CheckboxChangeEvent) =>
              setUpdatedIsDone(e.target.checked)
            }
          >
            <Typography> isDone ?</Typography>
          </Checkbox>
        </Item>
        <Button
          type="primary"
          htmlType="submit"
          shape="round"
          style={{ height: "2rem", width: "8rem" }}
        >
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default EditTodo;
