## Starting Instructions

1. Checkout the `todo` tasks on the [project board](https://github.com/zeshhaan/akbrothers/projects/2) and take ownership of a task you would like to work and move that task into `In Progress`

   > Tasks aren't added as of now. We will add the list of tasks once we discuss on how to move forward on this project and then create tasks.

2. Clone this repo locally.

   ```bash
   git clone https://github.com/zeshhaan/akbrothers.git
   ```

3. Create a local branch, give it clear and semantic name related to the task you are working on. For example, if you took the task of navbar, give it a name `feature/navbar`.

   ```bash
    git checkout -b "feature/navbar"
   ```

   This lets you to "checkout" to a new branch from the current master (or main) branch

4. After you make the changes, run the following command

   ```bash
    git status
   ```

   this will return a list of folder/files you will need to push to github
   Say, for example, you added or modified `index.html` and `styles.css`

   Then you need to add them to the list of files/folders that are required to push into github like this

   ```bash
    git add index.html styles.css
   ```

   After that, you need to add a commit message mentioning the changes you made. It should be readable, assertive and should describe the exact problem you were trying to solve.

   ```bash
    git commit -m "Fix typo in introduction to user guide"
   ```

   There are plethora of articles in the internet about writing a good commit message. Feel free to check them out. [Here is one for your reference](https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/)

   Then finally, you would are ready to push the changes

   ```bash
    git push
   ```

   > This will NOT work if you are pushing this branch for the first time. You will get a message saying that you need to set it up as an upstream. Copy that command in the message and run it again.
   > The command will look almost like this

   ```bash
    git push --set-upstream origin feature/navbar
   ```

   where `feature/navbar` is your branch name.

5. Go to the github repo. You will notice a message asking to make a Pull Request(PR). Make a PR and request someone for the review

## Roadmap

We plan to start simple and then use [11ty](https://www.11ty.dev/) as a [static site generator](https://gist.github.com/denji/7205625). You will find more info on using 11ty on the above linked documentation site. Also checkout this [free video course](https://egghead.io/courses/build-an-eleventy-11ty-site-from-scratch-bfd3) on the same.
Finally we will be deploying our 11ty based site to [Cloudflare Pages](https://pages.cloudflare.com/)
