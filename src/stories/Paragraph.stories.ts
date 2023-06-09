import type { Meta, StoryObj } from '@storybook/angular';
import { ParagraphComponent } from 'src/app/shared/paragraph/paragraph.component';

type StoryType = ParagraphComponent & { content?: string }; 

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<StoryType> = {
  title: 'Paragraph',
  component: ParagraphComponent,
  tags: ['autodocs'],
  render: (args) => {
    const { content,  ...props } = args;
    return {
      props,
      template: `
      <app-paragraph>${content}</app-paragraph>
      `
    }
  },
  args:{
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas condimentum malesuada. Donec congue nisl a lacinia egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
  },
  argTypes: {
    content: {
      control: 'text'
    }
  },
};

export default meta;
type Story = StoryObj<ParagraphComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
  
  },
};
