## Publish to npm

1. we use semantic-release to control release steps
2. we use package-npm.json to replace package.json. Because some dependencies will have errors when use this lib in react project, so we need remove all dependencies.
3. When we commit message contains:
   1. fix: xxx - the last version number will update like 1.0.0 to 1.0.1
   2. feat: xxx - the second version number will update like 1.0.0 to 1.1.0
   3. perf: xxx - the first version number will update like 1.0.0 to 2.0.0
