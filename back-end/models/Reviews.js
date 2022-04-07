module.exports = (sequelize, DataTypes) => {
    const Keys = sequelize.define('Keys', {
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
    
    return Keys;
}