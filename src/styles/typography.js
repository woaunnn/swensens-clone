// Typography system for DB Helvethaica X
export const typography = {
  display: {
    large: {
      fontSize: '80px',
      fontWeight: 700,
      lineHeight: '120%',
      letterSpacing: '0.75px',
    },
    medium: {
      fontSize: '52px',
      fontWeight: 700,
      lineHeight: '120%',
      letterSpacing: '0.75px',
    },
    small: {
      fontSize: '46px',
      fontWeight: 700,
      lineHeight: '120%',
      letterSpacing: '0.75px',
    },
  },
  headline: {
    large: {
      fontSize: '46px',
      fontWeight: 700,
      lineHeight: '120%',
      letterSpacing: '0.25px',
    },
    medium: {
      fontSize: '38px',
      fontWeight: 700,
      lineHeight: '120%',
      letterSpacing: '0.25px',
    },
    small: {
      fontSize: '32px',
      fontWeight: 700,
      lineHeight: '120%',
      letterSpacing: '0.25px',
    },
  },
  title: {
    lg: {
      bold: {
        fontSize: '32px',
        fontWeight: 700,
        lineHeight: '100%',
        letterSpacing: '0.25px',
      },
      medium: {
        fontSize: '32px',
        fontWeight: 600,
        lineHeight: '100%',
        letterSpacing: '0.25px',
      },
    },
    md: {
      bold: {
        fontSize: '28px',
        fontWeight: 700,
        lineHeight: '100%',
        letterSpacing: '0.25px',
      },
      medium: {
        fontSize: '28px',
        fontWeight: 600,
        lineHeight: '100%',
        letterSpacing: '0.25px',
      },
    },
    sm: {
      bold: {
        fontSize: '22px',
        fontWeight: 700,
        lineHeight: '100%',
        letterSpacing: '0.25px',
      },
      medium: {
        fontSize: '22px',
        fontWeight: 600,
        lineHeight: '100%',
        letterSpacing: '0.25px',
      },
    },
  },
  label: {
    large: {
      fontSize: '26px',
      fontWeight: 600,
      lineHeight: '100%',
      letterSpacing: '0.25px',
    },
    medium: {
      fontSize: '22px',
      fontWeight: 600,
      lineHeight: '100%',
      letterSpacing: '0.25px',
    },
    small: {
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: '100%',
      letterSpacing: '0.25px',
    },
  },
  body: {
    lg: {
      fontSize: '26px',
      fontWeight: 400,
      lineHeight: '120%',
      letterSpacing: '0.15px',
    },
    md: {
      bold: {
        fontSize: '22px',
        fontWeight: 600,
        lineHeight: '120%',
        letterSpacing: '0.15px',
      },
      regular: {
        fontSize: '22px',
        fontWeight: 400,
        lineHeight: '120%',
        letterSpacing: '0.15px',
      },
    },
    sm: {
      bold: {
        fontSize: '18px',
        fontWeight: 600,
        lineHeight: '120%',
        letterSpacing: '0.15px',
      },
      regular: {
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '120%',
        letterSpacing: '0.15px',
      },
    },
    xs: {
      bold: {
        fontSize: '18px',
        fontWeight: 600,
        lineHeight: '120%',
        letterSpacing: '0.15px',
      },
      regular: {
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '120%',
        letterSpacing: '0.15px',
      },
    },
  },
};

// Helper function to apply typography styles
export const applyTypography = (variant) => `
  font-size: ${variant.fontSize};
  font-weight: ${variant.fontWeight};
  line-height: ${variant.lineHeight};
  letter-spacing: ${variant.letterSpacing};
`;
