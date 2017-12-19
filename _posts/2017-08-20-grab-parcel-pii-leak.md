---
layout: post
title: Extracting Sensitive PII From a Tracking Number in Grab Parcel
date:   2017-08-20 02:45:00 +0530
categories: [Web Security]
---

While checking out [Grab Parcel](https://parcel.grab.com) website, I found a link that looked a bit suspicious to me as it was from a different domain.

```sh
https://app.detrack.com/tracking/46678ef7c208d1f8a43379ec15624d5b12c545ad
```

 Grab Parcel was dependent on a 3rd party **Detrack** for delivery and tracking of the items. And to get the order details it required just one field, the Tracking ID. This means if I’m able to get a tracking id, I might be able to extract some sensitive PII information.

To get the tracking id, I checked out Twitter and found dozens of tracking numbers reported by customers to the Grab support. By using one of them, I was presented with a lot of juicy information about the customer. I was even able to download a PDF of the order details from that tracking Id. The PDF consisted of customer’s **Mobile Number, Full Address with latitude and longitude, their image, their signature and what did they order.**

To make this report critical, it was required me to brute force the tracking numbers. It took me a while as the tracking numbers were following a different pattern and spending some time over that, I was able to find hundreds of tracking ids in a few mins. Too much of sensitive data lying around.

**Beware!**
Never share your Tracking/Order ID publicly. You never know, how much sensitive information you're sharing in open.

I hope you liked my first blog post, another one coming soon on [Zomato Account Takeover using Victim's Facebook ID]({% link _posts/2017-08-20-zomato-account-takeover-using-facebook-id.md %})

# Timeline

Jul 17 - Submitted Report

Jul 17 - Response from Grab, Need More Info

Jul 17 - Submitted another PoC

Jul 17 - Triaged

Jul 18 - Fixed

**Reward: $3,000**



