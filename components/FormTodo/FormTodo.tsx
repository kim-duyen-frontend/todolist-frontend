import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { addToDoList, getListTodo, selectCollectionTodoceSelector, setMessageForm, setTextForm, TTodolist } from '@/features';
import { Box, Button, Group, Textarea } from '@mantine/core';
import React, { useEffect } from 'react';

const getValidForm = (input_form: string, listTodo: TTodolist[]) => {
    for (let i = 0; i < listTodo.length; i++) {
        const element = listTodo[i];
        if (element.text === input_form) {
            return "This text already exists"
        }
    }
    if (input_form.length < 2 || input_form.length > 50) {
        return "The length must be greater than or equal to 50"
    } else {
        for (let i = 0; i < listTodo.length; i++) {
            const element = listTodo[i];
            if (element.text === input_form) {
                return "This text already exists"
            }
        }
    }
}
const FormTodo = () => {
    const dispatch = useAppDispatch()
    const { input_form, listTodo, message } = useAppSelector(selectCollectionTodoceSelector)

    const handleAddToDo = async () => {
        let msg = getValidForm(input_form, listTodo)
        if (msg) {
            dispatch(setMessageForm(msg))
        } else {
            await dispatch(addToDoList({ text: input_form, status: false }))
            await dispatch(getListTodo())
        }
    }

    useEffect(() => {
        dispatch(setMessageForm(" "))
    }, [input_form])

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
            {message ? <span className='text-red-500 font-bold'>{message}</span> : ""}
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