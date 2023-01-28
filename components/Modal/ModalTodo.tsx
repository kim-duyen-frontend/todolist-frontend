import React, { useEffect } from 'react';
import { Button, Group, Modal, Space, Text, TextInput } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { deleteToDoList, selectCollectionTodoceSelector, setInputTextModalEdit, setModal, updateToDoList } from '@/features';

const ModalTodo = () => {
    const { open_modal, title_modal, data_todo, text_edit } = useAppSelector(selectCollectionTodoceSelector)
    const dispatch = useAppDispatch()

    const handleDeleteOneToDo = () => {
        dispatch(deleteToDoList(data_todo))
        dispatch(setModal(false))
    }
    useEffect(() => {
        if (open_modal) {
            dispatch(setInputTextModalEdit(data_todo.text))
        }
    }, [open_modal])
    const handleSaveTodoEdit = () => {
        dispatch(updateToDoList({
            _id: data_todo._id,
            text: text_edit,
            status: data_todo.status
        }))
        dispatch(setModal(false))
    }
    return (
        <Modal
            opened={open_modal}
            onClose={() => dispatch(setModal(false))}
            title={title_modal}
            centered
        >
            {title_modal === "Modal Edit" ? (
                <>
                    <TextInput
                        label="Your text"
                        value={text_edit}
                        onChange={(event) => dispatch(setInputTextModalEdit(event.target.value))}
                        withAsterisk
                    />
                    <Space h="md" />
                    <Group position='right'>
                        <Button variant="outline" onClick={handleSaveTodoEdit}>
                            Save Edit
                        </Button>
                    </Group>
                </>
            ) : (
                <>
                    <Text>Are you sure you want to delete ?</Text>
                    <Space h="md" />
                    <Group position='right'>
                        <Button
                            variant="outline"
                            onClick={handleDeleteOneToDo}
                        >
                            OK
                        </Button>
                    </Group>
                </>
            )}

        </Modal>
    );
};

export default ModalTodo;