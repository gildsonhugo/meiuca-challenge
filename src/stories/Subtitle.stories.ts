import type { Meta, StoryObj } from '@storybook/angular';
import { SubtitleComponent } from 'src/app/shared/subtitle/subtitle.component';

type StoryType = SubtitleComponent & { content?: string }; 

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<StoryType> = {
  title: 'Subtitle',
  component: SubtitleComponent,
  tags: ['autodocs'],
  render: (args) => {
    const { content,  ...props } = args;
    return {
      props,
      template: `
      <app-subtitle>${content}</app-subtitle>
      `
    }
  },
  args:{
    content: 'Subtitle SM'
  },
  argTypes: {
    content: {
      control: 'text'
    }
  },
};

export default meta;
type Story = StoryObj<SubtitleComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    
  },
};
