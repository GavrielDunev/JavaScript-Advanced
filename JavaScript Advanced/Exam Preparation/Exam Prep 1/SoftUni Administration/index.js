function solve() {
    let state = {};
    let [lecture, date] = document.querySelectorAll('.form-control input');
    let currentModule = document.querySelector('select');
    let modules = document.querySelector('.modules');

    document.querySelector('.container').addEventListener('click', (ev) => {
        if (ev.target.textContent == 'Add') {
            ev.preventDefault();

            if (!lecture.value || !date.value || currentModule.value == 'Select module') {
                return;
            } else {
                let li = document.createElement('li');
                li.classList.add('flex');

                let h4 = document.createElement('h4');
                h4.textContent = lecture.value + ' - ' + date.value.split('T')[0].split('-').join('/') + ' - ' + date.value.split('T')[1];
                li.appendChild(h4);

                let delButton = document.createElement('button');
                delButton.textContent = 'Del';
                delButton.classList.add('red');
                li.appendChild(delButton);

                let module = undefined;
                let ul = undefined;

                if (!state[currentModule.value]) {
                    module = document.createElement('div');
                    module.classList.add('module');

                    let h3 = document.createElement('h3');
                    h3.textContent = currentModule.value.toUpperCase() + '-MODULE';
                    module.appendChild(h3);

                    ul = document.createElement('ul');
                    module.appendChild(ul);

                    state[currentModule.value] = { module, ul, lis: [] }
                } else {
                    module = state[currentModule.value].module;
                    ul = state[currentModule.value].ul;
                }

                state[currentModule.value].lis.push({ li, date: date.value });

                state[currentModule.value].lis.sort((a, b) => a.date.localeCompare(b.date)).forEach(({ li }) => {
                    ul.appendChild(li);
                });
                
                modules.appendChild(module);
            }
        } else if (ev.target.textContent == 'Del') {
            let currentUl = ev.target.parentNode.parentNode;
            ev.target.parentNode.remove();
            if (!currentUl.querySelector('li')) {
                currentUl.parentNode.remove();
                delete state[currentModule.value];
            }
        }
    })
};