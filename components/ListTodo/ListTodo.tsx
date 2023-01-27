import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { getListTodo, selectCollectionTodoceSelector, setModal, setSaveOneIdTodo, setTitleModal } from '@/features';
import { ActionIcon, Badge, Button, Checkbox, Group, Table } from '@mantine/core';
import React, { useEffect } from 'react';
import dayjs from 'dayjs'
import { IconSortAscending, IconSortDescending } from '@tabler/icons';
import ModalTodo from '../Modal/ModalTodo';

const ListTodo = () => {
    const { listTodo, open_modal } = useAppSelector(selectCollectionTodoceSelector)
    const dispatch = useAppDispatch()
    const handleOpenModalEdit = () => {
        dispatch(setModal(true))
        dispatch(setTitleModal("Modal Edit"))
    }
    const handleOpenModalDelete = (id: string) => {
        dispatch(setModal(true))
        dispatch(setTitleModal("Modal Delete"))
        dispatch(setSaveOneIdTodo(id))
    }
    useEffect(() => {
        dispatch(getListTodo())
    }, [open_modal])
    return (
        <>
            <div className='overflow-x-auto'>
                <Table highlightOnHover withBorder withColumnBorders>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th></th>
                            <th>
                                <Group>
                                    <ActionIcon variant="subtle">
                                        <IconSortAscending size={16} />
                                    </ActionIcon>
                                    Text
                                    <ActionIcon variant="subtle">
                                        <IconSortDescending size={16} />
                                    </ActionIcon>
                                </Group>
                            </th>
                            <th>Status</th>
                            <th>
                                <Group>
                                    <ActionIcon variant="subtle">
                                        <IconSortAscending size={16} />
                                    </ActionIcon>
                                    Created at
                                    <ActionIcon variant="subtle">
                                        <IconSortDescending size={16} />
                                    </ActionIcon>
                                </Group>
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listTodo?.length > 0 && listTodo.map((item, index) => (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td><Checkbox /></td>
                                <td>{item.text}</td>
                                <td>{item.status ? (<Badge color="pink" variant="light">Completed</Badge>) : (
                                    <Badge color="blue" variant="light">To Do</Badge>
                                )}</td>
                                <td>{dayjs(item.createdAt).format('DD-MM-YYYY')}</td>
                                <td>
                                    <Group position='left'>
                                        <Button
                                            variant="outline"
                                            onClick={handleOpenModalEdit}
                                            compact
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="outline"
                                            onClick={() => handleOpenModalDelete(item._id)}
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