import axios from 'axios';

const URL =
    'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
    params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359',
    },
    headers: {
        'X-RapidAPI-Key': '2d570dd493msh685bd4235652b27p16bc4fjsn7ccaf53c3611',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    },
};

const getPlacesData = async () => {
    try {
        const {
            data: { data },
        } = await axios.get(URL, options);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export default getPlacesData;
