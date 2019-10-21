# Rest The Flag

In this task the goal will be to find the key (flag) that allows you to put your score up on the scoreboard.

There are several steps that you will need to do before you are able to do this.

Follow the instruction below and get your or your group's name up there!

API LINK: [API SWAGGER DOCUMENTATION](http://www.google.com)

## Step One

### Find your registration key

As a start you have to get your registration key! The registration key is available to you by sending a get-request to the registration endpoint.
The registration endpoint requires you to provide your key that was provided in the email you got from the Stagate team and put it in the path variable assosiated with the registration endpoint. 


## Step Two

### Find your secret key

You will need to send a http-request of type post with the following payload (body) to get access to your groups secret key that will be the response of this request.

The request must contain a query parameter that specifies if this is an individual or group registration. You do this by adding either a `?type=idividual` or `?type=group` as specified by the swagger API

```JSON
"body": {
    "name": "examplename",
    "id": [
        "Student1",
    ],
    "id_key": "provided-uuid"
}
```

If you have structured your payload correctly the response code will be `200 ok` and containing your secret key. Save this in some way as it will be needed in the following tasks.

## Part Three

### Submit and find glory!

With the secret key you will be able to submit your result to our database.

You will need to use what you have learned here using the Swagger spesification to get across the finish line. With a ```200 OK``` response from this request you should now see your group name on the scoreboard.
