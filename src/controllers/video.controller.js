const getAllVideos = (req, res) => {
    res.status(200).json({
        success: true,
        message: "Get all videos",
        data: [
            { id: 1, title: "Intro to Node.js", views: 1200, owner: "shoeb" },
            { id: 2, title: "Express Crash Course", views: 850, owner: "john" }
        ]
    });
};

const getVideoById = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        success: true,
        message: `Get video with id ${id}`,
        data: { id, title: "Intro to Node.js", views: 1200, owner: "shoeb" }
    });
};

const uploadVideo = (req, res) => {
    const { title, description } = req.body;
    res.status(201).json({
        success: true,
        message: "Video uploaded successfully",
        data: { id: 3, title, description, views: 0 }
    });
};

const updateVideo = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        success: true,
        message: `Video ${id} updated successfully`,
        data: { id, ...req.body }
    });
};

const deleteVideo = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        success: true,
        message: `Video ${id} deleted successfully`
    });
};

const togglePublish = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        success: true,
        message: `Video ${id} publish status toggled`,
        data: { id, isPublished: true }
    });
};

export {
    getAllVideos,
    getVideoById,
    uploadVideo,
    updateVideo,
    deleteVideo,
    togglePublish
};
