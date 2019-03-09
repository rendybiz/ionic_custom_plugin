Create IONIC plugin using Plugman
=================================

You need NodeJS, npm, IONIC and Plugman Installed in your system. [Install Plugman](https://cordova.apache.org/docs/en/latest/plugin_ref/plugman.html).

How to use this Github Repositories?
------------------------------------

To Testing this application you just need do following this

    npm install

* * *

Where are the plugin is stored?
-------------------------------

If you look carefully, inside of this repositories you should see that we have a directory called `custom_plugins`. Our plugin name is **HelloWorld**

The Command for creating this Hello World plugin is so simple

*   Create directory `#mkdir custom_plugins`
*   go to created directory `#cd custom_plugins`
*   Create plugman plugin
    
        plugman create --name HelloWorld --plugin_id cordova-plugin-hello-world --plugin_version 0.0.1
        cd HelloWorld
        plugman platform add --platform_name android
        plugman platform add --platform_name ios
        
        plugman createpackagejson .
        
        cd ..
        cd ..
        
        
    
*   Install/add plugin to ionic project
    
        
        ionic cordova plugin add custom_plugins/HelloWorld
        
    

Done, now you have been creating your own plugin. Look \[at\] your directory.  
**src/** is main directory for the native code of your platforms directory, please take a look this directory. Java File and  
**www/** is main directory for the JS bridge between your ionic and Native code

How to integrate it with your ionic?
------------------------------------

Well please see my code in \[thisRepoDir\] src/pages/home/home.ts

    
    declare var cordova: any; //<-- this main part is important
    ...........
    
      if(typeof(cordova) != 'undefined'){
            var success = function(result) {
                alert(JSON.stringify(result, undefined, 2));
              }
              var failure = function(result) {
                alert(JSON.stringify(result, undefined, 2));
              }
              cordova.plugins.HelloWorld.coolMethod({
                _sMessage: "Hello Text"
              }, success, failure);
        }
    

Now you can test it by running "ionic cordova run android",

### note

For every editing the code in custom\_plugins directory you should remove the plugin from ionic project by

     ionic cordova plugin rm cordova-plugin-hello-world 

     ionic cordova plugin add custom_plugins/HelloWorld