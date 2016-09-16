# Important Heroku commands and steps followed
## Steps

1. run `heroku apps` to find out all the apps running currently
2. run `heroku create myapp --buildpack heroku/python` to create a new app with python build pack
## List of commands
| Function | Command | Commants |
|--|--|--|
| List all apps running on Heroku | `heroku apps`  | |
| Delete an Heroku app | `heroku apps:destroy --app dronegama --confirm dronegama` | Delete the app dronegama |
| Create an app with buildpacks| `heroku create myapp --buildpack heroku/python` | buildpacks tell what language to use for the app |


