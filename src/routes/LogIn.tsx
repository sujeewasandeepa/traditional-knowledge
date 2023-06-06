import "../assets/Login.css"

export default function LogIn () {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submit clicked!');
    }

    const handleCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log('cancel clicked!');
    }

  return (
  <>
    <div className="has-text-centered">
        <h1 className="m-5 title is-2">LogIn</h1>

        <form className="form" onSubmit={handleSubmit}>
            <div className="field">
                <label className="label">username</label>
                <div className="control">
                    <input className="input" type="text" placeholder="username" />
                </div>
            </div>

            <div className="field">
                <label className="label">password</label>
                <div className="control">
                    <input className="input" type="password" placeholder="password" />
                </div>
            </div>

            <input type="submit" className="button is-primary" value="login" />
            <button onClick={handleCancel} className="button ml-2">Cancel</button>

        </form>

    </div>
  </>
  )
}
