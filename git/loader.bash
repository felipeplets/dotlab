# Git branch bash completion
# Copied from https://github.com/git/git/blob/master/contrib/completion/git-completion.bash
source ${BASE_DIR}/git/completion.bash
  
# Add git completion to aliases
__git_complete gc _git_checkout
__git_complete gm _git_merge
__git_complete gp _git_pull

# Aliases
alias g="git"
alias gc="git checkout"
alias gco="git commit"
alias gm="git merge"
alias gec="git config --global -e"
alias gf="git fetch --all"
alias gp="git pull"
alias gps="git push"
alias gs="git status"
alias gup="git pull --rebase --prune"

# Functions
function gcp {
    git commit -am${1}
    git push
}
