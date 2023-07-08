    ---
layout: post
title: Account Takeover via Custom OTP, No User Interaction Required!
date:   2023-07-08 22:30:00 +0530
categories: [Mobile Security]
---


*Me - My Favorite number is 1337. System, can you please generate this OTP for all the users? 
System - No!! However, since you insist, here you go!*

This is what we were able to do on `redacted.com`, which resulted in a zero-click account takeover. All we needed to know was the user's email address. However, there is a catch! We will discuss this later. 

To provide a brief description of the login functionality on `redacted.com`, the application requires the user's email address. Once the email is provided, an OTP (One-Time Password) is generated and sent to the email address. The user is then required to verify this OTP. The application behaves as follows:

- The OTP is a 4-digit code. (Can I bruteforce it? Maybe, if we are not rate limited.)
- The OTP expires after 10 minutes or is invalidated after 3 incorrect attempts.
- Before requesting a new OTP, the user must validate a captcha.
- The OTP generation will cease after 5 new OTP requests.

Quite a protection here, right? Obviously not! We will now discuss in detail every step taken here to bypass these protections (or possibly explore an alternative approach).

Since ***“The OTP expires after 10 minutes or is invalidated after 3 incorrect attempts.”***, it is highly unlikely for us to guess a correct OTP within 3 attempts due to the low probability (3 out of 10,000).

There's another point that we mentioned earlier - ***“The OTP generation will cease after 5 new OTP requests.”*** This is an area where we can exploit. If we can bypass this restriction and make the application generate an unlimited number of OTPs, we can probably force the application to spit out an OTP of our choice. Since the OTPs are just 4 digits long, it is theoretically and may be practically possible to achieve so. This is what we did to take over someone’s account.

Before we can generate OTPs, we have another problem - ***“Before requesting a new OTP, the user must validate a captcha.”*** This is the following request:

<pre>
POST /XXX/XXXXX/get-captcha HTTP/2
Host: redacted.com
<b>Req-Id: f20d1adb-b771-4178-829d-397eeff2bc4c</b>
Client-Id: XXXXX
<b>Device-Id: da7286e9-5dca-430f-819c-06957b10364c</b>
Client-Data: XXXXXXXXX
Timestamp: 1685800008437
Authorization: Bearer
Version-Id: 1
Content-Type: application/json; charset=utf-8
Content-Length: 182
Accept-Encoding: gzip, deflate
User-Agent: XXXXX

{"clientId":"XXXXXXXX"}
</pre>

This API automatically generates captcha codes based on the values of `Req-Id` and `Device-Id`. However, this API was also subject to rate limiting. Further investigation revealed that by sending different values in the `Req-Id` and `Device-Id` headers, we could bypass the rate limiting and generate an unlimited number of captcha codes automatically, without requiring any user interaction.


The next step is to request a new OTP. This is the following request:

<pre>
POST /XXX/XXXXX/get-code HTTP/2
Host: redacted.com
<b>Req-Id: f20d1adb-b771-4178-829d-397eeff2bc4c</b>
Client-Id: XXXXX
<b>Device-Id: da7286e9-5dca-430f-819c-06957b10364c</b>
Client-Data: XXXXXXXXX
Timestamp: 1685800008437
Authorization: Bearer
Version-Id: 1
Content-Type: application/json; charset=utf-8
Content-Length: 182
Accept-Encoding: gzip, deflate
User-Agent: okhttp/4.10.0

{"captchaCode":"XXXXXX","clientId":"XXXXXXXX","email":"contact@bhavukjain.com"}
</pre>

As guessed correctly, using different values for `Req-Id` and `Device-Id` allows us to bypass the rate limiting here as well. However, we encounter a limitation after making five requests, as stated in the description: ***"The OTP generation will cease after 5 new OTP requests."*** The backend system verifies whether the application has generated five distinct OTPs for an email or not. Once the five OTPs have been generated, we are blocked from generating new OTPs for that email for a period of 24 hours.

This restriction was circumvented by manipulating the email addresses with a mix of upper and lower case letters. For instance, we made five requests for `contact@bhavukjain.com`, another five requests for `contact@BHAVUKJAIN.com`, and five more requests for `contact@bhavukjain.cOm`. By employing this method, we were able to generate a significant number of OTPs necessary for the attack. Consequently, we could continue forcing the application to generate OTPs until we reached the desired code, such as 1337, by continuously utilizing the verify OTP API.

All of these steps were automated, and it took approximately 10-15 minutes (sometimes as little as 2 minutes) for the backend to generate the OTP of 1337, thereby granting us complete control over the entire account.

Remember, I mentioned earlier that there is a catch? The only limitation of this attack is that the email address should have a sufficient number of letters; otherwise, we won't be able to create a large list of emails. But usually, this is not the case. For example, if the email is something like 1337@gmail.com, we won't be able to generate a substantial number of unique email variations. Consequently, it would be practically impossible to generate an OTP of our choice in such cases.

In conclusion, the login functionality on `redacted.com` exhibited vulnerabilities that allowed for a zero-click account takeover. By exploiting weaknesses in the OTP generation process, rate limiting, and captcha validation, we were able to manipulate the system and gain unauthorized access. While these security flaws provide a pathway to compromise user accounts, it is crucial for developers and organizations to learn from such incidents and continually strengthen their authentication mechanisms. Robust safeguards, including stronger rate limiting, enhanced captcha validation, and improved OTP generation algorithms, can significantly enhance the security of user login systems. By staying vigilant and implementing proactive security measures, we can help safeguard user data and protect against similar exploits in the future.



*This article was originally written for Certus Cybersecurity.*
