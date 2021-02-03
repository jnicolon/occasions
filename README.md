# Occasions

Live Website: https://jnicolon.github.io/occasions/#/

An app that lets you set up special occasions so you
don't forget to send a card to your friends and family.
                        
                 
I used Firebase for the backend with
React-Redux-Firebase for the state managment. NodeJs and
Firebase Cloud Functions to set up back end logic.
            
Some functionality:
                
- Profile creator with firebase authentication and imput
validation done in the front end.
                  
- Create occasions, choose a card and add it to the cart
to schedule it to be sent at a later date.

- Back end logic with google scheduler to set up a daily
cron job that checks if any card needs to be sent today.
              
- Filter card information to be used in an html template
and sent it with nodemailer.
              

