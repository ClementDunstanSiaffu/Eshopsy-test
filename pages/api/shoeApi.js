
import {shoe} from '../../shoeStore';

export default (req,res)=>{
    res.status(200).json(shoe)
}