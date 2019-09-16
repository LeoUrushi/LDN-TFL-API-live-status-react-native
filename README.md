# LDN-TFL-API-live-status-react-native
This is a working example of a live status app for React Native using the official London TFL API. 

## London TFL API: 

Official Transport for London (TFL) page. provides a variety of API sources for free. 
See their page for full list and how to access them. 
https://api-portal.tfl.gov.uk/admin

In this case, we will use this one. 
https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_Get

You will see that all the line status requests will take the following format: 

````
https://api.tfl.gov.uk/Line/{INSERT_LINE_NAME}/ Status?app_id={INSERT_YOUR_APP_ID}&app_key={INSERT_APP_KEY}
````

You can break it down into three components. 

````
var block1 = 'https://api.tfl.gov.uk/Line/';
var block2 =  Status?app_id={INSERT_YOUR_APP_ID}&app_key={INSERT_APP_KEY}

````

This way, you can generate a API request address for each Tube line as below. 

````
var request_1 = block1 + 'bakerloo' + block2;
var request_2 = block1 + 'central' + block2;
var request_3 = block1 + 'circle' + block2;
var request_4 = block1 + 'district' + block2;

````


Etc etc…

*When I was testing the API for a prototype, these requests URL did work WITHOUT an app ID or an app key. You might want to try that if you want to set up a quick test without having to create your developer account. 



## Making batched API requests in one go:
Since there are 15 lines (including the tram), you’d want to make all the API requests in one go, instead of making each request individually and wait to refresh 15 times. 

Use react-native-axios to make asynchronous request. 
Follow the instruction here to install: 
https://www.npmjs.com/package/react-native-axios


Switching between the two states below will mean the screen will show the loading circle symbol whilst the requests are being batched. 

````
isLoading: true 
````
and
````
isLoading: false
````

It’s just easier for users to see that the app is thinking something this way. 


## Styling: 
Make a list view. 
The right column uses a conditional styling  to change the font colour. 
If the returned text says “Minor Delays”, the font colours orange and so on. 

````

<Text style={[styles.rightColumnText, 
{color:  item.statusSeverityDescription == "Good Service" ? 'black' : item.statusSeverityDescription == "Minor Delays" ? 'orange' : 'red'}]}>{item.statusSeverityDescription} </Text>

````


See here for the official colour  scheme for each Tube line. 

http://content.tfl.gov.uk/tfl-colour-standards-issue04.pdf



Result should look like this: 

![Image description](https://github.com/LeoUrushi/assets/blob/master/Screen_LondonTFL_sample.png)


Editable example: 
https://snack.expo.io/@leourushi/api-demo_london-tfl-live-status



Working example: 
https://apps.apple.com/us/app/london-tube-map-underground/id1458805487




