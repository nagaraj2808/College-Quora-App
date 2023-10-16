import { useDispatch } from "react-redux"
import { getAllAnswer } from '../../../actions/answer';
import { useLoaderData } from "react-router-dom";
const AnswerLoader = async() => {
    useLoaderData()
    const dispatch = useDispatch();
   dispatch(getAllAnswer())
}

export default AnswerLoader;