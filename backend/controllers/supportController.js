import SupportRequest from '../models/supportModel.js';
import User from '../models/userModel.js';  // Assuming you have a User model
export const createSupportRequest = async (req, res) => {
    try {
        const { message } = req.body;
        const userId = req.user.id; // Assuming req.user contains the authenticated user

        const supportRequest = await SupportRequest.create({ userId, message });
        res.status(201).json(supportRequest);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create support request.' });
    }
};

// Get all support requests (Admins see all, Lenders see their own)
export const getSupportRequests = async (req, res) => {
    try {
        let supportRequests;
        if (req.user.role === 'admin') {
            // Admins see all support requests
            supportRequests = await SupportRequest.findAll({
                include: [
                    {
                        model: User,
                        attributes: ['name', 'contact'], // Adjust based on actual user model fields
                    },
                ],
            });
        } else {
            // Lenders see only their own support requests
            supportRequests = await SupportRequest.findAll({
                where: { userId: req.user.id },
                include: [
                    {
                        model: User,
                        attributes: ['name', 'contact'],
                    },
                ],
            });
        }
        res.status(200).json(supportRequests);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching support requests' });
    }
};

// Update the status of a support request
export const updateSupportRequest = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
        return res.status(400).json({ message: 'Status is required' });
    }
    
    try {
        const updatedRequest = await SupportRequest.findByPk(id);
        if (!updatedRequest) {
            return res.status(404).json({ message: 'Support request not found' });
        }
        updatedRequest.status = status;
        await updatedRequest.save();
        res.status(200).json(updatedRequest);
    } catch (error) {
        res.status(500).json({ message: 'Error updating support request' });
    }
};
