# My Simple CI

[![Build Status](https://travis-ci.org/Mythie/my-simple-ci.svg?branch=master)](https://travis-ci.org/Mythie/my-simple-ci)
[Application](https://my-simple-ci.herokuapp.com/)

My simple CI is just a very basic example of how can utilise a CI pipeline in order to enhance their builds.
For this example we use CI to run our testing suite which will test our code and then promote the code to production if
successful.

## How is all of this working?
To explain how the CI process for this works it's best to break it down into a series of steps.
**1. TravisCI is linked to my Github account and watches for commits on Repo's I tell it to.**

As a pre-step for this I told TravisCI to listen to this repo.

**2. On a commit to the master branch TravisCI will perform tasks based on the .travis.yml inside the repo.**

By default TravisCI will just run the languages default testing script if applicable or you can pass one to it using the following syntax in the .travis.yml file
```yaml
script:
  - "do something"
```
In the case of our little project travis will run `npm test` which will trigger our test runner [Mocha](https://mochajs.org/) that will perform the tests in our `tests/test.js` file.
Currently this only tests to see if the page contains the words "Rishi Seetha" but more can and should be added as your project progresses.

**3. TravisCI will perform these tasks and move onto the deployment stage if successful.**

If all the tests passed which is signified by the program exiting with a 0 code Travis will move on to any of the later stages of the pipeline.
Again these are specified in the .travis.yml file using the following syntax:
```yaml
# If using one of TravisCI's built in providers
deploy:
  provider: my-provider
  secret-key: my-secret
# Otherwise
after_success:
  - "perform"
  - "tasks"
  - "here"
```
See [Travis Documentation](https://docs.travis-ci.com/user/customizing-the-build/) for more information

**4. The App will be deployed to Heroku for all to view.**

This is the final stage, more can be added inbetween or expanded upon with room to move it to development, testing and staging environments based on a number
of factor but for this example we're doing a simple: Push update -> Test -> Deploy to Prod

## How can I clone this and make my own?
This quick guide assumes that you've never used any of the providers nor git before and walks you through each step.


**1. Create accounts with providers**

In order to work on your own version of this demo you will need an account with the following providers:
* [Github](https://github.com/join) - Note: You should also consider applying for the [Education](https://education.github.com) pack whilst you're a student.
* [TravisCI](https://travis-ci.org) This will use your Github account to login and connect to repos.
* [Heroku](https://signup.heroku.com/) Heroku is a PaaS (Platform as a Service) provider that will host the project for us.

**2. Install git on your machine**

Github have an excellent [article](https://help.github.com/articles/set-up-git/) on getting started with Github and Git and I reccommend you follow it.
When using Git and Github I'd reccomend using SSH authentication as opposed to HTTPS authentication. This can be done by generating an SSH key and adding the public key to your Github account. [Github Keys](https://github.com/settings/keys)

**3. Download the Project Zip file.**

You can either do this via the Github website or if you're on a unix based machine you can run one of the following commands in the terminal:

```
wget https://github.com/Mythie/my-simple-ci/archive/master.zip
curl -L0 https://github.com/Mythie/my-simple-ci/archive/master.zip -o master.zip
```

**2. Unzip the downloaded file to your projects directory.**


**3. Initialize a new git repo**

![create-empty-repo](https://s3-ap-southeast-2.amazonaws.com/lucasjamessmith.me/create-empty-repo.png)

Inside the folder containing the project run `git init` to initialize a new Git repo, then create an empty repository on github and add it as a remote.
`git remote add origin git@github.com:USERNAME/GITREPO.git`

![created-empty-repo](https://s3-ap-southeast-2.amazonaws.com/lucasjamessmith.me/blank-repo.png)

**4. Create your first commit**

This can be achieved by running `git add .` to add all untracked files (Files we've updated).

Then we run `git commit -m "Our first commit"` to commit the changes to our local repo.

Finally we run `git push -u origin master` to push the changes to origin (Your Github repo) on branch master (The main branch).

**5. Install the TravisCI command line tools**

Instructions on installing the command line tools can be found [here](https://github.com/travis-ci/travis.rb#installation).

**6. Create a project on Heroku and get your API key.**

* [Create a new app](https://dashboard.heroku.com/new-app).
* [Get your API key](https://dashboard.heroku.com/account).

![API Key image](https://s3-ap-southeast-2.amazonaws.com/lucasjamessmith.me/heroku-api-key.png)

**7. Tell TravisCI to watch your repo**

Go to [TravisCI](https://travis-ci.org/) and click on the "+" symbol next to "My Repositories", from there check the Repository you want Travis to watch like the image below.

![Repo checklist image](https://s3-ap-southeast-2.amazonaws.com/lucasjamessmith.me/travis-repo-list.png)

**8. Encrypt the API key using TravisCI command line tools**

This can be achieved by running `travis encrypt "api-key-string" -a deploy.api_key`.

This command will encrypt the string and replace the deploy.api_key in the `.travis.yml` file with the value it creates.

**9. Change the .travis.yml App Name to match your application on Heroku**

In the .travis.yml change 
```yaml
deploy:
  provider: heroku
  api_key:
    secure: travis-secure-key
  app: my-simple-ci <---
```

To the match your Heroku Application Name so Travis can deploy to it.
```yaml
deploy:
  provider: heroku
  api_key:
    secure: travis-secure-key
  app: My-Application-Name <---
```

**10. Commit your changes!**

After following these steps and creating a new commit using the `git add .`, `git commit -m "message"` and `git push -u origin master` commands you should be able to see [Travis](https://travis-ci.org) performing testing on your repo before deploying to Heroku if successful.

## Bonus: TravisCI build screenshot
![img](https://s3-ap-southeast-2.amazonaws.com/lucasjamessmith.me/travis-build.png)
[Alt Link](https://s3-ap-southeast-2.amazonaws.com/lucasjamessmith.me/travis-build.png)