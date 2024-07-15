# Core Deliverables:
As a user, I can:

See the first movie's details, including its **poster, title, runtime, showtime, and available tickets** when the page loads. The number of available tickets will need to be derived by subtracting the number of `tickets_sold` from the theater's `capacity`. You will need to make a GET request to the following endpoint to retrieve the film data:
 

.2 See a menu of all movies on the left side of the page in the `ul#films` element when the page loads. (_optional_: you can style each film in the list by adding the classes `film item` to each `li` element.) There is a placeholder `li` in the `ul#films` element that is hardcoded in the HTML — feel free to remove that element by editing the HTML file directly, or use JavaScript to remove the placeholder element before populating the list. You will need to make a GET request to the following endpoint to retrieve the film data:

 .3 Buy a ticket for a movie. After clicking the "Buy Ticket" button, I should see the number of available tickets decreasing on the frontend. I should not be able to buy a ticket if the showing is sold out (if there are 0 tickets available). **No persistence is needed for this feature**.
 

# Bonus Deliverables
These bonus deliverables are here if you want an extra challenge and won't affect your score. **Make sure to commit your work to save your progress before attempting the bonus deliverables!**

.1 Click on a movie in the menu to replace the currently displayed movie's details with the new movie's details. Note that you may have to make an additional GET request to access the movie's details.
 

.2 When a movie is sold out (when there are no available tickets remaining), indicate that the movie is sold out by changing the button text to "Sold Out". Also update the film item in the `ul#films` menu by adding a class of `sold-out` to the film. For reference, here's what the contents of the `ul#films` element should look like with a sold out film:


# Extra Bonus
These extra bonus deliverables involve using `fetch` to update data on the `json-server` backend by using `POST`, `PATCH`, and `DELETE` requests. These are meant for an extra, extra challenge and won't affect your grade. **Make sure to commit your work to save your progress before attempting the extra bonus deliverables!**

1. When a ticket is purchased, persist the updated number of `tickets_sold` on the server. Remember, the frontend shows the number of available tickets based on the `tickets_sold` and the `capacity`, so only the `tickets_sold` should be updated on the backend when a ticket is purchased. You will need to make a request that follows this structure:

# A template to deploy JSON Server to Vercel, allow you to run fake REST API online!

Demo from this repository:

# https://json-server-in.vercel.app
# https://json-server-in.vercel.app/api/posts
# Powered by Vercel

# How to use
Click "Use this template" or clone this repository.
Update or use the default db.json in the repository.
Sign Up or login into Vercel.
From the Vercel dashboard, click "+ New Project" then "Import" your repository.
In the "Configure Project" screen, leave everything default and click "Deploy".
Wait until deployment is done, and your own JSON server is ready to serve!

By default, only GET operation is allowed, thanks to the contribution by @VicAv99 at #6, we can now enable write operations as well.

You can find the example code in api/server.js.

Reference
# https://github.com/typicode/json-server
# https://vercel.com
# https://shadowsmith.com/how-to-deploy-an-express-api-to-vercel