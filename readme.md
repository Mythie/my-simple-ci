# My Simple CI

[![Build Status](https://travis-ci.org/Mythie/my-simple-ci.svg?branch=master)](https://travis-ci.org/Mythie/my-simple-ci)


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


#### Bonus: TravisCI build screenshot
![img](https://s3-ap-southeast-2.amazonaws.com/lucasjamessmith.me/travis-build.png)
[Alt Link](https://s3-ap-southeast-2.amazonaws.com/lucasjamessmith.me/travis-build.png)