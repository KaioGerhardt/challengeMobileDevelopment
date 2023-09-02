const jwt = require('jsonwebtoken');

class TokenManager {

    static generateToken(user) {
        const userData = {
            id: user.idUser,
            name: user.name,
            email: user.email,
        };

        // Gere o token JWT com uma hora de expiração
        const token = jwt.sign(userData, 'c5f0ffeff28bf96477e32ee1d9b0599e', { expiresIn: '24h' });

        return token;
    }

    static decodeToken(token) {
        try {
            const decoded = jwt.verify(token, 'c5f0ffeff28bf96477e32ee1d9b0599e');
            return decoded;
        } catch (error) {
            console.error('Erro na decodificação do token:', error);
            return null;
        }
    }

    static saveTokenSession(req, token) {
        req.session.token = token;
    }
}

module.exports = TokenManager;