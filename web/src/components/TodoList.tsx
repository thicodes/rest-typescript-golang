import React from 'react';
import { useQuery, useMutation, queryCache } from 'react-query';
import Todo from './Todo';
import { Text, Box } from 'rebass';
import { Label, Input } from '@rebass/forms';
import { fetch } from '../fetch';

export type TodoType = {
  _id: string;
  task: string;
  isCompleted?: boolean;
};

const TodoList = () => {
  const [task, setTask] = React.useState('');

  const fetchTodo = async () => await fetch('http://localhost:5000/api/todos');
  const { status, data, error, isFetching } = useQuery('todos', fetchTodo);
  const [mutatePostTodo] = useMutation(
    (task) => fetch('http://localhost:5000/api/todos', { method: 'POST', body: { task } }),
    {
      onMutate: (task) => {
        const previousValue = queryCache.getQueryData('todos');

        queryCache.setQueryData('todos', (old: Array<TodoType>) => [
          ...old,
          { _id: Math.floor(Math.random() * 100), task },
        ]);

        return previousValue;
      },
      onError: (err, variables, previousValue) => queryCache.setQueryData('todos', previousValue),
      onSuccess: () => {
        setTask('');
      },
      onSettled: () => queryCache.refetchQueries('todos'),
    },
  );
  return (
    <>
      {status === 'loading' ? (
        'Loading...'
      ) : (
        <>
          <Text fontSize={6} fontWeight="bold">
            Todo List
          </Text>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              mutatePostTodo(task as any);
            }}
          >
            <Input type="text" onChange={(event) => setTask(event.target.value)} value={task} />
          </form>
          <Box py="22px">
            {data.map((todo: TodoType) => (
              <Todo key={todo._id} todo={todo} />
            ))}
          </Box>
        </>
      )}
    </>
  );
};

export default TodoList;
