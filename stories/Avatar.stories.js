import { createAvatar } from "./Avatar";

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: "Design System/Avatar Component",
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    hasCaption: { control: "boolean" },
    name: { control: "text" },
    date: { control: "text" },
    avatarALT: { control: "text" },
    avatarURL: { control: "text" },
  },
  args: {
    hasCaption: false,
    name: "Michelle Appleton",
    date: "28 June 2020",
    avatarALT: "michelle",
    avatarURL: "/avatar-michelle.jpg",
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = args => {
  return createAvatar(args);
};

export const Default = Template.bind({});
Default.args = {};

export const AvatarWithCaption = Template.bind({});
AvatarWithCaption.args = {
  ...Default.args,
  hasCaption: true,
};
