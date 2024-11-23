---
layout: post
---

<p class="meta">14 October 2023</p>

In this post, I'll walk through the steps to create a website and host it online, with particular attention to considerations relevant for graduate students in the Faculty of Mathematics at Waterloo.

## Building the website

There are two main options to build your website: all-in-one tools like [Google Sites](https://sites.google.com) and generating your own HTML and CSS files. The former is pretty intuitive and handles a large portion of the process, but offer less control.

I used [Jekyll](https://jekyllrb.com), which is not too far off from coding from scratch, but has some nice features that make some aspects easier. I found [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn) to be a great resource for learning HTML, CSS and Javascript.

To ensure the website works on the servers provided by the University of Waterloo, you will need to use relative URLs. On Jekyll this is achieved by adding the following property in the configuration file:
```
baseurl: /~<WatIAMid>
relativeURLs: true
```

After building the website, Jekyll will generate some folders in your project. The most important one is the `_site` folder which stores the generated website.

## Hosting the website

Hereafter I'll use `_site` to refer to the folder that contains your website files for consistency. I used [Git](https://git-scm.com) (which you may need to install) to track changes to my project folder, and [GitHub](https://github.com) to sync it with the Faculty servers.

To do this, execute the following commands in a terminal window:
<pre class="terminal">
<code>cd _site # Go to the _site folder

# Create Git repository
git init
git add --all # Stage all files to be tracked
git commit -m "Initial commit" # Commit staged files to the repository</code>
</pre>

This initialises a local Git repository on your device. Next we need to connect the local repository to the Faculty via Github.

Create a remote repository on Github. Once this is finished, link the remote repository to the local one by returning to the terminal and running the commands on the repository page to 'push an existing repository from the command line':
<pre class="terminal">
<code>git remote add origin <url-to-repo>
git branch -M main
git push -u origin main</code>
</pre>

To run the last command, you will be prompted to log in to Github. Instead of entering your account password, you will need to [create a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens). The minimum permissions necessary to send local changes to Github is 'Contents'.

We can now pull the repository to the University of Waterloo server:

<pre class="terminal">
<code>ssh <WatIAMid>@linux.math.uwaterloo.ca
mkdir public_html
chmod 2755 public_html # Restrict write access to owner
cd public_html
git clone <url-to-repo>
chmod -R 700 .git # Restrict access to .git to owner</code>
</pre>

You should see your website at `https://math.uwaterloo.ca/~<WatIAMid>`.

## Updating the website

With the Git repository, it is relatively simple to update the website. After making your changes, build the website and run the following websites in the terminal to commit the changes to the repository:
<pre class="terminal">
<code>git add --all
git commit -m "<Commit message>"</code>
</pre>

Use `git push` to push the changes to Github, then you can `ssh <WatIAMid>@linux.math.uwaterloo.ca` as above to connect to the Faculty server, and `git pull` to download and merge the changes from Github.