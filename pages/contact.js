import Layout from '../components/Layout';

export default () => (
    <Layout>
        <h1>Contact</h1>
        
        <div className="App" >
        <form name="contact" netlify-honeypot="human" data-netlify="true" data-netlify-recaptcha="true" className="ui form">
    <h3>Submit your event hotel request to procurement</h3>

    <div className="field">
        <h4 className="ui dividing header">How many rooms do you need?</h4>
        <label>Number of Rooms</label>
        <div className="field">
            <input type="text" name="rooms" placeholder="Number of Rooms (Min. 15)" />
        </div>
        <label>Number of Suites</label>
        <div className="field">
            <input type="text" name="suites" placeholder="Number of Suites (Min. 1)" />
        </div>
    </div>
    <div className="field">
        <h4 className="ui dividing header">What type of hotel are you looking for?</h4>
        <div className="field">
            <label>Hotel Rating: </label>
            <div className="ui selection dropdown" tabindex="0">
                <select name="rating[]">
                    <option value="3">3 star</option>
                    <option value="4">4 star</option>
                    <option selected value="5">5 star</option>
                </select>
            </div>
        </div>
    </div>
    <div className="field">
        <h4 className="ui dividing header"></h4>
        <label>Meeting/function space?</label>
        <div className="two fields">
            <div className="field ui selection dropdown" tabindex="0">
                <select name="rating[]">
                    <option value="3">Yes</option>
                    <option selected value="5">No</option>
                </select>
            </div>
            <div className="field">
                    <input type="text" name="lastname" placeholder="# of guests" />
                </div>
        </div>
    </div>
    <p className="hide">
        <label>Don’t fill this out if you're human: <input name="human" /></label>
    </p>
    <div className="field">
        <label>Name:</label> 
        <div className="two fields">
            <div className="field">
                <input type="text" name="firstname" placeholder="First Name" />
            </div>
            <div className="field">
                <input type="text" name="lastname" placeholder="Last Name" />
            </div>
        </div>
    </div>
    <div className="field">
        <label>Contact Information:</label> <input type="text" name="company" placeholder="Company Name" />
    </div>
    <div className="field">
        <div className="two fields">
            <div className="field">
                <input type="number" name="phone" placeholder="Phone Number" />
            </div>
            <div className="field">
                <input type="email" name="email" placeholder="Email Address" />
            </div>
        </div>
    </div>
    <div className="field">
        <label>Message: <br /><textarea name="message"></textarea></label>
    </div>
        
    <div data-netlify-recaptcha="true"></div>
    <p>
        <button className="ui button" type="submit">Send</button>
    </p>
</form>


    
        </div>
    </Layout>
);