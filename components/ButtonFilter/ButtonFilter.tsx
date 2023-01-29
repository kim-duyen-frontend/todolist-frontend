import React from 'react';
import { Group, Button } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { selectCollectionTodoceSelector, setFilterTypeTodos } from '@/features';

const ButtonFilter = () => {
    const dispatch = useAppDispatch()
    const { type_filter_todos } = useAppSelector(selectCollectionTodoceSelector)
    return (
        <Group position="right">
            <Button
                variant="outline"
                onClick={() => dispatch(setFilterTypeTodos(!type_filter_todos))}
            >
                To Do
            </Button>
            <Button variant="outline">
                Completed
            </Button>
        </Group>
    );
};

export default ButtonFilter;