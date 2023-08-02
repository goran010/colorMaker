# colorMaker

# Color Generator Web Application

This project is a color generator web application that allows users to generate random colors and copy the color code in different formats. The application provides three color code formats: HEX, RGB, and HSL. Users can switch between these formats and generate random colors accordingly.

## Features

- Color Formats: The application supports three color formats: HEX, RGB, and HSL.
- Random Color Generation: Users can generate random colors in any of the supported formats.
- Copy Color Code: Users can copy the generated color code to the clipboard with a single click.

## How it Works

1. **Selecting Color Format**:
   - The user can choose the color format by clicking on the corresponding tabs: HEX, RGB, or HSL.
   - The application will remember the previously selected format.

2. **Generating Random Colors**:
   - Clicking on the "Generate Color" button will generate a random color based on the currently selected format.
   - For RGB format, the application generates random values for red, green, and blue channels separately and combines them to form the color.
   - For HEX format, the application generates a random 6-digit hexadecimal color code.
   - For HSL format, the application generates random values for hue, saturation, and lightness, and combines them to form the color.

3. **Copying Color Code**:
   - Users can copy the generated color code to the clipboard by clicking on the "Copy" button next to the color value.
   - A tooltip will appear briefly, indicating that the color code has been copied.

4. **Color Style**:
   - The background color of the web page will change to the generated color.
   - If the sum of RGB values is less than 200, the color style will be adjusted to make the text visible (for dark colors).

## How to Use

1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser.
3. By default, the color format will be set to HEX.
4. Click on the "Generate Color" button to generate a random color.
5. Click on the tabs (HEX, RGB, HSL) to switch between color formats.
6. Click on the "Generate Color" button again to generate random colors in the selected format.
7. To copy the color code, click on the "Copy" button next to the color value.
8. A tooltip will appear briefly, confirming that the color code has been copied to the clipboard.

Feel free to explore and use the application to generate and copy colors in different formats!
