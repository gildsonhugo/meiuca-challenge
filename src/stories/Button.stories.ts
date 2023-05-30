import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from 'src/app/shared/button/button.component';


// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<ButtonComponent> = {
  title: 'Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  args: {
    label: "Button test"
  },
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Button label',
      description: 'Texto do botão',
      type: {
        name: 'string',
        required: true
      }
    }
  }
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Button',
  },
};
