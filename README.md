# Netflix React

This is a simple React application that showcases Netflix features using various components. It includes a banner, card sections, FAQs, and a footer. Users can learn about Netflix's offerings, such as watching on different devices, creating profiles for kids, and downloading series for offline viewing.

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Components](#components)

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/BiBCast/netflix-react.git
   ```

2. Navigate to the project directory:

   ```
   cd netflix-react
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm run dev
   ```

5. Open your web browser and go to [http://localhost:5173](http://localhost:5173) to view the application.

## Usage

This React application provides information about Netflix features and how to use the streaming service on different devices. It consists of various components, each with its own purpose:

### Banner

The `Banner` component is responsible for displaying a banner at the top of the page.

### Card

The `Card` component is used to showcase different Netflix features. It takes the following props:

- `title`: A string representing the card's title.
- `paragraf`: A string containing the card's description.
- `img`: The URL to an image illustrating the feature.
- `isImageRight`: A boolean indicating whether the image should be displayed on the right side of the card.

### CardFaq

The `CardFaq` component displays frequently asked questions about Netflix.

### Footer

The `Footer` component is responsible for rendering the page footer.

### Header

The `Header` component renders the header section of the page.

### Home

The `Home` component is not explicitly described but seems to be part of the front page layout.

### Separator

The `Separator` component adds a visual separator between different sections of the page.
