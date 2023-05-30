import { CardComponent as MetaCardComponent } from 'src/app/shared/card/card.component';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { SharedModule } from 'src/app/shared/shared.module';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<MetaCardComponent> = {
  title: 'Card',
  component: MetaCardComponent,
  decorators: [
    moduleMetadata({
      imports: [ SharedModule ]
    })
  ],
  tags: ['autodocs'],
  render: (args: MetaCardComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  args:{
    heading: "Heading SM",
    subtitle: "Subtitle SM",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas condimentum malesuada. Donec congue nisl a lacinia egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    buttonLabel: "Button label"
  },
  argTypes: {
    
  },
};

export default meta;
type Story = StoryObj<MetaCardComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    
  },
};
