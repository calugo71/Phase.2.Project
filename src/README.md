The Inter-Borough Dog Adoption Center web application allows users to view dogs that are readily available for adoption, as well as navigate to other links that would allow them to put a dog up for adoption, learn more about the Adoption Center, and watch an informational video about rescuing dogs for first timers. 

WIREFRAME HERE:


LINK TO GITHUB: git@github.com:calugo71/Phase.2.Project.git
from the CRUD, the application utilizes the Get request to fetch the data from The Dog API, which we then hosted data locally on our own db.json, and then Post routes to said db.json.
Within the app, the user will be able to route to a Home, About, Adoption Form, and Video components. 
Example db.json data: 
    {
  "dogs": [
    {
      "id": 1,
      "name": "Spike",
      "bred_for": "Small rodent hunting, lapdog",
      "life_span": "10 - 12 years",
      "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
      "image": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
    },
    }
We had stretch goals of adding a section to showcase dogs that had been previously adopted, links for "other/partner" area adoption services and vet centers, as well as links to more pet-health/care related videos. 

