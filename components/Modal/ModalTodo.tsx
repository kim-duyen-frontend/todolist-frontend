import React, { useEffect } from 'react';
import { Button, Group, Modal, Space, Text, TextInput } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { deleteToDoList, selectCollectionTodoceSelector, setInputTextModalEdit, setMessageModalEdit, setModal, TTodolist, updateToDoList } from '@/features';

const getValidForm = (text_edit: string, listTodo: TTodolist[]) => {
    for (let i = 0; i < listTodo.length; i++) {
        const element = listTodo[i];
        if (element.text === text_edit) {
            return "This text already exists"
        }
    }
    if (text_edit.length < 2 || text_edit.length > 50) {
        return "The length must be greater than or equal to 50"
    } else {
        for (let i = 0; i < listTodo.length; i++) {
            const element = listTodo[i];
            if (element.text === text_edit) {
                return "This text already exists"
            }
        }
    }
}
const ModalTodo = () => {
    const { open_modal, title_modal, data_todo, text_edit, listTodo, message_modal_edit } = useAppSelector(selectCollectionTodoceSelector)
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

    useEffect(() => {
        dispatch(setMessageModalEdit(" "))
    }, [text_edit])

    const handleSaveTodoEdit = () => {
        let msg = getValidForm(text_edit, listTodo)
        if (msg) {
            dispatch(setMessageModalEdit(msg))
        } else {
            dispatch(updateToDoList({
                _id: data_todo._id,
                text: text_edit,
                status: data_todo.status
            }))
            dispatch(setModal(false))
        }
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
                    {message_modal_edit ? <span className='text-red-500 font-bold'>{message_modal_edit}</span> : ""}
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