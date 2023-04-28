import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Task} from "./Task";
import {TaskType} from "./Todolist";
import {action} from "@storybook/addon-actions";
import AppWithRedux from "./AppWithRedux";
import {reduxStoreDecorator} from "./stories/reduxStoreDecorator";


export default {
  title: 'App/WithRedux',
  component: AppWithRedux,
  decorators: [reduxStoreDecorator]

} as ComponentMeta<typeof AppWithRedux>;

const callBacks = {
  changeTaskStatus: action('Statuts changed'),
  changeTaskTitle: action('Title changed'),
  removeTask: action ('task removed'),
  todolistId: 'TD1'
}
export const Template: ComponentStory<typeof AppWithRedux> = () => <AppWithRedux  />;

// export const App = Template.bind({});
//
// taskIsChecked.args = {
//
// };



