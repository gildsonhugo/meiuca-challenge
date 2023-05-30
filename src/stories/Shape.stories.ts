import type { Meta, StoryObj } from '@storybook/angular';
import { ShapeComponent } from 'src/app/shape/shape.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<ShapeComponent> = {
  title: 'Example/Shape',
  component: ShapeComponent,
  tags: ['autodocs'],
  render: (args: ShapeComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<ShapeComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
