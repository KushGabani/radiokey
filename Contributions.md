# Radiokey

[![License: GNU](https://img.shields.io/badge/License-GNU-green.svg)](https://opensource.org/licenses/gpl-license)

---

## Request a New Feature

To request a new feature for the discord music bot, you must first create a new GitHub issue that should follow the
following format

`Request:<feature-name>`

## Contributing

In case where you want to contribute a new feature yourself, fix any bugs or resolve an Issue...

1. Fork the repository
2. Clone the forked repository on your system
3. Follow the `Set up the project on a local machine` steps from [ReadMe.md](https://github.com/KushGabani/radiokey/blob/main/ReadMe.md) starting from step 3
4. Set up syncing from the original repository
    ```shell
    git remote add upstream https://github.com/KushGabani/radiokey.git
    ```
5. Ensure the configuration looks correct.
    ```shell
    git remote -v
    ```
   Output:
    ```shell
    origin    https://github.com/YOUR_USER_NAME/radiokey.git (fetch)
    origin    https://github.com/YOUR_USER_NAME/radiokey.git (push)
    upstream    https://github.com/KushGabani/radiokey.git (fetch)
    upstream    https://github.com/KushGabani/radiokey.git (push)
    ```
6. Raise a new GitHub issue named "Request Access: <your name>" to get access to test the bot locally if you don't have already
7. Create a new branch for your contribution with the branch following the relevant format below
   - To propose a new feature

     `feat/<feature-name>-<firstname and lastname initials>`

     For example, to add a new feature for play, you shall create the branch with the name `feat/play-KG`
   - To fix a bug / resolve an issue If an issue doesn't exist for that bug, then first created a new issue
     `fix/i<issue-number>-<firstname and lastname initials>`

     For example, to fix a typo in issue #10, you shall create the branch with the name `fix/i10-KG`
   - To translate `README.md` and `Contributions.md`
     `docs/<language>-<firstname and lastname initials>`    

     For example, to add a new translations in English, you shall create the branch with the name `docs/EN-KG`
8. Make sure you run `npm run format` to let prettier automatically format the files to follow the formatting guidelines 
9. Commit the changes locally and push them to your forked repository
10. Before creating a pull request make sure you have completed the following checklist
    - [ ] Followed the proper guidelines above
    - [ ] Provided comments to necessary parts of the code
    - [ ] Properly formatted the code using prettier
    - [ ] Tested the bot locally and it works fine
11. Create a new pull request aiming to merge with the main branch
12. The pull request will be reviewed and accepted if there are no bugs and it follows proper formatting guidelines

## Add your name to the list of Contributors NOW!
1. Star the Repository
2. Follow [Kush Gabani's GitHub Profile](https://github.com/KushGabani)
3. Fork the repository
4. Provided at least one of your pull requests is accepted.

## Existing Contributors
Given you already have set up the codebase locally as described in the instructions. Before working on a new feature, make sure you sync your cloned repository with the original [parent repository](https://github.com/KushGabani/radiokey) using the following command
```shell
git fetch upstream
```
To hard reset your main branch with the KushGabani/radiokey main:
```shell
git reset --hard upstream/main
```
## Template for contributing a new feature 
When adding a new feature, make sure you create a new file for named `src/actions/<feature-name>.js`. Inside this file follow the template given below
```javascript
module.exports = {
    aliases: [""], // a list of aliases
    category: "<category>", // "core" || "action",
    utilization: "@<action-name>",
    
    // sometimes the args paramter may be not be needed.
    execute(client, messages, args) {
        // TODO: your code goes here
    }
}
```