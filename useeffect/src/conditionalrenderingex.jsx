{!isSignup && <img src = {icon} className = "login-logo" alt = "as"/> }
// It appears to be a conditional statement that displays an image element if the isSignup variable is false. The img element has a src attribute that is set to the value of the icon variable, and a className attribute that is set to "login-logo". 
really important for in between condition rendering so that paste what you want
<button type='submit' className='auth-btn'>{isSignup ? "Signup" : "Log out"}</button>
if signup = true paste signup else logout
{isSignup && (
                            <label htmlFor='check'>
                                <input type="checkbox" id = "check"/>
                                <p>Opt-in to recieve occasional, product updates, user research invitations, company announcements, and digests</p>

                            </label>
                        )}
                   // if you want to show many output we can put it bracket as above

            {isSignup && (<AboutAuth/>)} 
// we can also import the function as like this by importing it and then doing it 
