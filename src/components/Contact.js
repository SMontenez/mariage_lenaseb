import React from 'react';

const Bienvenue = () => (
  <div className="content">
    <h1>Contact</h1>
    <div className="block">
      <div className="text">
        Si vous avez une question, voici un formulaire qui vous permettra de nous en faire part :)
      </div>
      <form action="mailto:sebastien.montenez@gmail.com" method="post" encType="text/plain">
        Name:
        <br />
        <input type="text" name="name" />
        <br />
        E-mail:
        <br />
        <input type="text" name="mail" />
        <br />
        Comment:
        <br />
        <input type="text" name="comment" size="50" />
        <br />
        <br />
        <input type="submit" value="Send" />
        <input type="reset" value="Reset" />
      </form>
    </div>
  </div>
);

export default Bienvenue;
