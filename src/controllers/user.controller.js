const getAllUsers = (req, res) => {
    res.status(200).json({
        success: true,
        message: "Get all users",
        data: [
            { id: 1, username: "shoeb", email: "shoeb@example.com" },
            { id: 2, username: "john", email: "john@example.com" }
        ]
    });
};

const getUserById = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        success: true,
        message: `Get user with id ${id}`,
        data: { id, username: "shoeb", email: "shoeb@example.com" }
    });
};

const registerUser = (req, res) => {
    const { username, email, password } = req.body;
    res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: { id: 3, username, email }
    });
};

const loginUser = (req, res) => {
    const { email, password } = req.body;
    res.status(200).json({
        success: true,
        message: "User logged in successfully",
        data: { token: "dummy-jwt-token-123", email }
    });
};

const updateUser = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        success: true,
        message: `User ${id} updated successfully`,
        data: { id, ...req.body }
    });
};

const deleteUser = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        success: true,
        message: `User ${id} deleted successfully`
    });
};

export {
    getAllUsers,
    getUserById,
    registerUser,
    loginUser,
    updateUser,
    deleteUser
};
