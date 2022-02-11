import { createIMG } from "./Image";

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: "Design System/Image Component",
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    imageURL: { control: "text" },
    imageALT: { control: "text" },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createIMG(args);
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = {
  imageURL: "/drawers.jpg",
  imageALT: "drawers",
};

export const Avatar = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Avatar.args = {
  imageURL: "/avatar-michelle.jpg",
  imageALT: "michelle",
};
