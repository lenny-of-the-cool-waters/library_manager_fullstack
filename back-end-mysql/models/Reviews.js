module.exports = (sequelize, DataTypes) => {
    const Reviews = sequelize.define('Reviews', {
        rating: {
            type: DataTypes.FLOAT,
        },
        comment: {
            type: DataTypes.TEXT
        }
    })

    Reviews.associate = models => {
        Reviews.belongsTo(models.Books);
    }
    
    return Reviews;
}