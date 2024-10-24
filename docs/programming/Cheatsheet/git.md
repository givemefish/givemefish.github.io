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

## Changes in working directory
```
git status
```

## Changes to tracked files
```
git diff
```

## Add all current changes to the next commit
```
git add .
```

## Commit with message
```
git commit -m "message"
```