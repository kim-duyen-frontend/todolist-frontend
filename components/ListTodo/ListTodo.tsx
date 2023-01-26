import { useAppSelector } from '@/app/hooks';
import { selectCollectionTodoceSelector } from '@/features';
import { Badge, Table } from '@mantine/core';
import React from 'react';
import dayjs from 'dayjs'

const ListTodo = () => {
    const { listTodo } = useAppSelector(selectCollectionTodoceSelector)
    return (
        <div className='overflow-x-auto'>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Text</th>
                        <th>Status</th>
                        <th>Created at</th>
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
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ListTodo;