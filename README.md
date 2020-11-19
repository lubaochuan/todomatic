# TodoMatic

Please follow [this tutorial](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning) to build a todo list React web app.

The tutorial is also captured in the following PDFs:
* [part 1](docs/todomatic_1.pdf)
* [part 2](docs/todomatic_2.pdf)
* [part 3](docs/todomatic_3.pdf)
* [part 4](docs/todomatic_4.pdf)

# Step 1 Sandbox
You can setup a local React development environment and follow along with the instructions in the tutorial. It is a bit easier to use https://codesandbox.io/ in the cloud. Codesandbox manages packages for you so you don't need to install them. It integrates with github so you can perform version control and deploy the finished app from github.
* Go to https://codesandbox.io/ and click on "Create Sandbox".
* Choose "React" as your template.
* Follow the instructions in the tutorial to implement the app in your sandbox.
* Test out the  the app works as expected in your sandbox.

# Step 2 GitHub
* Create a github repository from your sandbox.
* click on the github icon on the left bar (you may need to fork the sandbox to own it)
* click on "GitHub" to sign in
* name your repository and click on "create repository"
* Go to your github account to verify that the repository is created with your code in it.

# Step 3 Netlify
* Create an account and login on https://www.netlify.com.
* Click on "New site from Git".
* Click on "GitHub" for continuous deployment. It should promote you to log in to github unless you have already done so.
* Search and find the repository for your todo app and select it. Note: you need to set an environment variable "CI" to "false" (without quotes), which addresses an issue discussed here.
* Click on "Deploy site". Once the deployment is done you should get a URL pointing to your site:

# Outline of changes
Here are the outline of the tutorial with links to "diffs" showing the changes you need to make to get to that point:
* Our app's user stories
* Project starter code ([diff](https://github.com/lubaochuan/todomatic/commit/2a9d1c9171b004188ccb932594b5271004a7b747))
* Defining our first component
* Make a `<Todo />`
* Make a unique `<Todo />` ([diff](https://github.com/lubaochuan/todomatic/commit/bbb61664dd2be40ed2f8928ecb599c226f622383))
* Tasks as data
* Rendering with iteration
* Unique keys ([diff](https://github.com/lubaochuan/todomatic/commit/113a50dd4624279563a4362d13d82dd42a48b145))
* Componentizing the rest of the app
* Importing all our components ([diff](https://github.com/lubaochuan/todomatic/commit/fee184cdf19b733b01b3269354e1c117583cf652))
* Handling events
* Callback props ([diff](https://github.com/lubaochuan/todomatic/commit/d2580518ee15caf6a1110afedfd6abb785f7195a))
* State and the `useState` hook
* Putting it all together: Adding a task ([diff](https://github.com/lubaochuan/todomatic/commit/3b127a4407a68aa14bfccf675dfa16ba8ea50912))
* Detour: counting tasks ([diff](https://github.com/lubaochuan/todomatic/commit/841f502fa9c911da1fbc00ac8812374843f09687))
* Completing a task ([diff](https://github.com/lubaochuan/todomatic/commit/6ecb20f25ad6dfead346e28cbd291e508bf8328c))
* Deleting a task
* Deleting tasks from state and UI ([diff](https://github.com/lubaochuan/todomatic/commit/2a4a81421c4eea2237c10aa5cd666e60bbc488cf))
* Editing the name of a task
* A UI for editing
* Conditional rendering
* Toggling the `<Todo />` templates ([diff](https://github.com/lubaochuan/todomatic/commit/fb3c15cb45c20faf123c6d9c22454eabfdd49862))
* Editing from the UI ([diff](https://github.com/lubaochuan/todomatic/commit/cf1c0c9bb50c5e59948e1e6b917a7b23ebfe9a76))
* Back to the filter buttons ([diff](https://github.com/lubaochuan/todomatic/commit/bb9f2adff2c694a962cff5828d746cd6a98f1ae3))
