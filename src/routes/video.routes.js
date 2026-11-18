import { Router } from "express";
import {
    getAllVideos,
    getVideoById,
    uploadVideo,
    updateVideo,
    deleteVideo,
    togglePublish
} from "../controllers/video.controller.js";

const router = Router();

router.route("/").get(getAllVideos).post(uploadVideo);
router.route("/:id").get(getVideoById).patch(updateVideo).delete(deleteVideo);
router.route("/:id/toggle-publish").patch(togglePublish);

export default router;
