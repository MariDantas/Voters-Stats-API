# Voters Stats API

## Description
The **Voters Stats API** project offers a simple and insightful way to access and analyze citizen statistics within two distinct cities: Amsterdam and Berlin. Leveraging the fetch API, this application interacts with an API containing fictional data comprising the ages of citizens in these cities. Upon selecting either Amsterdam or Berlin from the dropdown menu, the fetch API retrieves a JSON file detailing citizen ages in the chosen location. This data is transformed into an array and subsequently utilized by the `getVotersCount()` function.

As the `getVotersCount()` function iterates through the array, it evaluates whether each citizen's age meets or surpasses the voting threshold of 18 years. When this condition is satisfied, the counter increments. In the end, the browser displays the count of citizens eligible to vote based on the provided data.

## Executing the Project
To experience the **Voters Stats API** in action, follow these steps using the "Live Server" extension in Visual Studio Code:

### Step 1: Download and Install Visual Studio Code
If you haven't already, download and install Visual Studio Code from the official website.

### Step 2: Open the Project Folder
Launch Visual Studio Code and open the folder containing your **Voters Stats API** files.

### Step 3: Install the "Live Server" Extension
Click on the "Extensions" icon in the left sidebar (or press `Ctrl+Shift+X`). In the search bar, type "Live Server" and select the extension published by Ritwick Dey. Click the "Install" button to integrate the extension into your development environment.

### Step 4: Start the Live Server
After installing the "Live Server" extension, open the HTML file of your project in Visual Studio Code. You can initiate the "Live Server" extension using any of the following methods:

* **Right-Click and Open with Live Server:** Right-click anywhere within the HTML file or over the file name in the "Explorer" tab and select "Open with Live Server". This action will start the local server and automatically open your project in your default web browser.
* **Use the Status Bar:** Alternatively, click the "Go Live" button located on the status bar at the bottom of the Visual Studio Code window. Clicking it will activate the local server and launch your project in a web browser.
* **Keyboard Shortcut:** For keyboard enthusiasts, use `Alt+L` followed by `Alt+O` to start the "Live Server" extension.

### Step 5: Explore Citizen Voting Eligibility
With the **Voters Stats API** loaded in your web browser, select a city from the dropdown menu (Amsterdam or Berlin). The application will dynamically retrieve citizen age data and calculate the number of eligible voters, displaying the result on the page.

### Step 6: Stopping the Server
To halt the local server, you have two options:
* Close Visual Studio Code and the web browser tab displaying the project interface.
* Click the port number displayed in the status bar (usually located at the bottom right corner of Visual Studio Code), which will also terminate the server.

The **Voters Stats API** project, due to its use of modules, requires execution through the "Live Server" extension to function seamlessly. By following these instructions, you can effortlessly interact with the application and gain valuable insights into citizen voting eligibility.

## Helpful Links
* **[Learn JavaScript](https://www.learnjavascript.com/)**: Deepen your JavaScript knowledge and explore its capabilities.
* **[Fetch API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API):** Learn about the Fetch API and how to use it to make network requests in JavaScript.
* **[JavaScript Modules Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules):** Get a comprehensive understanding of JavaScript modules and their role in structuring code.
* **[Visual Studio Code Download](https://code.visualstudio.com/):** Download Visual Studio Code to enhance your coding experience and productivity.

These resources will empower your journey with the **Voters Stats API** by offering valuable insights into JavaScript, network requests, modules, and code editing. Discover the potential of data-driven analysis and interactivity with this dynamic project! 🗳️📊
