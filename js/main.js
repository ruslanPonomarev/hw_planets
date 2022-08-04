let form = document.querySelector('form');

let button = document.querySelector('button');

const getPlanet = async () => {
    let error = '';
    let planetId = document.querySelector('.planet_id').value;
    planetId = parseInt(planetId);
    if (planetId > 0){
        let result = null;
        try{
            result = await axios.get(`https://swapi.dev/api/planets/${planetId}/`);
        }catch(e){
            error = 'Request respond error'
        }
        if (result){
            if (result.status === 200 && result.data && result.data.name){
                document.querySelector('.name').innerHTML = result.data.name
                document.querySelector('.climate').innerHTML = result.data.climate
                document.querySelector('.gravity').innerHTML = result.data.gravity
                document.querySelector('.rotation_period').innerHTML = result.data.rotation_period
                document.querySelector('.surface_water').innerHTML = result.data.surface_water
                document.querySelector('.orbital_period').innerHTML = result.data.orbital_period
                document.querySelector('.terrain').innerHTML = result.data.terrain
                document.querySelector('.diameter').innerHTML = result.data.diameter
            }else{
                error = 'Bad request'
            }
        }
    }else{
        error = 'Bad planet id'
    }
    document.querySelector('.error').innerHTML = error;
};

button.addEventListener('click', getPlanet);