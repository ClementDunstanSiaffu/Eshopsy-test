
import {electronics} from '../../electronicStore';

export default (req,res)=>{
    res.status(200).json(electronics)
}