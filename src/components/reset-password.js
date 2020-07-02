import React from "react"

export default (props) => {
    return (
        <form>
            <input type="email" id="resetEmail" className="form-control" placeholder="Email address" required="" />
            <button className="btn btn-primary btn-block" type="submit">Reset Password</button>
            <a href="#" id="cancel_reset"><i className="fas fa-angle-left"></i> Back</a>
        </form>
    )
}