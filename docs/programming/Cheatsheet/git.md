---
title: 'Git'
tags: ['Git']
---

# Git Cheatsheet

## Configuration

### Show configuration
```
git config --list
```

### Show repository configuration
```
git config --local --list
```

### Show global configuration
```
git config --global --list
```

### Setup: push the current branch and set the remote as upstream
```
git config --global --add --bool push.autoSetupRemote true
```

## Create

### Clone an existing repository
```
git clone http://domain.com/user/repo.git
```

### Create a new local repository
```
git init
```

## Local Changes

### Changes in working directory
```
git status
```

### Changes to tracked files
```
git diff
```

### Add all current changes to the next commit
```
git add .
```

### Commit with message
```
git commit -m "message"
```

### Change last commit 
```
git commit -a --amend
```

::: warning
Don't amend published commits!
:::

## Search

### Search text on all files in the directory
```
git grep "hello"
```

### Search commits that introduced a specific keyword
```
git log -S "keyword"
```

## Commit History

### Show all commits, starting with newest
```
git log
```

### Show all commits, starting with newest (brief version)
```
git log --oneline
```

### Show changes over time for &lt;file&gt;
```
git log -p <file>
```

### Check out who change what and when in &lt;file&gt;
```
git blame <file>
```

## Branch & Tags

### List all local branches
```
git branch
```

### List all local/remote branches
```
git branch -a
```

### List all remote branches
```
git branch -r
```

### Swithc HEAD branch
```
git checkout <branch>
```

### Create and switch new branch:
```
git checkout -b <branch>
```

### Create a new branch from an exiting branch and switch to new branch:
```
git checkout -b <new_branch> <existing_branch>
```

### Create a new branch based on your current HEAD:
```
git branch <new-branch>
```

### Force delete a local branch
```
git branch -D <branch>
```

### Apply specific commit from another branch:
```
git cherry-pick <commit hash>
```

### Mark HEAD with a tag:
```
git tag <tag-name>
```

### List all tags:
```
git tag
```

## Update & Publish

### List all current configured remotes:
```
git remote -v
```

### Show information about a remote
```
git remote show <remote>
```

### Add new remote repository, named &lg;remote&gt;
```
git remote add <remote> <url>
```

### Remove a remote
```
git remote rm <remote>
```

### Download all changes and directly merge/integrate into HEAD
```
git remote pull <remote> <url>
```

### Get all changes from HEAD to local repository
```
git pull origin main
```

### Publish local changes on a remote
```
git push <remote> <branch>
```

### Push your tags
```
git push --tags 
```