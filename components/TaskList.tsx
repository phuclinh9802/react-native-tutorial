import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import ITodo from '../models/todo.model';
import TaskItem from './TaskItem';

interface ITodoListProps {
  data: ITodo[];
}

const TaskList = (props: ITodoListProps) => {
  // const [isDone, setDone] = useState(false);
  return (
    <FlatList
      style={styles.container}
      data={props.data}
      renderItem={(item: any) => {
        return <TaskItem data={item.item} />;
      }}
      keyExtractor={item => item.id}
    />
  );
};

export default TaskList;

const styles = StyleSheet.create({
  container: {
    height: 500,
    width: '100%',
    flexDirection: 'column',
    padding: 10,
    overflow: 'scroll',
  },
});
