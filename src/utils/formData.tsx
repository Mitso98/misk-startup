const personalInfo = [
  {
    title: "First Name",
    type: "text",
    subtitle: null,
    rightDiv: null,
  },
  {
    title: "Last Name",
    type: "text",
    subtitle: null,
    rightDiv: null,
  },
  {
    title: "Email Name",
    type: "email",
    subtitle: null,
    rightDiv: null,
  },
  {
    title: "Phone",
    type: "tel",
    subtitle: "(without dial code)",
    rightDiv: {
      toggleOptions: {
        trueOption: "Show",
        falseOption: "Hide",
      },
      checkBoxOption: "Internal",
    },
  },
  {
    title: "Nationality",
    type: "text",
    subtitle: null,
    rightDiv: {
      toggleOptions: {
        trueOption: "Show",
        falseOption: "Hide",
      },
      checkBoxOption: "Internal",
    },
  },
  {
    title: "Current Residence",
    type: "text",
    subtitle: null,
    rightDiv: {
      toggleOptions: {
        trueOption: "Show",
        falseOption: "Hide",
      },
      checkBoxOption: "Internal",
    },
  },
  {
    title: "ID Number",
    type: "text",
    subtitle: null,
    rightDiv: {
      toggleOptions: {
        trueOption: "Show",
        falseOption: "Hide",
      },
      checkBoxOption: "Internal",
    },
  },
  {
    title: "Date of Birth",
    type: "date",
    subtitle: null,
    rightDiv: {
      toggleOptions: {
        trueOption: "Show",
        falseOption: "Hide",
      },
      checkBoxOption: "Internal",
    },
  },
  {
    title: "Gender",
    type: "text",
    subtitle: null,
    rightDiv: {
      toggleOptions: {
        trueOption: "Show",
        falseOption: "Hide",
      },
      checkBoxOption: "Internal",
    },
  },
];

const profileData = [
  {
    title: "Education",
    type: "text",
    subtitle: null,
    rightDiv: {
      toggleOptions: {
        trueOption: "Show",
        falseOption: "Hide",
      },
      checkBoxOption: "Mandatory",
    },
  },
  {
    title: "Experience",
    type: "text",
    subtitle: null,
    rightDiv: {
      toggleOptions: {
        trueOption: "Show",
        falseOption: "Hide",
      },
      checkBoxOption: "Mandatory",
    },
  },
  {
    title: "Resume",
    type: "text",
    subtitle: null,
    rightDiv: {
      toggleOptions: {
        trueOption: "Show",
        falseOption: "Hide",
      },
      checkBoxOption: "Mandatory",
    },
  },
];

export { personalInfo, profileData };
