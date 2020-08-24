
import {books} from '../../bookStore';

export default (req,res)=>{
    res.status(200).json(books)
}