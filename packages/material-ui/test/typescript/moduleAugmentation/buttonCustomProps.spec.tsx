import * as React from 'react';
import Button from '@material-ui/core/Button';
import { createMuiTheme, PaletteColor, PaletteColorOptions } from '@material-ui/core/styles';

// Update the Button's extendable props options
declare module '@material-ui/core/Button' {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
  interface ButtonPropsColorOverrides {
    forbiddenPalette: false;
  }
  interface ButtonPropsSizeOverrides {
    extraLarge: true;
  }
}

declare module '@material-ui/core/styles' {
  interface Palette {
    customPalette: PaletteColor;
    forbiddenPalette: PaletteColor;
  }
  interface PaletteOptions {
    customPalette?: PaletteColorOptions;
    forbiddenPalette?: PaletteColorOptions;
  }
}

// theme typings should work as expected
const theme = createMuiTheme({
  palette: {
    customPalette: {
      main: '#000000',
    },
    forbiddenPalette: {
      main: '#000000',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'dashed' },
          style: {
            border: `2px dashed grey`,
          },
        },
        {
          props: { size: 'extraLarge' },
          style: {
            fontSize: 26,
          },
        },
      ],
    },
  },
});

<Button variant="dashed" color="customPalette" size="extraLarge">
  Custom
</Button>;
// @ts-expect-error forbidden palette used
<Button color="forbiddenPalette">
  Custom
</Button>;
