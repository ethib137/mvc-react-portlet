# MVC React Portlet

A sample Liferay portlet built to highlight best practices.

This is a discussion that is in progress and has yet to be solidified.

## How to Build and Deploy to Liferay

### Build it
` $ ./gradlew build `
The jar file will be in `build/libs/com.liferay.mvc.react.portlet-1.0.0.jar`.

### Deploy to Liferay
` $ ./gradlew deploy -Pauto.deploy.dir="/path/to/liferay/deploy"`