# FriendFinder
Assignment for unit 13

Users are presented with a homepage indicating they are at Friend Finder. There is a single button in the middle of the page labeled "survey" that takes the user to the survey, along with two smaller links in the bottom left that take the user to the api of friends and the github repo.

The api of friends is a page of json data that is static combined with the users' inputed data.

The github repo is simply a link to the repo this particular project is contained within.

The survey link is the main aspect and takes you to another html page that lists 12 question. Two of these questions are Name and photo, with the remaining 10 being randomly selected statements with dropdown slectors ranking agreement on a 1-5 scale.

    When the submit button is clicked, the friends are compared and the closest matched one is displayed in a modal.


Limitations
- Insecure logic in the comparison data
- No database connection so that data is static and not dynamic
- Images don't fit