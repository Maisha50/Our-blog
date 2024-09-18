import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import Token from '../model/token.js'
import User from '../model/user.js';

dotenv.config();

export const singupUser = async (request, response) => {
    try {
        // const salt = await bcrypt.genSalt();
        // const hashedPassword = await bcrypt.hash(request.body.password, salt);
        const hashedPassword = await bcrypt.hash(request.body.password, 10);

        const user = { username: request.body.username, name: request.body.name, password: hashedPassword }

        const newUser = new User(user);
        await newUser.save();

        return response.status(200).json({ msg: 'Signup successfull' });
    } catch (error) {
        return response.status(500).json({ msg: 'Error while signing up user' });
    }
}


export const loginUser = async (request, response) => {
    const { username, password } = request.body;
    let user = await User.findOne({
        $or: [{ username: username }, { name: username }]
    });
    if (!user) {
        return response.status(400).json({ msg: 'Username does not match' });
    }

    try {
        let match = await bcrypt.compare(password, user.password);
        if (match) {
            const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, { expiresIn: '15m' });
            const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);

            const newToken = new Token({ token: refreshToken });
            await newToken.save();

            response.status(200).json({ accessToken: accessToken, refreshToken: refreshToken, name: user.name, username: user.username, userId: user._id });

        } else {
            response.status(400).json({ msg: 'Password does not match' })
        }
    } catch (error) {
        response.status(500).json({ msg: 'error while login the user' })
    }
}

export const logoutUser = async (request, response) => {
    const token = request.body.token;
    await Token.deleteOne({ token: token });

    response.status(204).json({ msg: 'logout successfull' });
}



export const Profile = async (request, response) => {
    const { userId } = request.body
    try {
        const user = await User.findById(userId);

        if (!user) {
            return response.status(404).json({ msg: 'User not found' });
        }

        response.status(200).json({
            user
        });
    } catch (error) {
        response.status(500).json({ msg: 'Error retrieving the user profile' });
    }
}



export const refreshToken = async (request, response) => {
    const { refreshToken } = request.body;
    if (!refreshToken) return response.status(401).json({ message: 'Access denied' });

    try {

        const verified = jwt.verify(refreshToken, process.env.REFRESH_SECRET_KEY);
        const newToken = jwt.sign({ _id: verified._id, name: verified.name, username: verified.username }, process.env.ACCESS_SECRET_KEY, { expiresIn: '15m' });

        response.json({ token: newToken });
    } catch (error) {
        response.status(401).json({ error: error.message, message: 'Invalid or expired refresh token' });
    }

}

