import React from 'react'

function Form2() {
  return (
    <>
      <form>
        <div>
          Name : <input type="text" name="myname" />
        </div>
        <br />

        <div>
          Role : <input type="text" name="myrole" />
        </div>
        <br />

        <div>
          Email : <input type="email" name="myemail" />
        </div>
        <br />

        <div>
        <input type="submit" value={"Submit"} />
        </div>
        <br />
      </form>
    </>
  );
}

export default Form2