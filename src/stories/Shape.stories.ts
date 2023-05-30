import type { Meta, StoryObj } from '@storybook/angular';
import { ShapeComponent } from 'src/app/shared/shape/shape.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<ShapeComponent> = {
  title: 'Shape',
  component: ShapeComponent,
  tags: ['autodocs'],
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
      <app-shape>
        <p>any content</p>
      </app-shape>
      `
    }
  }
};

export default meta;
type Story = StoryObj<ShapeComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    
  },
};
