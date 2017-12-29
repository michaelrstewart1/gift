# .bash_profile

# Get the aliases and functions
if [ -f ~/.bashrc ]; then
        . ~/.bashrc
fi

# User specific environment and startup programs

PATH=$PATH:$HOME/.local/bin:$HOME/bin

export PATH

alias deploygift='cd /srv/gift;gcloud app deploy app.yaml --project manage-gifts'
alias testgift='dev_appserver.py --php_executable_path=/usr/bin/php-cgi /srv/gift'
