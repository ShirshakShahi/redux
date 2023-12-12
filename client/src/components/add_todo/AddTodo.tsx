import React, { useState } from "react";
import { Form, Input, Checkbox, Typography, Button } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { addTodos } from "../../redux/actions/todoActions";
import { useDispatch } from "react-redux";

const AddTodo: React.FC = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isDone, setIsDone] = useState<boolean>(true);
  const [enteredFieldIsValid, setEnterFieldIsValid] = useState<boolean | null>(
    null
  );
  const { Item } = Form;
  const { TextArea } = Input;

  const checkboxChangeHandler = (e: CheckboxChangeEvent) => {
    setIsDone(e.target.checked);
  };

  function validateInput(value: string): boolean {
    if (value !== undefined && value.trim().length === 0) {
      return true;
    }
    return false;
  }

  const finishHandler = () => {
    const titleIsEmpty = validateInput(title);
    const descriptionIsEmpty = validateInput(description);

    if (titleIsEmpty || descriptionIsEmpty) {
      setEnterFieldIsValid(false);
      return;
    } else {
      setEnterFieldIsValid(true);
    }
    dispatch(addTodos({ title, description, isDone }));
    setTitle("");
    setDescription("");
  };

  return (
    <Form onFinish={finishHandler}>
      <div
        style={{
          backgroundColor: "#FFF5EE",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Item label="title" htmlFor="title" name="title">
          <Input
            type="text"
            name="title"
            placeholder="title"
            style={{ width: "40rem" }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Item>
        <Item label="description" htmlFor="desc" name="description">
          <TextArea
            name="description"
            placeholder="description"
            style={{ width: "37rem" }}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </Item>
        <Item name="isDone" valuePropName="checked">
          <Checkbox
            onChange={checkboxChangeHandler}
            defaultChecked
            checked={isDone}
          >
            <Typography.Text strong> isDone ?</Typography.Text>
          </Checkbox>
        </Item>
        <Button
          type="primary"
          htmlType="submit"
          shape="round"
          style={{ height: "2rem", width: "8rem" }}
        >
          ADD TODO
        </Button>
        {enteredFieldIsValid === false ? (
          <Typography.Text type="danger">
            Title or Description cant be empty
          </Typography.Text>
        ) : (
          ""
        )}
      </div>
    </Form>
  );
};

export default AddTodo;
