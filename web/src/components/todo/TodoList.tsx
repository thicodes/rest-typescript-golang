import React from 'react';
import { Box } from 'rebass';
import { TodoType, QueryResponse } from './Todo';
import TodoListItem from './TodoListItem';
import Spinner from '../ui/Spinner';

type Props = {
  isLoading: boolean;
  data: QueryResponse;
};

const TodoList = ({ isLoading, data }: Props) => {
  if (isLoading) return <Spinner />;

  return (
    <Box py="22px">
      {data.map((todo: TodoType) => (
        <TodoListItem key={todo._id} todo={todo} />
      ))}
    </Box>
  );
};

export default TodoList;
