export default {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "jobTitle",
      title: "JobTitle",
      type: "string",
    },
    {
      name: "companyImage",
      title: "companyImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "dateStarted",
      title: "DateStarted",
      type: "date",
    },
    {
      name: "dateEnded",
      title: "DateEnded",
      type: "date",
    },
    {
      name: "isCurrentlyWorking",
      title: "IsCurrentlyWorking",
      type: "boolean",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
    {
      name: "points",
      title: "Points",
      type: "array",
      of: [{ type: 'string' }],
    },
    // {
    //   name: "profilePic",
    //   title: "ProfilePic",
    //   type: "image",
    //   options: {
    //     hotspot: true,
    //   },
    // },
  ],
};
