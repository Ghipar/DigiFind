const mainColors = {
  Cgreen: '#134342',
  CPurple: '#2e1065',
  CRed: '#b91c1c',
};

export const colors = {
  primary: mainColors.CRed,
  secondary: mainColors.CGreen,
  white: 'white',
  black: 'black',
  text: {
    default: 'black',
    secondary: mainColors.CGreen,
  },
  button: {
    default: {
      backgroundColor: mainColors.CGreen,
      textColor: 'black',
    },
    secondary: {
      backgroundColor: 'black',
      textColor: mainColors.CGreen,
    },
  },
};
