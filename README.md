## How to Run the Service

To run this project, follow these steps:

Clone the Repository

```bash
git clone https://github.com/Johnymiro/greenspark.git
cd greenspark
```

Install Dependencies

Ensure that you have Node.js and npm installed on your machine, then run:

```bash
npm install
```

Start the Development Server

```bash
npm start
```

This command will start the development server and open the application in your default web browser. The development server provides hot reloading, so any changes you make to the code will automatically update in the browser.

## Tooltip Component with Delayed Visibility

This project demonstrates the implementation of a custom Tooltip component in a React application using TypeScript. The Tooltip component is designed to display additional information when the user hovers over an icon. It features a fade-in/out effect and remains visible if the mouse is hovered over the tooltip itself, allowing users to interact with its contents.

#### Features

Custom Tooltip Component: Displays information when hovering over an icon, with support for including links and other interactive elements within the tooltip content.
Delayed Visibility: Implements a delay before showing and hiding the tooltip, improving user experience by preventing the tooltip from appearing or disappearing too abruptly.
Fade-in/out Effect: Enhances visual appeal with a smooth transition for the tooltip's appearance and disappearance.
Hover Persistence: Keeps the tooltip visible as long as the mouse is over it, allowing users to click on links or interact with the tooltip content.

#### Why This Approach?

The motivation behind this implementation is to enhance user experience by providing contextual information in an unobtrusive manner. The delayed visibility and hover persistence features ensure that the tooltip does not distract or annoy users by appearing too quickly or disappearing while trying to interact with its contents.

#### Technology Stack

- React: A JavaScript library for building user interfaces.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript, providing type safety and reducing potential bugs.
- CSS: Used for styling the Tooltip component and implementing the fade-in/out effect.

How to Use the Tooltip Component
The Tooltip component can be easily integrated into any part of your application. Simply import the Tooltip component and wrap any content that should appear within the tooltip:

```javascript
import Tooltip from "./Tooltip";

function App() {
  return (
    <div>
      <Tooltip>
        <p>
          Tooltip text here! You can{" "}
          <a href="/public-profile">View Public Profile</a>
        </p>
      </Tooltip>
    </div>
  );
}
```

The content inside the Tooltip component will be displayed when hovering over the 'info' icon. You can include any valid React nodes, including links, buttons, or formatted text.
