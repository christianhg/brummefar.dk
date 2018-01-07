# Git (and how we Commit)

### When developing software, collaboration and communication is key. And Git is our tool for achieving this at code level.

Most of us work *asynchronously* as a *distributed team* on a *shared body of work* and when not sharing our wisdom in Slack and in various meetings, we speak to each other through the code we produce. Luckily Git allows us to annotate and separate this code into semantic pieces that heighten this communication.

But Git is only the tool, and it really comes down to how we use it. Clear-cut commits can increase communication with little overhead. On the other hand, unstructured commits with poorly written commit messages can be incredibly wasteful when it comes to future readability and maintenance. The quality of a commit can in that sense reveal whether a programmer is a good collaborator. Ouch.

This is a motivational page to help us all fall into the category of good collaborators.

## Doing Commits

It might by helpful to think of each commit as **a changeset that takes our project from one version to another.** When changing a line of code or even the name of a file, we are changing the state of the project. This mindset will simply force us to question our assumptions about how the changes we make work and help us refrain from "coding by coincidence".

## Writing Commit Messages

Commit messages annotate our commits. The commit itself is really just a diff of what has changed. It is the related commit message that provides the context and helps us get in the mindset of the developer who produced the code. Spend those extra five minutes to craft an even better commit message. Take pride in doing spellcheck and ensuring a consistent (and short) line length to heighten the legibility. Use the commit summary mainly to describe why the change was needed. This ensures that programmers - you or others, now or in the future - are in the know.

## Benefits of Grooming the Commit History

If each commit resembles a button in the Git History Elevator, the commit messages are the labels that can help us get off at the right floor (I made that analogy up myself. Sorry about that!). Creating quality commits with quality commit messages will:

* Make it easier revert one of the changesets later.
* Speed up reviewing processes.
* Help future developers (including oneself) answer questions like: "What were we thinking when this was added?"

I find the last point especially important. Our code is not always self-explanatory and often when I stumble upon a confusing block of code I want to know why it's there.

## General Guidelines

The following is a list of guidelines and helpful pointers on committing code:

- Make each commit a logically separate changeset.
- Keep the summary of the commit message concise.
- Follow the summary with a detailed explanation if necessary.

If it's difficult to summarise, the commit can probably be split up.
Both when putting together a commit and writing the corresponding commit message, three questions are helpful to keep in mind:

* **Why** is the change necessary?
* **How** does the change address the issue at hand?
* **What** effects does the change have?

It is also widely considered good practice to start the summary line with a verb in imperative mode ("commanding" mode). This can help keep the summaries concise and consistent:

* Add
* Fix
* Up
* Remove
* Switch
* Improve
* Update
* Rename
* ...
