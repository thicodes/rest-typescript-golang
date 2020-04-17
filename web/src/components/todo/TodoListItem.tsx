import React from 'react';
import { TodoType } from './TodoList';
import { Box } from 'rebass';

type TodoProps = { todo: TodoType };

const Todo = ({ todo }: TodoProps) => {
  const { task, isCompleted } = todo;
  return (
    <Box py="6px" my="3" sx={{ cursor: 'pointer' }}>
      {task}
    </Box>
  );
};

export default Todo;
