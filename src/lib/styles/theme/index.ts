import { extendTheme } from "@chakra-ui/react";

import { config } from "./config";

// Define the extended pioneer-themed color palette
const colors = {
  pioneerGreen: {
    // Your green shades as before
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
  },
  pioneerSky: {
    // Example complementary blues
    50: '#ebf8ff',
    100: '#bee3f8',
    200: '#90cdf4',
    300: '#63b3ed',
    400: '#4299e1',
    500: '#3182ce',
    600: '#2b6cb0',
    700: '#2c5282',
    800: '#2a4365',
    900: '#1A365D',
  },
  pioneerSunset: {
    // Warm accent colors
    50: '#fff5f5',
    100: '#fed7d7',
    200: '#feb2b2',
    300: '#fc8181',
    400: '#f56565',
    500: '#e53e3e',
    600: '#c53030',
    700: '#9b2c2c',
    800: '#822727',
    900: '#63171b',
  },
  // Include other colors as needed for your theme
};


export const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors: {
    pioneerGreen: colors.pioneerGreen, // add the new color palette to the theme
    gray: colors.pioneerSky,
  },
  fonts: {
    heading: "Plus Jakarta Sans, sans-serif",
    body: "Plus Jakarta Sans, sans-serif",
  },
  components: {
    Button: {
      // Set the default style for buttons
      baseStyle: {
        fontWeight: 'bold', // Example button styling
      },
      // Variant styles
      variants: {
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'pioneerGreen.500' : 'pioneerGreen.400',
          color: 'white',
          _hover: {
            bg: 'pioneerGreen.600', // Darker green on hover
          },
        }),
        // You can define other variants such as "outline", "ghost", etc.
      },
      // Default button size and variant
      defaultProps: {
        size: 'md',
        variant: 'solid',
      },
    },
    // You can extend other components here in a similar fashion
  },
  config,
});
