import { html } from '../../node_modules/lit-html/lit-html.js';
import { getElementById, updateFurniture } from '../api/data.js';

const editTemplate = (element, onSubmit, isMake = true, isModel = true, isYear = true, isDescription = true, isPrice = true, isImage = true) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Edit Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onSubmit}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class=${"form-control" + (isMake ? " is-valid" : " is-invalid" )} id="new-make" type="text" name="make" .value=${element.make}>
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class=${"form-control" + (isModel ? " is-valid" : " is-invalid" )} id="new-model" type="text" name="model" .value=${element.model}>
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class=${"form-control" + (isYear ? " is-valid" : " is-invalid" )} id="new-year" type="number" name="year" .value=${element.year}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class=${"form-control" + (isDescription ? " is-valid" : " is-invalid" )} id="new-description" type="text" name="description"
                    .value=${element.description}>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class=${"form-control" + (isPrice ? " is-valid" : " is-invalid" )} id="new-price" type="number" name="price" .value=${element.price}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class=${"form-control" + (isImage ? " is-valid" : " is-invalid" )} id="new-image" type="text" name="img" .value=${element.img}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material" .value=${element.material}>
            </div>
            <input type="submit" class="btn btn-info" value="Edit" />
        </div>
    </div>
</form>`;

export async function editPage(context) {
    const id = context.params.id;
    const element = await getElementById(id);
    context.render(editTemplate(element, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const make = formData.get('make').trim();
        const model = formData.get('model').trim();
        const year = Number(formData.get('year').trim());
        const description = formData.get('description').trim();
        const price = Number(formData.get('price').trim());
        const img = formData.get('img').trim();
        const material = formData.get('material').trim();

        if (make.length < 4 || model.length < 4) {
            context.render(editTemplate(element, onSubmit, make.length >= 4, model.length >= 4));
            return alert('Make and Model must be at least 4 symbols long !');
        }

        if (year < 1950 || year > 2050) {
            context.render(editTemplate(element, onSubmit, true, true, false));
            return alert('Year must be between 1950 and 2050 !');
        }

        if (description.length <= 10) {
            context.render(editTemplate(element, onSubmit, true, true, true, false));
            return alert('Description must be more than 10 symbols !');
        }

        if (price <= 0) {
            context.render(editTemplate(element, onSubmit, true, true, true, true, false));
            return alert('Price must be a positive number !');
        }

        if (img.length == 0) {
            context.render(editTemplate(element, onSubmit, true, true, true, true, true, false));
            return alert('Image URL is required !');
        }

        const data = {
            make,
            model,
            year,
            description,
            price,
            img,
            material
        };

        await updateFurniture(data, id);
        context.page.redirect(`/details/${id}`)
    }
}