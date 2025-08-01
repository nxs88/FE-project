import { createTheme } from '@mantine/core';
import type { MantineTheme } from '@mantine/core';

export const theme = createTheme({
  fontFamily: 'Open Sans , sans-serif',
  primaryColor: 'indigo',
  primaryShade: 7,
  colors: {
    indigo: [
      '#EDF2FF',
      '#DBE4FF',
      '#BAC8FF',
      '#91A7FF',
      '#748FFC',
      '#5C7CFA',
      '#4C6EF5',
      '#4263EB',
      '#3B5BDB',
      '#364FC7',
    ],
  },
  components: {
    Button: {
      styles: (theme: MantineTheme, context: { disabled: boolean }) => ({
        root: {
          ...(context.disabled && {
            backgroundColor: theme.colors.indigo[2],
          }),
        },
      }),
    },
  },
});
