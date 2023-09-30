export interface FormData {
  title: string;
  type: string;
  subtitle: string | null;
  toggleOptions: {
    trueOption: string;
    falseOption: string;
  } | null;
  checkBoxOption: string | null;
}

export default FormData;

const personalInfo = [
  {
    title: "First Name",
    type: "text",
    subtitle: null,
    toggleOptions: null,
    checkBoxOption: null,
  },
  {
    title: "Last Name",
    type: "text",
    subtitle: null,
    toggleOptions: null,
    checkBoxOption: null,
  },
  {
    title: "Email Name",
    type: "email",
    subtitle: null,
    toggleOptions: null,
    checkBoxOption: null,
  },
  {
    title: "Phone",
    type: "tel",
    subtitle: "(without dial code)",
    toggleOptions: {
      trueOption: "Show",
      falseOption: "Hide",
    },
    checkBoxOption: "Internal",
  },
  {
    title: "Nationality",
    type: "text",
    subtitle: null,
    toggleOptions: {
      trueOption: "Show",
      falseOption: "Hide",
    },
    checkBoxOption: "Internal",
  },
  {
    title: "Current Residence",
    type: "text",
    subtitle: null,
    toggleOptions: {
      trueOption: "Show",
      falseOption: "Hide",
    },
    checkBoxOption: "Internal",
  },
  {
    title: "ID Number",
    type: "text",
    subtitle: null,
    toggleOptions: {
      trueOption: "Show",
      falseOption: "Hide",
    },
    checkBoxOption: "Internal",
  },
  {
    title: "Date of Birth",
    type: "date",
    subtitle: null,
    toggleOptions: {
      trueOption: "Show",
      falseOption: "Hide",
    },
    checkBoxOption: "Internal",
  },
  {
    title: "Gender",
    type: "text",
    subtitle: null,
    toggleOptions: {
      trueOption: "Show",
      falseOption: "Hide",
    },
    checkBoxOption: "Internal",
  },
];

const profileData = [
  {
    title: "Education",
    type: "text",
    subtitle: null,
    toggleOptions: {
      trueOption: "Show",
      falseOption: "Hide",
    },
    checkBoxOption: "Mandatory",
  },
  {
    title: "Experience",
    type: "text",
    subtitle: null,
    toggleOptions: {
      trueOption: "Show",
      falseOption: "Hide",
    },
    checkBoxOption: "Mandatory",
  },
  {
    title: "Resume",
    type: "text",
    subtitle: null,
    toggleOptions: {
      trueOption: "Show",
      falseOption: "Hide",
    },
    checkBoxOption: "Mandatory",
  },
];

export { personalInfo, profileData };
