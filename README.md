# ENW-Angular

## Getting Started
1. Open terminal and navigate to a directory
2. Pull the repo down using `git clone https://github.com/ChagasCo/enw-angular.git`
3. Change directory into enw-angular `cd enw-angular`
4. Install project dependencies by running `npm install & bower install
5. Check if everything builds correctly with `gulp`
  - If the gulp command is not found, run this command `sudo npm install -g gulp`
5. Build the code and start the lite sevrer with `gulp serve` 
  - You can now make changes in the code and save, the browser will refresh for you

## Code Workflow
---
The method used for this repository is issue per branch. Each outstanding unit of work is an issue, you can find a list of issue at [https://github.com/ChagasCo/enw-angular/issues](https://github.com/ChagasCo/enw-angular/issues).

There are strict naming conventions for commit messages, branch names and pull requests. Please adhere to the following guidelines:
_assuming you're in your local git repo_

1. Pull the latest code from master `git pull origin master`

2. Create branch for your code changes `git checkout -b enw-<short description>-<issue #>`
  For example: `git checkout -b enw-bookingform-39` 
  _* prefix with 'enw'_
  _* The short description must have no spaces and all lowercase. Try use a maximum of 2 words_

3. Do code changes

4. Add code changes to staging `git add -A` or `git add <file path>`

5. Run the commit npm command `npm run commit`
   **don't use** 'git commit' 
   `npm run commit` allows you to easily follow the commit naming convention
   
6. Using the commitizen tool, it will display a series of options to choose
  **Select the type of commit**
  ![image](https://cloud.githubusercontent.com/assets/5626828/14414927/1b2de2b2-ffcc-11e5-803e-d144a5db1ab1.png)
  
  **Scope**
  _all lowercase. Recommended to use the branch short-description_
  ![image](https://cloud.githubusercontent.com/assets/5626828/14414950/8cb83b76-ffcc-11e5-9e5c-e35b487d9f63.png)
  
  **Short description**
  _all lowercase_
  
  ![image](https://cloud.githubusercontent.com/assets/5626828/14414956/9fe4e488-ffcc-11e5-93d2-67b2722d6cee.png)
  
  **Long description (Optional)**
  _normal case_
  
  ![image](https://cloud.githubusercontent.com/assets/5626828/14414962/b57b90f8-ffcc-11e5-8e28-c0270be764b0.png)
  
  **List of breaking changes or issues closed**
  _all lowercase_
  ![image](https://cloud.githubusercontent.com/assets/5626828/14414970/c10f1ef8-ffcc-11e5-9f0e-973eb21d9e52.png)
  Example: closes #39
  _github will automatically close issue #39 once pushed and merged into master_
  
7. Push the code changes to the repo `git push origin <branch name>`
  Example: `git push origin enw-bookingform-39`
  * Repeat step 3 and 7 for each any further code changes

8. Once the issue is resolved, lodge a pull request with the name of the issue as the pull request name

9. Allow for peer review, assign/mention another team member to the pull request and get them to review the code

10. Once reviewed, select "Squash and Merge commit" to merge the issue into master as one commit

11. Delete the branch in the remote repo

12. _local repo_: checkout back to master `git checkout master`

13. Delete the branch you just worked on `git branch -d enw-bookingform-39`

14. Rinse and repeat this process for every issue.
