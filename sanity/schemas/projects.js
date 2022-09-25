export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "title",
      description: "Title of the project",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "summary",
      title: "summary",
      type: "text",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
    {
      name: "linkToBuild",
      title: "LinkToBuild",
      type: "url",
    },
    // {
    //   name: "profilePic",
    //   title: "ProfilePic",
    //   type: "image",
    //   options: {
    //     hotspot: true,
    //   },
    // },
    // {
    //   name: "dateStarted",
    //   title: "DateStarted",
    //   type: "date",
    // },
    // {
    //   name: "dateEnded",
    //   title: "DateEnded",
    //   type: "date",
    // },
    // {
    //   name: "isCurrentlyWorking",
    //   title: "IsCurrentlyWorking",
    //   type: "boolean",
    // },
  ],
};
