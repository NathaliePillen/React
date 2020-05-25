import React from "react";

import contacts from "../contacts";
import Card from "./Card";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://media-exp1.licdn.com/dms/image/C5603AQEo8XrQWnXoAg/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=IAPWD7T8jcYJG3IDxgQJDr6djFUJK1nXVh6lKYOQxWU"/>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
