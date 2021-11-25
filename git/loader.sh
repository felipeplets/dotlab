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

function gss {
    git stash save ${1}
}

function gsa {
    git stash apply stash^{/${1}}
}

function gsl {
    git stash list
}