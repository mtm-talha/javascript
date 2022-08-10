# GIT 
> GIT  is a free and open source distributed version control system. In which we can save the changes .There is always one copy of git for each member of the team .They can access and can modify the project which you are aware of .
# HOW TO START
> TO start the git first of all we would add our name and email for machines address where our git should be pushed.
# ADDING NAME AND EMAIL 
> the command used to enter name and email is :
### git config --global user.name
### git config --global user.email
# INITIALIZING GIT 
> First the git is intialized for the empty repositary which is written as,
### git init 
# CHECKING HIDDEN FILES 
To check hidden files we use list syntax as 
### ls -lart 
shows hidden files in our folfder with the extention of .git
# ADDING FILES 
> To add files some specific extentions are used.
in next step these files go through different steps.
### git add -A
# GIT STATUS
> git status used to check status of files if they are modified oir not 
### git status 
# STEP :01 UNTRACKED 
> files have nothing to do with untracked .they are just added to go the staged step .
# STEP:02 STAGED 
In staged added files are changed or commited .
SYNTAX 
### git add file (file name)
# COMMITED 
> files are commited in the staging area .its like taking a snapshot of the added file
### git commit (file name )
### git commit -a -m "meaningful commit"
 (FOR COMMITIMG FILE INTO MODIFIED STEP WITHOUT PASSING STAGED AREA)
### git commit -m 
(opens without opening vim editor)  
# STEP :03 UNMODIFIED
> CONTAINS commited file
### git checkout -f
 (all files running would be commited )
# STEP 04 MODIFIED 
> editing unmodifeyed to convert to modified 
# GIT LOG
> Tells how many commit files we recently accessed
### git log -p -1
 (check last commited file)
### git log -p -2
 (checks 2last  commited files)
# DELETING OR REMOVING A FILE 
> Removes a file completely 
### git rm
### git rm --cached 
(removes the files from staging area)
# GIT DIFF 
> Tells the difference and compare working tree with  staging area 
### git diff 
### git diff --cached 
(compare staging area with last commit)
# BRANCHES
> THE branch contains a master branch and we doesnt want to make changes inb master branch so we can make sub branches for training and testing.
git branch 
we can also switch master branch to sub branch by switching
### git checkout (any branch)
if we wanna switch from any sub branch to master branch 
git branch master
### git checkout -b
(creats new branch and automatically switches to that baranch)
# GIT PUSH ORIGIN
> Pushes local repository into remote repsitory
### git push orgin master 
(pushes master branch to remote repository)
# GIT REMOTE ADD ORIGIN 
> ADDS the remote repository 
### git remote add origin (link)
# GIT CLONE
clones the data from github website
### git clone (link)
all files are added in system