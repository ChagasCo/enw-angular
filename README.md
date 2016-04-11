# ENW-Angular

## Getting Started
1. Pull the repo down using `git clone https://github.com/ChagasCo/enw-angular.git`
2. Open a terminal window and cd into the root directory (enw-angular)
3. run `gulp serve` - which will start the gulp build processes and server

## Code Workflow
---
The method used for this repository is issue per branch. Each outstanding unit of work is an issue, you can find a list of issue at [https://github.com/ChagasCo/enw-angular/issues](https://github.com/ChagasCo/enw-angular/issues).

There are strict naming conventions for commit messages, branch names and pull requests. Please adhere to the following guidelines _assuming you're in your local git repo_:
1. pull the latest code from master `git pull origin master`
2. create branch for your code changes `git checkout -b enw-<short description>-<issue #>`
  For example: `git checkout -b enw-bookingform-39` 
  _* prefix with 'enw'_
  _* The short description must have no spaces and all lowercase. Try use a maximum of 2 words_
3. do code changes
4. add code changes to staging `git add -A` or `git add <file path>`

5. run the commit npm command `npm run commit`
   **don't use** 'git commit' you can use it, although the other command `npm run commit` allows you to easily follow the commit naming convention
6. using the commitizen tool, it will display a series of options to choose
  **Select the type of commit**
  <image>
  **Scope**
  _all lowercase. Recommended to use the branch short-description_
  <image>
  **Short description**
  _all lowercase_
  <image>
  **Long description (Optional)**
  _normal case_
  <image>
  **List of breaking changes or issues closed**
  _all lowercase_
  <image>
  Example: closes #24
  _github will automatically reference the issue (#24)_
7. push the code changes to the repo `git push origin <branch name>`
  Example: `git push origin enw-bookingform-39`
* Repeat step 3 and 7 for each any further code changes
8. once the issue is resolved, lodge a pull request with the name of the issue as the pull request name
9. allow for peer review, assign/mention another team member to the pull request and get them to review the code
10. once reviewed, select "Squash and Merge commit" to merge the issue into master as one commit
11. delete the branch in the remote repo
12. _local repo_: checkout back to master `git checkout master`
13. delete the branch you just worked on `git branch -d enw-bookingform-39`

14. Rinse and repeat this process for every issue.
