import axios from 'axios';

const URL =
    'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const getPlacesData = async (sw, ne) => {
    try {
        const {
            data: { data },
        } = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'X-RapidAPI-Key':
                    '2d570dd493msh685bd4235652b27p16bc4fjsn7ccaf53c3611',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export default getPlacesData;
