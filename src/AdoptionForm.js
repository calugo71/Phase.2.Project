import React from 'react';

function AdoptionForm(){
    return(
        <div className="new-dog-form">
        <h2>Dog In Need?</h2>
        <form>
          <input type="text" name="name" placeholder="Dog name" />
          <input type="text" name="image" placeholder="Image URL" />
          <button type="submit">Sad Face</button>
        </form>
      </div>
    )
}

export default AdoptionForm;