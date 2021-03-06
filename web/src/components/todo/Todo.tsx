import React from 'react';
import { useQuery, useMutation, queryCache, MutateFunction, MutationOptions, MutationFunction } from 'react-query';
import { Text } from 'rebass';
import { Formik, Form, FormikHelpers } from 'formik';
import TextField from '../form/TextField';
import { fetch } from '../../fetch';

export type TodoType = {
  _id: string;
  task: string;
  isCompleted?: boolean;
};

export type QueryResponse = Array<TodoType>;
type TodoCreateMutationVariables = string;
type MutateConfig = MutationOptions<QueryResponse, TodoCreateMutationVariables>;

type Values = {
  task: string;
};

const TodoList = () => {
  const initialValues = {
    task: '',
  };
  const onSubmit = (values: Values, formikAction: FormikHelpers<Values>) => {
    const config: MutateConfig = {
      onMutate: () => {
        const previousValue = queryCache.getQueryData('todos');

        queryCache.setQueryData('todos', (old: Array<TodoType>) => [
          ...old,
          { _id: Math.floor(Math.random() * 100), task: values.task },
        ]);

        return previousValue;
      },
      onError: (err, variables, previousValue) => queryCache.setQueryData('todos', previousValue),
      onSuccess: () => {
        formikAction.resetForm();
      },
      onSettled: () => queryCache.refetchQueries('todos'),
    };
    todoCreate(values.task, config);
  };
  const fetchTodo = async () => await fetch('http://localhost:5000/api/todos');
  const { status, data } = useQuery('todos', fetchTodo);
  const [todoCreate] = useMutation<QueryResponse, TodoCreateMutationVariables>((task) =>
    fetch('http://localhost:5000/api/todos', { method: 'POST', body: { task } }),
  );
  const isLoading: boolean = !!(status === 'loading');
  return (
    <>
      <Text fontSize={6} fontWeight="bold">
        Todo List
      </Text>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange }) => (
          <Form>
            <TextField name="task" onChange={handleChange} value={values.task} />
          </Form>
        )}
      </Formik>
      <TodoList data={data} isLoading={isLoading} />
      )}
    </>
  );
};

export default TodoList;
