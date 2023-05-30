import type { Meta, StoryObj } from '@storybook/angular';
import { HeadingComponent } from 'src/app/shared/heading/heading.component';

type StoryType = HeadingComponent & { content?: string }; 

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<StoryType> = {
  title: 'Heading',
  component: HeadingComponent,
  tags: ['autodocs'],
  render: (args) => {
    const { content,  ...props } = args;
    return {
      props,
      template: `
      <app-heading>${content}</app-heading>
      `
    }
  },
  args:{
    content: 'Heading SM'
  },
  argTypes: {
    content: {
      control: 'text'
    }
  },
};

export default meta;
type Story = StoryObj<HeadingComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    
  },
};
