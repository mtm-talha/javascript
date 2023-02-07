# Git clone       
### git clone <https://name-of-the-repository-link>    
##### Git clone is a command for downloading existing source code from a remote repository (like Github, for example).
# Git branch       git branch <branch-name>                            Branches are highly important in the git world. By using branches, several developers are able to work in parallel on the same project simultaneously.
  ## viewing branch       git branch or git branch --list
# Git checkout        git checkout <name-of-your-branch>        This is also one of the most used Git commands. To work in a branch, first you need to switch to it. We use git checkout mostly for switching from one branch to another.
# Git status        git status          
  We can gather information like:
      Whether the current branch is up to date
      Whether there is anything to commit, push or pull
      Whether there are files staged, unstaged or untracked
      Whether there are files created, modified or deleted
# Git add       git add <file>      git add -A            When we create, modify or delete a file, these changes will happen in our local and won't be included in the next commit (unless we change the configurations).
