loadTreatments();
loadSpecialists();

async function loadTreatments()
{
    let treatments = JSON.parse(await executeQuery('getTreatments'));

    for(const treatment of treatments)
    {
        let treatmentDiv = $(`
        <div class=" md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"  style="
        flex-grow: 0;
        flex-shrink: 0;">
                <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                        <img src="assets/treatments/${treatment.id}.jpg" class="h-64 w-full rounded-t pb-6">
                        <div class="w-full font-bold text-xl text-gray-900 px-6">${treatment.treatment_name}</div>
                        <p class="text-gray-800 font-serif text-base px-6 mb-5">${treatment.description}
                        </p>
                    </a>
                </div>
                <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                    <div class="flex items-center justify-between">
                        <p class="text-gray-600 text-xs md:text-sm">${treatment.price} $</p>
                    </div>
                </div>
            </div>
        `);
        $('#treatments-container').append(treatmentDiv);

        let treatmentOpt = $(`
        <option value=${treatment.id}>${treatment.treatment_name}</option>
        `);
        $('#select-treatment').append(treatmentOpt);
    }
}

async function loadSpecialists()
{
    let specialists = JSON.parse(await executeQuery('getSpecialists'));

    for(const specialist of specialists)
    {
        let specialistDiv = $(`
        <div class=" md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"  style="
        flex-grow: 0;
        flex-shrink: 0;">
                <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                        <img src="assets/specialists/${specialist.id}.jpg" class="rounded-full mr-4 pb-6">
                        <div class="w-full font-bold text-xl text-gray-900 px-6">${specialist.name} ${specialist.surname}</div>
                        <p class="w-full text-gray-600 text-xs md:text-sm px-6">${specialist.age}</p>
                        <p class="text-gray-800 font-serif text-base px-6 mb-5">${specialist.description}
                        </p>
                    </a>
                </div>
                <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                    <div class="flex items-center justify-between">
                        <p class="text-gray-600 text-xs md:text-sm">${specialist.email}</p>
                    </div>
                </div>
            </div>
        `);
        $('#specialists-container').append(specialistDiv);
        let specialistOpt = $(`
        <option value=${specialist.id}>${specialist.name} ${specialist.surname}</option>
        `);
        $('#select-specialist').append(specialistOpt);
    }
}

async function treatmentSelected()
{
    console.table(JSON.parse(await executeParamQuery('getSpecialistsByTreatment', {treatmentId: $('#select-treatment').val()})));
}

async function specialistSelected()
{
    console.table(JSON.parse(await executeParamQuery('getTreatmentsBySpecialist', {specialistId: $('#select-specialist').val()})));
}