import type { Meta, StoryObj } from '@storybook/angular';
import { ParagraphComponent } from 'src/app/paragraph/paragraph.component';



// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<ParagraphComponent> = {
  title: 'Example/Paragraph',
  component: ParagraphComponent,
  tags: ['autodocs'],
  render: (args: ParagraphComponent) => ({
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
type Story = StoryObj<ParagraphComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
