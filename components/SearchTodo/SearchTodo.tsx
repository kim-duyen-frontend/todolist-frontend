import { useAppDispatch } from '@/app/hooks';
import { setSearchText } from '@/features';
import { Group, TextInput } from '@mantine/core';
import React from 'react';

const SearchTodo = () => {
    const dispatch = useAppDispatch()
    return (
        <Group position='center'>
            <TextInput
                className='w-1/2'
                placeholder="Search text..."
                onChange={(event) => dispatch(setSearchText(event.target.value))}
                withAsterisk
            />
        </Group>
    );
};

export default SearchTodo;