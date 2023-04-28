import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Task} from "./Task";
import {TaskType} from "./Todolist";
import {action} from "@storybook/addon-actions";


export default {
  title: 'Task/Task',
  component: Task,


} as ComponentMeta<typeof Task>;

const callBacks = {
  changeTaskStatus: action('Statuts changed'),
  changeTaskTitle: action('Title changed'),
  removeTask: action ('task removed'),
  todolistId: 'TD1'
}
const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const taskIsChecked = Template.bind({});

taskIsChecked.args = {
...callBacks,
task: {id: '1', isDone: true, title: 'JS'}
};

export const taskIsNotChecked = Template.bind({});
taskIsNotChecked.args = {
  task: {id: '1', isDone: false, title: 'JS'}
}

