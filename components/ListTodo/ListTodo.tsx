import { useAppSelector } from '@/app/hooks';
import { selectCollectionTodoceSelector } from '@/features';
import { ActionIcon, Badge, Button, Group, Table } from '@mantine/core';
import React from 'react';
import dayjs from 'dayjs'
import { IconSortAscending, IconSortDescending } from '@tabler/icons';

const ListTodo = () => {
    const { listTodo } = useAppSelector(selectCollectionTodoceSelector)
    return (
        <div className='overflow-x-auto'>
            <Table highlightOnHover withBorder withColumnBorders>
                <thead>
                    <tr>
                        <th>#</th>
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
                            <td>{item.text}</td>
                            <td>{item.status ? (<Badge color="pink" variant="light">Completed</Badge>) : (
                                <Badge color="blue" variant="light">To Do</Badge>
                            )}</td>
                            <td>{dayjs(item.createdAt).format('DD-MM-YYYY')}</td>
                            <td>
                                <Group position='left'>
                                    <Button variant="outline" compact>Edit</Button>
                                    <Button variant="outline" compact>Delete</Button>
                                </Group>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ListTodo;