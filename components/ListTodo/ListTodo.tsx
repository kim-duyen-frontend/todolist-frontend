import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  selectCollectionTodoceSelector,
  setChecked,
  setModal,
  setSaveOneDataTodo,
  setTitleModal,
  TTodolist,
  updateToDoList,
  setTypeSortText,
} from "@/features";
import {
  ActionIcon,
  Badge,
  Button,
  Checkbox,
  Group,
  Table,
} from "@mantine/core";
import React from "react";
import dayjs from "dayjs";
import { IconSortAscending, IconSortDescending } from "@tabler/icons";
import ModalTodo from "../Modal/ModalTodo";

const ListTodo = () => {
  const { listTodo, search_text, checked, type_sort_name } = useAppSelector(
    selectCollectionTodoceSelector
  );
  const dispatch = useAppDispatch();

  const handleOpenModalEdit = (data: TTodolist) => {
    dispatch(setModal(true));
    dispatch(setTitleModal("Modal Edit"));
    dispatch(setSaveOneDataTodo(data));
  };
  const handleOpenModalDelete = (data: TTodolist) => {
    dispatch(setModal(true));
    dispatch(setTitleModal("Modal Delete"));
    dispatch(setSaveOneDataTodo(data));
  };
  const handleChangeChecked = (data: TTodolist) => {
    dispatch(setChecked(!checked));
    dispatch(
      updateToDoList({
        _id: data._id,
        text: data.text,
        status: !checked,
      })
    );
  };
  return (
    <>
      <div className="overflow-x-auto">
        <Table highlightOnHover withBorder withColumnBorders>
          <thead>
            <tr>
              <th>#</th>
              <th></th>
              <th>
                <Group>
                  {type_sort_name ? (
                    <ActionIcon variant="subtle">
                      <IconSortAscending
                        size={16}
                        onClick={() => dispatch(setTypeSortText(false))}
                      />
                    </ActionIcon>
                  ) : (
                    <ActionIcon variant="subtle">
                      <IconSortDescending
                        size={16}
                        onClick={() => dispatch(setTypeSortText(true))}
                      />
                    </ActionIcon>
                  )}
                  Text
                </Group>
              </th>
              <th>Status</th>
              <th>Created at</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listTodo?.length > 0 &&
              listTodo
                .filter((item) =>
                  item.text.toLowerCase().includes(search_text.toLowerCase())
                )
                .sort((a, b) => {
                  if (type_sort_name === true) {
                    return a.text > b.text ? 1 : -1;
                  } else if (type_sort_name === false) {
                    return a.text < b.text ? 1 : -1;
                  } else {
                    return 0;
                  }
                })
                .map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>
                      <Checkbox
                        checked={item?.status}
                        onChange={() => handleChangeChecked(item)}
                      />
                    </td>
                    <td>{item.text}</td>
                    <td>
                      {item.status ? (
                        <Badge color="pink" variant="light">
                          Completed
                        </Badge>
                      ) : (
                        <Badge color="blue" variant="light">
                          To Do
                        </Badge>
                      )}
                    </td>
                    <td>{dayjs(item.createdAt).format("DD-MM-YYYY")}</td>
                    <td>
                      <Group position="left">
                        <Button
                          variant="outline"
                          onClick={() => handleOpenModalEdit(item)}
                          compact
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => handleOpenModalDelete(item)}
                          compact
                        >
                          Delete
                        </Button>
                      </Group>
                    </td>
                  </tr>
                ))}
          </tbody>
        </Table>
      </div>
      <ModalTodo />
    </>
  );
};

export default ListTodo;
