---
title: courtbot
status: active
repo: https://github.com/codefortulsa/courtbot-python
---
# courtbot-python

## Description
This is an experimental reimplementation of courtbot using python. It uses the
[oscn](https://pypi.org/project/oscn/) PyPI library and twilio.

## Announcements
- Announcement 1
- Foo Bar Baz Announces Thing #2
- Announcement 3 which is the last one I think we should probably render
- Announcement 4 is far too many
- Announcement 5 is right out

## Project Lead
[Se Yeon Kim](https://github.com/syk1112)

## Development

### Requirements
* python
* A twilio account
* PostgreSQL

### Install & Set up locally
1. `pip install -r requirements.txt` (if you get an error, make sure `postgresql` is installed, then add the folder containing pg_config to your path `export PATH=”/usr/local/bin:/Library/PostgreSQL/9.6/bin:$PATH”`)
2. `cp .env-dist .env` and put your own values into `.env`
3. `python manage.py runserver`


### Use ngrok to test twilio callbacks
To test twilio callbacks, run ngrok to set up a public domain for your
localhost:8000 ...

`ngrok http 8000`

... then use the public domain url for your number's Messaging "a messages
comes in" webhook. E.g., http://34ae567a.ngrok.io/sms/twilio

Note: super annoying, but every time you restart ngrok you'll have to update
your twilio number's messaging webhook again, and you'll need to change your
`ALLOWED_HOSTS` to include the new ngrok host.  Unless you pay for ngrok.


## Links
[OKC Free Press on CFA Brigrades](https://freepressokc.com/code-america-brigades-okla-good-gov/)

[News on 6 Story on Courtbot](https://www.newson6.com/story/5e35fb222f69d76f6202d33c/courtbot-app-launches-to-help-tulsans-avoid-failuretoappear-fines)

[Frontier article on Criminal Justice Reform](https://www.readfrontier.org/stories/report-recommends-major-changes-to-tulsas-criminal-justice-system/)

[Skoll Foundation - "We can do better"](https://twitter.com/SkollFoundation/status/984100776539840512)

[Carlos Moreno - Paper on Courtbot and Breaking the Cycle](https://studylib.net/doc/25184479/courtbot-software-aims-to-help-break-the-cycle-of-high-in...)

[Code for America Courtbot Discourse](https://discourse.codeforamerica.org/c/projects/courtbot/30)

[Se Yeon Kim Demos Courtbot](https://medium.com/@chimchim237/code-for-tulsa-se-yeon-kim-demos-courtbot-51d2311658d1)
