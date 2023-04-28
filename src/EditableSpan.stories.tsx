import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {EditableSpan} from "./EditableSpan";


export default {
  title: 'Todolist/EditacleSpan',
  component: EditableSpan,


} as ComponentMeta<typeof EditableSpan>;

const callBacks = {
  onChange: action('Span changed')

}
const Template: ComponentStory<typeof EditableSpan> = (args) => <EditableSpan {...args} />;

export const taskIsChecked = Template.bind({});

taskIsChecked.args = {
...callBacks,
value: 'span'
};



