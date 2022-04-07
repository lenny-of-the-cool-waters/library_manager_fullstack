module.exports = (sequelize, DataTypes) => {
    const Keys = sequelize.define('ReadingStats', {
        pageCount: {
            type: DataTypes.INTEGER
        },
        pagesRead: {
            type: DataTypes.INTEGER
        },
        timesRead: {
            type: DataTypes.INTEGER
        }
    })

    ReadingStats.associate = (models) => {
        ReadingStats.belongsTo(models.Books)
    }

    return Keys;
}