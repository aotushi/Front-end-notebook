## Error message

### what's in a Good Error Message

> [What's in a Good Error Message? - Gunnar Morling](https://www.morling.dev/blog/whats-in-a-good-error-message/?continueFlag=cdb48726f74fe95a2e0a2009a9d8d5b8)

> it boils down to 3 pieces of information which should conveyed by an error message:

* Context: what led to the error? what was the code trying to do when it failed?
* The error itself: what exactly failed
* Mitigation: what needs to be done in order to overcome the error

#### Context

> For an error message, this should tell the recipient what the code in question was trying to do when it failed.

example:

> *Couldn’t parse config file: /etc/sample-config.properties"*



So I’d recommend to always log the entire exception chain, rather than catching exceptions and only logging some substitute message instead.

#### The Error Itself

> the actual error itself. That’s **where** you should describe what exactly happened in a concise way.



#### Mitigation

> a description of how the user can overcome the error.

