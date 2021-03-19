import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/data.js';

const registerTemplate = (onRegister, invalidEmail, invalidPassword, invalidRePass) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Register New User</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onRegister}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="email">Email</label>
                <input class=${"form-control" + (invalidEmail ? " is-invalid" : "" )} id="email" type="text"
                    name="email">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="password">Password</label>
                <input class=${"form-control" + (invalidPassword ? " is-invalid" : "" )} id="password"
                    type="password" name="password">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="rePass">Repeat</label>
                <input class=${"form-control" + (invalidRePass ? " is-invalid" : "" )} id="rePass"
                    type="password" name="rePass">
            </div>
            <input type="submit" class="btn btn-primary" value="Register" />
        </div>
    </div>
</form>`;

export async function registerPage(context) {
    context.render(registerTemplate(onRegister));

    async function onRegister(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const rePass = formData.get('rePass').trim();

        if (email == '' || password == '' || rePass == '') {
            context.render(registerTemplate(onRegister, email == '', password == '', rePass == ''));
            return alert('Please fill all fields !');
        }

        if (password != rePass) {
            context.render(registerTemplate(onRegister, false, true, true));
            return alert('Passwords don\'t match !');
        }

        await register(email, password);
        context.page.redirect('/');
    }
}