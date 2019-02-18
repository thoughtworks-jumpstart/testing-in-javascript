# Testing in JavaScript

## Objectives

- Write a simple test case (2-simple-test-case)
- Write a simple test function (3-simple-expect-case)
- Improve on your test function (4-better-expect-case)
- Create a simple test library (5-expect-module)
- Use Node's assert library (6-expect-with-assert)
- Use Jest test library (7-use-jest)

## Getting started

This repository is organized with tags.

To list all tags:

```sh
git tag
```

To checkout a tag:

```sh
git checkout <tag-name>
```

To checkout the latest commit:

```
git checkout master
```

All tags are labeled in sequential order and should be approached in that order.

## Pulling changes from original source

If you have forked this repo, you won't be able to pull changes from the thoughtworks-jumpstart/testing-in-javascript repo.

This is because your remote repo is now pointing to your forked copy i.e. <your-username>/testing-in-javascript.

You can verify this by running `git remote --verbose` and you should see this:

```sh
origin	https://github.com/<your-username>/testing-in-javascript.git (fetch)
origin	https://github.com/<your-username>/testing-in-javascript.git (push)
```

So you will need to add another remote repository called upstream that points to the thoughtworks-jumpstart repo.

You can do that by running the following command:

```
$ git remote add upstream https://github.com/thoughtworks-jumpstart/testing-in-javascript.git
```

Now run `git remote --verbose` and check that yours looks like this:

```
origin	https://github.com/<your-username>/testing-in-javascript.git (fetch)
origin	https://github.com/<your-username>/testing-in-javascript.git (push)
upstream https://github.com/thoughtworks-jumpstart/testing-in-javascript.git (fetch)
upstream https://github.com/thoughtworks-jumpstart/testing-in-javascript.git (push)
```

⚠️ Make sure you have commit all your changes before pulling new changes from the remote repository.

To pull any changes, just run `git fetch upstream` followed by `git merge upstream/master master`.
