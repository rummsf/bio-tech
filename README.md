# Synthace Frontend Takehome Project

Thanks for taking part in the take home project. What we have for you here is a
basic full stack web application. It's a mock UI providing analytics for a set
of [bio reactors](https://en.wikipedia.org/wiki/Bioreactor). The UI enables you
to view the temperature data for the reactors during the course of an
experiment.

Your mission, should you choose to accept it, is to spend 3 hours improving
this mock application. We love to see how you prefer to work, so please do
commit individual code changes and iterate as you would if this were intended
for production. Extra points for clean code.

## Ground Rules

This is an honour system take home project. You should spend a
few hours on it and not more. We expect your work to be your own, original
work. Using MDN and other documentation sources is great. Copying and pasting
code from Stack Overflow is not. Don't cheat.

## Evaluation

We'll evaluate your work qualitatively on a many dimensions. Some
of the things we look for are: completeness, correctness, coherence, and
quality. If you want to help us evaluate your work, please do individual
commits for each change you make. Good commit messages are always
well-received.

## Getting started

In order to complete this challenge, you'll need to download and install
[NodeJS](https://nodejs.org/), if you don't already have it installed. In
order to commit your changes, you'll also need
[Git](https://git-scm.com/downloads) installed on your machine. If you've
never used Git before, you may want to skip this step because installation
and configuration can be somewhat time consuming for first-time users.
If you choose not to make commits for your changes, please make a note of
that when you submit your solution so that we know you did so intentionally.

This app has two components -- the `client` and the `server`.

To run the `client`, you'll need to do the following:
```
cd client/
npm install
npm start
```

The Webpack development server should monitor your
client-side changes and re-compile/refresh the browser for you every time you
save a file.

To run the `server`, you'll need to do the following:
```
cd server/
npm install
npm start
```

Nodemon should monitor your server-side changes and
re-start the server for you every time you save a file.

## What we'd like you to do

There are three problems we'd like you to solve before submitting your work.

### Fix the layout of the page so that it looks like the screenshot below

In its initial state, the layout of the page is missing. We'd like you to use
whatever layout approach you feel is best, as long as it ends up looking like
the image below.

The project is pre-configured with [Material UI](https://material-ui.com/) and
its handy `withStyles` library to apply CSS from within JavaScript. You're
encouraged to use that abstraction since it's already there, but if you prefer
a different approach, you're free to go your own route. There are many roads
to the mountain top.

![Screenshot of a completed layout](https://www.dropbox.com/s/obsy7rj5bt6ofnz/Takehome_Solved.png?dl=1)

### Fix the over-fetching

In its initial state, the page is fetching all the
bio reactor data all the time and filtering that data on the client. That means
that much of the time, we're over-fetching -- using bandwidth for data that we
don't need. We'd like you to convert the current code from filtering on the
client to filtering on the server. You should be able to return only/exactly
the data that will be displayed and nothing more. *This will require changing
the server code as well as the client.*

### Convert the click-to-refresh behaviour into a "Live" mode

In its initial state, the page only shows new data when you manually click
"Refresh". We'd like you to improve this feature so that the users can turn on
a "Live" mode, which will constantly update the UI to the most recent data.

We've uploaded [a video of the desired behaviour](https://www.dropbox.com/s/3xbe2mxxmiilrxy/Takehome_Solved.mov?dl=0)
to make it easier to understand what the page should do.


## When you've finished

Please make sure you *delete both of the `node_modules`
folders*. We don't need them and they'll make the file size massive. Also
please make sure all your changes are committed. We evaluate both the content
of your code and how well you've organized your work. Please tidy up before you
send it off.

### Then, please do one of the following:

- Zip your work and email it to your recruiter
- Upload the folder to a file share like Dropbox, send your recruiter a link
- Push it to Github and send your recruiter a link

### Also, please *don't* do any of the following:

- Host the project yourself and send us a link to the website, we need to see
  your code uncompiled (ideally with git commits)
- Print the code files and fax them to your recruiter
- Take a photo of your computer screen and send it to your recruiter

