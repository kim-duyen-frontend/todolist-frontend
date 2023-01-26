import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { addToDoList, getListTodo, selectCollectionTodoceSelector, setTextForm } from '@/features';
import { Box, Button, Group, Textarea } from '@mantine/core';
import React from 'react';

const FormTodo = () => {
    const dispatch = useAppDispatch()
    const { input_form } = useAppSelector(selectCollectionTodoceSelector)
    
    const handleAddToDo = async () => {
        await dispatch(addToDoList({ text: input_form, status: false }))
        await dispatch(getListTodo())
    }
    return (
        <Box
            sx={(theme) => ({
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                padding: theme.spacing.xl,
                borderRadius: theme.radius.md,
                cursor: 'pointer',
            })}
        >
            <Textarea
                placeholder="Your text..."
                label="Your text"
                withAsterisk
                onChange={(event) => dispatch(setTextForm(event.target.value))}
            />

            <Group position="right">
                <Button
                    className='hover: bg-transparent my-3'
                    variant="outline"
                    onClick={handleAddToDo}
                >
                    Add Todo
                </Button>
            </Group>
        </Box>
    );
};

export default FormTodo;