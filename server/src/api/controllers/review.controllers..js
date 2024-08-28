import Review from "../models/review.model";
import User from "../models/user.model";


export const createReview = async (req, res) => {
    try {
        const { username, description } = req.body;
        const user = await User.findById(userId);
        const newReview = new Review({
            username,
            description,
        });
        await newReview.save();

        const post = await Review.find();
        res.status(201).json(post);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};

/ READ /
export const getReview = async (req, res) => {
    try {
        const review = await Review.find();
        res.status(200).json(review);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export const getUserReview = async (req, res) => {
    try {
        const { username } = req.params;
        const review = await Review.find({ username });
        res.status(200).json(review);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

/ UPDATE */
export const likeReview = async (req, res) => {
    try {
        const { id } = req.params;
        const { username } = req.body;
        const review = await Review.findById(id);
        const isLiked = review.likes.get(userId);

        if (isLiked) {
            review.likes.delete(username);
        } else {
            review.likes.set(username, true);
        }

        const updatedReview = await Review.findByIdAndUpdate(
            id,
            { likes: review.likes },
            { new: true }
        );

        res.status(200).json(updatedReview);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};
