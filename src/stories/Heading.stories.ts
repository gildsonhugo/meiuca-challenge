import type { Meta, StoryObj } from '@storybook/angular';
import { HeadingComponent } from 'src/app/heading/heading.component';


// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<HeadingComponent> = {
  title: 'Example/Heading',
  component: HeadingComponent,
  tags: ['autodocs'],
  render: (args: HeadingComponent) => ({
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
type Story = StoryObj<HeadingComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
