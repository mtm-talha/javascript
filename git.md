# GIT 
> GIT is a free open source version control system.
## Version Control System
> The management of changes to documents,  large website and other collections of information.
## Stages in GIT
### Un-tracked
> It means git has nothing to do with the files which are not tracked.
### Staged
> We add the files into stage area and then commit those files.
### Un-modified
> After commiting the files in the stage area it becomes un-modified.
### Un-tracked
> if we edit the files they would become modified.
## Commmands in GIT
### git init
> Used to initialize a empty repository. 

### ls -lart 
>Used to show the hidden files.
### git add
> Used to add a file into staged area.
### git add -A
> Used to add multiple files in staging area.
### git commit
>Used to take a snapshot of the file and save it.
This command opens up a vim editor where we type our commit message.
### git commit -m ""
>Used to take a snapshot of file and save its commit message without opening the wim editor.
### touch 
>Used to create a blank file.
### git status
>Used to check the status of a file if it is untracked or modified etc.
### git log
>Used to give the information of all the commits used in the repository.
### git log -p -number
>Used to give the information of specific number of commits used in the repository.
### git diff 
>Used to compare working tree with staging area.
### git diff --staged
>It compares the staging area with last commit.
### git rm
>Used to delete the files.
### git rm --cached
>Used to remove the file from staging area and making it un-tracked.
### git branch
>Used for making a new branch.
### git checkout branch_name
>Used to switch branhces
### git checkout -b branch_name
>Used to create a new brach and switch to that branch at the same time.
### git merge branch_name (which is to be merged)
>merges multiple branches together.
### git remote add origin(github_link)
>Used to link the local repository with the remote repository(Git-hub).
### git push origin branch_name
>Used to send the local repository files to the remote repository.
### git clone
>Used to copy the files in a remote repository to the system.
### git push origin -u branch_name
>Used to send files to remote repository from the same branch without mentioning it again and again.
