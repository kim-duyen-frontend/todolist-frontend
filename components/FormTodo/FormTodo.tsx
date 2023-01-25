import { Box, Button, Textarea } from '@mantine/core';
import React from 'react';

const FormTodo = () => {
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
            />
            <div className='flex justify-end my-3 gap-x-1.5'>
                <Button className='hover: bg-transparent' variant="outline">
                    Add Todo
                </Button>
            </div>
        </Box>
    );
};

export default FormTodo;