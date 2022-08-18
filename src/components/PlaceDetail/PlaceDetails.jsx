import {
    Box,
    Typography,
    Button,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Chip,
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/core/LocationOn';
import PhoneIcon from '@material-ui/core/Phone';
import Rating from '@material-ui/lab/Raiting';

import useStyles from './styles';

const PlaceDetails = ({ place }) => {
    console.log(place);
    return <h6>{place.name}</h6>;
};
export default PlaceDetails;
