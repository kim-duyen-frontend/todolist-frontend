import React from 'react';
import { Button, Group, Modal, Space, Text, TextInput } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { selectCollectionTodoceSelector, setModal } from '@/features';

const ModalTodo = () => {
    const { open_modal, title_modal } = useAppSelector(selectCollectionTodoceSelector)
    const dispatch = useAppDispatch()

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
                        withAsterisk
                    />
                    <Space h="md" />
                    <Group position='right'>
                        <Button variant="outline">
                            Save Edit
                        </Button>
                    </Group>
                </>
            ) : (
                <>
                    <Text>Are you sure you want to delete ?</Text>
                    <Space h="md" />
                    <Group position='right'>
                        <Button variant="outline">
                            OK
                        </Button>
                    </Group>
                </>
            )}

        </Modal>
    );
};

export default ModalTodo;