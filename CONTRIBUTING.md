# How to contribute

## Code Format

4-space tab indent

## Deploying the Website

1. Put the most up-to-date code on master.

2. Run the server and check that nothing is broken.

3. Chekout the deploy branch.

    $ git checkout deploy

4. Bring the changes made on master into the deploy branch using "git rebase".

    $ git rebase master

You should get the following output after rebasing.

    First, rewinding head to replay your work on top of it...
    Applying: Changed start script to use node instead of nodemon

5. If you enter "git status", the terminal should tell you "Your branch and 'origin/deploy' have diverged". This is expected when rebasing.

Now, push the changes in the deploy branch to our GitHub repository.

    $ git push --force

Alert: You should only use the --force flag when you're rebasing!!! The --force flag is necessary because rebasing makes your local branch diverge from the remote branch. Don't use the --force flag in any other situation!!!

Now, when you look at our branches on GitHub, you should see that the deploy branch is one commit ahead of master. This is what you want! You can look at our branches on GitHub by following this link: https://github.com/mit6148/aslattery19-jatron-sonjcl-2018/branches

6. In Heroku, go to the "Deploy" tab. In the section called "Manual Deploy", select the deploy branch from the drop down list and click "Deploy Branch". If everything goes alright, the website should be deployed after this step!

## Emitting messages through socket.io

To emit a message through socket.io, you must provide and event name, and an argument. In order for the server to process messages correctly, the event name must be 'chat message' and the argument must be a JSON object with fields userName and message. An example of how to emit a message through socket.io is provided below, where the argument is {userName: 'Jorge Troncoso', message: 'Hey there!'}.

    socket.emit('chat message', {
        userName    : 'Jorge Troncoso',
        message     : 'Hey there!'
    });

The server emits socket.io messages to clients in the same format that clients emit socket.io messages to the server. i.e. The event name of all socket.io messages emitted by the server is 'chat message' and the argument of all socket.io messages emitted by the server is a JSON object with fields userName and message. An example of how to parse a socket.io message emitted by the server is provided below.

    socket.on('chat message', function(msg){
        var userName = msg.userName;
        var message = msg.message;
        // Do something with userName and message
    });
