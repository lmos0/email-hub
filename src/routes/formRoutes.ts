import express,  {RequestHandler} from "express"
import handleFormSubmission from "../controllers/formController"

const router = express.Router()

router.post("/", handleFormSubmission)

export default router