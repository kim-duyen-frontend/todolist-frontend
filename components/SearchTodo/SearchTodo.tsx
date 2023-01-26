import { Group, TextInput } from '@mantine/core';
import React from 'react';

const SearchTodo = () => {
    return (
        <Group position='center'>
            <TextInput
                className='w-1/2'
                placeholder="Search text..."
                withAsterisk
            />
        </Group>
    );
};

export default SearchTodo;